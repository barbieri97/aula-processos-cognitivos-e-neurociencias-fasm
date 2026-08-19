# Processos Cognitivos e Neurociências — aulas em Slidev

Os decks [Slidev](https://sli.dev/) da disciplina. **Uma aula por arquivo `.md`** em `aulas/`,
publicadas no GitHub Pages, cada uma na sua própria URL.

Não há tema npm (`theme: none`): o visual vem de um design system local, escrito em
`aulas/styles`, `aulas/layouts` e `aulas/components`. Ele tem identidade própria — papel
quente, **índigo para conceito e terracota para evidência** — e peças pedagógicas
(`<Objetivos>`, `<Caso>`, `<Experimento>`, `<MitoFato>`, `<Checagem>`, layout `atividade`)
pensadas para uma turma de 1º semestre. Os *scripts*, esses sim, continuam agnósticos de
tema: nenhum deles sabe qual é o visual.

Para escrever uma aula nova, copie o esqueleto: `aulas/_modelo-aula.md`.

## Antes de escrever ou editar qualquer deck

Leia **[`docs/design-system.md`](docs/design-system.md)** — os layouts, os componentes, os
tokens e, principalmente, [as armadilhas do
Slidev](docs/design-system.md#as-armadilhas-do-slidev) que fazem um slide sumir sem erro.

Para ver renderizado em vez de lido: `npm run ref` abre `aulas/_design-system.md`, um slide
por layout e por componente. O `_` no nome mantém esse deck fora do site.

Se a aula for usar outro visual, o roteiro dos dois caminhos (tema npm ou DS gerado) está em
**[`docs/temas.md`](docs/temas.md)**.

### As cinco coisas que mais quebram deck

- **`src:` no frontmatter apaga o slide.** É o campo com que o Slidev importa outro `.md`. Um
  `src: /foto.png` faz o slide desaparecer sem mensagem nenhuma — por isso o layout `figura`
  chama o campo de `imagem`. O mesmo vale para os outros campos reservados (`title`, `layout`,
  `zoom`, `level`…): eles nunca chegam como prop. `title` se lê pelo objeto `frontmatter`.
- **Caminho de imagem que chega por prop precisa passar por `asset()`** (`aulas/lib/asset.ts`).
  Sem isso a imagem some quando o site é publicado em subdiretório — e continua funcionando
  localmente, então o erro só aparece depois do deploy.
- **Todo frontmatter é cercado por `---` em cima e embaixo.** Entre dois slides sem corpo você
  vê duas linhas `---` seguidas: está certo. Compartilhar um `---` entre dois blocos quebra o
  parse do arquivo inteiro.
- **Texto de frontmatter com `: ` ou `,` vai entre aspas.** O frontmatter é YAML: um item
  `- Quatro abordagens: a força de uma cobre a outra` não vira frase, vira mapa, e o slide
  publicado mostra `[object Object]`. Dentro de `{ tema: …, desc: … }` a vírgula ainda engole
  os campos seguintes. O arquivo continua válido — só descreve outra coisa.
- **Markdown dentro de componente só funciona com linha em branco** depois da tag de abertura
  e antes da de fechamento. Sem elas, `**negrito**` aparece com os asteriscos na tela.

`npm run lint` pega as quatro primeiras. Rode antes de commitar.

E depois de escrever uma aula, `npm run build && npm run overflow`: slide alto demais some da
tela sem avisar e vira duas páginas no PDF.

### Nada de CSS solto no slide

Escolha o `layout:` que casa com a forma do conteúdo e preencha o frontmatter dele; para o que
vai dentro do slide, use os componentes. `<style>` num slide é sinal de que falta um layout ou
um componente — a exceção honesta é o desenho que só existe naquele slide.

## Convenções

| | |
|---|---|
| Decks | `aulas/aula-NN-slug-descritivo.md` |
| URL | o nome do arquivo (sem `.md`) vira o caminho: `/<repo>/aula-NN-slug-descritivo/` |
| Deck de bancada | prefixo `_` — o site não publica: `_design-system.md` (catálogo) e `_modelo-aula.md` (esqueleto para copiar) |
| Tema | `theme: none` + design system local; ou um pacote npm, ver `docs/temas.md` |
| Idioma | conteúdo em português |
| Imagens | `aulas/public/` — **não** na raiz do repo (veja "Por que `aulas/public/`" abaixo) |
| Headmatter | além de `theme`/`title`, cada aula traz `info:` (ementa de uma linha), `date:` (`YYYY-MM-DD`, entre aspas) e `download: true` — os dois primeiros alimentam a landing page, o terceiro gera o PDF |
| Identidade do curso | `site.config.json` na raiz (`title`, `institution`, `description`, `intro`) — o único lugar com o nome da disciplina |

O bloco de abertura de um deck é headmatter **e** frontmatter do primeiro slide ao mesmo
tempo. O `title:` dele é o título do deck e o que a `capa` mostra — não repita o campo.

## Comandos

```bash
npm run dev                                  # abre a primeira aula de aulas/ com hot reload
npm run dev -- 03                            # abre a aula cujo nome contém "03"
npm run ref                                  # abre o catálogo de layouts/componentes
npm run lint                                 # valida todos os decks
npm run build                                # builda tudo em dist/ (roda o lint antes)
npm run overflow                             # procura slide que não cabe na tela (depois do build)
```

`npm run dev` serve **uma aula por vez**, na raiz (`/`). O conjunto das aulas mais a página
inicial só existe depois do `npm run build` — é o build que dá a cada deck o seu `--base`.

Para adicionar uma aula nova: crie o `.md` em `aulas/`, commit, push. O workflow builda e
publica — nenhuma config precisa ser tocada.

## O PDF de cada aula

`download: true` no headmatter põe o botão de baixar no deck e faz o `slidev build`
**exportar o PDF junto**, em `dist/<slug>/slidev-exported.pdf`. Quem imprime esse PDF é o
Chromium do `playwright-chromium` (devDependency); no CI o workflow ainda instala as
bibliotecas de sistema que ele carrega.

Não defina `exportFilename`: com ele o link do botão vira um caminho relativo sem o
`--base`, e o download quebra no GitHub Pages. Sem ele o arquivo em disco é
`slidev-exported.pdf` e o navegador salva já com o nome da aula.

O PDF é também o único lugar onde **slide alto demais** aparece: o excesso some da tela sem
avisar, mas vira uma segunda página no PDF, começando no meio de uma frase. `npm run
overflow` mede isso — ver [`docs/design-system.md`](docs/design-system.md#o-slide-que-não-cabe).

## Por que `aulas/public/`

O Slidev define `userRoot = dirname(<arquivo do deck>)` e roda o Vite com `root: userRoot` e
`publicDir: <userRoot>/public`. Ou seja: `public/`, `components/`, `layouts/`, `setup/` e
`styles/` **seus** são procurados dentro da pasta do deck, não na raiz do repo. Os mesmos
nomes na raiz são ignorados em silêncio.

O tema npm é a exceção — ele é resolvido por resolução de pacote Node a partir do arquivo
`.md`, que sobe os diretórios pai até achar o `node_modules/` da raiz. Por isso deck em
subpasta funciona com tema npm, mas não funcionaria com layouts locais colocados na raiz.

## Build e deploy

`scripts/build-site.mjs` roda um `slidev build` **por aula** (cada uma precisa do seu próprio
`--base`, que é único por invocação do CLI), com `--router-mode hash` — o modo que o Slidev
documenta para deploy em subdiretório como o GitHub Pages. Depois gera a landing
`dist/index.html` lendo o headmatter de cada deck; o CSS dela é pintado com os tokens de
`aulas/styles/tokens.css`, então a página inicial acompanha o visual das aulas.

A publicação é pelo **artefato do Actions**: o job `build` empacota o `dist/` com
`upload-pages-artifact` e o job `deploy` o entrega ao Pages com `deploy-pages` (OIDC — daí
`pages: write` + `id-token: write` e o `environment: github-pages`). Exige **Settings → Pages
→ Source: `GitHub Actions`**; com a fonte em `Deploy from a branch` o `configure-pages` falha.
Detalhes no README.

`scripts/lint.mjs` é o lint do repositório, e é agnóstico de tema: a lista de layouts e
componentes válidos é montada na hora, a partir do Slidev, do tema declarado (se houver) e das
pastas locais de `aulas/`.

`scripts/lib.mjs` concentra o que os scripts compartilham: onde ficam as aulas (`deckFiles()`
ignora os `_`; `allDeckFiles()` inclui), como achar binários de `node_modules` sem npx
(`binOf()`), como ler o `site.config.json` (`siteConfig()`) e o que existe de layout e
componente (`knownNames()`). Nenhum script tem nome de arquivo de aula fixo.

O `--base` vem da env `SITE_BASE` (`/` local; no CI, o output `base_path` do
`configure-pages`, que é o caminho da URL real do site). **O nome do repositório no GitHub faz
parte das URLs** — renomear o repo muda todos os links e exige rodar o workflow de novo.
