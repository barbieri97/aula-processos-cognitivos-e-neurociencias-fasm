<!--
  <ForcasLimites> — o que um método alcança e onde ele para.

  <ForcasLimites
    :forcas="['Controla o que entra: dá para isolar um processo por vez']"
    :limites="['O laboratório não é a vida diária — validade ecológica']" />

  O par força/limite é a forma padrão de avaliar um método nesta disciplina:
  a bibliografia fecha cada abordagem com "Vantagens" e "Limitações", e a
  turma precisa aprender que as duas listas vêm sempre juntas — método sem
  limite declarado é propaganda, não ciência.

  Os rótulos são fixos de propósito: a turma reconhece o bloco de longe e sabe
  que a coluna da direita não é opinião do professor, é parte do resultado.

  Verde e vermelho seguem os mesmos tokens de <Nota tipo="ok"> e
  <Nota tipo="erro">. Cada item aceita HTML.

  Os três que se parecem, e a regra de cada um:
    <ForcasLimites>  o par fixo força/limite de UMA coisa
    <Grade>+<Cartao> N coisas do MESMO tipo, sem par fixo
    layout comparacao DUAS coisas que se OPÕEM, no slide inteiro

  O slot é a ressalva que vale para os dois lados ("nada disso vale se a
  amostra for de 20 pessoas").
-->
<script setup lang="ts">
withDefaults(defineProps<{
  forcas?: string[]
  limites?: string[]
  /** Trocar quando "método" não for a palavra certa — ex.: titulo="O que o modelo prevê". */
  tituloForcas?: string
  tituloLimites?: string
}>(), {
  forcas: () => [],
  limites: () => [],
  tituloForcas: 'O que ela alcança',
  tituloLimites: 'Onde ela para',
})
</script>

<template>
  <section class="ds-forcas-limites">
    <div class="coluna forcas">
      <p class="rotulo">{{ tituloForcas }}</p>
      <ul>
        <li v-for="(item, i) in forcas" :key="i" v-html="item" />
      </ul>
    </div>

    <div class="coluna limites">
      <p class="rotulo">{{ tituloLimites }}</p>
      <ul>
        <li v-for="(item, i) in limites" :key="i" v-html="item" />
      </ul>
    </div>

    <div class="corpo"><slot /></div>
  </section>
</template>

<style scoped>
.ds-forcas-limites {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--ds-space-4);
  margin: var(--ds-space-5) 0;
}

.coluna {
  padding: var(--ds-space-4) var(--ds-space-5);
  border: var(--ds-border) solid var(--ds-rule);
  border-top: var(--ds-border-thick) solid var(--cor);
  border-radius: 0 0 var(--ds-radius) var(--ds-radius);
  background: var(--fundo);
}

.forcas {
  --cor: var(--ds-ok);
  --fundo: var(--ds-ok-wash);
  --marca: "+";
}

.limites {
  --cor: var(--ds-danger);
  --fundo: var(--ds-danger-wash);
  --marca: "−"; /* U+2212, o menos de verdade: o hífen fica curto demais na projeção */
}

.rotulo {
  margin: 0 0 var(--ds-space-3);
  max-width: none;
  color: var(--cor);
  font-size: var(--ds-text-xs);
  font-weight: 700;
  letter-spacing: var(--ds-tracking-kicker);
  text-transform: uppercase;
}

.ds-forcas-limites ul {
  display: grid;
  gap: var(--ds-space-3);
  margin: 0;
  padding: 0;
  list-style: none;
}

.ds-forcas-limites li {
  position: relative;
  padding-left: var(--ds-space-5);
  font-size: var(--ds-text-base);
  line-height: var(--ds-leading-normal);
}

/* Este componente desenha o próprio marcador, então precisa desligar o ponto de
   índigo que base.css põe em todo `li` de slide — senão saem os dois, sobrepostos.
   O seletor precisa da classe do componente junto: `.slidev-layout ul > li::before`
   (base.css) tem duas classes de especificidade, e um `li::before` escopado sozinho
   perde para ele. */
.ds-forcas-limites li::before {
  content: var(--marca);
  position: absolute;
  left: 0;
  top: 0;
  width: auto;
  height: auto;
  border-radius: 0;
  background: none;
  color: var(--cor);
  font-weight: 700;
  line-height: var(--ds-leading-normal);
}

.corpo:not(:empty) {
  grid-column: 1 / -1;
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
