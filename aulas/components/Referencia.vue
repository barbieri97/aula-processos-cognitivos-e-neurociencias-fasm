<!--
  <Referencia> — a referência bibliográfica, em ABNT ou APA, como a turma vai
  ter de escrever nos trabalhos.

  <Referencia autores="Sternberg, R. J." ano="2016" titulo="Psicologia cognitiva" onde="Cengage, 6ª ed." capitulo="cap. 4, p. 112–140" />

  <Referencia
    autores="Simons, D. J., &amp; Chabris, C. F."
    ano="1999"
    titulo="Gorillas in our midst"
    onde="<em>Perception</em>, 28(9), 1059–1074"
    link="https://doi.org/10.1068/p281059" />

  Existe por um motivo pedagógico e não estético: 1º semestre é quando se
  aprende a citar. Se toda referência do curso aparece com os mesmos campos, na
  mesma ordem, a turma aprende o formato por repetição.

  `capitulo` é o recorte que foi realmente pedido para ler. `titulo` e `onde`
  aceitam HTML.
-->
<script setup lang="ts">
defineProps<{
  autores?: string
  ano?: string | number
  titulo?: string
  onde?: string
  capitulo?: string
  link?: string
}>()
</script>

<template>
  <p class="ds-referencia">
    <span v-if="autores" class="autores">{{ autores }}</span>
    <span v-if="ano" class="ano">({{ ano }}).</span>
    <span v-if="titulo" class="titulo" v-html="titulo" />
    <span v-if="onde" class="onde" v-html="onde" />
    <span v-if="capitulo" class="capitulo">{{ capitulo }}</span>
    <a v-if="link" :href="link" class="link" target="_blank" rel="noopener">acessar</a>
  </p>
</template>

<style scoped>
/* Recuo francês (a segunda linha entra), como manda a norma — e como a turma
   vai ter de formatar as referências do próprio trabalho. */
.ds-referencia {
  margin: var(--ds-space-3) 0;
  padding-left: var(--ds-space-5);
  text-indent: calc(-1 * var(--ds-space-5));
  max-width: 70ch;
  font-size: var(--ds-text-sm);
  line-height: var(--ds-leading-normal);
}

.autores {
  font-weight: 650;
}

.ano {
  color: var(--ds-muted);
}

.titulo {
  font-style: italic;
}

/* O ponto depois do título é estrutural na norma, então sai daqui — o autor não
   precisa lembrar de digitá-lo, e nunca sobra um ponto duplo. */
.titulo::after {
  content: ".";
}

.onde {
  color: var(--ds-muted);
}

/* O trecho que foi pedido para ler é a única parte colorida: é o que a turma
   precisa achar quando abrir o slide de novo em casa. */
.capitulo {
  color: var(--ds-accent-2);
  font-weight: 650;
}

.ds-referencia > * + * {
  margin-left: 0.35em;
}

.link {
  font-size: var(--ds-text-xs);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
</style>
