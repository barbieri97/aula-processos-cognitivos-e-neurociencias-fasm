#!/usr/bin/env node
// Procura slides que não cabem na tela — o defeito que só aparece no PDF.
//
//   npm run build && npm run overflow
//
// Um slide alto demais não dá erro nenhum no navegador: o Slidev deixa o excesso
// transbordar para fora do quadro, e no modo de apresentação ninguém vê o que
// sobrou. No PDF que o `download: true` gera, o mesmo slide vira DUAS páginas —
// a segunda começando no meio de uma frase. Ninguém percebe até um aluno baixar
// o arquivo.
//
// Este script abre o `dist/` num navegador de verdade (o mesmo Playwright que
// exporta o PDF), vai à rota /print de cada aula — a que o exportador usa — e
// compara a altura real do conteúdo de cada slide com a altura do quadro.
//
// Nota sobre `v-click`: o Slidev não tira do DOM o que ainda não foi clicado,
// só o deixa transparente. Resposta de <Checagem> escondida ocupa altura e
// entra na conta aqui — que é justamente o que se quer, porque ela também
// ocupa altura no PDF.
import { createReadStream, existsSync } from 'node:fs'
import { stat } from 'node:fs/promises'
import http from 'node:http'
import { basename, extname, join, normalize } from 'node:path'
import { deckFiles, root } from './lib.mjs'

const distDir = join(root, 'dist')

// Folga zero, e não é exagero: um slide 2px mais alto que o quadro já joga a
// última linha para a página seguinte do PDF. Foi medido — não é precaução.
const FOLGA = 0

const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.pdf': 'application/pdf',
}

/**
 * Servidor estático mínimo para o dist/.
 *
 * De propósito sem dependência: `sirv` e `connect` só estão em node_modules por
 * carona do Slidev, e um script do repositório não deve depender do que a árvore
 * de dependências de outro pacote resolveu achatar.
 *
 * Não precisa de fallback de SPA: os decks são buildados com `--router-mode hash`,
 * então a rota vive depois do `#` e o servidor só vê pedidos de arquivo real.
 */
function servirDist () {
  const server = http.createServer(async (req, res) => {
    const url = decodeURIComponent((req.url ?? '/').split('?')[0])
    const alvo = join(distDir, normalize(url).replace(/^(\.\.[/\\])+/, ''))
    const arquivo = alvo.endsWith('/') || alvo.endsWith('\\') ? join(alvo, 'index.html') : alvo
    try {
      const info = await stat(arquivo)
      const final = info.isDirectory() ? join(arquivo, 'index.html') : arquivo
      res.writeHead(200, { 'content-type': TIPOS[extname(final).toLowerCase()] ?? 'application/octet-stream' })
      createReadStream(final).pipe(res)
    } catch {
      res.writeHead(404).end('404')
    }
  })
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(server)))
}

async function carregarChromium () {
  try {
    return (await import('playwright-chromium')).chromium
  } catch {
    console.error('\n✗ falta o playwright-chromium — `npm i -D playwright-chromium`')
    console.error('  (é o mesmo pacote que o `download: true` usa para gerar o PDF)\n')
    process.exit(1)
  }
}

// ---------------------------------------------------------------- rodar

if (!existsSync(distDir)) {
  console.error('\n✗ não existe dist/ — rode `npm run build` antes\n')
  process.exit(1)
}

const slugs = deckFiles().map((f) => basename(f, '.md')).filter((slug) => existsSync(join(distDir, slug)))

if (!slugs.length) {
  console.error('\n✗ dist/ não tem nenhuma aula buildada — rode `npm run build`\n')
  process.exit(1)
}

const chromium = await carregarChromium()
const server = await servirDist()
const { port } = server.address()
const browser = await chromium.launch()

// A janela precisa ser a MESMA do exportador, senão a conta não vale: ele usa
// 1920 de largura por 1080 × (número de slides) de altura (ver `exportSlides` em
// @slidev/cli). Qualquer `vh` que sobre no CSS mede essa altura monstruosa, e é
// justamente esse tipo de regra que faz um slide passar do quadro só no PDF.
const LARGURA = 1920
const ALTURA_SLIDE = 1080
const page = await browser.newPage({ viewport: { width: LARGURA, height: ALTURA_SLIDE } })

let estouros = 0

for (const slug of slugs) {
  // A URL é a do exportador, com o `?print=true` — é a query, e não a rota, que põe
  // o Slidev em modo de impressão e monta todos os slides numa página só.
  const url = `http://127.0.0.1:${port}/${slug}/?print=true#print`
  await page.goto(url, { waitUntil: 'networkidle' })

  const total = await page.evaluate(() => document.querySelectorAll('.slidev-page').length)
  await page.setViewportSize({ width: LARGURA, height: ALTURA_SLIDE * Math.max(total, 1) })
  await page.goto(url, { waitUntil: 'networkidle' })

  // As fontes web chegam depois do networkidle, e mudam a quebra de linha.
  await page.evaluate(() => document.fonts.ready)
  await page.waitForTimeout(500)

  const slides = await page.evaluate(() => {
    return [...document.querySelectorAll('.slidev-page')].map((quadro, i) => {
      const conteudo = quadro.querySelector('.slidev-layout') ?? quadro
      return {
        n: i + 1,
        titulo: (quadro.querySelector('h1')?.textContent ?? '').trim().slice(0, 46),
        altura: Math.round(conteudo.scrollHeight),
        quadro: Math.round(quadro.clientHeight),
      }
    })
  })

  const maus = slides.filter((s) => s.altura - s.quadro > FOLGA)

  if (!maus.length) {
    console.log(`  ✓ ${slug} · ${slides.length} slides`)
    continue
  }

  console.log(`\n  aulas/${slug}.md`)
  for (const s of maus) {
    console.log(`    ✗ slide ${s.n} passa ${s.altura - s.quadro}px do quadro (${s.altura} de ${s.quadro}) — ${s.titulo || 'sem título'}`)
    estouros++
  }
  console.log()
}

await browser.close()
server.close()

const resumo = `${slugs.length} aula(s) · ${estouros} slide(s) transbordando`
console.log(estouros ? `\n✗ ${resumo}\n  Corte conteúdo, ou quebre o slide em dois — no PDF cada um destes vira duas páginas.\n` : `\n✓ ${resumo}\n`)
process.exit(estouros ? 1 : 0)
