---
theme: none
title: O título da aula
info: A ementa de uma linha, que aparece na página inicial do site
date: "2026-08-13"
colorSchema: light
download: true
fonts:
  sans: Inter
  serif: Source Serif 4
  mono: JetBrains Mono
layout: capa
kicker: Unidade 1 · Aula 00
subtitle: A pergunta que esta aula responde, numa frase.
meta: Processos Cognitivos e Neurociências · Psicologia · 1º semestre
---

<!--
COMO USAR ESTE ARQUIVO

  copy aulas\_modelo-aula.md aulas\aula-01-atencao-e-percepcao.md

Depois: troque `title`, `info`, `date` e o `kicker` da capa, e escreva. O nome do
arquivo vira a URL da aula, então ele segue `aula-NN-slug-em-minusculas.md`.

O `_` no começo mantém ESTE arquivo fora do site publicado — a sua cópia, sem o
`_`, é publicada.

O esqueleto abaixo é a forma de aula que este design system assume:
capa → objetivos → roteiro → caso → conceito → evidência → atividade → checagem → fecho.
Apague o que não usar; a ordem é sugestão, não regra.

O bloco de abertura acima é headmatter E frontmatter do primeiro slide ao mesmo
tempo: o `title:` dele é o título do deck e o que a capa mostra. Não repita o campo.

O `download: true` põe o botão de baixar no deck e faz o build exportar o PDF da
aula junto. Depois de escrever, rode `npm run build && npm run overflow`: slide alto
demais some da tela sem avisar, mas vira duas páginas no PDF.
-->

---
layout: default
---

# Para onde vamos

<Objetivos :itens="[
  'Primeiro objetivo, com verbo de ação no infinitivo',
  'Segundo objetivo, que dê para verificar no fim da aula',
  'Terceiro — três costumam bastar',
]" />

<!-- Volte a este slide no fim da aula: "conseguimos os três?" -->

---
layout: roteiro
kicker: O caminho de hoje
title: Três perguntas
itens:
  - { tema: A primeira parte, desc: o que ela responde }
  - { tema: A segunda parte, desc: o que ela responde }
  - { tema: A terceira parte, desc: o que ela responde }
---

<!-- Repita este slide entre as seções mudando só o `atual:` — a turma sabe sempre onde está. -->

---
layout: secao
numero: "01"
kicker: Parte 1
title: O título da primeira parte
note: A frase que diz por que esta parte existe.
---

---
layout: default
---

# O caso que abre o assunto

<Caso titulo="Nome do caso" contexto="ano, lugar" pergunta="A pergunta que fica pendurada até o conceito chegar.">

Três ou quatro linhas de narrativa. Concreto, sem jargão — é a porta de entrada
para a teoria, não um resumo dela.

</Caso>

---
layout: default
---

# O conceito

<Termo palavra="O termo" ingles="the term" origem="autoria ou etimologia">

A definição formal, em uma ou duas frases. Este é o bloco que a turma copia.

</Termo>

Depois da definição, uma frase sua explicando <mark>o que ela quer dizer na
prática</mark>.

---
layout: default
---

# A evidência

<Experimento
  nome="Nome do estudo"
  autoria="Autor, ano"
  pergunta="O que eles queriam saber"
  metodo="O que fizeram, em uma linha"
  achado="O que encontraram — a linha que precisa sobrar" />

---
layout: atividade
title: O que a turma vai fazer
tempo: 10 min
formato: em duplas
passos:
  - O primeiro passo, no imperativo
  - O segundo
entrega: O que a turma traz de volta quando o tempo acabar
---

---
layout: default
---

# Checando

<Checagem
  pergunta="A pergunta de verificação"
  :alternativas="[
    'Primeira alternativa',
    'Segunda alternativa',
    'Terceira alternativa',
  ]">

<div v-click>

**b.** Por que é essa — e por que as outras são plausíveis mas erradas.

</div>

</Checagem>

---
layout: fecho
kicker: Fechando
title: O que fica
pontos:
  - A primeira ideia que a turma leva
  - A segunda
proximo: Aula 02 — o título da próxima
leitura: Autor, cap. N (p. 00–00)
---

<Referencia
  autores="Sobrenome, N."
  ano="2016"
  titulo="O título da obra"
  onde="Editora, edição"
  capitulo="cap. 4, p. 112–140" />
