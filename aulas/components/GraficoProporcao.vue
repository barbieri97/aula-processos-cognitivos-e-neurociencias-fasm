<!--
  <GraficoProporcao> — como um todo se divide, grupo a grupo.

  <GraficoProporcao
    :partes="['hemisfério esquerdo', 'hemisfério direito']"
    :grupos="[
      { nome: 'destros fortes', valores: [96, 4] },
      { nome: 'canhotos fortes', valores: [73, 27] },
    ]" />

  Para DADOS em que o que importa é a fatia de cada parte num total de 100%, e
  não como uma medida sobe ou desce (isso é <GraficoLinhas>). Cada grupo é uma
  barra que ocupa a largura toda; a barra mostra a maioria de relance, sem que a
  turma precise ler número nenhum.

  Os `valores` de um grupo seguem a ordem de `partes` e somam 100. As cores
  saem dos tokens: a primeira parte em índigo, a segunda em terracota, a
  terceira em cinza. Três partes é o teto.

  O nome de cada parte aparece em cima da primeira barra, alinhado à própria
  fatia, e não numa legenda à parte. O número vai dentro da fatia; fatia
  estreita demais para ele joga o número para fora, à direita da barra.
-->
<script setup lang="ts">
import { computed } from 'vue'
import { scaleLinear } from 'd3-scale'

const props = withDefaults(defineProps<{
  partes?: string[]
  grupos?: { nome: string, valores: number[] }[]
  /** Vai colado ao número de cada fatia. */
  sufixo?: string
  /** Para leitor de tela: o que o gráfico mostra, em uma frase. */
  descricao?: string
}>(), {
  partes: () => [],
  grupos: () => [],
  sufixo: '%',
})

// O quadro tem largura fixa e altura que cresce com o número de grupos: o SVG
// escala junto com o slide pelo viewBox. A margem da direita abriga o número
// da fatia estreita.
const W = 760
const M = { topo: 34, direita: 56, esquerda: 170 }
const BARRA = 54
const VAO = 26
const x0 = M.esquerda
const x1 = W - M.direita
// Abaixo desta largura, o número não cabe dentro da fatia.
const MINIMO = 56

const H = computed(() => M.topo + props.grupos.length * (BARRA + VAO) - VAO + 4)

const sx = computed(() => scaleLinear().domain([0, 100]).range([x0, x1]))

const barras = computed(() => props.grupos.map((g, i) => {
  const y = M.topo + i * (BARRA + VAO)
  let acumulado = 0
  const fatias = g.valores.map((v, j) => {
    const inicio = sx.value(acumulado)
    acumulado += v
    const fim = sx.value(acumulado)
    const largura = fim - inicio
    const cabe = largura >= MINIMO
    return {
      j,
      v,
      x: inicio,
      largura,
      cabe,
      rotuloX: cabe ? (inicio + fim) / 2 : x1 + 8,
    }
  })
  return { i, nome: g.nome, y, fatias }
}))

// O nome de cada parte fica sobre a primeira barra: a primeira parte alinhada
// à esquerda, a última à direita, a do meio centrada na própria fatia.
const nomes = computed(() => {
  const primeira = barras.value[0]
  if (!primeira) return []
  const ultima = props.partes.length - 1
  return props.partes.map((p, j) => {
    const f = primeira.fatias[j]
    if (!f) return null
    if (j === 0) return { j, texto: p, x: f.x, ancora: 'start' }
    if (j === ultima) return { j, texto: p, x: x1, ancora: 'end' }
    return { j, texto: p, x: f.x + f.largura / 2, ancora: 'middle' }
  }).filter(n => n !== null)
})
</script>

<template>
  <figure class="ds-proporcao">
    <svg :viewBox="`0 0 ${W} ${H}`" role="img" preserveAspectRatio="xMidYMid meet">
      <title v-if="descricao">{{ descricao }}</title>

      <!-- nome de cada parte, sobre a primeira barra -->
      <text
        v-for="n in nomes" :key="`p${n.j}`" :class="`parte p-${n.j}`"
        :x="n.x" :y="M.topo - 12" :text-anchor="n.ancora">{{ n.texto }}</text>

      <g v-for="b in barras" :key="`g${b.i}`">
        <text class="grupo" :x="x0 - 16" :y="b.y + BARRA / 2 + 6">{{ b.nome }}</text>
        <template v-for="f in b.fatias" :key="`f${f.j}`">
          <rect :class="`fatia p-${f.j}`" :x="f.x" :y="b.y" :width="f.largura" :height="BARRA" />
          <text
            :class="['valor', `p-${f.j}`, { fora: !f.cabe }]"
            :x="f.rotuloX" :y="b.y + BARRA / 2 + 7"
            :text-anchor="f.cabe ? 'middle' : 'start'">{{ f.v }}{{ sufixo }}</text>
        </template>
      </g>
    </svg>
  </figure>
</template>

<style scoped>
.ds-proporcao {
  margin: var(--ds-space-4) 0 0;
}

svg {
  display: block;
  width: 100%;
  height: auto;
  font-family: var(--ds-font-sans);
}

.grupo {
  fill: var(--ds-ink);
  font-size: 17px;
  text-anchor: end;
}

.parte {
  fill: currentColor;
  font-size: 15px;
  font-weight: 650;
}

/* Uma fina borda na cor do fundo separa as fatias vizinhas. */
.fatia {
  fill: currentColor;
  stroke: var(--ds-bg);
  stroke-width: 2;
}

/* Dentro da fatia, o número sai na cor do fundo: claro sobre o índigo escuro
   do tema claro, escuro sobre o índigo claro do tema escuro. */
.valor {
  fill: var(--ds-bg);
  font-size: 19px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.valor.fora {
  fill: currentColor;
}

/* Índigo, terracota, cinza — a mesma ordem de leitura do resto do sistema. */
.p-0 { color: var(--ds-accent); }
.p-1 { color: var(--ds-accent-2); }
.p-2 { color: var(--ds-muted); }
</style>
