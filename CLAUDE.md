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

`npm run lint` pega a primeira, a terceira e a quarta — além de layout inexistente e imagem que
não existe em `aulas/public/`. O `asset()` esquecido e a linha em branco que falta só aparecem
no slide renderizado. Rode o lint antes de commitar.

E depois de escrever uma aula, `npm run build && npm run overflow`: slide alto demais some da
tela sem avisar e vira duas páginas no PDF.

### Nada de CSS solto no slide

Escolha o `layout:` que casa com a forma do conteúdo e preencha o frontmatter dele; para o que
vai dentro do slide, use os componentes. `<style>` num slide é sinal de que falta um layout ou
um componente — a exceção honesta é o desenho que só existe naquele slide.

## Como escrever o conteúdo

Regras tiradas das correções que o professor fez à mão na aula 03. **Valem mais que os
exemplos de `_modelo-aula.md` e de `docs/design-system.md`** onde os dois divergem — em
especial no `atividade`.

### O slide é apoio para quem fala, não apostila

- **Uma ideia por slide, com o mínimo de texto.** A explicação é falada; se precisa ficar
  registrada, vai para as notas `<!-- -->`. Um componente de conteúdo e, no máximo, uma frase
  curta embaixo.
- **Sem `<Nota>` de aparte comentando o próprio slide** ("O que observar", "Por que vale
  corrigir", "O que realmente limita"). Esse comentário é o que o professor diz em sala.
- **Escopo de 1º semestre.** Fica o conceito central do material da disciplina. Saem os
  desvios de especialista: o detalhe interno de um modelo, o debate sobre um número clássico,
  meta-análise de nicho, ressalva de replicação ou de tamanho de amostra, achado de autópsia,
  apresentação clínica e epidemiologia que não são o tema da aula, detalhe de procedimento de
  experimento. Estudo e número só entram quando sustentam direto o ponto do slide.

### Escrita direta

- **Nada de frase de efeito.** Sem gancho que antecipa o slide seguinte ("e foi um paciente,
  em 1953, que tornou isso impossível de ignorar"), sem paralelismo retórico ("nem pelo mesmo
  sistema, nem pelo mesmo tempo, nem com o mesmo esforço"), sem jogo de palavras numa `desc`
  ("quantas memórias cabem dentro da palavra memória"), sem título em dois tempos ("O que a
  curva mostra, e o que ela não mostra").
- **Curto nos campos de frontmatter.** `note` de `secao` descreve a parte em poucas palavras
  ("Como os diferentes tipos de memória são divididos.", "O caso H.M."). Itens de `<Objetivos>`
  são verbo + objeto, sem critério embutido ("Descrever os quatro processos da memória").
  `pontos` do `fecho` também.
- **Evite o travessão como conector.** Onde " — " liga duas orações, prefira vírgula, ponto
  ou "e".
- **Nome descritivo, não metáfora de autor.** "Os sete tipos de falha da memória", e não "os
  sete pecados". Num esquema, o rótulo é o nome do conceito ("curto prazo", "memória
  operacional"), e não uma descrição dele ("armazenamento breve").
- **`<Fonte>` é crédito, não explicação**: "Dados de Murre &amp; Dros (2015)", sem o método.
- **Não cite "material da disciplina"** como `origem` de `<Termo>` nem como fonte. `origem` só
  com autor ou taxonomia nomeável; senão, omita o campo.

### Campos opcionais ficam de fora

O professor apaga o campo quando ele não acrescenta nada:

- `atividade`: só `title` e `passos`. **Sem `tempo`, `formato` nem `entrega`**, e os passos sem
  cronômetro embutido ("em três minutos").
- `fecho`: sem `proximo` nem `leitura`.
- `destaque` de tese: só `title`, `tipo` e `fonte` — sem `kicker` e sem corpo.
- `<Caso>`: sem `contexto` quando ele seria genérico ("qualquer aplicativo, qualquer dia").
- `comparacao`: `pergunta` só quando formula de fato o contraste; enfeite sai.
- `roteiro`: `desc` pode faltar num item.

### Imagem e vídeo ocupam a tela

- Esquema que se explica sozinho vai em `figura` com `lado: cheia`, sem parágrafo ao lado.
- Vídeo é `layout: iframe` (tela cheia), sem título, descrição nem `<Nota>` junto.
- Imagem real (ilustração, foto) no lugar de esquema autoral é bem-vinda — com o nome no
  padrão `aula-NN-<assunto>` e o crédito, se não for autoral.

### Ao cortar um slide, feche as pontas

Corte deixa referência pendurada, e nada disso quebra o build. Varra o deck atrás de:

- respostas de `<Checagem>` que citam o slide que saiu ("o slide do sono") ou um nome trocado
  ("o pecado 05");
- a `desc` do `roteiro` que promete o assunto cortado;
- a numeração "Esquema N" nos `rotulo`, e a contagem "os oito esquemas são autorais";
- as `<Referencia>` e a `<Fonte>` de "demais obras citadas" dos estudos que saíram;
- notas `<!-- -->` que definem termos que não aparecem mais;
- o `.svg` que ficou órfão em `aulas/public/` e a linha dele no `README.md` de lá;
- a `<Checagem>` cuja pergunta mudou e cuja resposta não mudou junto.

## Convenções

| | |
|---|---|
| Decks | `aulas/aula-NN-slug-descritivo.md` |
| URL | o nome do arquivo (sem `.md`) vira o caminho: `/<repo>/aula-NN-slug-descritivo/` |
| Deck de bancada | prefixo `_` — o site não publica: `_design-system.md` (catálogo) e `_modelo-aula.md` (esqueleto para copiar) |
| Tema | `theme: none` + design system local; ou um pacote npm, ver `docs/temas.md` |
| Idioma | conteúdo em português |
| Imagens | `aulas/public/aula-NN-<assunto>.ext` — **não** na raiz do repo (veja "Por que `aulas/public/`" abaixo); cada figura ganha uma linha em `aulas/public/README.md` |
| Material-fonte | o PDF do capítulo da aula em `referencias/aula-NN/` (versionado) |
| VS Code | a extensão do Slidev só enxerga os decks listados em `slidev.include`, em `.vscode/settings.json` — acrescente a aula nova lá |
| Headmatter | além de `theme`/`title`, cada aula traz `info:` (ementa de uma linha), `date:` (`YYYY-MM-DD`, entre aspas) e `download: true` — os dois primeiros alimentam a landing page, o terceiro gera o PDF |
| Identidade do curso | `site.config.json` na raiz (`title`, `institution`, `description`, `intro`) — o único lugar com o nome da disciplina |

O bloco de abertura de um deck é headmatter **e** frontmatter do primeiro slide ao mesmo
tempo. O `title:` dele é o título do deck e o que a `capa` mostra — não repita o campo.

## Comandos

```bash
npm run dev                                  # abre a primeira aula de aulas/ com hot reload
npm run dev -- 03                            # abre a aula cujo nome contém "03"
npm run dev -- modelo                        # também abre decks de bancada (os `_`)
npm run ref                                  # abre o catálogo de layouts/componentes
npm run lint                                 # valida todos os decks
npm run build                                # builda tudo em dist/ (roda o lint antes)
npm run overflow                             # procura slide que não cabe na tela (depois do build)
```

`npm run dev` serve **uma aula por vez**, na raiz (`/`). O conjunto das aulas mais a página
inicial só existe depois do `npm run build` — é o build que dá a cada deck o seu `--base`.

Para adicionar uma aula nova: crie o `.md` em `aulas/`, commit, push. O workflow builda e
publica — nenhuma config do site precisa ser tocada (só o `slidev.include` do VS Code, se você
usa a extensão).

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
