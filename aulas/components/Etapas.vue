<!--
  <Etapas> — um processo em caixas encadeadas, com seta entre elas.

  <Etapas :itens="[
    { titulo: 'Estímulo', desc: 'a luz chega à retina' },
    { titulo: 'Transdução', desc: 'vira sinal elétrico' },
    { titulo: 'Percepção', desc: 'o córtex interpreta' },
  ]" />

  Diferente da `<LinhaDoTempo>`, que é vertical e datada, esta lê da esquerda
  para a direita e serve ao que tem ORDEM CAUSAL: uma etapa causa a seguinte.
  Sinapse, arco reflexo, modelo de memória, funil da atenção.

  Três ou quatro etapas. Com cinco as caixas ficam estreitas demais para caber
  o texto; se o processo tem mais, quebre em dois slides — que é também como a
  turma vai conseguir guardar.

  `titulo` e `desc` aceitam HTML.
-->
<script setup lang="ts">
defineProps<{
  itens?: { titulo?: string, desc?: string }[]
}>()
</script>

<template>
  <ol class="ds-etapas">
    <li v-for="(item, i) in itens" :key="i">
      <div class="caixa">
        <span class="ordem">{{ i + 1 }}</span>
        <span class="titulo" v-html="item.titulo" />
        <span v-if="item.desc" class="desc" v-html="item.desc" />
      </div>
      <span v-if="i < (itens?.length ?? 0) - 1" class="seta" aria-hidden="true">→</span>
    </li>
  </ol>
</template>

<style scoped>
/* Flex e não grid: as setas são irmãs das caixas e precisam de largura própria,
   enquanto as caixas dividem o resto por igual (`flex: 1` na .caixa). */
.ds-etapas {
  display: flex;
  align-items: stretch;
  gap: var(--ds-space-2);
  margin: var(--ds-space-5) 0;
  padding: 0;
  list-style: none;
}

.ds-etapas li {
  display: flex;
  align-items: center;
  gap: var(--ds-space-2);
  flex: 1;
  margin: 0;
  padding: 0;
  min-width: 0;
}

.caixa {
  display: flex;
  flex-direction: column;
  gap: var(--ds-space-1);
  flex: 1;
  align-self: stretch;
  min-width: 0;
  padding: var(--ds-space-4);
  border: var(--ds-border) solid var(--ds-rule);
  border-top: var(--ds-border-thick) solid var(--ds-accent);
  border-radius: 0 0 var(--ds-radius) var(--ds-radius);
  background: var(--ds-surface);
}

.ordem {
  color: var(--ds-accent);
  font-size: var(--ds-text-xs);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.titulo {
  font-size: var(--ds-text-lg);
  font-weight: 650;
  line-height: var(--ds-leading-tight);
}

.desc {
  color: var(--ds-muted);
  font-size: var(--ds-text-sm);
  line-height: var(--ds-leading-normal);
}

.seta {
  flex: none;
  color: var(--ds-accent);
  font-size: var(--ds-text-xl);
  line-height: 1;
}
</style>
