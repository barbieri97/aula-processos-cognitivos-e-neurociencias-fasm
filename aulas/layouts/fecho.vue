<!--
  fecho — o último slide: o que fica, o que vem, onde ler mais.

  ---
  layout: fecho
  kicker: Fechando
  title: O que fica
  pontos:
    - Atenção é seleção, e toda seleção tem um custo
    - O que não é atendido raramente vira memória
  proximo: Aula 04 — Memória de trabalho
  leitura: Sternberg, cap. 3 (p. 78–96)
  ---

  `title`, cada item de `pontos`, `proximo` e `leitura` aceitam HTML. O slot é o
  lugar das referências completas (uma lista markdown normal cai bem, ou vários
  `<Referencia>`).

  `pontos` são as ideias que a turma leva — no máximo três. Se você não
  consegue cortar para três, a aula tinha assunto demais.
-->
<script setup lang="ts">
// `title` chega pelo objeto `frontmatter`, não como prop — ver o comentário em capa.vue.
const props = defineProps<{
  kicker?: string
  pontos?: string[]
  proximo?: string
  leitura?: string
  frontmatter?: Record<string, any>
}>()

const title = props.frontmatter?.title
</script>

<template>
  <div class="slidev-layout ds-fecho">
    <div class="topo">
      <p v-if="kicker" class="ds-kicker" v-html="kicker" />
      <h1 v-if="title" v-html="title" />

      <ol v-if="pontos?.length" class="pontos">
        <li v-for="(ponto, i) in pontos" :key="i">
          <span class="marca">{{ i + 1 }}</span>
          <span v-html="ponto" />
        </li>
      </ol>

      <div class="extra"><slot /></div>
    </div>

    <div v-if="proximo || leitura" class="rodape">
      <p v-if="leitura" class="celula">
        <span class="ds-kicker">para ler antes</span>
        <span class="valor leitura" v-html="leitura" />
      </p>
      <p v-if="proximo" class="celula">
        <span class="ds-kicker">a seguir</span>
        <span class="valor" v-html="proximo" />
      </p>
    </div>
  </div>
</template>

<style scoped>
.ds-fecho {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

/* Sem `flex-shrink: 0` o topo encolhe abaixo da altura do próprio conteúdo e o
   texto passa por cima do rodapé, em vez de transbordar o slide. Transbordar é
   feio, mas é visível — sobrepor passa despercebido até a projeção. */
.topo {
  flex: 0 0 auto;
}

.pontos {
  display: grid;
  gap: var(--ds-space-4);
  margin: var(--ds-space-5) 0 0;
  padding: 0;
  list-style: none;
}

.pontos li {
  display: flex;
  align-items: baseline;
  gap: var(--ds-space-4);
  margin: 0;
  padding: 0;
  font-size: var(--ds-text-lg);
  line-height: var(--ds-leading-normal);
}

.marca {
  flex: none;
  width: 1.8rem;
  height: 1.8rem;
  align-self: flex-start;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--ds-accent);
  color: var(--ds-bg);
  font-size: var(--ds-text-sm);
  font-weight: 700;
}

.extra:not(:empty) {
  margin-top: var(--ds-space-6);
  font-size: var(--ds-text-sm);
  color: var(--ds-muted);
}

/* O rodapé é o combinado com a turma: o que ler antes, e o que vem. Fica
   sempre no mesmo lugar em toda aula, então ninguém precisa procurar. */
.rodape {
  display: flex;
  gap: var(--ds-space-7);
  flex-wrap: wrap;
  padding-top: var(--ds-space-4);
  border-top: var(--ds-border) solid var(--ds-rule);
}

.celula {
  margin: 0;
  max-width: 42ch;
}

.celula .ds-kicker {
  display: block;
}

.valor {
  font-size: var(--ds-text-lg);
  font-weight: 600;
  line-height: var(--ds-leading-normal);
}

.leitura {
  color: var(--ds-accent-2);
}
</style>
