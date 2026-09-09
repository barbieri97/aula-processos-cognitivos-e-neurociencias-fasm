# O design system das aulas

O design system de **Processos Cognitivos e Neurociências**: local, escrito em `aulas/`, sem
tema npm nenhum (`theme: none` no headmatter). Trocar por um tema pronto, ou gerar outro DS do
zero, é assunto de [`temas.md`](temas.md).

Este arquivo é o contrato: o que existe, quando usar cada coisa e as armadilhas do Slidev que
já custaram um slide.

---

## A identidade, em um parágrafo

Papel quente, índigo e terracota. O fundo não é branco puro porque projetor branco cansa a
vista em duas horas de aula. O **índigo** é a cor do que é conceito — o vocabulário, a
estrutura da aula; a **terracota** é a do que é evidência empírica — experimento, dado,
achado, e a atividade em que a turma produz a própria evidência. Essa dupla é o ritmo visual
do curso, e é ela que faz um slide de conceito e um slide de evidência se distinguirem antes
de a turma ler uma palavra.

A turma é de 1º semestre: contraste alto, tipo grande, pouca decoração. A única decoração do
sistema é a malha de nós — um retículo de pontos desenhado em CSS, que aparece na `capa` e na
`secao` e em mais lugar nenhum.

Todos os pares texto/fundo passam de 4.5:1 (WCAG AA) nos dois temas. **Se você trocar um hex,
recalcule antes**: sala de aula tem luz acesa e projetor lavado.

---

## Onde mora cada coisa

O Slidev define a raiz do projeto como **a pasta do arquivo `.md`**. As aulas estão em
`aulas/`, então é lá dentro que ele procura tudo:

```
aulas/
├── styles/index.css     ← o único CSS que o Slidev importa (os outros entram por @import)
│   ├── tokens.css       ← cor, tipo, espaço, forma — a identidade visual inteira
│   ├── base.css         ← como o markdown puro se parece
│   └── utilities.css    ← as classes `ds-*` que um slide pode usar
├── layouts/*.vue        ← a forma do slide (campo `layout:` do frontmatter)
├── components/*.vue     ← peças usadas dentro do slide (auto-importadas, sem `import`)
├── lib/asset.ts         ← resolve caminho de imagem contra a base do site
├── public/              ← imagens; `/foto.png` no markdown = `aulas/public/foto.png`
├── _design-system.md    ← o catálogo renderizado (`npm run ref`)
└── _modelo-aula.md      ← o esqueleto para copiar quando for escrever uma aula nova
```

Uma `public/` ou uma `components/` na **raiz do repositório** não seria vista por ninguém.

Os dois arquivos com `_` na frente não são publicados pelo site. Para começar uma aula:

```bash
copy aulas\_modelo-aula.md aulas\aula-01-atencao-e-percepcao.md
```

---

## Tokens

Toda decisão visual está em `aulas/styles/tokens.css`. Layouts e componentes só consomem
`var(--ds-*)`; nenhum escreve um hex na mão. **Mudar a identidade visual das aulas é editar
esse arquivo, e só ele** — inclusive a página inicial do site, que lê os mesmos tokens.

| grupo | tokens |
|---|---|
| cor | `--ds-bg` `--ds-surface` `--ds-ink` `--ds-muted` `--ds-rule` `--ds-accent` `--ds-accent-2` `--ds-ok` `--ds-warn` `--ds-danger` |
| cor translúcida | `--ds-accent-wash` `--ds-accent-2-wash` `--ds-ink-wash` `--ds-ok-wash` `--ds-warn-wash` `--ds-danger-wash` |
| marca-texto | `--ds-mark` — a caneta amarela do `<mark>`; no escuro vira um grifo de índigo |
| tipo | `--ds-font-sans` `--ds-font-serif` `--ds-font-mono`, escala `--ds-text-xs` … `--ds-text-3xl`, `--ds-leading-*`, `--ds-tracking-kicker` |
| espaço | `--ds-space-1` … `--ds-space-8`, `--ds-pad-slide`, `--ds-pad-x` |
| forma | `--ds-radius-sm` `--ds-radius` `--ds-radius-lg` `--ds-border` `--ds-border-thick` `--ds-shadow` |

`--ds-pad-x` é só o lado da margem do slide. Use-o em vez de digitar `3.2rem` quando precisar
alinhar algo `position: absolute` com a margem (é o que `<Fonte>` e o `meta` da `capa` fazem).

O tema claro vive em `:root`, o escuro em `.dark` — a classe que o Slidev põe no `<html>`
conforme o `colorSchema` do headmatter. Nenhuma cor pode existir **só** no bloco `.dark`.

A escala de tipo é fechada: sete tamanhos, e o piso do corpo é maior que o de um deck de
conferência, porque quem está no fundo da sala também lê. Quando um slide parece precisar de
um tamanho fora dela, quase sempre o problema é conteúdo demais no slide.

### Fontes

Os tokens de fonte pedem Inter / Source Serif 4 / JetBrains Mono e caem para as do sistema.
Para carregá-las de verdade, use o campo do Slidev no headmatter — é o que
`_modelo-aula.md` já traz:

```yaml
fonts:
  sans: Inter
  serif: Source Serif 4
  mono: JetBrains Mono
```

Isso faz o site buscar as fontes no Google Fonts em tempo de exibição. Sem esse campo o deck
publicado não depende de rede, e a turma vê Segoe UI / Georgia — legível, só menos bonito.

A serifa não é decoração: ela marca **voz de outra pessoa ou de narrativa** — o título do
`destaque`, o corpo do `<Caso>`, a `<Citacao>`, o `blockquote`. Não use serifa fora disso.

---

## Layouts

Vão no campo `layout:` do frontmatter do slide. Os campos de cada um viram props.

| layout | quando usar | campos |
|---|---|---|
| `capa` | o primeiro slide da aula | `kicker` `title` `subtitle` `meta` |
| `secao` | avisar que a aula virou de assunto | `numero` `kicker` `title` `note` |
| `roteiro` | o índice da aula, ou lista de tópico + explicação | `kicker` `title` `itens[]` `atual` |
| `destaque` | uma frase sozinha na tela: a pergunta que abre a discussão, a tese, o número | `kicker` `title` `fonte` `tipo` |
| `comparacao` | dois conceitos que **se opõem**, lado a lado | `kicker` `title` `esquerda` `direita` `pergunta` + slots `::esquerda::` `::direita::` |
| `atividade` | o slide em que a turma para de ouvir e faz | `kicker` `title` `tempo` `formato` `passos[]` `entrega` |
| `figura` | quando a imagem **é** o argumento e o texto comenta | `imagem` `rotulo` `legenda` `lado` (`direita`/`esquerda`/`cheia`) `ajuste` |
| `fecho` | o último slide: o que fica, o que vem | `kicker` `title` `pontos[]` `proximo` `leitura` |

Os layouts do próprio Slidev continuam valendo: `default`, `center`, `two-cols`,
`two-cols-header`, `image-left`, `image-right`, `iframe`, `full`, `none`. Para imagem
decorativa, `image-right` dá menos trabalho que o `figura`.

Campos marcados como "aceita HTML" nos comentários de cada `.vue` são renderizados com
`v-html` — dá para escrever `<span class="ds-em">assim</span>` dentro de um título.

### Os três que carregam a carga pedagógica

- **`roteiro` repetido** entre as seções, mudando só o `atual`, é o truque barato que mais
  funciona: a turma sabe sempre onde está e quanto falta. Os itens já vistos ficam esmaecidos,
  não escondidos.
- **`atividade`** obriga a dizer **quanto tempo** e **o que entregar**. Atividade sem as duas
  vira conversa paralela; por isso os dois campos existem e por isso o slide inteiro muda de
  cor — a turma reconhece de longe que agora é a vez dela.
- **`comparacao`** existe porque metade da psicologia cognitiva é um par de opostos
  (curto/longo prazo, automático/controlado, declarativa/não declarativa). Se as duas colunas
  não se opõem de verdade, o certo é `<Grade>` + `<Cartao>`.

## Componentes

Ficam em `aulas/components/` e são **auto-importados**: basta escrever a tag no markdown.

| componente | quando usar |
|---|---|
| `<Objetivos>` | o contrato da aula: o que a turma vai saber **fazer** no fim dela |
| `<Caso>` | a vinheta concreta, **antes** da teoria que a explica |
| `<Termo>` | a definição formal — o bloco que a turma copia (`ingles` traz o termo da bibliografia) |
| `<Experimento>` | o estudo clássico em três linhas: perguntaram / fizeram / acharam |
| `<MitoFato>` | o neuromito que a turma trouxe de casa, e o que a evidência diz |
| `<ForcasLimites>` | o par força/limite de um método ou de uma teoria — as duas listas nunca vêm sozinhas |
| `<Etapas>` | processo com **ordem causal** — uma etapa causa a seguinte |
| `<LinhaDoTempo>` | sequência com marcos — história, ou processo sem causalidade estrita |
| `<Checagem>` | a pergunta de verificação no meio da aula, com a resposta no clique |
| `<Nota>` | o aparte: `tipo` = `info` (padrão), `ok`, `alerta`, `erro` |
| `<Grade>` + `<Cartao>` | comparar coisas do mesmo tipo, 2 ou 3 colunas |
| `<Citacao>` | a palavra de outra pessoa, dentro de um slide com mais coisas |
| `<Pessoa>` | quem é essa gente que a aula cita |
| `<Referencia>` | a referência bibliográfica, sempre com os mesmos campos na mesma ordem |
| `<Fonte>` | o crédito no pé do slide |

Quatro pares que se confundem, e a regra de cada um:

- `<Etapas>` × `<LinhaDoTempo>`: ordem **causal** (horizontal) × ordem no **tempo** (vertical).
- `comparacao` × `<Grade>`: coisas que **se opõem** × coisas do **mesmo tipo**.
- `<ForcasLimites>` × `<Grade>`: o par **fixo** força/limite de **uma** coisa × N coisas do
  mesmo tipo, sem par fixo.
- `destaque` × `<Citacao>`: a frase ocupa o slide **inteiro** × a citação está **dentro** de um
  slide com outras coisas.

### `<Checagem>` e o `v-click`

O `v-click` fica no **markdown**, em volta da resposta, e não dentro do componente:

```md
<Checagem pergunta="…" :alternativas="['a…', 'b…', 'c…']">

<div v-click>

**b.** Por que é essa.

</div>

</Checagem>
```

A resposta precisa ser **um bloco só**. O `v-click` do Slidev não tira o elemento do DOM — só
o deixa transparente — então a caixa verde é pintada no filho do slot, e não no slot. Dois
blocos irmãos virariam duas caixas.

## Utilitários

`ds-kicker` `ds-lead` `ds-muted` `ds-em` `ds-em-2` `ds-marca` `ds-etiqueta` `ds-small`
`ds-grid` `ds-stack` `ds-rule` `ds-compacto`.

- `ds-em` (índigo) para conceito, `ds-em-2` (terracota) para evidência — nos campos de
  frontmatter que aceitam HTML, onde `**negrito**` não funciona.
- `ds-marca` é o marca-texto para esses mesmos campos; dentro do markdown, use `<mark>` mesmo.
- `ds-compacto` aperta o ritmo vertical de um trecho comprido. É válvula de escape, não
  solução: se o slide inteiro precisa dela, ele é dois slides.

O UnoCSS do Slidev também está ligado (`text-sm`, `mt-4`, `grid`…) — use-o para ajuste
pontual, e as classes `ds-*` para o que tem significado editorial.

Para ver tudo renderizado em vez de lido: **`npm run ref`** abre `aulas/_design-system.md`,
que tem um slide por layout e por componente, com a situação de uso nas notas.

---

## As armadilhas do Slidev

As cinco coisas abaixo não são opinião de estilo. São comportamentos do Slidev (e do YAML do
frontmatter) que fazem um slide sumir, uma imagem quebrar ou um campo virar `[object Object]`
**só depois de publicado**. `npm run lint` pega as quatro primeiras.

### 1. `src:` no frontmatter apaga o slide

`src` é o campo com que o Slidev importa **outro arquivo `.md`** no lugar do slide. Um
`src: /foto.png` faz o Slidev tentar importar `/foto.png` como markdown: o slide desaparece do
deck, sem mensagem de erro nenhuma. Por isso o layout `figura` chama o campo de `imagem`.

### 2. Os campos que o Slidev não entrega ao layout

Estes nomes são consumidos pelo Slidev e **nunca chegam como prop**:

```
clicks · clicksStart · disabled · hide · hideInToc · layout · level · preload
routeAlias · src · title · transition · zoom · dragPos · lang · clickAnimation
```

`title` é o caso que mais aparece, porque é natural querer escrever o título do slide no
frontmatter. Ele chega pelo objeto `frontmatter`, que todo layout recebe inteiro:

```vue
const props = defineProps<{ frontmatter?: Record<string, any> }>()
const title = props.frontmatter?.title
```

Todos os layouts daqui fazem assim. O lint reclama de qualquer layout que declare uma prop com
nome reservado.

### 3. Caminho de imagem que chega por prop precisa de `asset()`

O Vite reescreve caminhos que consegue ver no build — `![](/foto.png)` no markdown, ou
`<img src="/foto.png">` escrito literalmente no template. Um caminho que chega por prop é só
uma string em tempo de execução: o Vite não a enxerga, e no GitHub Pages (onde o site vive em
`/<repo>/<slug>/`) o navegador pede a imagem na raiz do domínio e leva 404.

Localmente a base é `/` e tudo funciona — **o erro só aparece depois do deploy.** Por isso
`aulas/lib/asset.ts`, e por isso `figura.vue` e `Pessoa.vue` passam o caminho por ele.

### 4. `: ` e `,` num texto de frontmatter sem aspas

O frontmatter é YAML, e YAML lê `: ` como "aqui começa um campo". Este item de lista **não**
é o texto que parece ser:

```yaml
pontos:
  - Quatro abordagens: a força de uma cobre a outra    # vira um MAPA, não uma frase
```

O layout recebe `{"Quatro abordagens": "a força de uma cobre a outra"}` onde esperava uma
string, e o slide publicado mostra `[object Object]`. A vírgula faz o mesmo dentro de
`{ tema: …, desc: … }`, e ali é pior: ela ainda engole os campos que vinham depois, então o
slide perde silenciosamente o `lado`, o `ajuste`, o que estiver na sequência.

O arquivo continua sendo YAML válido — só descreve outra coisa. **Texto com `: ` ou com `,`
vai entre aspas**, sempre:

```yaml
pontos:
  - "Quatro abordagens: a força de uma cobre a outra"
itens:
  - { tema: "De baixo para cima, de cima para baixo", desc: "as duas direções" }
```

O lint pega pelo rastro: campo de frontmatter é identificador (`tema`, `desc`, `fonts`), e
identificador não tem espaço — uma frase virando nome de campo é sempre acidente.

### 5. Markdown dentro de componente precisa de linha em branco

Sem linha em branco, o conteúdo entre as tags é tratado como HTML puro e o `**negrito**`
aparece literal na tela:

```md
<Nota titulo="Assim não">
Isto sai com os **asteriscos** à mostra.
</Nota>

<Nota titulo="Assim sim">

Isto sai com o **negrito** certo.

</Nota>
```

Vale em qualquer nível de aninhamento — `<Cartao>` dentro de `<Grade>` também precisa.

---

## Três armadilhas do próprio design system

Estas o lint não pega, porque são de CSS, não de Slidev. Custaram um bug cada uma.

### O marcador de lista global entra nos componentes

`base.css` põe um ponto de índigo em **todo** `li` de `ul` dentro de um slide. Um componente
que desenhe o próprio marcador ganha os dois, sobrepostos. Quem desenha o seu precisa desligar
o global (ver `Objetivos.vue`):

```css
.ds-meu-componente li::before {
  content: none;
}
```

### Item de flex encolhe abaixo do próprio conteúdo

Num layout em coluna com `justify-content: space-between`, o bloco de cima com
`flex-shrink: 1` (o padrão) encolhe abaixo da altura do seu conteúdo, e o texto passa **por
cima** do rodapé em vez de transbordar o slide. Transbordar é feio, mas é visível; sobrepor
passa despercebido até a projeção. Todo bloco de conteúdo nesses layouts leva
`flex: 0 0 auto` (ver `fecho.vue`).

### `vh` mede a janela, não o slide

O quadro de um slide tem **552px fixos** (980 × 552). `vh` mede a janela do navegador,
que não tem nada a ver com isso: numa janela de 1080px, `62vh` dá 669px — mais alto que o
slide inteiro. E na exportação em PDF é pior, porque o Slidev abre uma janela com a altura
de **todos os slides somados**.

Foi assim que o `figura` limitava a imagem, e por muito tempo não incomodou: imagem
deitada já é baixa por proporção, e o excesso só aparecia com imagem em pé. Nada de `vh`
(nem `vw`) em altura de conteúdo — o teto sai em `%` do quadro, em `rem`, ou em faixa de
grade com `minmax(0, 1fr)`, que foi a saída do `figura`.

## O slide que não cabe

Um slide mais alto que o quadro **não dá erro nenhum**. Na apresentação, o que sobra fica
fora da tela e ninguém vê. No PDF do `download: true`, o mesmo slide vira **duas páginas**,
a segunda começando no meio de uma frase — e isso só se descobre quando um aluno baixa o
arquivo.

```bash
npm run build && npm run overflow
```

`scripts/overflow.mjs` abre o `dist/` no mesmo Chromium que exporta o PDF, na mesma rota
(`?print=true#print`) e com a mesma janela, e mede slide a slide. **A folga é zero**: dois
pixels a mais já empurram a última linha para a página seguinte. Ele não roda no `build` de
propósito — precisa de navegador e de rede (as fontes do Google mudam a quebra de linha), e
não vale fazer o deploy depender disso. Rode antes de commitar uma aula nova.

Quando ele acusa, as saídas em ordem de preferência: cortar texto, mover a explicação para
as notas do apresentador (o que é falado não precisa estar escrito), ou quebrar em dois
slides. Aumentar a densidade tipográfica com `ds-compacto` é o último recurso.

Duas coisas que **não** contam altura, e por isso salvam um slide apertado: `<Fonte>`, que é
`position: absolute` no pé, e as notas em `<!-- -->`. Uma que conta e não parece: a resposta
escondida de `<Checagem>` — o `v-click` deixa o bloco transparente, não o tira do DOM.

---

## As regras de sempre

- **Todo frontmatter é cercado por `---` em cima e embaixo.** Entre dois slides sem corpo
  aparecem duas linhas `---` seguidas — está certo. Compartilhar um `---` entre dois blocos
  quebra o parse do arquivo inteiro.
- **O bloco de abertura é headmatter e frontmatter do primeiro slide ao mesmo tempo.** O
  `title:` dele é o título do deck **e** o título que a `capa` mostra: não repita o campo.
- **CSS solto num slide é sinal de que falta um layout ou um componente.** A exceção honesta
  é o desenho que só existe naquele slide (o catálogo de cores em `_design-system.md` é um
  exemplo). Se você escreveria o mesmo `<style>` duas vezes, vire componente.
- Um layout ou componente novo **ganha um slide em `aulas/_design-system.md`**. É o que
  mantém o catálogo confiável.
- As cores dos SVGs de `aulas/public/` são **cópias** dos tokens, não referências. Mexer em
  `tokens.css` não as atualiza — ver `aulas/public/README.md`.
