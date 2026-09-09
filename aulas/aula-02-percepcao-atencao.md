---
theme: none
title: "Percepção e atenção: função e correlação neuroanatômica"
info: "Da luz na retina ao que a atenção deixa passar: as áreas visuais, os quatro tipos de atenção e as estruturas de cada um"
date: "2026-09-01"
colorSchema: light
download: true
fonts:
  sans: Inter
  serif: Source Serif 4
  mono: JetBrains Mono
layout: capa
kicker: Unidade 1 · Aula 02
subtitle: Do sinal que chega à retina até <span class="ds-em">o que a atenção deixa
  passar</span>.
meta: Processos Cognitivos e Neurociências · Psicologia · 1º semestre
---


---
layout: default
---

# Para onde vamos

<Objetivos :itens="[
  'Descrever o percurso do sinal visual da retina ao córtex',
  'Distinguir atenção seletiva, sustentada, alternada e dividida, e reconhecer cada uma em situações do dia a dia',
  'Relacionar cada função atencional às estruturas cerebrais envolvidas'
]" />

---
layout: roteiro
kicker: O caminho de hoje
title: Quatro paradas
itens:
  - {
      tema: Da luz ao córtex,
      desc: "o percurso do sinal e as áreas que o processam"
    }
  - {
      tema: "Perceber não é agir",
      desc: "duas correntes que fazem coisas diferentes com a mesma imagem"
    }
  - {
      tema: "Atenção: o que é e como se divide",
      desc: "quatro tipos, quatro exemplos, quatro medidas"
    }
  - {
      tema: Função e estrutura,
      desc: "onde a atenção acontece — e onde ela falha"
    }
---

---
layout: secao
numero: "01"
kicker: Parte 1
title: Da luz ao córtex
note: Antes de falar do que a atenção seleciona, é preciso saber o que chega até ela.
---

---
layout: default
---

# Caso 1

<Caso titulo="A plataforma" contexto="qualquer estação, 19h" pergunta="Como o seu cérebro decidiu que aquele conjunto de manchas era uma pessoa, e que aquela pessoa era ela?">

Você desce a escada da estação lotada procurando alguém. A luz é ruim, metade
dos rostos está de costas, e ninguém está parado. Ainda assim, você reconhece a
pessoa a uns quinze metros — antes de conseguir dizer de que cor é a blusa dela.

</Caso>

Reconhecer não foi ler a imagem ponto a ponto. Foi separar <mark>objeto de
fundo</mark>, agrupar o que anda junto e comparar com o que você já sabe.

<!--
Fundo, aqui, no sentido perceptual: tudo o que não foi tomado como figura, e que
por isso deixa de ter forma definida.
-->

---
layout: default
---

# O que se chama de percepção

<Termo palavra="Percepção" ingles="perception" origem="Sekuler &amp; Blake, 2002, citados em Eysenck &amp; Keane, cap. 2">

A aquisição e o processamento da informação sensorial para ver, ouvir, provar ou
sentir os objetos no mundo; também guia as ações de um organismo no que diz
respeito a esses objetos.

</Termo>

Repare nas duas metades: perceber é **extrair sentido** do que chegou, e é também
**guiar a ação**. A aula toda vai girar em torno da hipótese de que essas duas
metades correm em <span class="ds-em">vias diferentes</span>.

---
layout: figura
imagem: /aula-02-via-visual.png
rotulo: Fig. 2.2
legenda: "Rota dos sinais visuais: no quiasma, cada metade do campo vai para o hemisfério oposto. Eysenck &amp; Keane (2017)."
lado: direita
ajuste: contain
---

# O percurso do sinal

A luz vira sinal na retina, e o sinal segue pela **via retina-geniculado-estriado**
até as áreas V1 e V2, no lobo occipital.

O detalhe que costuma surpreender: no **quiasma óptico** metade das fibras cruza,
e o resultado é que <mark>cada metade do campo visual é processada no hemisfério
oposto</mark> — não cada olho.

<!--
LGN — núcleo geniculado lateral (em inglês, lateral geniculate nucleus), uma
estação do tálamo. V1 e V2 são as duas primeiras áreas visuais do córtex; V1
também aparece na literatura como córtex visual primário ou BA17.
-->

---
layout: figura
imagem: /aula-02-areas-visuais.png
rotulo: Fig. 2.7
legenda: Secção transversal do córtex visual do macaco, com V1 a V5. Zeki (1992), em Eysenck &amp; Keane (2017).
lado: direita
ajuste: contain
---

# Uma área para cada atributo

Depois de V1 e V2, o processamento se divide por **atributo**: forma numa área,
cor noutra, movimento noutra.

Zeki chamou isso de **especialização funcional** e deu duas razões: os atributos
aparecem em combinações imprevisíveis — um carro pode ser de qualquer cor —, e
processar movimento exige comparar instantes, enquanto processar forma exige
comparar posições no mesmo instante.

<Fonte>Esta é a primeira correlação função–estrutura da aula: função cognitiva de um lado, área do outro.</Fonte>

---
layout: figura
imagem: /aula-02-gestalt.png
rotulo: Figs. 3.3 e 3.4
legenda: "Proximidade, similaridade, boa continuidade e fechamento; abaixo, o
  desenho ambíguo faces-cálice. Eysenck &amp; Keane (2017)."
lado: direita
ajuste: contain
---

# Como o cérebro decide o que é um objeto

<Termo palavra="Lei de Prägnanz" ingles="law of Prägnanz" origem="Koffka, Köhler e Wertheimer">

Percebemos a organização mais simples possível do campo visual. As demais leis
da Gestalt são casos particulares dela.

</Termo>

são elas que decidem, na plataforma lotada,
quais manchas formam <span class="ds-em">uma</span> pessoa.

<!--
Prägnanz — palavra alemã, sem tradução consagrada; a ideia é a de "boa forma",
concisão. Pronuncia-se aproximadamente "prégnants".
-->

---
layout: secao
numero: "02"
kicker: Parte 2
title: Perceber não é agir
note: A mesma imagem alimenta dois sistemas com funções diferentes. Dá para perder um e ficar com o outro.
---

---
layout: figura
imagem: /aula-02-vias-ventral-dorsal.png
rotulo: Fig. 2.3
legenda: "As vias ventral (“o quê”) e dorsal (“como/onde”) têm origem em V1.
  Gazzaniga e colaboradores (2008), em Eysenck &amp; Keane (2017)."
lado: direita
ajuste: contain
---

# Duas correntes, duas funções

A partir de V1 o processamento segue por dois caminhos: a **corrente ventral**,
que termina no córtex temporal inferior, e a **corrente dorsal**, que termina no
córtex parietal posterior.

Milner e Goodale propuseram que não são duas etapas do mesmo processo, e sim
<mark>dois sistemas com finalidades diferentes</mark>.

<!--
Ventral e dorsal descrevem posição: ventral é o caminho de baixo, dorsal o de
cima. Na literatura mais antiga a corrente dorsal aparece como via "onde".
-->

---
layout: comparacao
kicker: Milner e Goodale, 1995 e 2008
title: Visão para a percepção × visão para a ação
esquerda: Corrente ventral — “o quê”
direita: Corrente dorsal — “como”
pergunta: As duas recebem a mesma imagem. O que muda é <span class="ds-em">para que a imagem é usada</span> — e isso basta para separá-las.
---

::esquerda::

- Serve à **identificação**: isto é um gato ou um búfalo?
- Codificação **alocêntrica** — centrada no objeto
- Representações de **longa duração**, e em geral conscientes

::direita::

- Serve à **ação guiada visualmente**: pegar, desviar, rebater
- Codificação **egocêntrica** — centrada no corpo, aqui e agora
- Representações de **curta duração**, e em geral inconscientes

---
layout: default
---

# A paciente DF

<Caso titulo="DF e a fenda" contexto="Goodale &amp; Milner, 1992" pergunta="Como alguém pode falhar em descrever a inclinação de uma fenda e acertar ao enfiar um cartão nela?">

DF tem lesão na corrente ventral. Diante de um bloco com uma fenda, ela não
consegue girar um cartão até a inclinação certa para mostrar como ele encaixaria.
Mas quando lhe pedem que **enfie** o cartão na fenda, ela acerta — a mão gira
sozinha, no caminho.

</Caso>

<!--
Agnosia da forma visual — perda grave do reconhecimento de objetos, com a
informação visual chegando normalmente ao córtex. É o quadro de DF.
-->

---
layout: default
---

# E o prejuízo inverso

Pacientes com **ataxia óptica**, lesão na corrente dorsal, mostram o padrão
oposto: descrevem o objeto sem dificuldade e erram ao alcançá-lo.

<Nota titulo="Onde já vimos isso">

É uma **dissociação dupla**, o argumento da aula 01: como cada lesão derruba o
que a outra preserva, "uma tarefa é mais difícil" deixa de explicar o par.

</Nota>

<!--
Ataxia óptica — dificuldade de fazer movimentos guiados pela visão, com a
percepção visual razoavelmente preservada. A lesão fica no córtex parietal
posterior.
-->

---
layout: figura
imagem: /aula-02-areas-face.jpg
rotulo: Fig. 3.13
legenda: "Regiões seletivas de faces: área facial anterior (AFP2), fusiforme (FFA) e occipital (OFA). Weiner &amp; Grill-Spector (2012), em Eysenck &amp; Keane (2017)."
lado: direita
ajuste: contain
---

# Faces: uma área, ou uma rede?

<MitoFato
  mito="Existe no cérebro uma área dedicada só a reconhecer rostos"
  fato="A FFA participa do reconhecimento de faces — e também responde a muita coisa que não é face">

Kanwisher e colaboradores acharam maior ativação da FFA para faces em **80%** dos
participantes — não em todos. E prosopagnósicos costumam ter lesão na **OFA**.

</MitoFato>

<Fonte>Até 2% da população tem prosopagnosia. FFA — área facial fusiforme; OFA — área facial occipital.</Fonte>

---
layout: default
---

<Checagem
  rotulo="Checagem 2"
  pergunta="Um paciente descreve com precisão o formato e a inclinação de uma maçaneta, mas erra a mão ao girá-la. Onde está a lesão mais provável?"
  :alternativas="[
    'Corrente ventral, córtex temporal inferior',
    'Corrente dorsal, córtex parietal posterior',
    'Área V1, córtex occipital',
    'Área facial fusiforme, córtex temporal ventral',
  ]" />

---
layout: default
---

# Resposta 2

<Nota tipo="ok" titulo="b. Corrente dorsal, córtex parietal posterior">

Percepção preservada e ação guiada pela visão prejudicada: é o quadro da ataxia
óptica, o inverso do de DF.

</Nota>

- **a** produziria o padrão contrário — falha em descrever, acerto ao agir.
- **c** derrubaria o sinal antes de ele se dividir: haveria perda de campo
  visual, não um erro de mão com a percepção intacta.
- **d** é território de faces; não tem por que atrapalhar uma maçaneta.

---
layout: secao
numero: "03"
kicker: Parte 3
title: "Atenção: o que é e como se divide"
note: Chega mais informação do que cabe. A atenção é o que decide o que passa.
---

---
layout: default
---

# Caso 2

<Caso titulo="A festa" contexto="Cherry, 1953" pergunta="Como você acompanha uma voz entre dez, e como às vezes uma delas invade a conversa que você escolheu?">

Numa festa, você conversa com alguém em meio a várias vozes ao mesmo tempo. Dá
conta. Mas se alguém pronuncia o seu nome do outro lado da sala, você escuta —
e naquele instante perde o fio da conversa em que estava.

</Caso>

As duas metades importam. A primeira mostra que a seleção **funciona**; a segunda,
que o canal descartado <mark>não foi descartado por completo</mark>.

<!--
Efeito coquetel (cocktail party effect) — nome com que o fenômeno aparece na
bibliografia. A tarefa de laboratório correspondente é o sombreamento
(shadowing): repetir em voz alta a mensagem de um dos ouvidos.
-->

---
layout: default
---

# A definição

<Termo palavra="Atenção" ingles="attention" origem="Lima, 2005">

A capacidade do indivíduo de responder predominantemente aos estímulos que lhe
são significativos, em detrimento de outros.

</Termo>

<Citacao autor="William James" fonte="1890, citado por Kandel, 1997, p. 323">

Todo mundo sabe o que é atenção. É a tomada de posse pela mente, de forma clara
e vívida, de um dentre o que parecem ser vários objetos possíveis simultâneos ou
linha de pensamento. A focalização e a concentração da consciência são suas
essências.

</Citacao>

---
layout: default
---

# Três coisas que a definição já implica

<Grade :cols="3">
<Cartao rotulo="1" titulo="Há controle voluntário">

Dá para dirigir a atenção de propósito — e é isso que se pede quando se pede que
alguém preste atenção.

</Cartao>
<Cartao rotulo="2" titulo="Não dá para atender a tudo">

Selecionar um estímulo implica **abster-se** de outros. Seleção e exclusão são a
mesma operação vista de dois lados.

</Cartao>
<Cartao rotulo="3" titulo="A capacidade é limitada" destaque>

O limite não é do órgão sensorial: é do processamento. É por isso que a atenção
tem de escolher.

</Cartao>
</Grade>

<Fonte>As três decorrem do relato de James e organizam tudo o que vem a seguir. Lima (2005).</Fonte>

---
layout: comparacao
kicker: Primeiro critério — pela natureza
title: Voluntária × involuntária
esquerda: Voluntária (controlada)
direita: Involuntária (automática)
pergunta: "Não é uma escala de esforço: são <span class='ds-em'>dois modos de processamento</span>, e o segundo não pede permissão ao primeiro."
---

::esquerda::

- Seleção **ativa e deliberada** do indivíduo
- Ligada a motivações, interesses e expectativas
- Enquanto uma modalidade é atendida, as outras ficam **inibidas**: lendo, você
  deixa de ouvir a conversa ao lado

::direita::

- Suscitada pelas **características do estímulo**
- O indivíduo não escolhe: intensidade, cor, novidade e movimento capturam
- Liga-se à **reação de orientação** — os olhos giram antes da decisão, e sem
  controle consciente

---
layout: figura
imagem: /aula-02-tipos-atencao.svg
rotulo: Esquema 1
legenda: Três critérios independentes de classificação. Esquema autoral, a
  partir de Lima (2005).
lado: cheia
ajuste: contain
---

<Fonte>Foco externo é chamado de percepção seletiva; foco interno, de cognição seletiva. Gazzaniga e colaboradores (1998); Lent (2002).</Fonte>

---
layout: default
---

# 1. Atenção seletiva

<Termo palavra="Atenção seletiva" ingles="selective attention" origem="Lima, 2005">

Capacidade de privilegiar determinados estímulos em detrimento de outros. É o
mecanismo básico, do qual os demais dependem.

</Termo>

<Grade :cols="2">
<Cartao rotulo="no dia a dia" titulo="Ler no ônibus">

A conversa atrás de você continua audível — e ainda assim a linha do texto avança.

</Cartao>
</Grade>

<Fonte>Desde os anos 1950 discute-se <em>em que ponto</em> a seleção acontece. A evidência fica no meio: o canal descartado recebe algum processamento, só que menos.</Fonte>

<!--
Seleção inicial (early selection) — o estímulo não atendido é barrado antes da
análise de significado; é a proposta de Broadbent. Seleção tardia (late
selection) — tudo é analisado e a seleção vem depois; é a de Deutsch e Deutsch.
A teoria da atenuação, de Treisman, fica entre as duas.
Escuta dicótica — mensagens diferentes apresentadas a cada ouvido ao mesmo tempo.
-->

---
layout: default
---

# 2. Atenção sustentada

<Termo palavra="Atenção sustentada" ingles="sustained attention" origem="Lima, 2005; Dalgalarrondo, 2000; Sarter e colaboradores, 2001">

Capacidade de manter o foco atencional em determinado estímulo, ou sequência de
estímulos, **durante um período de tempo**.

</Termo>

<Grade :cols="2">
<Cartao rotulo="no dia a dia" titulo="Acompanhar uma aula inteira">

A queda ao longo do tempo não é falta de interesse — é uma propriedade do sistema.

</Cartao>
<Cartao rotulo="como se mede" titulo="Teste de Performance Contínua">

Sessão longa, alvos raros, uma resposta a cada alvo: <mark>a medida é em minutos,
não em acertos</mark>.

</Cartao>
</Grade>

<!--
Teste de Performance Contínua (Continuous Performance Test, CPT) — pontua erros,
omissões e tempo de reação ao longo da sessão.
-->

---
layout: figura
imagem: /aula-02-vigilancia.svg
rotulo: Esquema 2
legenda: "O decremento da vigilância. Curva esquemática: importa a forma da
  queda, não os valores."
lado: cheia
ajuste: contain
---

# O decremento da vigilância

A tarefa não mudou, os alvos são os mesmos, o observador é o mesmo — e a detecção
cai assim mesmo. O que cede é a sustentação.

<Fonte>A vigilância depende dos lobos frontal e parietal, sobretudo à direita. Sarter e colaboradores (2001).</Fonte>

---
layout: default
---

# 3. Atenção alternada

<Termo palavra="Atenção alternada" ingles="alternating attention" origem="Lima, 2005">

Capacidade de alternar o foco atencional: **desengajar** de um estímulo e
**engajar** em outro.

</Termo>

<Grade :cols="2">
<Cartao rotulo="no dia a dia" titulo="Anotar e olhar o slide">

Você não faz as duas coisas juntas. Você vai e volta — e cada ida e volta cobra
um pedágio de tempo.

</Cartao>
</Grade>

<Fonte>WCST — Wisconsin Card Sorting Test. Culbertson &amp; Krull (1996) classificam os dois como medidas de flexibilidade.</Fonte>

---
layout: default
---

# 4. Atenção dividida

<Termo palavra="Atenção dividida" ingles="divided attention" origem="Lima, 2005">

Desempenho de **duas tarefas ao mesmo tempo**. Funciona quando uma delas é
mediada por processamento automático e a outra por processamento controlado.

</Termo>

<Grade :cols="2">
<Cartao rotulo="no dia a dia" titulo="Dirigir e conversar">

Por um trajeto conhecido, dá conta. Num cruzamento desconhecido, não dá — e a
conversa para sem que ninguém decida parar.

</Cartao>
<Cartao rotulo="o limite" titulo="Duas tarefas controladas">

Se as duas exigirem esforço cognitivo, elas disputam a mesma capacidade limitada
— e o desempenho cai nas duas.

</Cartao>
</Grade>

<Fonte>Lima (2005); Eysenck &amp; Keane (1994).</Fonte>

---
layout: figura
imagem: /aula-02-tarefa-dupla.svg
rotulo: Esquema 3
legenda: A condição em que duas tarefas simultâneas funcionam — e a em que não funcionam.
lado: cheia
ajuste: contain
---

# Três condições que melhoram a tarefa dupla

- as tarefas são **dissimilares** — usam canais diferentes
- as tarefas são **relativamente fáceis**
- as tarefas são **bem treinadas** — a prática é o que automatiza uma delas

---
layout: atividade
title: Quatro situações, quatro nomes
passos:
  - "Classifiquem cada situação abaixo: seletiva, sustentada, alternada ou
    dividida"
  - "Escrevam, em uma linha, o que decidiu o nome"
entrega: A lista classificada, e a situação em que a dupla discordou
---

1. Estudar com o grupo do WhatsApp aberto no celular
2. Assistir a uma partida inteira sem perder um lance
3. Andar de bicicleta conversando com quem vai ao lado
4. Ouvir música com letra e escrever um texto ao mesmo tempo

---
layout: destaque
kicker: A devolutiva
title: Ouvir música e estudar é atenção <span class="ds-em-2">alternada</span> — não dividida
tipo: tese
fonte: Lima (2005)
---

Escrever exige processamento controlado. Acompanhar a letra, também. Como as duas
não podem correr juntas, o que acontece é **troca** — e cada volta cobra o seu
tempo. Isso não decide se você deve estudar com música: decide como o fenômeno
se chama, e o custo que ele tem.

---
layout: default
---

# E "atenção concentrada"?

<Nota titulo="Uma questão de vocabulário, não de mecanismo">

O termo é corrente na semiologia brasileira e nos testes de avaliação
psicológica — o **teste AC**, o **Toulouse-Piéron** —, mas não aparece como um
quinto tipo na classificação operacional.

O que ele nomeia é a combinação de **focalização** com **sustentação** sobre um
estímulo: manter, por um tempo, um foco estreito. Em James, é a "focalização e
concentração da consciência".

</Nota>

Ao ler um laudo, então, vale a tradução: *atenção concentrada preservada* quer
dizer que a pessoa consegue estreitar o foco e mantê-lo — não que exista uma
função separada das quatro que vimos.

---
layout: default
---

<Checagem
  rotulo="Checagem 3"
  pergunta="Um estudante lê um capítulo enquanto responde mensagens no celular, e depois não lembra do que leu. Como se classifica melhor o que ele fez?"
  :alternativas="[
    'Atenção dividida, porque as duas tarefas ocorreram no mesmo intervalo',
    'Atenção alternada, porque ler e responder exigem processamento controlado',
    'Atenção sustentada, porque ele manteve o foco no capítulo por um período',
    'Atenção involuntária, porque o celular capturou a atenção dele',
  ]" />

---
layout: default
---

# Resposta 3

<Nota tipo="ok" titulo="b. Atenção alternada, porque ler e responder exigem processamento controlado">

Não há automatismo em nenhuma das duas. O que houve foi troca de foco — e a falha
de memória é o custo dessas trocas.

</Nota>

- **a** é o erro mais comum: ocorrer no mesmo intervalo não é ocorrer ao mesmo
  tempo. Atenção dividida exige que **uma** das tarefas seja automática.
- **c** descreve o que ele tentou fazer, não o que fez: a sustentação foi
  justamente o que se rompeu.
- **d** nomeia só a captura pelo celular. É verdade que ela ocorre, mas a
  classificação pedida é a operacional, e ali a resposta é alternada.

---
layout: secao
numero: "04"
kicker: Parte 4
title: Função e estrutura
note: Cada função atencional tem estruturas associadas — e é por isso que uma lesão produz uma falha, e não outra.
---

---
layout: figura
imagem: /aula-02-posner.svg
rotulo: Esquema 4
legenda: "Pista válida, neutra e inválida: o tempo de reação mede o deslocamento da atenção."
lado: direita
ajuste: contain
---

# Como se mede um deslocamento invisível

<Pessoa nome="Michael I. Posner" papel="psicólogo cognitivo, Universidade de Oregon" foto="https://upload.wikimedia.org/wikipedia/commons/8/89/Michael_I_Posner.jpg">

Desenhou, em 1980, o paradigma que separou a atenção do movimento dos olhos.

</Pessoa>

O olhar fica parado no centro o tempo todo. Como a única coisa que se moveu foi
a atenção, a diferença entre as três condições <mark>é a medida desse
movimento</mark>.

<!--
Atenção encoberta (covert attention) — atender a um objeto sem mover os olhos
em direção a ele.
-->

---
layout: comparacao
kicker: O que o paradigma revelou
title: Endógena × exógena
esquerda: Sistema endógeno
direita: Sistema exógeno
pergunta: É a mesma distinção de voluntária e involuntária, agora com um <span class="ds-em-2">procedimento</span> que separa as duas.
---

::esquerda::

- Controlado pelas **intenções** do indivíduo
- Acionado pelas pistas **centrais** — a seta no meio da tela
- Se a pista deixa de informar, ela é **ignorada**. É o mais lento dos dois

::direita::

- Desloca a atenção **automaticamente**
- Acionado pelas pistas **periféricas** — o quadro que pisca na borda
- Influencia **mesmo sem informar nada**. É o mais rápido, e mais ligado ao objeto

---
layout: figura
imagem: /aula-02-redes-atencao.png
rotulo: Fig. 5.6
legenda: Áreas de cada rede, por conectividade funcional. Corbetta &amp; Shulman (2011), em Eysenck &amp; Keane (2017).
lado: direita
ajuste: contain
---

# Cada sistema tem a sua rede

A **rede dorsal**, frontoparietal e nos dois hemisférios, é dirigida pelo
objetivo. A **rede ventral**, só à direita, é dirigida pelo estímulo e serve de
curto-circuito: interrompe o foco quando algo inesperado aparece.

Ter só a primeira seria perigoso — nada tiraria a atenção do que você decidiu
olhar.

<Fonte>Corbetta &amp; Shulman (2002, 2011). A TMS aplicada à junção têmporo-parietal direita prejudica o sistema dirigido pelo estímulo e poupa o dirigido pelo objetivo — o que autoriza dizer "necessária", e não só "ativada".</Fonte>

---
layout: default
---

# Antes da atenção, o alerta

<Termo palavra="Formação reticular e SARA" ingles="reticular formation; ascending reticular activating system" origem="Lima, 2005; Brandão, 1995; Guyton, 1985">

Estrutura do tronco encefálico que regula o **estado de alerta** e mantém o tônus
cortical necessário para que os estímulos sejam recebidos. O sistema ativador
reticular ascendente tem dois componentes: o **mesencefálico**, que produz vigília
difusa, e o **talâmico**, que ativa regiões específicas do córtex.

</Termo>

Lent separa as duas coisas: o **alerta** é a sensibilização geral; a **atenção
propriamente dita** é a focalização. Sem a primeira, a segunda não tem sobre o que
operar — daí a aula das 21h30 ser mais difícil que a das 19h.

<!--
SARA — sistema ativador reticular ascendente. Tônus cortical: nível basal de
ativação do córtex. A modulação envolve neurônios dopaminérgicos do núcleo A10.
-->

---
layout: default
---

# Três sistemas, três endereços

O sistema de **orientação**, em três momentos:

<Etapas :itens="[
  { titulo: 'Desengajar', desc: 'parietal posterior, à direita' },
  { titulo: 'Deslocar', desc: 'colículo superior' },
  { titulo: 'Engajar', desc: 'pulvinar, no tálamo' },
]" />

<Grade :cols="2">
<Cartao rotulo="controle executivo" titulo="Giro cingulado anterior">

Detecta a relevância e **inibe** a interferência. É a área que se ativa quando a
pessoa resolve o conflito do Stroop.

</Cartao>
<Cartao rotulo="vigilância" titulo="Lobos frontal e parietal, à direita">

Sustenta a atenção. Vem com queda da frequência cardíaca e aumento do fluxo
sanguíneo nessas áreas.

</Cartao>
</Grade>

<Fonte>Lima (2005), a partir de Gazzaniga e colaboradores (1998), Macleod &amp; Macdonald (2000) e Sarter e colaboradores (2001).</Fonte>

---
layout: figura
imagem: /aula-02-negligencia.png
rotulo: Fig. 5.7
legenda: "Cópia de figuras e desenho do relógio, por um paciente com negligência: o lado esquerdo some nas duas. Danckert &amp; Ferber (2006), em Eysenck &amp; Keane (2017)."
lado: direita
ajuste: contain
---

# Quando a rede ventral é lesionada

<Termo palavra="Negligência espacial" ingles="spatial neglect" origem="Eysenck &amp; Keane, cap. 5">

Ausência de consciência do estímulo apresentado do lado oposto ao da lesão
cerebral. A lesão costuma ser à **direita**, e o lado esquecido, o **esquerdo**.

</Termo>

O paciente não está cego desse lado: o sinal chega. <mark>O que falta é
atendê-lo.</mark> Quase todas as áreas envolvidas ficam dentro da rede ventral.

<!--
Extinção — quadro aparentado, mais brando: o estímulo do lado oposto à lesão só
deixa de ser detectado quando outro é apresentado ao mesmo tempo do lado da lesão.
-->

---
layout: figura
imagem: /aula-02-busca-visual.png
rotulo: Fig. 5.9
legenda: "Busca por traço isolado e por conjunção: o número de itens só pesa na segunda. Dados de Treisman e Gelade (1980), em Eysenck &amp; Keane (2017)."
lado: direita
ajuste: contain
---

# A atenção como cola

<Pessoa nome="Anne Treisman" papel="1935–2018, psicóloga cognitiva" foto="https://upload.wikimedia.org/wikipedia/commons/b/b8/Anne_Treisman.jpg">

Propôs, com Garry Gelade em 1980, a **teoria da integração de traços**.

</Pessoa>

Traços isolados — cor, tamanho, orientação — são processados em paralelo, sem
atenção. Ligar dois traços num objeto exige atenção focada, **um item por vez**.
Sem ela, os traços se recombinam ao acaso: é a **conjunção ilusória**.

---
layout: figura
imagem: /aula-02-raio-x-bagagem.jpg
rotulo: Fig. 5.8
legenda: Uma imagem real de raio-X de bagagem — há uma arma nela. McCarley e colaboradores (2004), em Eysenck &amp; Keane (2017).
lado: direita
ajuste: contain
---

# Ache a arma

É esta a tarefa de quem opera o raio-X do aeroporto: uma **busca por conjunção**
num display cheio, com os objetos sobrepostos e em qualquer orientação.

Quanto tempo levou? <mark>Agora imagine seis horas de turno</mark> — e um alvo que
quase nunca aparece.

<!--
A arma está um pouco acima do centro da imagem. Vale dar uns 20 segundos à turma
antes de apontar — o ponto do slide seguinte é que, no turno real, o alvo é raro,
e é a raridade que derruba a detecção.
-->

---
layout: default
---

# No mundo real: o raio-X da bagagem

<Experimento
  nome="Alvos raros passam despercebidos"
  autoria="Wolfe e colaboradores, 2007"
  pergunta="A raridade de um alvo muda a chance de encontrá-lo?"
  metodo="Observadores procuravam armas em imagens de raio-X de bagagem, variando a frequência com que o alvo aparecia"
  achado="Com alvo em 50% das tentativas, 80% eram detectados. Com alvo em 2%, apenas 54%." />

A causa não é fadiga: é **excesso de cautela** em relatar algo tão inesperado.
Por isso a segurança aeroportuária insere ameaças fictícias nas imagens — aumentar
artificialmente a frequência do alvo melhora a detecção.

---
layout: default
---

# Ver não basta: é preciso atender

<Grade :cols="2">
<Cartao rotulo="Simons &amp; Chabris, 1999" titulo="Cegueira por desatenção">

Contando os passes de bola, **50%** dos observadores não veem uma pessoa fantasiada
de gorila atravessar a cena e bater no peito, por 9 segundos.

Falha em perceber um objeto **inesperado**, mas perfeitamente visível.

</Cartao>
<Cartao rotulo="Levin e colaboradores, 2002" titulo="Cegueira à mudança">

Falha em detectar uma mudança visual substancial de uma cena para a outra. E há
a **cegueira para a cegueira à mudança**: as pessoas superestimam muito a própria
capacidade de detectá-la.

</Cartao>
</Grade>

O vídeo original está em
[youtube.com/watch?v=vJG698U2Mvo](https://www.youtube.com/watch?v=vJG698U2Mvo) —
mas só funciona com quem ainda não o conhece.

---
layout: default
---

# O caso com consequência

<Experimento
  nome="Telefone celular e direção"
  autoria="Strayer e colaboradores, 2011; Caird e colaboradores, 2008"
  pergunta="Falar ao telefone enquanto dirige muda o comportamento do motorista?"
  metodo="Revisão de estudos de direção simulada e observação de motoristas em condições naturais"
  achado="Risco de colisão 4 vezes maior; tempo de reação 250 ms mais lento; 75% dos usuários de telefone não pararam completamente num cruzamento, contra 21% dos não usuários." />

250 ms parece pouco. A 80 km/h, são **5,5 metros a mais** antes de o carro parar.
E não muda com o viva-voz: o que compete não são as mãos, é o processamento.

<Fonte>Nos usuários de telefone, a amplitude da P300 — onda cerebral associada à atenção — cai pela metade.</Fonte>

---
layout: destaque
kicker: O dado mais recente
title: <span class="ds-em-2">r = −0,38</span> entre uso de vídeo curto e atenção
tipo: dado
fonte: Nguyen e colaboradores (2025), meta-análise de 71 estudos, 98.299 participantes
---

Também **r = −0,41** para controle inibitório, em jovens e adultos.

<Nota tipo="alerta" titulo="O que esse número não diz">

Os estudos são **correlacionais**: quem já tem menor controle atencional pode
simplesmente usar mais.

</Nota>

---
layout: default
---

<Checagem
  rotulo="Checagem 4"
  pergunta="Um paciente com lesão à direita não risca nenhum traço do lado esquerdo da folha, mas enxerga normalmente quando testado com um estímulo de cada vez. Qual é a explicação?"
  :alternativas="[
    'Lesão em V1 direita, com perda do campo visual esquerdo',
    'Lesão na rede ventral direita, com falha em atender ao lado contralesional',
    'Lesão na corrente ventral direita, com falha em reconhecer os traços',
    'Lesão no colículo superior, com incapacidade de mover os olhos para a esquerda',
  ]" />

---
layout: default
---

# Resposta 4

<Nota tipo="ok" titulo="b. Lesão na rede ventral direita, com falha em atender ao lado contralesional">

É negligência espacial. O detalhe decisivo está no enunciado: com um estímulo por
vez ele **enxerga**. O que falha é atender, não ver.

</Nota>

- **a** é a confusão central do quadro: perda de campo visual persistiria no teste
  com um estímulo de cada vez.
- **c** troca atenção por reconhecimento — ele identifica os traços que risca; só
  não vai buscá-los à esquerda.
- **d** descreve um problema de movimento ocular. Na negligência o paciente **pode**
  olhar para a esquerda; ele não o faz espontaneamente.

---
layout: fecho
kicker: Fechando
title: O que fica
pontos:
  - "Percepção não é registro: é seleção, agrupamento e comparação com o que já se sabe"
  - "Duas correntes com funções diferentes — ver para reconhecer, ver para agir"
  - "Quatro tipos de atenção, e a diferença prática entre alternar e dividir"
  - "Cada função atencional tem estruturas associadas: é por isso que a lesão produz uma falha específica"
proximo: Aula 03 — Memória
leitura: Eysenck &amp; Keane, cap. 2 e cap. 5; Lima (2005), na íntegra
---

---
layout: default
---

# Referências

<Referencia
  autores="Eysenck, M. W., &amp; Keane, M. T."
  ano="2017"
  titulo="Manual de psicologia cognitiva"
  onde="Artmed, 7ª ed."
  capitulo="cap. 2, 3, 4 e 5, p. 37–200" />

<Referencia
  autores="Lima, R. F."
  ano="2005"
  titulo="Compreendendo os mecanismos atencionais"
  onde="Ciências &amp; Cognição, 6"
  capitulo="p. 113–122"
  link="https://revista.cienciasecognicao.org/index.php/cec/article/view/537" />

<Referencia
  autores="Nguyen, L., Walters, J., Paul, S., e colaboradores"
  ano="2025"
  titulo="Feeds, feelings, and focus: a systematic review and meta-analysis examining the cognitive and mental health correlates of short-form video use"
  onde="Psychological Bulletin, 151(9), 1125–1146"
  link="https://doi.org/10.1037/bul0000498" />

<Referencia
  autores="Corbetta, M., &amp; Shulman, G. L."
  ano="2011"
  titulo="Spatial neglect and attention networks"
  onde="Annual Review of Neuroscience, 34, 569–599"
  link="https://doi.org/10.1146/annurev-neuro-061010-113731" />

<Referencia
  autores="Kong, F., e colaboradores"
  ano="2023"
  titulo="Cognitive control in adolescents and young adults with media multitasking experience: a three-level meta-analysis"
  onde="Educational Psychology Review, 35, 103" />

<Fonte>Retratos de Michael I. Posner e Anne Treisman: Wikimedia Commons. Os doze esquemas são autorais.</Fonte>
