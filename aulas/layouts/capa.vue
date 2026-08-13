<!--
  capa — o primeiro slide de uma aula.

  ---
  layout: capa
  kicker: Unidade 1 · Aula 02
  subtitle: A pergunta que a aula responde.
  meta: 12 de março · Psicologia · 1º semestre
  ---

  `title` costuma vir do headmatter (no primeiro slide o bloco é headmatter e
  frontmatter ao mesmo tempo) — não repita o campo.
  `kicker`, `subtitle` e `meta` aceitam HTML.

  O fundo traz a malha de nós — o motivo visual do curso, um retículo de pontos
  ligados. Ele é desenhado em CSS (nenhuma imagem), aparece também na `secao` e
  é a única decoração do design system.
-->
<script setup lang="ts">
// `title` é campo reservado do Slidev: ele o usa para o índice e NÃO o repassa como prop.
// O jeito de lê-lo é pelo objeto `frontmatter`, que chega inteiro em todo layout.
// Ver docs/design-system.md → "Os campos que o Slidev não entrega".
const props = defineProps<{
  kicker?: string
  subtitle?: string
  meta?: string
  frontmatter?: Record<string, any>
}>()

const title = props.frontmatter?.title
</script>

<template>
  <div class="slidev-layout ds-capa">
    <div class="malha" aria-hidden="true" />

    <div class="conteudo">
      <p v-if="kicker" class="ds-kicker" v-html="kicker" />
      <h1 v-if="title" v-html="title" />
      <div class="ds-rule" />
      <p v-if="subtitle" class="ds-lead" v-html="subtitle" />
      <div class="corpo"><slot /></div>
    </div>

    <p v-if="meta" class="meta ds-small" v-html="meta" />
  </div>
</template>

<style scoped>
.ds-capa {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  overflow: hidden;
}

/* A malha de nós: dois retículos de pontos em índigo, um sobre o outro e
   ligeiramente fora de fase, esmaecidos para a direita. Fica atrás de tudo e
   nunca compete com o texto — é textura, não ilustração. */
.malha {
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image:
    radial-gradient(var(--ds-accent) 1.6px, transparent 1.6px),
    radial-gradient(var(--ds-accent-2) 1.2px, transparent 1.2px);
  background-size: 34px 34px, 34px 34px;
  background-position: 0 0, 17px 17px;
  opacity: 0.16;
  -webkit-mask-image: linear-gradient(105deg, transparent 38%, #000 100%);
  mask-image: linear-gradient(105deg, transparent 38%, #000 100%);
  pointer-events: none;
}

.conteudo {
  position: relative;
  z-index: 1;
  max-width: 82%;
}

/* O título da capa é o maior tipo do deck — é o único lugar que usa o 3xl. */
.ds-capa :deep(h1) {
  margin: 0;
  font-size: var(--ds-text-3xl);
}

.corpo:not(:empty) {
  margin-top: var(--ds-space-5);
}

.meta {
  position: absolute;
  z-index: 1;
  bottom: var(--ds-space-6);
  left: var(--ds-pad-x);
  right: var(--ds-pad-x);
  margin: 0;
  padding-top: var(--ds-space-3);
  border-top: var(--ds-border) solid var(--ds-rule);
}
</style>
