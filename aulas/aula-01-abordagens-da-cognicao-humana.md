---
theme: none
title: Abordagens da cognição humana
info: As quatro maneiras de estudar a cognição — e o tipo de evidência que cada uma produz
date: "2026-08-13"
colorSchema: light
download: true
fonts:
  sans: Inter
  serif: Source Serif 4
  mono: JetBrains Mono
layout: capa
kicker: Unidade 1 · Aula 01
subtitle: Quatro maneiras de estudar o que acontece <span class="ds-em">entre o estímulo e a resposta</span>.
meta: Processos Cognitivos e Neurociências · Psicologia · 1º semestre
---

<!--
Aula de 60 minutos. Base: EYSENCK & KEANE, Manual de psicologia cognitiva, 7ª ed.,
cap. 1 (p. 1–33).

Relógio sugerido:
  abertura ...................  5 min  (slides 1–3)
  parte 1 — o que é cognição .  8 min  (slides 4–7)
  parte 2 — cima e baixo ..... 17 min  (slides 8–16, dos quais 10 são a atividade)
  parte 3 — as 4 abordagens .. 22 min  (slides 17–28)
  parte 4 — juntando .........  8 min  (slides 29–32)

Se o relógio apertar, os dois slides cortáveis sem prejuízo estão marcados nas
notas: o dos lobos cerebrais (anatomia volta na aula 03) e o da rede conexionista.
-->

---
layout: default
---

# Para onde vamos

<Objetivos :itens="[
  'Explicar o que a psicologia cognitiva estuda e por que ela descreve a mente por analogia com o computador',
  'Distinguir processamento de baixo para cima de processamento de cima para baixo',
  'Nomear as quatro abordagens da cognição humana e o tipo de evidência que cada uma produz',
  'Apontar o que uma afirmação baseada em imagem de cérebro não autoriza concluir',
]" />

<!--
Volte a este slide no fim da aula. O quarto objetivo é o que mais rende: a turma
vai encontrar manchete de neurociência a semana inteira.
-->

---
layout: roteiro
kicker: O caminho de hoje
title: Quatro paradas
itens:
  - { tema: O que fica entre o estímulo e a resposta, desc: "e por que ninguém consegue ver isso diretamente" }
  - { tema: "De baixo para cima, de cima para baixo", desc: "as duas direções em que a informação corre" }
  - { tema: Quatro abordagens, desc: "quatro tipos de evidência sobre a mesma mente" }
  - { tema: Por que nenhuma basta sozinha, desc: "o que se ganha ao combinar duas" }
---

<!--
Aula de abertura da disciplina: vale gastar 1 minuto aqui dizendo que as quatro
paradas correspondem à divisão do capítulo 1, que é a leitura desta semana.
-->

---
layout: secao
numero: "01"
kicker: Parte 1
title: O que fica entre o estímulo e a resposta
note: A pergunta que organiza a disciplina inteira — e que ninguém responde olhando de fora.
---

---
layout: default
---

# Comece pelo caso, não pela definição

<Caso titulo="A travessia" contexto="qualquer esquina, hoje de manhã" pergunta="Entre a luz que chegou ao seu olho e o pé que saiu da calçada, o que aconteceu?">

Você chega à esquina conversando. Sem interromper a frase, olha para o sinal,
percebe que o carro da direita vem rápido demais, espera, e atravessa. Do outro
lado, alguém chama seu nome — e você se vira antes de decidir se virar.

</Caso>

Nada disso foi difícil. Mas entre a luz e o passo houve seleção do que olhar,
reconhecimento do que estava lá, comparação com o que você já sabe sobre
carros, e uma decisão. <mark>Nenhuma dessas etapas é visível de fora.</mark>

<!--
Peça um exemplo da turma antes de avançar: "me deem outra situação banal em que
várias coisas aconteceram sem vocês notarem". Costuma sair cozinhar, ou digitar.
-->

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

<!--
Este é o ponto que a turma leva a aula inteira para aceitar: em psicologia
cognitiva a evidência é sempre indireta. Vale dizer com todas as letras.
-->

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

<!--
Vale contar que a analogia é datada e ainda assim útil: ela deu à psicologia um
jeito de falar de processos internos sem apelar para introspecção, que era o que
o behaviorismo tinha proibido com boas razões.
-->

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

<!--
Deixe a turma ler antes de clicar. Alguns vão perceber o segundo "na" — pergunte
a eles se perceberam de primeira ou na segunda passada. Quase sempre é na segunda.
-->

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

<!--
Exemplo extra se sobrar tempo: ouvir o nome de alguém numa festa barulhenta.
O sinal acústico é péssimo; o que completa a palavra é o conhecimento.
-->

---
layout: atividade
title: Dizer a cor da tinta
tempo: 10 min
formato: em duplas
passos:
  - Um lê a <strong>lista A</strong> em voz alta dizendo a <strong>cor da tinta</strong> de cada palavra — não a palavra; o outro cronometra
  - Trocar de papel e repetir com a <strong>lista B</strong>
  - Anotar os dois tempos e quantos tropeços cada um deu
entrega: Os dois tempos e a diferença entre eles, em segundos
---

Ler é o que vocês fazem automaticamente há uns quinze anos. A tarefa pede o
contrário — e é aí que dá para medir quanto custa.

<!--
2 min explicando, 6 min fazendo, 2 min recolhendo os números. Peça três ou
quatro duplas em voz alta e anote as diferenças no quadro: costuma dar de 3 a
10 segundos numa lista de 20 palavras. Se a diferença de alguma dupla for zero,
quase sempre a instrução foi lida errado — vale conferir na hora.
-->

---
layout: default
---

# Lista A

![Vinte nomes de cor impressos na própria cor](/aula-01-stroop-lista-a.svg)

---
layout: default
---

# Lista B

![Os mesmos vinte nomes de cor, impressos em tinta de outra cor](/aula-01-stroop-lista-b.svg)

---
layout: default
---

# O que vocês acabaram de medir

<Experimento
  nome="Efeito Stroop"
  autoria="Stroop, 1935"
  pergunta="Ler a palavra atrapalha nomear a cor em que ela está impressa?"
  metodo="Nomear a cor da tinta de palavras que são nomes de outras cores"
  achado="A resposta demora mais, e sai errada mais vezes, quando palavra e cor divergem">

A leitura não se desliga por ordem. Ela corre **junto** com a tarefa pedida e
compete com ela — é essa competição que aparece no cronômetro.

</Experimento>

<Fonte>Stroop, J. R. (1935). Studies of interference in serial verbal reactions. <em>Journal of Experimental Psychology</em>, 18(6), 643–662 — quase noventa anos depois, a tarefa continua entrando em estudos de atenção, de desenvolvimento e de neuroimagem.</Fonte>

<!--
Se alguém perguntar por que a lista A também custa algum tempo: porque nomear
cor é mais lento que ler, sempre. O que interessa é a DIFERENÇA entre as duas.
-->

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

<!--
Ponte para a parte 3: "então já temos duas correções ao modelo da fila. Agora a
pergunta é como alguém descobre coisas assim — e é aí que as quatro abordagens
se separam".
-->

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
processamento de cima para baixo.

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

Mede o **comportamento** de pessoas saudáveis em tarefas controladas: quanto
tempo levou, quantos erros.

</Cartao>
<Cartao rotulo="2" titulo="Neuropsicologia cognitiva">

Estuda pessoas com **lesão cerebral** para entender como o sistema funciona
quando está inteiro.

</Cartao>
<Cartao rotulo="3" titulo="Neurociência cognitiva">

Combina comportamento com o registro da **atividade do cérebro** durante a
tarefa.

</Cartao>
<Cartao rotulo="4" titulo="Ciência cognitiva computacional">

Escreve a teoria como **programa**: se ele roda e reproduz o que as pessoas
fazem, a teoria estava completa.

</Cartao>
</Grade>

<Fonte>Cada vez mais um mesmo estudo usa duas ou três delas juntas — a divisão é de exposição, não de território.</Fonte>

---
layout: default
---

# 1. Psicologia cognitiva experimental

É a mais antiga das quatro, e dela vêm as tarefas que as outras três usam.

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

<!--
"Validade ecológica" é termo de prova. Exemplo curto: memorizar listas de
palavras num cubículo silencioso não é o que a memória faz num dia comum.
-->

---
layout: default
---

# 2. Neuropsicologia cognitiva

<Caso titulo="K.F. e H.M." contexto="1953–1970" pergunta="Se a lesão de um derruba o que a do outro preserva, o que isso diz sobre a mente sem lesão?">

K.F. tinha a memória de curto prazo gravemente prejudicada e a de longo prazo
intacta. Henry Molaison, operado em 1953, tinha o padrão inverso: repetia um
telefone por alguns segundos, mas não formava lembrança nova nenhuma.

</Caso>

Nos anos 1960 acreditava-se que a informação só chegava à memória de longo
prazo depois de passar pela de curto. Os dois casos tornaram essa ordem
insustentável.

<!--
Ordem importa: o caso ANTES do conceito. A pergunta do rodapé é literalmente o
que o próximo slide responde.
-->

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

<!--
Se perguntarem "por que não medir muita gente": porque não existem dois
pacientes com a mesma lesão. Hoje a área prefere séries de casos a caso isolado,
justamente para conseguir avaliar a variação entre eles.
-->

---
layout: figura
imagem: /aula-01-lobos.png
rotulo: Fig. 1.3
legenda: Os quatro lobos do córtex cerebral, hemisfério esquerdo.
lado: direita
ajuste: contain
---

# 3. Neurociência cognitiva

Cem bilhões de neurônios, conectados de formas que ainda estamos mapeando.
Antes de discutir o que as técnicas mostram, o vocabulário mínimo: o córtex se
divide em quatro lobos, e é por eles que os achados são localizados.

Voltamos à anatomia com calma na aula 03. Por ora basta saber que "ativação no
lobo occipital" quer dizer **onde**, e que dizer onde não é o mesmo que
explicar o quê.

<Fonte>Figura reproduzida de Eysenck &amp; Keane, <em>Manual de psicologia cognitiva</em>, 7ª ed. (Artmed, 2017), p. 10. Uso didático.</Fonte>

<!--
Slide cortável se o relógio apertar — a anatomia volta na aula 03.
-->

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

<!--
Se a turma quiser um exemplo de registro de neurônio isolado: em pacientes com
epilepsia já implantados, Quiroga e colaboradores (2005) acharam um neurônio no
lobo temporal medial que disparava para fotos da Jennifer Aniston e não para
outras celebridades. É divertido e serve para introduzir a cautela: só uma
fração ínfima dos neurônios daquela região foi registrada.
-->

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

<!--
Manchete real, do Guardian em 2007: "Exames do cérebro localizam como os
chocólatras se tornam dependentes". O achado era que ver chocolate ativa mais
os centros de recompensa em quem gosta muito de chocolate. Ou seja: quem gosta
de chocolate acha chocolate gratificante.
-->

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

<!--
O trabalho ganhou o Ig Nobel de 2012. Vale dizer que os autores não estavam
zombando da técnica, e sim da prática de não corrigir o limiar.
-->

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

<!--
Se alguém achar que a aula está "contra" a neuroimagem, corrija na hora: a
crítica interna é o que faz a área se autocorrigir. Foi ela que derrubou a
ideia de que o reconhecimento de rostos morava só na área fusiforme da face.
-->

---
layout: figura
imagem: /aula-01-rede-conexionista.png
rotulo: Fig. 1.9
legenda: Uma rede conexionista de três camadas — entrada, unidades ocultas, saída.
lado: direita
ajuste: contain
---

# 4. Ciência cognitiva computacional

Escrever a teoria como programa obriga a ser explícito. Teoria em palavras
admite margem de manobra; um programa, não — ou ele roda, ou falta alguma peça
que o texto escondia.

Duas famílias de modelo aparecem no capítulo: as **redes** ao lado, que
aprendem ajustando o peso das conexões, e os **sistemas de produção**, feitos
de regras "se…, então…" — do tipo *se o sinal de pedestre está verde, então
atravesse*.

<Fonte>Não confundir com inteligência artificial: o Deep Blue venceu Kasparov em 1997 avaliando 200 milhões de posições por segundo. Ninguém joga xadrez assim. Modelar é imitar o processo humano; a IA só precisa do resultado.</Fonte>

<!--
Slide cortável se o relógio apertar. Se sobrar tempo, o limite mais elegante é
o paradoxo de Bonini: um modelo fica mais realista à medida que fica mais
completo, e nesse ponto ele já é tão difícil de entender quanto a coisa que ele
deveria explicar. Um mapa do tamanho do território é exato e inútil.
-->

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

<!--
Este quadro é o que cai na primeira avaliação. Diga isso.
-->

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
proximo: Aula 02 — Percepção visual e reconhecimento de objetos
leitura: Eysenck &amp; Keane, cap. 1 (p. 1–33) — a Tab. 1.1 com atenção
---
