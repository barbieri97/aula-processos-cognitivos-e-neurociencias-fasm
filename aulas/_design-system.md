---
theme: none
title: Design system — catálogo
info: Um slide por layout e por componente, com a situação de uso nas notas
date: "2026-08-13"
colorSchema: light
fonts:
  sans: Inter
  serif: Source Serif 4
  mono: JetBrains Mono
layout: capa
kicker: Deck de bancada
subtitle: Um slide para cada <span class="ds-em">layout</span> e cada <span class="ds-em">componente</span> de Processos Cognitivos e Neurociências. Abra com <code>npm run ref</code>.
meta: O nome começa com <code>_</code>, então o site não publica este deck. Ele existe para você ver antes de escrever.
---

<!--
Este é o catálogo do design system: a versão renderizada do que docs/design-system.md
descreve por escrito. Toda vez que você criar um layout ou componente novo em aulas/,
acrescente um slide aqui — é o que mantém o catálogo confiável.

Os exemplos usam conteúdo real da disciplina de propósito: dá para ver se a peça
aguenta o texto que ela vai receber de verdade.
-->

---
layout: roteiro
kicker: O que tem aqui
title: O catálogo
itens:
  - { tema: Tokens, desc: "cor, tipo e espaço — o vocabulário" }
  - { tema: Layouts, desc: "8 locais + os que o Slidev já traz" }
  - { tema: Componentes, desc: "16 peças para usar dentro do slide" }
  - { tema: Markdown puro, desc: como texto sem enfeite se parece }
---

---
layout: secao
numero: "01"
kicker: Parte 1
title: Tokens
note: Nenhum layout e nenhum componente escreve uma cor na mão. Todos leem daqui.
---

---
layout: default
---

# As cores

<div class="amostras">
  <div><span class="chip" style="background: var(--ds-accent)"></span><code>--ds-accent</code><em>índigo — o conceito</em></div>
  <div><span class="chip" style="background: var(--ds-accent-2)"></span><code>--ds-accent-2</code><em>terracota — a evidência</em></div>
  <div><span class="chip" style="background: var(--ds-ink)"></span><code>--ds-ink</code><em>texto principal</em></div>
  <div><span class="chip" style="background: var(--ds-muted)"></span><code>--ds-muted</code><em>texto secundário</em></div>
  <div><span class="chip" style="background: var(--ds-surface); border-color: var(--ds-rule)"></span><code>--ds-surface</code><em>cartões e blocos</em></div>
  <div><span class="chip" style="background: var(--ds-ok)"></span><code>--ds-ok</code><em>confirma, resposta certa</em></div>
  <div><span class="chip" style="background: var(--ds-warn)"></span><code>--ds-warn</code><em>atenção</em></div>
  <div><span class="chip" style="background: var(--ds-danger)"></span><code>--ds-danger</code><em>erro, mito</em></div>
</div>

A dupla que dá o ritmo do curso é **índigo** para o que é conceito e
<span class="ds-em-2">terracota</span> para o que é evidência empírica.

<Fonte>Trocar a identidade visual das aulas = editar <code>aulas/styles/tokens.css</code>, e só ele. Todos os pares texto/fundo passam de 4.5:1 nos dois temas.</Fonte>

<style>
.amostras {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--ds-space-3) var(--ds-space-6);
  margin-top: var(--ds-space-5);
}
.amostras > div { display: flex; align-items: center; gap: var(--ds-space-3); }
.amostras .chip {
  width: 2.2rem; height: 2.2rem; flex: none;
  border: 1px solid transparent; border-radius: var(--ds-radius-sm);
}
.amostras em { color: var(--ds-muted); font-size: var(--ds-text-sm); font-style: normal; }
</style>

<!--
Este slide usa um <style> local — a exceção que confirma a regra. Ele desenha uma amostra
de cor, que só existe neste catálogo. Numa aula, CSS solto é sinal de que falta um layout
ou um componente.
-->

---
layout: default
---

# A escala de tipo

<div class="escala">
  <p style="font-size: var(--ds-text-3xl)">3xl — só a capa e o destaque</p>
  <p style="font-size: var(--ds-text-2xl)">2xl — o h1 de um slide comum</p>
  <p style="font-size: var(--ds-text-xl)">xl — h2, termo, checagem</p>
  <p style="font-size: var(--ds-text-lg)">lg — abertura, item de lista importante</p>
  <p style="font-size: var(--ds-text-base)">base — o corpo do texto</p>
  <p style="font-size: var(--ds-text-sm)">sm — legenda, tabela, referência</p>
  <p style="font-size: var(--ds-text-xs)">xs — rótulo em caixa alta</p>
</div>

<Fonte>O piso do corpo de texto é maior que o de um deck de conferência de propósito: quem está no fundo da sala também lê.</Fonte>

<style>
.escala p { margin: var(--ds-space-2) 0; max-width: none; line-height: 1.25; }
</style>

<!--
Sete tamanhos, e só. Quando um slide "precisa" de um tamanho que não está na escala,
o problema quase sempre é conteúdo demais no slide — não a escala.
-->

---
layout: secao
numero: "02"
kicker: Parte 2
title: Layouts
note: Escolha pela forma do conteúdo, não pela decoração.
---

---
layout: roteiro
kicker: "layout: roteiro"
title: Este slide é o layout <code>roteiro</code>
itens:
  - { tema: O que é atenção, desc: "filtrar não é o mesmo que perceber" }
  - { tema: Onde ela falha, desc: "com <code>atual</code> marcando onde estamos" }
  - { tema: Por que isso importa, desc: "os itens já vistos ficam esmaecidos" }
atual: 2
---

<!-- Situação: índice da aula. Repetir o mesmo roteiro entre as seções, mudando só o `atual`, é o truque pedagógico barato que mais funciona — a turma sabe sempre onde está e quanto falta. -->

---
layout: destaque
tipo: pergunta
kicker: Para começar
title: Onde é que a memória <span class="ds-em">fica</span>?
fonte: o campo <code>fonte</code> vai aqui embaixo
---

<!-- Situação: a pergunta que abre a discussão, a tese da aula, o número que impressiona. O título sai em serifa: é o slide em que a turma para de copiar e olha para a tela. `tipo: dado` troca o fio para terracota. -->

---
layout: comparacao
kicker: "layout: comparacao"
title: Dois sistemas de memória
esquerda: Declarativa
direita: Não declarativa
pergunta: O que muda quando a lembrança não passa pela consciência?
---

::esquerda::

- Lembrar **que** algo aconteceu
- Acessível ao relato verbal
- Hipocampo e córtex temporal medial

::direita::

- Lembrar **como** se faz algo
- Aparece no desempenho, não no relato
- Gânglios da base e cerebelo

<!-- Situação: metade da psicologia cognitiva é um par de opostos — curto/longo prazo, automático/controlado, bottom-up/top-down. Se as duas colunas não se OPÕEM de verdade, o certo é <Grade> + <Cartao>. -->

---
layout: atividade
title: Testando o efeito Stroop
tempo: 10 min
formato: em duplas
passos:
  - Um lê a lista de palavras em voz alta, o outro cronometra
  - Trocar de papel na segunda lista, em que a cor da tinta não bate com a palavra
  - Comparar os dois tempos
entrega: A diferença entre os dois tempos, em segundos — vamos usar no próximo slide
---

<!-- Situação: o slide em que a turma para de ouvir e faz alguma coisa. O layout força dizer QUANTO TEMPO e O QUE ENTREGAR — atividade sem as duas vira conversa paralela. -->

---
layout: figura
imagem: /exemplo-figura.svg
rotulo: Fig. 1
legenda: O campo <code>legenda</code> aceita HTML.
lado: direita
---

# O layout `figura`

Imagem de um lado, texto do outro. `lado: esquerda` troca os dois de lugar, e
`ajuste: cover` faz a imagem preencher em vez de caber inteira.

O `rotulo` numera a figura: vale a pena quando a aula volta a ela depois —
"lembram da Fig. 1?" é mais barato que repetir o slide.

<!-- Situação: quando a imagem É o argumento e o texto comenta. Para imagem decorativa, o layout `image-right` do Slidev serve e dá menos trabalho. -->

---
layout: secao
numero: "03"
kicker: Parte 3
title: Componentes
note: O que se usa dentro de um slide, misturado ao markdown.
---

---
layout: default
---

# `<Objetivos>` — o contrato da aula

<Objetivos :itens="[
  'Distinguir sensação de percepção',
  'Explicar o que a cegueira por desatenção demonstra sobre o papel da atenção',
  'Reconhecer um neuromito em texto de divulgação científica',
]" />

<Fonte>Verbo de ação no infinitivo. Objetivo que começa com "entender" não dá para verificar — e é justamente o que a turma usa para estudar.</Fonte>

<!-- Situação: vai no segundo ou terceiro slide, logo depois da capa, e volta no `fecho` como checagem. -->

---
layout: default
---

# `<Caso>` — a vinheta antes da teoria

<Caso titulo="H.M." contexto="1953, Hartford" pergunta="Se ele não guardava nada novo, como aprendeu a tarefa do espelho?">

Depois de uma cirurgia que removeu boa parte do lobo temporal medial dos dois
lados, Henry Molaison conversava normalmente e lembrava da infância — mas não
guardava nada de novo por mais que alguns minutos.

</Caso>

<!-- Situação: turma de 1º semestre entra na teoria pela porta do caso, não pelo modelo. Use o caso ANTES do conceito: a `pergunta` fica pendurada e é o que a turma responde depois que o conceito chega. -->

---
layout: default
---

# `<Experimento>` e `<MitoFato>`

<div class="ds-grid">
<div>

<Experimento
  nome="Efeito Stroop"
  autoria="Stroop, 1935"
  pergunta="Ler atrapalha nomear a cor da tinta?"
  metodo="Nomear a cor de palavras que são nomes de outras cores"
  achado="A resposta demora mais quando palavra e cor divergem" />

</div>
<div>

<MitoFato
  mito="Usamos só 10% do cérebro"
  fato="Praticamente todo o cérebro tem atividade mensurável ao longo de um dia">

Neuroimagem não encontra regiões silenciosas, e lesão em qualquer área produz
algum déficit.

</MitoFato>

</div>
</div>

<!-- Situação: <Experimento> segue sempre a ordem perguntaram / fizeram / acharam — depois de dois ou três slides destes a turma já sabe onde procurar cada coisa. <MitoFato> é para o que a turma traz de casa: desmentir sem nomear o mito não cola. -->

---
layout: default
---

# `<ForcasLimites>` — o par que vem sempre junto

<ForcasLimites
  :forcas="[
    'Controla o que entra: isola um processo por vez',
    'Serve para qualquer tema — memória, leitura, decisão',
  ]"
  :limites="[
    '<strong>Validade ecológica</strong>: laboratório não é vida diária',
    'Tempo e erro são evidência <strong>indireta</strong>',
  ]" />

Os rótulos são fixos; `tituloForcas` e `tituloLimites` trocam quando "ela" não
for a palavra certa.

<!-- Situação: avaliar um método ou uma teoria. A bibliografia fecha cada abordagem com "Vantagens" e "Limitações", e a turma precisa aprender que as duas listas andam juntas — método sem limite declarado é propaganda. Não confundir com <Grade> (N coisas do mesmo tipo) nem com o layout `comparacao` (duas coisas que se opõem). -->

---
layout: default
---

# `<Etapas>` — o processo com ordem causal

<Etapas :itens="[
  { titulo: 'Estímulo', desc: 'a luz chega à retina' },
  { titulo: 'Transdução', desc: 'células fotorreceptoras viram sinal elétrico' },
  { titulo: 'Percepção', desc: 'o córtex interpreta e nomeia' },
]" />

Diferente da `<LinhaDoTempo>`, que é vertical e datada, esta lê da esquerda para
a direita: serve ao que tem ordem causal, em que uma etapa **causa** a seguinte.

<Fonte>Três ou quatro etapas. Se o processo tem mais, quebre em dois slides — que é também como a turma vai conseguir guardar.</Fonte>

<!-- Situação: sinapse, arco reflexo, modelo de memória, funil da atenção. -->

---
layout: default
---

# `<Checagem>` — a pergunta no meio da aula

<Checagem
  pergunta="A cegueira por desatenção mostra que…"
  :alternativas="[
    'o olho não captou o objeto',
    'o objeto foi captado, mas não foi atendido',
    'a memória apagou o objeto logo depois',
  ]">

<div v-click>

**b.** Os olhos chegam a fixar o objeto — o que faltou foi atenção, não sensação.

</div>

</Checagem>

<!-- Situação: vale mais no meio da aula do que no fim — a pergunta que interrompe é a que faz a turma perceber que perdeu o fio, enquanto ainda dá para retomar. O `v-click` fica no markdown, em volta da resposta, e não dentro do componente. -->

---
layout: default
---

# `<Nota>` — os quatro tipos

<div class="ds-compacto">

<Nota titulo="Info">

O tipo padrão, com **markdown funcionando** — repare nas linhas em branco.

</Nota>

<Nota tipo="ok" titulo="Funciona">

Para confirmar o caminho certo: "é assim que se faz".

</Nota>

<Nota tipo="alerta" titulo="Cuidado">

Para a pegadinha que a turma sempre cai — correlação não é causa.

</Nota>

<Nota tipo="erro" titulo="Não faça">

Para o erro que precisa ser nomeado como erro.

</Nota>

</div>

<!-- Situação: o aparte. Se o conteúdo é o ponto principal do slide, ele não vai numa <Nota> — vai no corpo. A classe `ds-compacto` aperta o ritmo vertical, e é o que permite os quatro caberem num slide só. -->

---
layout: default
---

# `<Grade>` + `<Cartao>`

<Grade :cols="3">
<Cartao rotulo="1º nível" titulo="Sensação">

O receptor **transforma** energia física em sinal nervoso.

</Cartao>
<Cartao rotulo="2º nível" titulo="Percepção" destaque>

O `destaque` pinta um cartão com o índigo — um por grade.

</Cartao>
<Cartao rotulo="3º nível" titulo="Reconhecimento">

Cartão sem `rotulo` também funciona.

</Cartao>
</Grade>

<Fonte><code>:cols</code> precisa dos dois-pontos — sem eles o Vue passa a string <code>"3"</code>.</Fonte>

<!-- Situação: comparar coisas do mesmo tipo. Duas ou três colunas; com quatro, o texto de cada cartão já não cabe. Para duas coisas que se OPÕEM, o layout `comparacao` diz mais. -->

---
layout: default
---

# `<Termo>` e `<Citacao>`

<Termo palavra="Memória de trabalho" ingles="working memory" origem="Baddeley &amp; Hitch, 1974">

Sistema de capacidade limitada que mantém e manipula informação por poucos
segundos, enquanto uma tarefa está em curso.

</Termo>

<Citacao autor="Alan Baddeley" fonte="Working Memory, 1986">

O que chamamos de memória de curto prazo não é um depósito: é um espaço de trabalho.

</Citacao>

<!-- Situação: <Termo> é o bloco que a turma copia. O campo `ingles` existe porque quase toda a bibliografia da área está em inglês — ver o termo nas duas línguas desde o 1º semestre é o que permite procurar sozinho depois. -->

---
layout: default
---

# `<Pessoa>` e `<LinhaDoTempo>`

<div class="ds-grid">
<div>

<Pessoa nome="Com retrato" papel="o campo `foto`" foto="/exemplo-avatar.svg">

O slot é a descrição curta.

</Pessoa>

<Pessoa nome="Sem retrato" papel="entra um monograma">

Assim uma grade de pessoas não fica torta.

</Pessoa>

</div>
<div>

<LinhaDoTempo :itens="[
  { quando: '1861', o_que: 'Broca', desc: 'fala e lobo frontal esquerdo' },
  { quando: '1953', o_que: 'H.M.' },
  { quando: 'hoje', o_que: 'O campo é texto', desc: 'não precisa ser ano' },
]" />

</div>
</div>

<!-- Situação: <LinhaDoTempo> serve para história e para processo sem ordem causal estrita. Quando uma etapa CAUSA a seguinte, o certo é <Etapas>. -->

---
layout: default
---

# `<Referencia>` e `<Fonte>`

<Referencia
  autores="Sternberg, R. J."
  ano="2016"
  titulo="Psicologia cognitiva"
  onde="Cengage, 6ª ed."
  capitulo="cap. 4, p. 112–140" />

<Referencia
  autores="Simons, D. J., &amp; Chabris, C. F."
  ano="1999"
  titulo="Gorillas in our midst"
  onde="<em>Perception</em>, 28(9), 1059–1074"
  link="https://doi.org/10.1068/p281059" />

O recuo francês e a ordem dos campos são sempre os mesmos — é assim que a turma
aprende o formato por repetição, que é o que vai cobrar dela no trabalho.

<Fonte>O <code>&lt;Fonte&gt;</code> é esta linha aqui embaixo: o crédito do slide, ancorado no pé.</Fonte>

<!-- Situação: <Referencia> para a bibliografia (o `capitulo` é o recorte que foi realmente pedido para ler); <Fonte> para o crédito de uma imagem ou de um dado dentro do slide. -->

---
layout: secao
numero: "04"
kicker: Parte 4
title: Markdown puro
note: Sem componente nenhum. É assim que o texto de todo dia se parece.
---

---
layout: default
---

# Um slide comum

Parágrafo com **negrito no índigo**, *itálico*, <mark>marca-texto para o que cai
na prova</mark>, uma sigla como <abbr title="memória de curto prazo">MCP</abbr> e
um [link](https://sli.dev/).

## Um h2 divide o slide

- Item de lista, com o ponto no índigo
- Outro item
  - Sublista fica menor, com o marcador vazado

> A citação em markdown vira o bloco em serifa, com a barra à esquerda.

| campo do headmatter | o que faz |
|---|---|
| `title` | vira o nome da aula no índice do site |
| `info` | a ementa de uma linha |

---
layout: fecho
kicker: Fechando
title: Onde continuar
pontos:
  - "O contrato escrito: <code>docs/design-system.md</code>"
  - "Trocar tudo por um tema npm, ou gerar outro DS: <code>docs/temas.md</code>"
  - "Layout ou componente novo entra em <code>aulas/</code> — e ganha um slide aqui"
proximo: Copie <code>aulas/_modelo-aula.md</code> e comece a escrever
leitura: <code>design-system.md</code>, "As armadilhas do Slidev"
---
