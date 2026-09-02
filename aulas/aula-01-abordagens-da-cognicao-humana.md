---
theme: none
title: Abordagens da cognição humana
info: As quatro maneiras de estudar a cognição — e o tipo de evidência que cada
  uma produz
date: "2026-08-13"
colorSchema: light
download: true
fonts:
  sans: Inter
  serif: Source Serif 4
  mono: JetBrains Mono
layout: capa
kicker: Unidade 1 · Aula 01
subtitle: Quatro maneiras de estudar o que acontece <span class="ds-em">entre o
  estímulo e a resposta</span>.
meta: Processos Cognitivos e Neurociências · Psicologia · 1º semestre
---


---
layout: default
---

# Para onde vamos

<Objetivos :itens="[
  'Explicar o que a psicologia cognitiva estuda',
  'Distinguir processamento de baixo para cima (bottom-up) de processamento de cima para baixo (top-down)',
  'Nomear as quatro abordagens da cognição humana e o tipo de evidência que cada uma produz'
]" />

---
layout: roteiro
kicker: O caminho de hoje
title: Quatro paradas
itens:
  - {
      tema: O que fica entre o estímulo e a resposta,
      desc: "e por que ninguém consegue ver isso diretamente"
    }
  - {
      tema: "De baixo para cima, de cima para baixo",
      desc: "as duas direções em que a informação corre"
    }
  - {
      tema: Quatro abordagens,
      desc: "quatro tipos de evidência sobre a mesma mente"
    }
  - {
      tema: Por que nenhuma basta sozinha,
      desc: "o que se ganha ao combinar duas"
    }
---

---
layout: secao
numero: "01"
kicker: Parte 1
title: O que fica entre o estímulo e a resposta
note: A pergunta que organiza a disciplina inteira.
---

---
layout: default
---

# Caso 1

<Caso titulo="A travessia" contexto="qualquer esquina, hoje de manhã" pergunta="Entre a luz que chegou ao seu olho e o pé que saiu da calçada, o que aconteceu?">

Você chega à esquina conversando. Sem interromper a frase, olha para o sinal,
percebe que o carro da direita vem rápido demais, espera, e atravessa. Do outro
lado, alguém chama seu nome — e você se vira antes de decidir se virar.

</Caso>

Nada disso foi difícil. Mas entre a luz e o passo houve seleção do que olhar,
reconhecimento do que estava lá, comparação com o que você já sabe sobre
carros, e uma decisão. <mark>Nenhuma dessas etapas é visível de fora.</mark>

---
layout: default
---

# A definição que a bibliografia usa

<Termo palavra="Psicologia cognitiva" ingles="cognitive psychology" origem="Eysenck &amp; Keane, 2017, cap. 1">

Estudo dos processos internos envolvidos em extrair sentido do ambiente e
decidir que ação tomar — atenção, percepção, aprendizagem, memória, linguagem,
resolução de problemas, raciocínio e pensamento.

</Termo>

Repare no que a definição não diz: ela não promete observar esses processos.
O que se observa é **comportamento** — o que a pessoa faz, quanto tempo levou,
quantos erros cometeu. Os processos são <span class="ds-em">inferidos</span> a
partir disso.

---
layout: figura
imagem: /aula-01-processamento-informacao.png
rotulo: Fig. 1.1
legenda: A versão da abordagem do processamento da informação que ficou popular nos anos 1970.
lado: direita
ajuste: contain
---

# O primeiro modelo foi uma fila

Em 1956, num encontro no MIT, três trabalhos mudaram o vocabulário da área: a
teoria da linguagem de Chomsky, o número mágico sete de Miller e o *General
Problem Solver* de Newell e Simon.

Deles saiu a analogia que organizou décadas de pesquisa: a mente como um
sistema que **recebe** informação, **processa** por etapas e **produz** uma
resposta.

<Fonte>Figura reproduzida de Eysenck &amp; Keane, <em>Manual de psicologia cognitiva</em>, 7ª ed. (Artmed, 2017), p. 2. Uso didático.</Fonte>

---
layout: secao
numero: "02"
kicker: Parte 2
title: De baixo para cima, de cima para baixo
note: O modelo da fila supõe que tudo começa no estímulo, e que um processo espera o outro terminar. As duas suposições estão erradas.
---

---
layout: figura
imagem: /aula-01-paris-na-primavera.png
rotulo: Fig. 1.2
legenda: O triângulo que a bibliografia usa para demonstrar o processamento de cima para baixo.
lado: direita
ajuste: contain
---

# Leia o que está no triângulo

Sem pressa, em voz alta.

<div v-click>

Quase todo mundo lê "Paris na primavera". Olhe outra vez: o **na** aparece duas
vezes. A informação estava toda lá, impressa, do mesmo tamanho — e mesmo assim
a expectativa de encontrar uma frase conhecida venceu a página.

</div>

<Fonte>Figura reproduzida de Eysenck &amp; Keane, <em>Manual de psicologia cognitiva</em>, 7ª ed. (Artmed, 2017), p. 3. Uso didático.</Fonte>

---
layout: comparacao
kicker: As duas direções
title: Nem toda informação vem do estímulo
esquerda: De baixo para cima
direita: De cima para baixo
pergunta: Os dois funcionam juntos o tempo todo. A pergunta empírica não é qual existe, é <span class="ds-em">quando um vence o outro</span>.
---

::esquerda::

*bottom-up*

- O processamento segue o que o **estímulo** traz
- É o que basta para ler uma palavra que você nunca viu, ou uma placa em outra língua
- Sem ele, você veria só o que já esperava ver

::direita::

*top-down*

- O processamento é guiado por **expectativa e conhecimento prévio**
- É ele que faz você ler o "na" uma vez só
- Sem ele, toda leitura custaria o que custou a primeira

---
layout: atividade
title: Stroop
---

Ler é o que vocês fazem automaticamente há uns quinze anos. A tarefa pede o
contrário — e é aí que dá para medir quanto custa.

---
layout: default
---

# Um de cada vez, ou vários ao mesmo tempo?

<Grade :cols="2">
<Cartao rotulo="uma coisa depois da outra" titulo="Processamento serial">

Um processo termina **antes** de o seguinte começar. Era o que o modelo da fila
supunha, e é o que acontece quando a tarefa é nova.

</Cartao>
<Cartao rotulo="ao mesmo tempo" titulo="Processamento paralelo" destaque>

Dois ou mais processos correm **juntos**. Quanto mais praticada a tarefa, mais
provável que seja assim — como a leitura no Stroop.

</Cartao>
</Grade>

Na primeira aula de direção, trocar a marcha, manter o carro na faixa e olhar o
retrovisor parecem impossíveis de fazer juntos. Dez anos depois, o mesmo
motorista faz as três conversando.

---
layout: default
---

# Antes de seguir

<Checagem
  pergunta="No triângulo, por que a maioria lê “Paris na primavera”?"
  :alternativas="[
    'O olho não chegou a registrar o segundo “na”',
    'O conhecimento prévio da frase venceu o que estava impresso',
    'As duas palavras “na” estão perto demais para serem lidas separadamente',
  ]">

<div v-click>

**b.** Os olhos registram as duas ocorrências — o que decidiu foi o
processamento de cima para baixo (top-down).

</div>

</Checagem>

---
layout: secao
numero: "03"
kicker: Parte 3
title: Quatro abordagens
note: Todas estudam a mesma mente. O que muda é o tipo de evidência que cada uma aceita como resposta.
---

---
layout: default
---

# As quatro, em uma frase cada

<Grade :cols="2">
<Cartao rotulo="1" titulo="Psicologia cognitiva experimental">

Experimento com pessoas **saudáveis**: muda-se uma variável da tarefa e mede-se
o efeito no tempo de resposta e no erro.

</Cartao>
<Cartao rotulo="2" titulo="Neuropsicologia cognitiva">

Estudo de pessoas com **lesão cerebral**: o que a lesão derruba e o que preserva
diz como a mente sem lesão está dividida.

</Cartao>
<Cartao rotulo="3" titulo="Neurociência cognitiva">

Comportamento **mais** registro do cérebro em funcionamento: onde e quando cada
processo acontece.

</Cartao>
<Cartao rotulo="4" titulo="Ciência cognitiva computacional">

A teoria escrita como **programa**: se ele roda e reproduz o que as pessoas
fazem, a teoria estava completa.

</Cartao>
</Grade>

<Fonte>Cada vez mais um mesmo estudo usa duas ou três delas juntas — a divisão é de exposição, não de território.</Fonte>

---
layout: default
---

# 1. Psicologia cognitiva experimental

<Termo palavra="Psicologia cognitiva experimental" ingles="experimental cognitive psychology" origem="a mais antiga das quatro — dela vêm as tarefas que as outras três usam">

Estudo dos processos cognitivos por **experimento comportamental com pessoas
saudáveis**: muda-se uma variável da tarefa, mantém-se o resto igual e mede-se o
efeito no tempo de resposta e no número de erros.

</Termo>

É exatamente o que vocês acabaram de fazer: a variável manipulada era a lista, e
o que se mediu foi o cronômetro.

---
layout: default
---

# O que ela ganha e o que ela perde

<ForcasLimites
  :forcas="[
    'Controla o que entra: isola um processo por vez',
    'Serve para qualquer tema — memória, leitura, decisão',
    'Produziu os achados replicados que sustentam a área',
  ]"
  :limites="[
    '<strong>Validade ecológica</strong>: laboratório não é vida diária',
    'Tempo e erro são evidência <strong>indireta</strong>',
    'O achado às vezes não sobrevive à troca de tarefa',
  ]" />

<Fonte>Adaptado de Eysenck &amp; Keane, cap. 1, Tab. 1.1 (p. 30).</Fonte>

---
layout: default
---

# 2. Neuropsicologia cognitiva

<Termo palavra="Neuropsicologia cognitiva" ingles="cognitive neuropsychology" origem="Shallice &amp; Warrington, 1970, e a tradição que veio depois">

Estudo do desempenho de pessoas com **lesão cerebral**, usado para inferir como
a cognição está organizada em quem não tem lesão. O dado é sempre um par: o que
a lesão derrubou e o que ela deixou intacto.

</Termo>

Ela não estuda a lesão por interesse na lesão. A lesão é o **instrumento** — é
ela que separa o que, na mente saudável, sempre aparece junto.

---
layout: default
---

# Dois pacientes, padrões inversos

<Caso titulo="K.F. e H.M." contexto="1953–1970" pergunta="Se a lesão de um derruba o que a do outro preserva, o que isso diz sobre a mente sem lesão?">

K.F. tinha a memória de curto prazo gravemente prejudicada e a de longo prazo
intacta. Henry Molaison, operado em 1953, tinha o padrão inverso: repetia um
telefone por alguns segundos, mas não formava lembrança nova nenhuma.

</Caso>

Nos anos 1960 acreditava-se que a informação só chegava à memória de longo
prazo depois de passar pela de curto. Os dois casos tornaram essa ordem
insustentável.

---
layout: default
---

# O argumento que os dois casos formam

<Termo palavra="Dissociação dupla" ingles="double dissociation" origem="Shallice &amp; Warrington, 1970; Coltheart, 2001">

Um paciente vai bem na tarefa X e mal na tarefa Y; outro paciente mostra o
padrão inverso. O par afasta a explicação mais simples — a de que uma das
tarefas é apenas mais difícil que a outra.

</Termo>

O limite vem junto: um par de casos é evidência **razoável**, não prova, de que
há sistemas separados. E o cérebro se reorganiza depois de uma lesão — parte do
prejuízo fica escondida atrás de estratégias que o próprio paciente inventou.

---
layout: default
---

# 3. Neurociência cognitiva

<Termo palavra="Neurociência cognitiva" ingles="cognitive neuroscience" origem="o nome é dos anos 1970; as técnicas de imagem que a popularizaram, dos anos 1990">

Estudo da cognição que mede, **ao mesmo tempo**, o comportamento e a atividade
do cérebro de quem executa a tarefa — para dizer *onde* e *quando* cada processo
acontece.

</Termo>

É a mais nova das quatro e a que mais aparece na imprensa. Por isso os slides
seguintes são, em boa parte, sobre o que ela <span class="ds-em">não</span>
autoriza concluir.

---
layout: figura
imagem: /aula-01-lobos.png
rotulo: Fig. 1.3
legenda: Os quatro lobos do córtex cerebral, hemisfério esquerdo.
lado: direita
ajuste: contain
---

# O vocabulário mínimo

Cem bilhões de neurônios, conectados de formas que ainda estamos mapeando.
Antes de discutir o que as técnicas mostram: o córtex se divide em quatro
lobos, e é por eles que os achados são localizados.

Voltamos à anatomia com calma na aula 03. Por ora basta saber que "ativação no
lobo occipital" quer dizer **onde**, e que dizer onde não é o mesmo que
explicar o quê.

<Fonte>Figura reproduzida de Eysenck &amp; Keane, <em>Manual de psicologia cognitiva</em>, 7ª ed. (Artmed, 2017), p. 10. Uso didático.</Fonte>

---
layout: figura
imagem: /aula-01-resolucao-tecnicas.png
rotulo: Fig. 1.6
legenda: "Cada técnica ocupa uma faixa — o eixo vertical é o tamanho do que ela enxerga; o horizontal, o intervalo de tempo que ela distingue."
lado: direita
ajuste: contain
---

# Não existe a melhor técnica

Existe a técnica adequada à pergunta. Todas se distinguem por duas resoluções:

- **espacial** — o quão fino é o *onde*
- **temporal** — o quão fino é o *quando*

A IRMf localiza dentro de uns poucos milímetros, mas leva 2 a 3 segundos para
responder. O EEG responde em milissegundos e localiza mal. A TMS é a exceção
útil: ela **interfere** numa área por instantes, e por isso é a única da lista
que autoriza dizer que aquela área é *necessária* para a tarefa.

<Fonte>Figura reproduzida de Eysenck &amp; Keane, <em>Manual de psicologia cognitiva</em>, 7ª ed. (Artmed, 2017), p. 14. Uso didático.</Fonte>

---
layout: default
---

# O erro mais comum ao ler neurociência

<MitoFato
  mito="A amígdala é a área do medo"
  fato="A amígdala se ativa no processamento da maioria das emoções — e em muita coisa que não é emoção">

Ver ameaça ativa a amígdala. Daí não se conclui que amígdala ativa significa
medo: o caminho inverso não se sustenta. Chama-se **inferência reversa**.

</MitoFato>

Num levantamento de 3.489 estudos, o córtex pré-frontal dorsolateral apareceu
ativado em 20% de **todos** eles, nas tarefas mais diferentes possíveis.

<Fonte>Lindquist et al. (2012); Yarkoni et al. (2011), citados em Eysenck &amp; Keane, cap. 1.</Fonte>

---
layout: figura
imagem: /aula-01-salmao-morto.png
rotulo: Fig. 1.8
legenda: Áreas com “ativação” significativa quando fotos de pessoas eram apresentadas ao participante.
lado: direita
ajuste: contain
---

# O participante era um salmão morto

Bennett e colaboradores (2009) puseram um salmão morto no scanner e mostraram a
ele fotos de pessoas em situações sociais, pedindo que julgasse as emoções.
Sem corrigir o limiar estatístico, encontraram ativação significativa.

O estudo foi feito de propósito, para mostrar um problema real: exames de
neuroimagem produzem uma quantidade enorme de medidas, e sem correção
estatística **falsos-positivos aparecem em até 15% das vezes**.

<Fonte>Bennett, C. M., Baird, A. A., Miller, M. B., &amp; Wolford, G. L. (2009). Figura reproduzida de Eysenck &amp; Keane, <em>Manual de psicologia cognitiva</em>, 7ª ed. (Artmed, 2017), p. 22. Uso didático.</Fonte>

---
layout: default
---

# O saldo da neurociência cognitiva

<ForcasLimites
  :forcas="[
    'Resolve disputas teóricas que o comportamento sozinho não resolvia',
    'Mostra o cérebro funcionando em <strong>redes</strong>, não em peças isoladas',
    'A TMS permite afirmação causal: sem ela, tudo é correlação',
  ]"
  :limites="[
    'Neuroimagem dá dados <strong>correlacionais</strong> — ativação não é causa',
    'Inferência reversa e falsos-positivos são frequentes',
    'Deitado num tubo barulhento não se faz quase nada do que se faz na vida',
  ]" />

Nada disso desqualifica a técnica: ela pede a leitura crítica de sempre.

---
layout: default
---

# 4. Ciência cognitiva computacional

<Termo palavra="Ciência cognitiva computacional" ingles="computational cognitive science" origem="Newell &amp; Simon, 1972; McClelland &amp; Rumelhart, 1986">

Construção de **modelos computacionais** que simulam o processamento humano. A
teoria é testada rodando o programa e comparando o que ele produz com o que as
pessoas produzem — os mesmos acertos e, principalmente, os mesmos erros.

</Termo>

Escrever a teoria como programa obriga a ser explícito: teoria em palavras
admite margem de manobra; um programa, não — ou ele roda, ou falta alguma peça
que o texto escondia.

---
layout: figura
imagem: /aula-01-rede-conexionista.png
rotulo: Fig. 1.9
legenda: Uma rede conexionista de três camadas — entrada, unidades ocultas, saída.
lado: direita
ajuste: contain
---

# Duas famílias de modelo

As **redes conexionistas**, ao lado, aprendem ajustando o peso das conexões
entre unidades simples: ninguém escreve as regras, elas saem do treino.

Os **sistemas de produção** são o oposto — regras "se…, então…" escritas à mão,
do tipo *se o sinal de pedestre está verde, então atravesse*.

<Fonte>Não confundir com inteligência artificial: o Deep Blue venceu Kasparov em 1997 avaliando 200 milhões de posições por segundo. Ninguém joga xadrez assim. Modelar é imitar o processo humano; a IA só precisa do resultado.</Fonte>

---
layout: secao
numero: "04"
kicker: Parte 4
title: Por que nenhuma basta sozinha
note: Todas as quatro têm limites, e os limites de uma são justamente onde a outra é forte.
---

---
layout: default
---

# A saída não é escolher uma

<Termo palavra="Operações convergentes" ingles="converging operations" origem="Eysenck &amp; Keane, 2017, cap. 1">

Uso de métodos diferentes, com vantagens e limitações diferentes, para atacar a
mesma questão teórica. Quando dois métodos independentes dão a mesma resposta,
a evidência é mais forte do que qualquer um deles sozinho poderia produzir.

</Termo>

E quando dão respostas diferentes, também se aprende alguma coisa: é sinal de
que a pergunta ainda não está bem formulada. Perguntar qual abordagem é a
melhor é como perguntar, no golfe, se o taco de tacada longa é melhor que o de
tacada curta.


---
layout: default
---

<Checagem
  pergunta="“Lesão no hipocampo: recorda mal, reconhece normalmente.” De que abordagem vem esse achado?"
  :alternativas="[
    'Psicologia cognitiva experimental',
    'Neuropsicologia cognitiva',
    'Ciência cognitiva computacional',
  ]">

<div v-click>

**b.** Vem do que a lesão derruba e do que ela preserva — e sozinho não fecha o
argumento: foi a neuroimagem, achando o mesmo contraste em cérebros saudáveis.

</div>

</Checagem>

---
layout: fecho
kicker: Fechando
title: O que fica
pontos:
  - Entre estímulo e resposta há processos que só se alcançam por inferência
  - "Quatro abordagens: a força de uma cobre o limite da outra"
proximo: "Aula 02 — Percepção e atenção: função e correlação neuroanatômica"
leitura: Eysenck &amp; Keane, cap. 1 (p. 1–33) — a Tab. 1.1 com atenção
---
---
layout: default
---

# O quadro que vale guardar

| abordagem | evidência que produz | ponto cego |
|---|---|---|
| Psicologia cognitiva experimental | tempo e erro em tarefa controlada | evidência indireta; distância da vida diária |
| Neuropsicologia cognitiva | o que a lesão derruba e o que preserva | poucos casos; o paciente compensa |
| Neurociência cognitiva | onde e quando o cérebro se ativa | correlação; falso-positivo; inferência reversa |
| Ciência cognitiva computacional | uma teoria que roda e prevê | difícil de refutar; ignora emoção e motivação |

<Referencia
  autores="Eysenck, M. W., &amp; Keane, M. T."
  ano="2017"
  titulo="Manual de psicologia cognitiva"
  onde="Artmed, 7ª ed."
  capitulo="cap. 1, p. 1–33 — o quadro é uma adaptação da Tab. 1.1, p. 30" />
