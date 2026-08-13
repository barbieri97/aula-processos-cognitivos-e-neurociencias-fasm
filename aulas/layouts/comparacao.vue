<!--
  comparacao — duas colunas que se opõem, com os rótulos fixos no topo.

  ---
  layout: comparacao
  title: Dois sistemas de memória
  esquerda: Declarativa
  direita: Não declarativa
  pergunta: O que muda quando a lembrança não passa pela consciência?
  ---

  ::esquerda::

  - Lembrar **que** algo aconteceu
  - Hipocampo e córtex temporal medial

  ::direita::

  - Lembrar **como** se faz algo
  - Gânglios da base e cerebelo

  Os campos `esquerda` e `direita` são os RÓTULOS das colunas; o conteúdo vai
  nos slots de mesmo nome (`::esquerda::` e `::direita::` no markdown).
  `title`, os rótulos e `pergunta` aceitam HTML.

  Metade da psicologia cognitiva é um par de opostos — curto/longo prazo,
  automático/controlado, bottom-up/top-down. Este layout existe para que
  comparar não custe um slide inventado do zero toda vez. Se as duas colunas
  não se opõem de verdade, o certo é `<Grade>` + `<Cartao>`.
-->
<script setup lang="ts">
// `title` chega pelo objeto `frontmatter`, não como prop — ver o comentário em capa.vue.
const props = defineProps<{
  kicker?: string
  esquerda?: string
  direita?: string
  pergunta?: string
  frontmatter?: Record<string, any>
}>()

const title = props.frontmatter?.title
</script>

<template>
  <div class="slidev-layout ds-comparacao">
    <p v-if="kicker" class="ds-kicker" v-html="kicker" />
    <h1 v-if="title" v-html="title" />

    <div class="colunas">
      <section class="coluna lado-a">
        <p v-if="esquerda" class="rotulo" v-html="esquerda" />
        <div class="corpo"><slot name="esquerda" /><slot /></div>
      </section>

      <div class="eixo" aria-hidden="true"><span>×</span></div>

      <section class="coluna lado-b">
        <p v-if="direita" class="rotulo" v-html="direita" />
        <div class="corpo"><slot name="direita" /></div>
      </section>
    </div>

    <p v-if="pergunta" class="pergunta">
      <span class="ds-kicker">o que está em jogo</span>
      <span v-html="pergunta" />
    </p>
  </div>
</template>

<style scoped>
.ds-comparacao {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.ds-comparacao :deep(h1) {
  margin-bottom: var(--ds-space-5);
}

.colunas {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: var(--ds-space-5);
  align-items: start;
  min-height: 0;
  flex: 1;
}

/* `--cor` distingue os dois lados: índigo de um, terracota do outro. É a mesma
   dupla do resto do curso, aqui usada só para o olho não misturar as colunas. */
.coluna {
  min-width: 0;
}

.lado-a {
  --cor: var(--ds-accent);
}

.lado-b {
  --cor: var(--ds-accent-2);
}

.rotulo {
  margin: 0 0 var(--ds-space-4);
  padding-bottom: var(--ds-space-2);
  border-bottom: var(--ds-border-thick) solid var(--cor);
  color: var(--cor);
  font-size: var(--ds-text-xl);
  font-weight: 700;
  line-height: var(--ds-leading-tight);
  max-width: none;
}

/* Dentro da coluna o marcador da lista segue a cor do lado. */
.corpo :deep(ul > li::before) {
  background: var(--cor);
}

.corpo :deep(strong) {
  color: var(--cor);
}

.corpo :deep(> :first-child) {
  margin-top: 0;
}

/* O eixo é o fio vertical entre as colunas, com o "×" no meio: sem ele as duas
   listas parecem uma lista só de duas colunas, não uma oposição. */
.eixo {
  position: relative;
  align-self: stretch;
  width: var(--ds-border);
  background: var(--ds-rule);
}

.eixo span {
  position: absolute;
  top: 2.2rem;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: var(--ds-bg);
  color: var(--ds-muted);
  font-size: var(--ds-text-lg);
  line-height: 1;
}

.pergunta {
  margin: var(--ds-space-5) 0 0;
  padding-top: var(--ds-space-4);
  border-top: var(--ds-border) solid var(--ds-rule);
  max-width: none;
  font-size: var(--ds-text-lg);
  line-height: var(--ds-leading-normal);
}

.pergunta .ds-kicker {
  display: block;
}
</style>
