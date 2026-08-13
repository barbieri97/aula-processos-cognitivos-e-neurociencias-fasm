<!--
  <Checagem> — a pergunta de verificação no meio da aula, com as alternativas
  na tela e a resposta escondida até você clicar.

  <Checagem
    pergunta="A cegueira por desatenção mostra que…"
    :alternativas="[
      'o olho não captou o objeto',
      'o objeto foi captado, mas não atendido',
      'a memória apagou o objeto depois',
    ]">

  <div v-click>

  **b.** Os olhos fixaram o objeto — o que faltou foi atenção, não sensação.

  </div>

  </Checagem>

  As alternativas ganham letra (a, b, c) sozinhas. O `v-click` fica no MARKDOWN,
  em volta da resposta, e não dentro do componente: assim você controla quando
  ela aparece, e o slide funciona igual se você preferir mostrar de uma vez.

  Vale mais no meio da aula do que no fim: a pergunta que interrompe é a que
  faz a turma perceber que perdeu o fio — enquanto ainda dá para retomar.
-->
<script setup lang="ts">
defineProps<{
  pergunta?: string
  alternativas?: string[]
  rotulo?: string
}>()

const letras = 'abcdefgh'
</script>

<template>
  <section class="ds-checagem">
    <p class="rotulo">{{ rotulo || 'Checando' }}</p>
    <p class="pergunta" v-html="pergunta" />

    <ol v-if="alternativas?.length" class="alternativas">
      <li v-for="(alt, i) in alternativas" :key="i">
        <span class="letra">{{ letras[i] }}</span>
        <span v-html="alt" />
      </li>
    </ol>

    <div class="resposta"><slot /></div>
  </section>
</template>

<style scoped>
.ds-checagem {
  margin: var(--ds-space-5) 0;
  padding: var(--ds-space-5) var(--ds-space-6);
  border: var(--ds-border-thick) solid var(--ds-accent);
  border-radius: var(--ds-radius-lg);
  background: var(--ds-bg);
}

.rotulo {
  margin: 0 0 var(--ds-space-2);
  max-width: none;
  color: var(--ds-accent);
  font-size: var(--ds-text-xs);
  font-weight: 700;
  letter-spacing: var(--ds-tracking-kicker);
  text-transform: uppercase;
}

.pergunta {
  margin: 0;
  max-width: none;
  font-size: var(--ds-text-xl);
  font-weight: 650;
  line-height: var(--ds-leading-tight);
}

.alternativas {
  display: grid;
  gap: var(--ds-space-2);
  margin: var(--ds-space-4) 0 0;
  padding: 0;
  list-style: none;
}

.alternativas li {
  display: flex;
  align-items: baseline;
  gap: var(--ds-space-3);
  margin: 0;
  padding: 0;
  font-size: var(--ds-text-lg);
  line-height: var(--ds-leading-normal);
}

.letra {
  flex: none;
  align-self: flex-start;
  display: grid;
  place-items: center;
  width: 1.6rem;
  height: 1.6rem;
  border: var(--ds-border) solid var(--ds-rule);
  border-radius: 50%;
  color: var(--ds-muted);
  font-size: var(--ds-text-xs);
  font-weight: 700;
  text-transform: uppercase;
}

/* A resposta chega depois (via `v-click` no markdown) e vem sobre um fundo
   verde fraco: fecha a pergunta sem precisar dizer "resposta:" outra vez.

   A caixa verde é pintada nos FILHOS do slot, não no slot em si. O `v-click`
   do Slidev não tira o elemento do DOM — ele só o deixa transparente — então
   uma caixa no slot apareceria vazia antes do clique. Pintando o filho, o que
   some é a caixa inteira. Por isso a resposta deve ser um bloco só. */
.resposta :deep(> *) {
  margin-top: var(--ds-space-4);
  padding: var(--ds-space-3) var(--ds-space-4);
  border-left: var(--ds-border-thick) solid var(--ds-ok);
  border-radius: 0 var(--ds-radius) var(--ds-radius) 0;
  background: var(--ds-ok-wash);
  max-width: none;
  font-size: var(--ds-text-lg);
  line-height: var(--ds-leading-normal);
}

.resposta :deep(p) {
  max-width: none;
}

.resposta :deep(> * > :first-child) {
  margin-top: 0;
}

.resposta :deep(> * > :last-child) {
  margin-bottom: 0;
}

.resposta :deep(strong) {
  color: var(--ds-ok);
}
</style>
