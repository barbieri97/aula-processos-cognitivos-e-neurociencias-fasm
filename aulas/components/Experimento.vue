<!--
  <Experimento> — o estudo clássico em três linhas: o que perguntaram, o que
  fizeram, o que encontraram.

  <Experimento
    nome="Efeito Stroop"
    autoria="Stroop, 1935"
    pergunta="Ler uma palavra atrapalha nomear a cor em que ela está escrita?"
    metodo="Nomear a cor da tinta de palavras que são nomes de outras cores"
    achado="A resposta demora mais quando palavra e cor divergem: a leitura é automática e não se desliga">
  </Experimento>

  A ordem é a do método científico, e é sempre a mesma — depois de dois ou três
  slides destes a turma já sabe onde procurar cada coisa. O slot é para a
  ressalva ("amostra pequena", "não replicou em crianças").

  Todos os campos aceitam HTML. Terracota, porque aqui é evidência, não conceito.
-->
<script setup lang="ts">
defineProps<{
  nome?: string
  autoria?: string
  pergunta?: string
  metodo?: string
  achado?: string
}>()
</script>

<template>
  <section class="ds-experimento">
    <header class="cabeca">
      <span class="nome" v-html="nome" />
      <span v-if="autoria" class="autoria" v-html="autoria" />
    </header>

    <dl class="linhas">
      <template v-if="pergunta">
        <dt>Perguntaram</dt>
        <dd v-html="pergunta" />
      </template>
      <template v-if="metodo">
        <dt>Fizeram</dt>
        <dd v-html="metodo" />
      </template>
      <template v-if="achado">
        <dt>Acharam</dt>
        <dd class="achado" v-html="achado" />
      </template>
    </dl>

    <div class="corpo"><slot /></div>
  </section>
</template>

<style scoped>
.ds-experimento {
  margin: var(--ds-space-5) 0;
  padding: var(--ds-space-4) var(--ds-space-5);
  border: var(--ds-border) solid var(--ds-rule);
  border-top: var(--ds-border-thick) solid var(--ds-accent-2);
  border-radius: 0 0 var(--ds-radius) var(--ds-radius);
  background: var(--ds-surface);
}

.cabeca {
  display: flex;
  align-items: baseline;
  gap: var(--ds-space-3);
  flex-wrap: wrap;
  margin-bottom: var(--ds-space-4);
}

.nome {
  font-size: var(--ds-text-xl);
  font-weight: 650;
  line-height: var(--ds-leading-tight);
}

.autoria {
  color: var(--ds-accent-2);
  font-family: var(--ds-font-serif);
  font-size: var(--ds-text-base);
  font-style: italic;
}

/* Grade de duas colunas: os rótulos alinhados à esquerda viram uma coluna de
   leitura só deles, e a turma consegue comparar dois experimentos de relance. */
.linhas {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: var(--ds-space-2) var(--ds-space-5);
  margin: 0;
}

dt {
  color: var(--ds-muted);
  font-size: var(--ds-text-xs);
  font-weight: 700;
  letter-spacing: var(--ds-tracking-kicker);
  line-height: var(--ds-leading-loose);
  text-transform: uppercase;
}

dd {
  margin: 0;
  line-height: var(--ds-leading-normal);
}

/* O achado é a única linha que fica em destaque: é o que precisa sobrar. */
.achado {
  color: var(--ds-ink);
  font-weight: 600;
}

.corpo:not(:empty) {
  margin-top: var(--ds-space-4);
  padding-top: var(--ds-space-3);
  border-top: var(--ds-border) solid var(--ds-rule);
  color: var(--ds-muted);
  font-size: var(--ds-text-sm);
}

.corpo :deep(> :first-child) {
  margin-top: 0;
}

.corpo :deep(> :last-child) {
  margin-bottom: 0;
}
</style>
