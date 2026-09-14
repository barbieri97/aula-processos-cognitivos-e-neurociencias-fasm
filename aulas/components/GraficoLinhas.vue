<!--
  <GraficoLinhas> — uma ou mais séries num gráfico de linhas.

  <GraficoLinhas
    titulo="Economia na reaprendizagem"
    tituloY="economia"
    sufixoY="%"
    escalaX="log"
    :maxY="60"
    :rotulosX="[
      { valor: 20, texto: '20 min' },
      { valor: 1440, texto: '1 dia' },
      { valor: 44640, texto: '31 dias' },
    ]"
    :series="[
      { nome: 'Ebbinghaus, 1885', pontos: [[20, 58.2], [1440, 33.7], [44640, 21.1]] },
      { nome: 'Dros, 2015', pontos: [[20, 47.2], [1440, 31.7], [44640, 4.1]] },
    ]" />

  Para DADOS — dois eixos e uma medida que varia ao longo de alguma coisa. O que
  é esquema (uma taxonomia, um circuito, um processo) continua sendo SVG em
  `aulas/public/`: ali o desenho é fixo e desenhá-lo à mão sai mais barato do que
  descrevê-lo em números.

  Os eixos e as escalas vêm do d3 (`d3-scale`, `d3-shape`) — não há geometria de
  gráfico escrita à mão aqui. As cores saem dos tokens: a primeira série em
  índigo, a segunda em terracota, a terceira em cinza. Três séries é o teto; com
  mais, o slide vira um artigo.

  O nome de cada série aparece no fim da própria linha, e não numa legenda à
  parte: assim a turma não precisa fazer o casamento cor-a-cor no meio da aula.
  Por isso o `nome` entra na largura do gráfico — mantenha-o curto.

  `escalaX: 'log'` para intervalos que crescem por ordem de grandeza (minutos a
  meses). Numa escala log o zero não existe: todo valor de x tem de ser > 0.
-->
<script setup lang="ts">
import { computed } from 'vue'
import { scaleLinear, scaleLog } from 'd3-scale'
import { line } from 'd3-shape'

type Ponto = [number, number]

const props = withDefaults(defineProps<{
  series?: { nome?: string, pontos?: Ponto[] }[]
  /** Quais marcas do eixo X rotular. Sem isto, o eixo sai sem marcas. */
  rotulosX?: { valor: number, texto: string }[]
  /** Quais marcas do eixo Y rotular. Sem isto, o d3 escolhe quatro. */
  rotulosY?: number[]
  escalaX?: 'linear' | 'log'
  minY?: number
  maxY?: number
  /** Vai colado ao número do eixo Y: '%', ' s', ' ms'. */
  sufixoY?: string
  tituloX?: string
  tituloY?: string
  /** Para leitor de tela: o que o gráfico mostra, em uma frase. */
  descricao?: string
}>(), {
  series: () => [],
  rotulosX: () => [],
  rotulosY: () => [],
  escalaX: 'linear',
  minY: 0,
  sufixoY: '',
})

// O quadro é fixo: o SVG escala junto com o slide pelo viewBox. A margem da
// direita é a que abriga o nome das séries no fim de cada linha.
const W = 760
const H = 328
const M = { topo: 14, direita: 158, baixo: 44, esquerda: 60 }
const x0 = M.esquerda
const x1 = W - M.direita
const y0 = M.topo
const y1 = H - M.baixo

const pontos = computed(() => props.series.flatMap(s => s.pontos ?? []))

const sx = computed(() => {
  const xs = pontos.value.map(p => p[0])
  const dominio: [number, number] = [Math.min(...xs), Math.max(...xs)]
  const escala = props.escalaX === 'log' ? scaleLog() : scaleLinear()
  return escala.domain(dominio).range([x0, x1])
})

const sy = computed(() => {
  const ys = pontos.value.map(p => p[1])
  const teto = props.maxY ?? Math.max(...ys)
  return scaleLinear().domain([props.minY, teto]).range([y1, y0])
})

const marcasY = computed(() =>
  props.rotulosY.length ? props.rotulosY : sy.value.ticks(4),
)

const traco = computed(() =>
  line<Ponto>().x(p => sx.value(p[0])).y(p => sy.value(p[1])),
)

const linhas = computed(() => props.series.map((s, i) => {
  const pts = s.pontos ?? []
  const ultimo = pts[pts.length - 1]
  return {
    i,
    nome: s.nome,
    d: traco.value(pts) ?? '',
    pts,
    fim: ultimo ? { x: sx.value(ultimo[0]), y: sy.value(ultimo[1]) } : null,
  }
}))
</script>

<template>
  <figure class="ds-grafico">
    <svg :viewBox="`0 0 ${W} ${H}`" role="img" preserveAspectRatio="xMidYMid meet">
      <title v-if="descricao">{{ descricao }}</title>

      <!-- grade e marcas do eixo Y -->
      <g class="grade">
        <line v-for="m in marcasY" :key="`g${m}`" :x1="x0" :x2="x1" :y1="sy(m)" :y2="sy(m)" />
      </g>
      <g class="rotulo-y">
        <text v-for="m in marcasY" :key="`y${m}`" :x="x0 - 12" :y="sy(m) + 5">{{ m }}{{ sufixoY }}</text>
      </g>

      <!-- eixos -->
      <line class="eixo" :x1="x0" :x2="x1" :y1="y1" :y2="y1" />
      <line class="eixo" :x1="x0" :x2="x0" :y1="y0" :y2="y1" />

      <!-- marcas do eixo X -->
      <g class="rotulo-x">
        <template v-for="m in rotulosX" :key="`x${m.valor}`">
          <line class="tique" :x1="sx(m.valor)" :x2="sx(m.valor)" :y1="y1" :y2="y1 + 6" />
          <text :x="sx(m.valor)" :y="y1 + 26">{{ m.texto }}</text>
        </template>
      </g>

      <!-- séries -->
      <g v-for="l in linhas" :key="`s${l.i}`" :class="`serie s-${l.i}`">
        <path :d="l.d" />
        <circle v-for="(p, j) in l.pts" :key="j" :cx="sx(p[0])" :cy="sy(p[1])" r="4.5" />
        <text v-if="l.fim && l.nome" class="nome" :x="l.fim.x + 12" :y="l.fim.y + 5">{{ l.nome }}</text>
      </g>

      <!-- títulos dos eixos -->
      <text v-if="tituloX" class="titulo-eixo" :x="(x0 + x1) / 2" :y="H - 6" text-anchor="middle">{{ tituloX }}</text>
      <text
        v-if="tituloY" class="titulo-eixo" text-anchor="middle"
        :transform="`translate(16 ${(y0 + y1) / 2}) rotate(-90)`">{{ tituloY }}</text>
    </svg>
  </figure>
</template>

<style scoped>
.ds-grafico {
  margin: var(--ds-space-4) 0 0;
}

svg {
  display: block;
  width: 100%;
  height: auto;
  font-family: var(--ds-font-sans);
}

.grade line {
  stroke: var(--ds-rule);
  stroke-width: 1;
}

.eixo {
  stroke: var(--ds-muted);
  stroke-width: 1.5;
}

.tique {
  stroke: var(--ds-muted);
  stroke-width: 1.5;
}

.rotulo-y text,
.rotulo-x text {
  fill: var(--ds-muted);
  font-size: 15px;
  font-variant-numeric: tabular-nums;
}

.rotulo-y text {
  text-anchor: end;
}

.rotulo-x text {
  text-anchor: middle;
}

.titulo-eixo {
  fill: var(--ds-muted);
  font-size: 15px;
}

/* A linha e os pontos de uma série andam sempre juntos: uma cor por `fill` e
   `stroke` no grupo evita repetir o token em cada elemento. */
.serie path {
  fill: none;
  stroke: currentColor;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.serie circle {
  fill: currentColor;
}

.serie .nome {
  fill: currentColor;
  font-size: 15px;
  font-weight: 650;
}

/* Índigo, terracota, cinza — a mesma ordem de leitura do resto do sistema. */
.s-0 { color: var(--ds-accent); }
.s-1 { color: var(--ds-accent-2); }
.s-2 { color: var(--ds-muted); }

/* A segunda série sai tracejada além de colorida: quem projeta com o contraste
   lavado ainda separa as duas. */
.s-1 path {
  stroke-dasharray: 9 6;
}
</style>
