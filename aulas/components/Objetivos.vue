<!--
  <Objetivos> — o contrato da aula: o que a turma vai saber fazer no fim dela.

  <Objetivos :itens="[
    'Distinguir sensação de percepção',
    'Explicar o que a cegueira por desatenção demonstra',
    'Reconhecer um neuromito em texto de divulgação',
  ]" />

  Vai no segundo ou terceiro slide, logo depois da capa, e volta no `fecho`
  como checagem. Escreva cada item com verbo de ação no infinitivo
  ("distinguir", "explicar", "aplicar") — objetivo que começa com "entender"
  não dá para verificar, e é justamente o que a turma usa para estudar.

  `titulo` e cada item aceitam HTML.
-->
<script setup lang="ts">
withDefaults(defineProps<{
  titulo?: string
  itens?: string[]
}>(), { titulo: 'Ao final desta aula, você deve conseguir' })
</script>

<template>
  <section class="ds-objetivos">
    <p class="titulo" v-html="titulo" />
    <ul>
      <li v-for="(item, i) in itens" :key="i">
        <span class="marca" aria-hidden="true" />
        <span v-html="item" />
      </li>
    </ul>
    <div class="corpo"><slot /></div>
  </section>
</template>

<style scoped>
.ds-objetivos {
  margin: var(--ds-space-5) 0;
  padding: var(--ds-space-5) var(--ds-space-6);
  border: var(--ds-border) solid var(--ds-rule);
  border-left: 6px solid var(--ds-accent);
  border-radius: 0 var(--ds-radius) var(--ds-radius) 0;
  background: var(--ds-surface);
}

.titulo {
  margin: 0 0 var(--ds-space-4);
  max-width: none;
  color: var(--ds-accent);
  font-size: var(--ds-text-xs);
  font-weight: 700;
  letter-spacing: var(--ds-tracking-kicker);
  text-transform: uppercase;
}

.ds-objetivos ul {
  display: grid;
  gap: var(--ds-space-3);
  margin: 0;
  padding: 0;
  list-style: none;
}

.ds-objetivos li {
  display: flex;
  align-items: baseline;
  gap: var(--ds-space-3);
  margin: 0;
  padding: 0;
  font-size: var(--ds-text-lg);
  line-height: var(--ds-leading-normal);
}

/* base.css põe um ponto de índigo em TODO `li` de `ul` dentro de um slide — e
   ele apareceria junto com o quadradinho daqui. Quem desenha o próprio
   marcador precisa desligar o global assim. */
.ds-objetivos li::before {
  content: none;
}

/* Quadradinho vazio de checklist: a turma marca mentalmente o que já sabe
   fazer quando o slide volta no fim da aula. */
.marca {
  flex: none;
  align-self: flex-start;
  width: 0.95rem;
  height: 0.95rem;
  margin-top: 0.42em;
  border: 2px solid var(--ds-accent);
  border-radius: var(--ds-radius-sm);
}

.corpo:not(:empty) {
  margin-top: var(--ds-space-4);
  color: var(--ds-muted);
  font-size: var(--ds-text-sm);
}
</style>
