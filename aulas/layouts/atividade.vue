<!--
  atividade — o slide em que a turma para de ouvir e faz alguma coisa.

  ---
  layout: atividade
  title: Testando o efeito Stroop
  tempo: 10 min
  formato: em duplas
  passos:
    - Um lê a lista em voz alta, o outro cronometra
    - Trocar de papel na segunda lista
    - Comparar os dois tempos
  entrega: Anotem a diferença entre os tempos — vamos usar no próximo slide
  ---

  Texto livre extra vai no corpo do slide (o slot), abaixo dos passos.

  `title`, cada `passo` e `entrega` aceitam HTML. `tempo` e `formato` são
  rótulos curtos — o slide inteiro muda de cor para a turma reconhecer de longe
  que agora é a vez dela.

  Duas coisas que este layout força, de propósito: dizer QUANTO TEMPO e dizer
  O QUE ENTREGAR. Atividade sem as duas vira conversa paralela.
-->
<script setup lang="ts">
// `title` chega pelo objeto `frontmatter`, não como prop — ver o comentário em capa.vue.
const props = defineProps<{
  kicker?: string
  tempo?: string
  formato?: string
  passos?: string[]
  entrega?: string
  frontmatter?: Record<string, any>
}>()

const title = props.frontmatter?.title
</script>

<template>
  <div class="slidev-layout ds-atividade">
    <div class="cabeca">
      <div>
        <p class="ds-kicker" v-html="kicker || 'Agora é com vocês'" />
        <h1 v-if="title" v-html="title" />
      </div>

      <div v-if="tempo || formato" class="crachas">
        <span v-if="tempo" class="cracha tempo">{{ tempo }}</span>
        <span v-if="formato" class="cracha">{{ formato }}</span>
      </div>
    </div>

    <ol v-if="passos?.length" class="passos">
      <li v-for="(passo, i) in passos" :key="i">
        <span class="num">{{ i + 1 }}</span>
        <span v-html="passo" />
      </li>
    </ol>

    <div class="corpo"><slot /></div>

    <p v-if="entrega" class="entrega">
      <span class="ds-kicker">o que trazer de volta</span>
      <span v-html="entrega" />
    </p>
  </div>
</template>

<style scoped>
/* A terracota é a cor da evidência no resto do curso; aqui ela marca o slide em
   que a evidência é produzida pela própria turma. */
.ds-atividade {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--ds-accent-2-wash);
  border-left: 8px solid var(--ds-accent-2);
}

.ds-atividade :deep(.ds-kicker) {
  color: var(--ds-accent-2);
}

.cabeca {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--ds-space-5);
}

.cabeca :deep(h1) {
  margin: 0;
}

.crachas {
  display: flex;
  flex: none;
  gap: var(--ds-space-2);
}

.cracha {
  padding: 0.3em 0.85em;
  border: 2px solid var(--ds-accent-2);
  border-radius: 999px;
  color: var(--ds-accent-2);
  font-size: var(--ds-text-sm);
  font-weight: 700;
  white-space: nowrap;
}

/* O tempo é o único cheio: é o dado que a turma precisa ler de longe. */
.cracha.tempo {
  background: var(--ds-accent-2);
  color: var(--ds-bg);
}

.passos {
  display: grid;
  gap: var(--ds-space-3);
  margin: var(--ds-space-6) 0 0;
  padding: 0;
  list-style: none;
}

.passos li {
  display: flex;
  align-items: baseline;
  gap: var(--ds-space-4);
  margin: 0;
  padding: 0;
  font-size: var(--ds-text-lg);
  line-height: var(--ds-leading-normal);
}

.num {
  flex: none;
  align-self: flex-start;
  display: grid;
  place-items: center;
  width: 1.9rem;
  height: 1.9rem;
  border: 2px solid var(--ds-accent-2);
  border-radius: 50%;
  color: var(--ds-accent-2);
  font-size: var(--ds-text-sm);
  font-weight: 700;
}

.corpo:not(:empty) {
  margin-top: var(--ds-space-5);
}

.entrega {
  margin: auto 0 0;
  padding-top: var(--ds-space-4);
  border-top: var(--ds-border) solid var(--ds-accent-2);
  max-width: none;
  font-size: var(--ds-text-lg);
  font-weight: 600;
  line-height: var(--ds-leading-normal);
}

.entrega .ds-kicker {
  display: block;
}
</style>
