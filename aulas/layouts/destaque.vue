<!--
  destaque — uma frase sozinha na tela. A pergunta que abre a discussão, a tese
  da aula, o número que impressiona.

  ---
  layout: destaque
  tipo: pergunta          # pergunta (padrão) | tese | dado
  kicker: Para começar
  title: Onde é que a memória <span class="ds-em">fica</span>?
  fonte: Squire &amp; Kandel, <em>Memória</em>, 2009
  ---

  `title` e `fonte` aceitam HTML. Um slide, uma frase — se precisar de mais de
  duas linhas, o layout errado é este.

  O título sai em serifa, e é o único lugar do design system que usa serifa em
  tamanho grande: é o slide em que a turma para de copiar e olha para a tela.

  `tipo` só troca a cor do fio e do kicker — índigo quando é conceito
  (`pergunta`, `tese`), terracota quando é evidência (`dado`).
-->
<script setup lang="ts">
// `title` chega pelo objeto `frontmatter`, não como prop — ver o comentário em capa.vue.
const props = withDefaults(defineProps<{
  kicker?: string
  fonte?: string
  tipo?: 'pergunta' | 'tese' | 'dado'
  frontmatter?: Record<string, any>
}>(), { tipo: 'pergunta' })

const title = props.frontmatter?.title
</script>

<template>
  <div class="slidev-layout ds-destaque" :class="tipo">
    <p v-if="kicker" class="ds-kicker" v-html="kicker" />
    <h1 v-if="title" v-html="title" />
    <div class="fio" />
    <div class="corpo"><slot /></div>
    <p v-if="fonte" class="ds-small fonte" v-html="fonte" />
  </div>
</template>

<style scoped>
/* `--cor` é o único ponto de variação entre os três tipos. */
.ds-destaque {
  --cor: var(--ds-accent);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
}

.ds-destaque.dado {
  --cor: var(--ds-accent-2);
}

.ds-destaque :deep(.ds-kicker) {
  color: var(--cor);
}

.ds-destaque :deep(h1) {
  max-width: 20ch;
  margin: 0;
  font-family: var(--ds-font-serif);
  font-size: var(--ds-text-3xl);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.015em;
}

/* Um fio curto embaixo da frase: fecha o slide sem precisar de moldura. */
.fio {
  width: 3.5rem;
  height: 3px;
  margin-top: var(--ds-space-6);
  border-radius: 3px;
  background: var(--cor);
}

.corpo:not(:empty) {
  margin-top: var(--ds-space-5);
  max-width: 48ch;
}

.fonte {
  margin: var(--ds-space-6) 0 0;
}
</style>
