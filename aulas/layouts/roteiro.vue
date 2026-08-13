<!--
  roteiro — o índice da aula, ou qualquer lista curta de tópico + explicação.

  ---
  layout: roteiro
  kicker: O caminho de hoje
  title: Três perguntas
  itens:
    - { tema: O que é atenção, desc: filtrar não é o mesmo que perceber }
    - { tema: Onde ela falha, desc: cegueira por desatenção }
    - { tema: Por que isso importa, desc: da direção ao consultório }
  atual: 2
  ---

  Cada item aceita `tema` e `desc` (os dois com HTML). Um item pode ser só uma
  string, e aí vira o `tema` sem descrição. `atual: 2` marca onde a aula está.

  Repetir este mesmo slide entre as seções, mudando só o `atual`, é o truque
  pedagógico barato que mais funciona: a turma sabe sempre onde está e quanto
  falta.
-->
<script setup lang="ts">
// `title` chega pelo objeto `frontmatter`, não como prop — ver o comentário em capa.vue.
const props = defineProps<{
  kicker?: string
  itens?: (string | { tema?: string, desc?: string })[]
  atual?: number
  frontmatter?: Record<string, any>
}>()

const title = props.frontmatter?.title

// Aceita `- item` e `- { tema, desc }` na mesma lista: normaliza antes de renderizar.
const itensNormalizados = (props.itens ?? []).map(item =>
  typeof item === 'string' ? { tema: item, desc: '' } : item,
)
</script>

<template>
  <div class="slidev-layout ds-roteiro">
    <p v-if="kicker" class="ds-kicker" v-html="kicker" />
    <h1 v-if="title" v-html="title" />

    <ol class="lista">
      <li
        v-for="(item, i) in itensNormalizados"
        :key="i"
        :class="{ atual: atual === i + 1, feito: atual !== undefined && atual > i + 1 }"
      >
        <span class="num">{{ String(i + 1).padStart(2, '0') }}</span>
        <span class="texto">
          <span class="tema" v-html="item.tema" />
          <span v-if="item.desc" class="desc" v-html="item.desc" />
        </span>
      </li>
    </ol>

    <slot />
  </div>
</template>

<style scoped>
.lista {
  display: grid;
  gap: var(--ds-space-2);
  margin: var(--ds-space-5) 0 0;
  padding: 0;
  list-style: none;
}

.lista li {
  display: flex;
  align-items: center;
  gap: var(--ds-space-4);
  margin: 0;
  padding: var(--ds-space-3) var(--ds-space-4);
  border-radius: var(--ds-radius);
}

/* O item da vez ganha fundo e disco cheio; os já vistos ficam esmaecidos, mas
   continuam legíveis — o roteiro é para se localizar, não para esconder. */
.lista li.atual {
  background: var(--ds-accent-wash);
}

.lista li.feito {
  opacity: 0.55;
}

/* O número mora num disco: é o mesmo desenho do número da `secao`, em miniatura. */
.num {
  display: grid;
  place-items: center;
  flex: none;
  width: 2.3rem;
  height: 2.3rem;
  border: 2px solid var(--ds-rule);
  border-radius: 50%;
  color: var(--ds-muted);
  font-size: var(--ds-text-sm);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.lista li.atual .num {
  border-color: var(--ds-accent);
  background: var(--ds-accent);
  color: var(--ds-bg);
}

.lista li.feito .num {
  border-color: var(--ds-accent);
  color: var(--ds-accent);
}

.texto {
  display: flex;
  align-items: baseline;
  gap: var(--ds-space-3);
  flex-wrap: wrap;
  min-width: 0;
}

.tema {
  font-size: var(--ds-text-lg);
  font-weight: 600;
}

.desc {
  color: var(--ds-muted);
  font-size: var(--ds-text-base);
}
</style>
