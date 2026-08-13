<!--
  <Termo> — a definição formal de uma palavra. O bloco que a turma copia.

  <Termo palavra="Memória de trabalho" ingles="working memory" origem="Baddeley &amp; Hitch, 1974">

  Sistema de capacidade limitada que mantém e manipula informação durante
  poucos segundos, enquanto uma tarefa está em curso.

  </Termo>

  `ingles` existe porque quase toda a bibliografia da área está em inglês: ver o
  termo nas duas línguas desde o 1º semestre é o que permite procurar sozinho
  depois. `origem` é a etimologia ou a autoria — o que ajudar a lembrar.

  Um termo por slide. Se a aula define quatro palavras de uma vez, nenhuma
  delas é copiada.
-->
<script setup lang="ts">
defineProps<{
  palavra?: string
  ingles?: string
  origem?: string
}>()
</script>

<template>
  <dl class="ds-termo">
    <dt>
      {{ palavra }}
      <span v-if="ingles" class="ingles">{{ ingles }}</span>
    </dt>
    <dd><slot /></dd>
    <dd v-if="origem" class="origem">{{ origem }}</dd>
  </dl>
</template>

<style scoped>
.ds-termo {
  margin: var(--ds-space-5) 0;
  padding: var(--ds-space-4) var(--ds-space-5);
  border: var(--ds-border) solid var(--ds-rule);
  border-top: var(--ds-border-thick) solid var(--ds-accent);
  border-radius: 0 0 var(--ds-radius) var(--ds-radius);
  background: var(--ds-surface);
}

dt {
  display: flex;
  align-items: baseline;
  gap: var(--ds-space-3);
  flex-wrap: wrap;
  font-size: var(--ds-text-xl);
  font-weight: 650;
  line-height: var(--ds-leading-tight);
}

/* O termo em inglês vem em mono, e não em itálico: é uma etiqueta de busca,
   não uma variação de ênfase. */
.ingles {
  padding: 0.1em 0.5em;
  border-radius: var(--ds-radius-sm);
  background: var(--ds-accent-wash);
  color: var(--ds-accent);
  font-family: var(--ds-font-mono);
  font-size: var(--ds-text-sm);
  font-weight: 500;
}

dd {
  margin: var(--ds-space-3) 0 0;
  line-height: var(--ds-leading-loose);
}

.origem {
  margin-top: var(--ds-space-2);
  color: var(--ds-muted);
  font-family: var(--ds-font-serif);
  font-size: var(--ds-text-sm);
  font-style: italic;
}

dd :deep(> :first-child) {
  margin-top: 0;
}

dd :deep(> :last-child) {
  margin-bottom: 0;
}
</style>
