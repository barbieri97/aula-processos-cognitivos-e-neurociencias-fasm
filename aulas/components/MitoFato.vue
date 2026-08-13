<!--
  <MitoFato> — o neuromito e o que a evidência de fato diz.

  <MitoFato mito="Usamos só 10% do cérebro" fato="Praticamente todo o cérebro tem atividade mensurável ao longo de um dia">

  Estudos de neuroimagem não encontram regiões silenciosas; lesões em qualquer
  área produzem algum déficit.

  </MitoFato>

  Neuromito é o que a turma de 1º semestre traz de casa, e desmentir sem
  nomear o que ele é não cola. Por isso os dois blocos aparecem juntos: o
  errado riscado em cima, o certo embaixo. O slot é a explicação — de onde veio
  o mito, ou que evidência o derruba.

  `mito` e `fato` aceitam HTML.
-->
<script setup lang="ts">
defineProps<{
  mito?: string
  fato?: string
}>()
</script>

<template>
  <section class="ds-mitofato">
    <div class="bloco mito">
      <span class="rotulo">Mito</span>
      <p class="frase" v-html="mito" />
    </div>

    <div class="bloco fato">
      <span class="rotulo">O que a evidência diz</span>
      <p class="frase" v-html="fato" />
    </div>

    <div class="corpo"><slot /></div>
  </section>
</template>

<style scoped>
.ds-mitofato {
  display: grid;
  gap: var(--ds-space-3);
  margin: var(--ds-space-5) 0;
}

.bloco {
  padding: var(--ds-space-4) var(--ds-space-5);
  border-left: var(--ds-border-thick) solid var(--cor);
  border-radius: 0 var(--ds-radius) var(--ds-radius) 0;
  background: var(--fundo);
}

.mito {
  --cor: var(--ds-danger);
  --fundo: var(--ds-danger-wash);
}

.fato {
  --cor: var(--ds-ok);
  --fundo: var(--ds-ok-wash);
}

.rotulo {
  display: block;
  margin-bottom: var(--ds-space-1);
  color: var(--cor);
  font-size: var(--ds-text-xs);
  font-weight: 700;
  letter-spacing: var(--ds-tracking-kicker);
  text-transform: uppercase;
}

.frase {
  margin: 0;
  max-width: none;
  font-size: var(--ds-text-lg);
  font-weight: 600;
  line-height: var(--ds-leading-normal);
}

/* A frase do mito sai riscada: a turma vê que é falsa antes de terminar de ler.
   `text-decoration-color` no danger, e não em currentColor, para o risco não
   sumir contra o texto. */
.mito .frase {
  color: var(--ds-muted);
  text-decoration: line-through;
  text-decoration-color: var(--ds-danger);
  text-decoration-thickness: 2px;
}

.corpo:not(:empty) {
  font-size: var(--ds-text-sm);
  line-height: var(--ds-leading-normal);
}

.corpo :deep(> :first-child) {
  margin-top: 0;
}

.corpo :deep(> :last-child) {
  margin-bottom: 0;
}
</style>
