<!--
  <Caso> — a vinheta: uma situação concreta antes da teoria que a explica.

  <Caso titulo="H.M." contexto="1953, Hartford" pergunta="O que ele ainda conseguia aprender?">

  Depois da cirurgia, Henry Molaison conversava normalmente, mas não guardava
  nada de novo por mais de alguns minutos.

  </Caso>

  Turma de 1º semestre entra na teoria pela porta do caso, não pelo modelo.
  Use um caso antes do conceito, não depois: a `pergunta` fica no pé e é o que
  a turma responde depois que o conceito chega.

  O corpo sai em serifa — é texto para ler, não tópico para copiar. Por isso
  também: no máximo umas quatro linhas.
-->
<script setup lang="ts">
withDefaults(defineProps<{
  titulo?: string
  contexto?: string
  pergunta?: string
  rotulo?: string
}>(), { rotulo: 'Caso' })
</script>

<template>
  <figure class="ds-caso">
    <figcaption class="cabeca">
      <span class="rotulo">{{ rotulo }}</span>
      <span v-if="titulo" class="titulo">{{ titulo }}</span>
      <span v-if="contexto" class="contexto">{{ contexto }}</span>
    </figcaption>

    <div class="corpo"><slot /></div>

    <p v-if="pergunta" class="pergunta" v-html="pergunta" />
  </figure>
</template>

<style scoped>
.ds-caso {
  margin: var(--ds-space-5) 0;
  padding: var(--ds-space-5) var(--ds-space-6);
  border: var(--ds-border) solid var(--ds-rule);
  border-radius: var(--ds-radius-lg);
  background: var(--ds-surface);
  box-shadow: var(--ds-shadow);
}

.cabeca {
  display: flex;
  align-items: baseline;
  gap: var(--ds-space-3);
  flex-wrap: wrap;
  margin-bottom: var(--ds-space-3);
}

.rotulo {
  padding: 0.15em 0.6em;
  border-radius: 999px;
  background: var(--ds-accent-wash);
  color: var(--ds-accent);
  font-size: var(--ds-text-xs);
  font-weight: 700;
  letter-spacing: var(--ds-tracking-kicker);
  text-transform: uppercase;
}

.titulo {
  font-size: var(--ds-text-lg);
  font-weight: 650;
}

.contexto {
  color: var(--ds-muted);
  font-size: var(--ds-text-sm);
}

/* Serifa: sinaliza "isto é narrativa, leia como se lê um livro". */
.corpo {
  font-family: var(--ds-font-serif);
  font-size: var(--ds-text-lg);
  line-height: var(--ds-leading-normal);
}

.corpo :deep(> :first-child) {
  margin-top: 0;
}

.corpo :deep(> :last-child) {
  margin-bottom: 0;
}

.corpo :deep(p) {
  max-width: none;
}

/* A pergunta é o que fica pendurado: mesma cor do conceito que virá. */
.pergunta {
  margin: var(--ds-space-4) 0 0;
  padding-top: var(--ds-space-3);
  border-top: var(--ds-border) solid var(--ds-rule);
  max-width: none;
  color: var(--ds-accent);
  font-weight: 650;
  line-height: var(--ds-leading-normal);
}
</style>
