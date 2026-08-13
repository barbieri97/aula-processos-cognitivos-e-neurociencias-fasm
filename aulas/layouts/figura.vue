<!--
  figura — imagem de um lado, texto do outro.

  ---
  layout: figura
  imagem: /exemplo-figura.svg
  rotulo: Fig. 2
  legenda: O modelo de Atkinson-Shiffrin, redesenhado.
  lado: direita        # onde fica a IMAGEM (padrão: direita)
  ajuste: contain      # contain (padrão, mostra a figura inteira) | cover
  ---

  # O título vai no markdown, como em qualquer slide

  O caminho da imagem é absoluto e sem a pasta: `/arquivo.svg` procura em
  `aulas/public/arquivo.svg`. `legenda` e `rotulo` aceitam HTML.

  `rotulo` numera a figura ("Fig. 2", "Quadro 1"). Vale a pena quando a aula
  volta a ela depois — "lembram da Fig. 2?" é mais barato que repetir o slide.

  O campo se chama `imagem` e não `src` de propósito: `src` é reservado pelo Slidev
  (importa outro .md) e um slide que o usasse para imagem sumiria do deck, sem erro.
-->
<script setup lang="ts">
// `asset()` é obrigatório em caminho que chega por prop — sem ele a imagem some quando o
// site é publicado em subdiretório. O porquê está em aulas/lib/asset.ts.
import { asset } from '../lib/asset'

const props = withDefaults(defineProps<{
  imagem?: string
  legenda?: string
  rotulo?: string
  lado?: 'direita' | 'esquerda'
  ajuste?: 'contain' | 'cover'
}>(), {
  lado: 'direita',
  ajuste: 'contain',
})

const arquivo = asset(props.imagem)
</script>

<template>
  <div class="slidev-layout ds-figura" :class="`img-${lado}`">
    <div class="texto"><slot /></div>
    <figure class="figura">
      <img v-if="arquivo" :src="arquivo" :style="{ objectFit: ajuste }" alt="">
      <figcaption v-if="legenda || rotulo" class="ds-small">
        <span v-if="rotulo" class="rotulo" v-html="rotulo" />
        <span v-if="legenda" v-html="legenda" />
      </figcaption>
    </figure>
  </div>
</template>

<style scoped>
.ds-figura {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--ds-space-7);
  align-items: center;
  height: 100%;
}

/* A ordem visual muda; a ordem no DOM não — o texto continua vindo primeiro
   para quem lê com leitor de tela. */
.ds-figura.img-esquerda .texto {
  order: 2;
}

/* Grade de duas faixas — imagem, legenda — em vez de flex em coluna, e a faixa da
   imagem com `minmax(0, 1fr)`: assim a imagem se limita à altura que sobra DENTRO
   do slide, e não a uma fração da janela.

   A versão anterior limitava a imagem com `max-height: 62vh`. Parece equivalente e
   não é: o quadro do slide tem 552px fixos, enquanto `vh` mede a janela do
   navegador. Numa janela de 1080px, 62vh dá 669px — mais alto que o slide inteiro.
   Com imagem deitada isso nunca aparecia (a proporção já a mantinha baixa); com
   imagem em pé, o slide transbordava. No modo de apresentação o excesso some sem
   avisar, e no PDF do `download: true` o slide vira duas páginas. */
.figura {
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  gap: var(--ds-space-3);
  margin: 0;
  min-width: 0;
  min-height: 0;
  max-height: 100%;
}

.figura img {
  width: 100%;
  height: 100%;
  min-height: 0;
  border-radius: var(--ds-radius);
}

figcaption {
  padding-left: var(--ds-space-3);
  border-left: 2px solid var(--ds-rule);
}

/* O rótulo é o único pedaço colorido da legenda: é por ele que se procura a
   figura quando a aula volta a citá-la. */
.rotulo {
  margin-right: var(--ds-space-2);
  color: var(--ds-accent-2);
  font-weight: 700;
  letter-spacing: 0.02em;
}
</style>
