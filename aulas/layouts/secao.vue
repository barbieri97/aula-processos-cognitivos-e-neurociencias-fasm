<!--
  secao — divisor: avisa que a aula virou de assunto.

  ---
  layout: secao
  numero: "02"
  title: Como a memória de trabalho segura a informação
  kicker: Parte 2
  note: O que acontece nos segundos entre ouvir um número e anotá-lo.
  ---

  `title`, `kicker` e `note` aceitam HTML. Sem `numero`, o bloco grande some.

  Em aula, este slide é a deixa para respirar: ele existe para a turma saber
  que o assunto anterior fechou. Use um a cada 8–12 slides.
-->
<script setup lang="ts">
// `title` chega pelo objeto `frontmatter`, não como prop — ver o comentário em capa.vue.
const props = defineProps<{
  numero?: string | number
  kicker?: string
  note?: string
  frontmatter?: Record<string, any>
}>()

const title = props.frontmatter?.title
</script>

<template>
  <div class="slidev-layout ds-secao">
    <div class="malha" aria-hidden="true" />

    <div v-if="numero !== undefined" class="marca">
      <span class="numero">{{ numero }}</span>
    </div>

    <div class="texto">
      <p v-if="kicker" class="ds-kicker" v-html="kicker" />
      <h1 v-if="title" v-html="title" />
      <div class="ds-rule" />
      <p v-if="note" class="ds-lead" v-html="note" />
      <slot />
    </div>
  </div>
</template>

<style scoped>
.ds-secao {
  display: flex;
  align-items: center;
  gap: var(--ds-space-7);
  height: 100%;
  overflow: hidden;
  background: var(--ds-accent-wash);
}

/* Mesma malha da capa, aqui centrada atrás do número. */
.malha {
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image: radial-gradient(var(--ds-accent) 1.6px, transparent 1.6px);
  background-size: 34px 34px;
  opacity: 0.18;
  -webkit-mask-image: radial-gradient(circle at 14% 50%, #000 0%, transparent 46%);
  mask-image: radial-gradient(circle at 14% 50%, #000 0%, transparent 46%);
  pointer-events: none;
}

.marca {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  flex: none;
  width: 11rem;
  height: 11rem;
  border: var(--ds-border-thick) solid var(--ds-accent);
  border-radius: 50%;
  background: var(--ds-bg);
}

/* Número grande, mas dentro do disco: ele localiza a aula, não grita. */
.numero {
  color: var(--ds-accent);
  font-size: 4.6rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.04em;
  font-variant-numeric: tabular-nums;
}

.texto {
  position: relative;
  z-index: 1;
  flex: 1;
  min-width: 0;
}

.texto :deep(h1) {
  margin-bottom: 0;
  font-size: var(--ds-text-2xl);
}
</style>
