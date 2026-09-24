---
theme: none
title: "Memória: sistemas, processos e correlatos neurais"
info: "Dos segundos da memória operacional à consolidação no córtex: os sistemas de memória, os quatro processos e as estruturas que sustentam cada um"
date: "2026-09-15"
colorSchema: light
download: true
fonts:
  sans: Inter
  serif: Source Serif 4
  mono: JetBrains Mono
layout: capa
kicker: Unidade 1 · Aula 03
subtitle: O que acontece com uma informação entre <span class="ds-em">registrá-la e
  recuperá-la</span>.
meta: Processos Cognitivos e Neurociências · Psicologia · 1º semestre
---


---
layout: default
---

# Para onde vamos

<Objetivos :itens="[
  'Compreender os sistemas da memória',
  'Descrever os quatro processos da memória',
  'Relacionar estruturas cerebrais com a memória',
]" />

---
layout: roteiro
kicker: O caminho de hoje
title: Quatro paradas
itens:
  - {
      tema: "Os sistemas de memória",
    }
  - {
      tema: "Os quatro processos",
      desc: "da entrada da informação até o resgate"
    }
  - {
      tema: "Onde a memória acontece",
      desc: "o caso H.M."
    }
  - {
      tema: "Quando a memória falha",
      desc: "distorções e amnésias"
    }
---

---
layout: secao
numero: "01"
kicker: Parte 1
title: Os sistemas de memória
note: Como os diferentes tipos de memória são divididos.
---

---
layout: default
---

# Caso 1

<Caso titulo="O código de seis dígitos" pergunta="Por que o código some em segundos, e o número da sua casa, não?">

O aplicativo manda um código de verificação. Você lê, troca de tela, digita os
seis dígitos. Trinta segundos depois, não faria ideia de quais eram. No mesmo
dia, você diz de cor o número da sua casa, que ninguém lhe pediu para decorar.

</Caso>


---
layout: default
---

# O que se chama de memória

<Termo palavra="Memória" ingles="memory" origem="taxonomia de Squire &amp; Kandel">

O conjunto de processos pelos quais uma informação é adquirida, mantida ao longo
do tempo e recuperada quando necessário.

</Termo>

O ponto de partida da aula é que memória <mark>não é uma faculdade única</mark>.
É o nome de vários sistemas, que funcionam com regras diferentes e podem ser
perdidos separadamente.

<!--
Sistema, aqui, no sentido de conjunto de estruturas e operações que podem ser
prejudicadas sem que as demais o sejam.
-->

---
layout: figura
imagem: /aula-03-taxonomia-memoria.svg
rotulo: Esquema 1
legenda: "A memória dividida por duração e, dentro do longo prazo, por acesso
  consciente. Esquema autoral, a partir da taxonomia de Squire &amp; Kandel."
lado: cheia
ajuste: contain
---

<Fonte>Cada nível do esquema usa um critério diferente: primeiro a duração, depois o acesso consciente, por último o conteúdo.</Fonte>

---
layout: comparacao
kicker: Primeiro critério — a duração
title: Curto prazo × operacional
esquerda: Memória de curto prazo
direita: Memória operacional
pergunta: O que muda é se a informação fica <span class="ds-em">parada</span> ou é <span class="ds-em">manipulada</span>.
---

::esquerda::

- **Armazenamento breve**: mantém pouca informação por segundos a poucos minutos
- É o que sustenta repetir um número até anotá-lo
- Capacidade limitada

::direita::

- **Manipulação ativa**: processa, integra e transforma em tempo real
- É o que sustenta acompanhar uma frase longa ou fazer uma conta de cabeça
- Tem partes distintas, uma para cada tipo de material



---
layout: comparacao
kicker: Segundo critério — o acesso consciente
title: Implícita × explícita
esquerda: Memória implícita
direita: Memória explícita
pergunta: "A pergunta que separa as duas é simples: <span class='ds-em-2'>dá para contar o que se sabe?</span>"
---

::esquerda::

- Também chamada **não declarativa**
- Atua sem percepção consciente e se manifesta na **ação**: andar de bicicleta,
  digitar, reagir a um estímulo
- Não depende do hipocampo — usa cerebelo, gânglios da base e amígdala

::direita::

- Também chamada **declarativa**
- Pode ser evocada e **verbalizada**: lembrar de um aniversário, saber a
  capital de um país
- Depende do lobo temporal medial, sobretudo do hipocampo

---
layout: default
---

# Três formas de memória implícita

<Grade :cols="3">
<Cartao rotulo="1" titulo="Habilidades e hábitos">

Adquiridas por repetição. Operam de forma estável e automática, e melhoram sem
que a pessoa saiba dizer o que mudou.

*Andar de bicicleta, dirigir, digitar.*

</Cartao>
<Cartao rotulo="2" titulo="Pré-ativação">

A exposição prévia a um estímulo facilita o reconhecimento de outro relacionado,
sem que a primeira exposição seja lembrada.

*Ouvir "pão" faz reconhecer "manteiga" mais rápido.*

</Cartao>
<Cartao rotulo="3" titulo="Condicionamento">

Aprendizagem associativa entre dois estímulos, ou entre um comportamento e sua
consequência.

*Salivar ao ouvir o sino; pressionar a alavanca para receber alimento.*

</Cartao>
</Grade>

<Fonte>Pré-ativação também aparece na bibliografia como <em>priming</em>. As três operam sem evocação consciente — é isso que as reúne numa categoria.</Fonte>

---
layout: comparacao
kicker: Terceiro critério — o conteúdo
title: Episódica × semântica
esquerda: Memória episódica
direita: Memória semântica
---

::esquerda::

- Guarda **o quê, quando e onde**: eventos vividos, com contexto, lugar e emoção
- É **construtiva** — cada lembrança é remontada, e não lida de um arquivo
- Por isso é a mais vulnerável a distorção, e a primeira a ceder no
  envelhecimento patológico

::direita::

- Guarda **conceitos e fatos** sobre o mundo, desligados do contexto em que
  foram aprendidos
- Você sabe que Brasília é a capital; não faz ideia de quando aprendeu isso
- Tende a ser mais estável e mais bem fixada do que a episódica

---
layout: default
---

<Checagem
  rotulo="Checagem 1"
  pergunta="Uma pessoa aprendeu a andar de skate na adolescência. Hoje, anos depois, executa as manobras sem errar e não consegue descrever a ninguém como faz. Que sistema de memória sustenta esse desempenho?"
  :alternativas="[
    'Memória episódica, porque ela reviveu as situações em que aprendeu',
    'Memória semântica, porque ela retém o conhecimento sobre o skate',
    'Memória implícita, porque o desempenho aparece na ação e não na descrição',
    'Memória operacional, porque ela manipula a informação durante a manobra',
  ]" />

---
layout: default
---

# Resposta 1

<Nota tipo="ok" titulo="c. Memória implícita, porque o desempenho aparece na ação e não na descrição">

O detalhe decisivo está no enunciado: ela **executa** e não **descreve**. É a
assinatura da memória implícita — habilidades e hábitos.

</Nota>

- **a** confunde o conteúdo com o sistema: lembrar das aulas de skate é
  episódico, mas não é isso que sustenta a manobra de hoje.
- **b** é o erro mais comum: saber *sobre* skate é semântico; saber *andar* não é
  conhecimento declarativo nenhum.
- **d** troca duração por tipo. A operacional dura segundos; a habilidade
  sobreviveu a anos sem prática.

---
layout: secao
numero: "02"
kicker: Parte 2
title: Os quatro processos
note: Dizer que alguém "tem memória ruim" não diz nada. A pergunta útil é em qual dos quatro processos a falha aconteceu.
---

---
layout: figura
imagem: /aula-03-quatro-processos.svg
rotulo: Esquema 2
legenda: "Os quatro processos em sequência, e o retorno da reconsolidação.
  Esquema autoral."
lado: cheia
ajuste: contain
---

<Fonte>O arco de volta é o que impede tratar a memória como arquivo: evocar não é abrir um arquivo, é criar uma obra.</Fonte>

---
layout: default
---

# 1. Codificação

<Termo palavra="Codificação" ingles="encoding">

Processo pelo qual uma informação nova é adquirida e transformada num formato
que o sistema de memória consegue reter.

</Termo>

<Grade :cols="2">
<Cartao rotulo="o que ajuda" titulo="Atenção e associação">

Quanto mais atenção uma informação recebe, e quanto mais ela se liga a algo já
consolidado, mais fácil recuperá-la depois.

</Cartao>
<Cartao rotulo="o que ajuda" titulo="Relevância afetiva" destaque>

Motivação e carga emocional entram na codificação — e é por isso que a amígdala
aparece no circuito da memória.

</Cartao>
</Grade>

<Fonte>É aqui que a aula anterior se encaixa: sem atenção seletiva não há codificação, e a falha aparece depois como se fosse de memória.</Fonte>

---
layout: default
---

# 2. Armazenamento

<Termo palavra="Armazenamento" ingles="storage">

Mecanismos e locais pelos quais a informação codificada é retida como memória de
longa duração.

</Termo>

A capacidade é vastíssima, mas o registro recente ainda é instável.

---
layout: default
---

# A curva do esquecimento, 1885 e 2015

<GraficoLinhas
  escalaX="log"
  :maxY="60"
  sufixoY="%"
  tituloY="economia na reaprendizagem"
  descricao="A economia na reaprendizagem cai rápido nas primeiras horas e devagar depois. A réplica de 2015 acompanha a curva original até dois dias e cai bem abaixo dela aos 31 dias."
  :rotulosX="[
    { valor: 20, texto: '20 min' },
    { valor: 60, texto: '1 h' },
    { valor: 540, texto: '9 h' },
    { valor: 1440, texto: '1 dia' },
    { valor: 2880, texto: '2 dias' },
    { valor: 8640, texto: '6 dias' },
    { valor: 44640, texto: '31 dias' },
  ]"
  :series="[
    { nome: 'Ebbinghaus, 1885', pontos: [[20, 58.2], [60, 44.2], [540, 35.8], [1440, 33.7], [2880, 27.8], [8640, 25.4], [44640, 21.1]] },
    { nome: 'Dros, 2015', pontos: [[20, 47.2], [60, 37.3], [540, 27.6], [1440, 31.7], [2880, 23.0], [8640, 16.8], [44640, 4.1]] },
  ]" />

<Fonte>Dados de Murre &amp; Dros (2015)</Fonte>

---
layout: default
---

# O que a curva mostra

<Pessoa nome="Hermann Ebbinghaus" papel="1850–1909, psicólogo alemão" foto="https://upload.wikimedia.org/wikipedia/commons/9/92/Ebbinghaus2.jpg">

Mediu a própria memória com sílabas sem sentido, entre 1880 e 1885. Foi a
primeira vez que um processo mental superior virou curva.

</Pessoa>

A perda é **rápida no começo e lenta depois**, não é uma reta.

---
layout: figura
imagem: /aula-03-consolidacao-sistemica.svg
rotulo: Esquema 3
legenda: "Ao longo de semanas e meses as ligações entre áreas corticais se
  fortalecem e a participação do hipocampo diminui. Esquema autoral."
lado: direita
ajuste: contain
---

# 3. Consolidação

<Termo palavra="Consolidação" ingles="consolidation">

Processo que transforma um registro ainda lábil numa forma estável, resistente à
interferência.

</Termo>

Acontece em duas escalas: na **sinapse**, em minutos a horas, e no **sistema**,
em semanas a anos — quando o traço deixa de depender do hipocampo e passa a se
sustentar no córtex.

<!--
Lábil — instável, fácil de alterar ou perder. Interferência: o efeito de uma
aprendizagem nova sobre uma memória recente ainda não estabilizada.
-->



---
layout: default
---

# 4. Evocação

<Termo palavra="Evocação" ingles="retrieval">

Processo pelo qual a informação armazenada é recuperada e trazida de volta à
consciência.

</Termo>

Duas propriedades que a aula toda vai usar:

- é **facilitada por pistas** — o contexto, o cheiro, a primeira letra, a
  alternativa numa prova;
- é **construtiva**: a lembrança é remontada a cada vez, e cada remontagem
  <mark>pode alterar o que será lembrado depois</mark>.

<Fonte>A segunda propriedade é a reconsolidação do Esquema 2 — e é a porta de entrada das distorções da Parte 4.</Fonte>

---
layout: atividade
title: Recuperação sem consulta
passos:
  - "Feche o caderno e escreva tudo o que lembrar sobre a memória"
  - "Compare com a dupla ao lado e marque o que só um dos dois lembrou"
---

O que vocês acabaram de fazer tem nome, tem mecanismo e tem tamanho de efeito:
tentar recuperar sem consultar fortalece o traço mais do que reler fortaleceria.

<Fonte>Testar-se supera reestudar: g = 0,50 em 222 estudos de sala de aula, com 48.478 alunos (Yang e colaboradores, 2021); d = 0,56 em turmas de psicologia (Schwieren e colaboradores, 2017).</Fonte>

---
layout: default
---

# Memória externa

<MitoFato
  mito="Guardar tudo no celular libera a memória para o que importa"
  fato="Quem espera ter acesso depois lembra menos do conteúdo — e mais de onde ele está guardado">

Sparrow e colaboradores (2011): a expectativa de poder consultar depois já muda o
que é codificado. O registro não desaparece — desloca-se de *o quê* para *onde*.

</MitoFato>

<!--
Descarga cognitiva (cognitive offloading) — usar o ambiente ou um dispositivo
para reduzir a demanda sobre a memória interna.
-->

---
layout: default
---

<Checagem
  rotulo="Checagem 2"
  pergunta="Um estudante lê o capítulo três vezes na véspera e vai mal na prova. O colega leu uma vez, fechou o livro e tentou escrever o que lembrava, duas vezes. Foi bem. Qual processo explica melhor a diferença?"
  :alternativas="[
    'Armazenamento: o segundo guardou mais conteúdo por ter estudado mais tempo',
    'Codificação: a releitura não produz codificação nenhuma',
    'Evocação: praticar a recuperação fortalece o traço mais do que a releitura',
    'Consolidação: o segundo dormiu melhor antes da prova',
  ]" />

---
layout: default
---

# Resposta 2

<Nota tipo="ok" titulo="c. Evocação: praticar a recuperação fortalece o traço mais do que a releitura">

O segundo estudou **menos** tempo. O que ele fez de diferente foi tentar
recuperar — e é a tentativa de recuperação, com esforço, que deixa marca.

</Nota>

- **a** inverte o dado do enunciado: quem passou mais tempo com o texto foi o
  primeiro.
- **b** exagera. A releitura codifica, sim — só codifica menos por minuto
  investido, e produz uma sensação de domínio que a prova não confirma.
- **d** inventa uma informação que não está no enunciado: ninguém disse como
  cada um dormiu.

---
layout: secao
numero: "03"
kicker: Parte 3
title: Onde a memória acontece
note: O caso H.M.
---

---
layout: default
---

# Caso 2

<Caso titulo="Henry Molaison" contexto="Hartford, Connecticut, 1953" pergunta="Como alguém pode aprender uma habilidade nova e, ao mesmo tempo, não lembrar de nenhuma das sessões em que a treinou?">

Aos 27 anos, Henry tinha crises epilépticas incontroláveis. O cirurgião William
Scoville retirou, dos dois lados, estruturas do lobo temporal medial. As crises
diminuíram — e Henry deixou de formar memórias novas.

</Caso>


<!--
Lobo temporal medial — a face interna do lobo temporal, que abriga hipocampo,
amígdala e os córtices entorrinal, perirrinal e parahipocampal.
-->

---
layout: iframe
url: https://www.youtube.com/embed/W0TTQroCjoQ
---

---
layout: figura
imagem: /aula-03-cerebro-hm.png
lado: direita
ajuste: contain
---

# A cirurgia de 1953

A ressecção foi **bilateral**: a mesma região saiu dos dois lados. Com um lado preservado, o outro compensaria, e não
haveria o que observar.

O que saiu: amígdala, córtex entorrinal, boa parte do perirrinal e a porção
anterior do hipocampo.

<!--
Ressecção — retirada cirúrgica de um segmento de tecido. Bilateral: nos dois
hemisférios.
-->

---
layout: default
---

# O que H.M. preservou

<Grade :cols="2">
<Cartao rotulo="preservado" titulo="As memórias antigas">

Tudo o que era anterior à cirurgia continuou disponível: a infância, a
linguagem, os fatos sobre o mundo. A inteligência medida não caiu.

</Cartao>
<Cartao rotulo="preservado" titulo="A aprendizagem de habilidades" destaque>

Na tarefa do desenho no espelho, ele **melhorava sessão após sessão** — e a cada
nova sessão dizia nunca ter feito aquilo antes.

</Cartao>
</Grade>

<Pessoa nome="Brenda Milner" papel="neuropsicóloga, Instituto Neurológico de Montreal" foto="https://upload.wikimedia.org/wikipedia/commons/3/3f/Brenda_Milner.jpg">

Assinou com Scoville, em 1957, o artigo que descreveu o quadro e inaugurou a
neuropsicologia da memória.

</Pessoa>

<Fonte>Desempenho que melhora sem lembrança do treino: é a dissociação entre memória implícita e explícita, num paciente só.</Fonte>

---
layout: figura
imagem: /aula-03-neuroanatomia-memoria.svg
rotulo: Esquema 4
legenda: "Cada estrutura ao lado do sistema que sustenta. Esquema autoral — as
  posições são aproximadas e servem para localizar, não para estudar
  neuroanatomia."
lado: cheia
ajuste: contain
---

<Fonte>O hipocampo é essencial para <em>formar</em> a memória explícita; o armazenamento definitivo, no entanto, é cortical — e é por isso que H.M. mantinha o passado remoto.</Fonte>

---
layout: figura
imagem: /aula-03-ltp-ltd.svg
rotulo: Esquema 5
legenda: "A mesma sinapse em dois estados: potenciada e deprimida. Esquema
  autoral."
lado: direita
ajuste: contain
---

# A escala celular

Descer da estrutura para a sinapse responde a pergunta que faltava: **o que, no
tecido, muda quando alguém aprende?**

A resposta é a eficiência da transmissão entre dois neurônios.

<!--
Sinapse — a região de contato funcional entre dois neurônios. Espinha
dendrítica: a pequena projeção do neurônio pós-sináptico onde a sinapse se
instala.
-->

---
layout: comparacao
kicker: A escala celular
title: LTP × LTD
esquerda: Potenciação de longa duração
direita: Depressão de longa duração
---

::esquerda::

- **Aumento duradouro** da eficiência de uma sinapse, por estimulação repetida
  e intensa
- A candidata mais aceita a **base celular da aprendizagem**

::direita::

- **Enfraquecimento** sináptico, quando a ativação é baixa ou dessincronizada
- Permite o **esquecimento** e o ajuste fino das redes
- Sem ela não haveria como reescrever uma aprendizagem já instalada

<!--
LTP: long-term potentiation. LTD: long-term depression.
-->

---
layout: default
---

<Checagem
  rotulo="Checagem 3"
  pergunta="H.M. melhorava a cada sessão na tarefa do desenho no espelho e, em toda sessão nova, afirmava nunca ter feito aquilo. O que esse padrão demonstra?"
  :alternativas="[
    'Que a amnésia dele era parcial, porque parte das memórias explícitas se formava',
    'Que memória implícita e explícita dependem de circuitos distintos',
    'Que o hipocampo é o local de armazenamento definitivo das memórias',
    'Que a habilidade motora foi aprendida antes da cirurgia',
  ]" />

---
layout: default
---

# Resposta 3

<Nota tipo="ok" titulo="b. Que memória implícita e explícita dependem de circuitos distintos">

O desempenho subiu (implícita preservada) e a lembrança das sessões não se formou
(explícita perdida). Como a lesão derrubou uma e poupou a outra, "uma tarefa é
mais difícil" não explica o par.

</Nota>

- **a** lê o ganho de desempenho como se fosse lembrança. Ele melhorava **sem**
  saber que havia treinado — o que é o oposto de memória explícita parcial.
- **c** contraria o próprio caso: se o hipocampo fosse o depósito final, H.M.
  teria perdido também a infância.
- **d** é impossível pelo enunciado — a melhora ocorreu sessão após sessão,
  depois da cirurgia.

---
layout: secao
numero: "04"
kicker: Parte 4
title: Quando a memória falha
note: A adaptação tem o seu custo.
---

---
layout: atividade
title: Leia e memorize
passos:
  - "Leia a lista abaixo em silêncio, uma vez, em trinta segundos"
  - "Feche o caderno, o celular e os olhos por quinze segundos"
---

cama · repouso · acordar · cansado · sonho · despertar · cochilo · cobertor ·
sonolento · soneca · ronco · travesseiro · paz · bocejo · noite

---
layout: default
---

<Checagem
  rotulo="Teste"
  pergunta="Qual destas palavras estava na lista que você acabou de ler?"
  :alternativas="[
    'travesseiro',
    'dormir',
    'relógio',
    'cadeira',
  ]" />

---
layout: default
---

# A palavra que não estava

<Nota tipo="ok" titulo="a. travesseiro">

**dormir** não estava na lista. Se ela lhe pareceu familiar, o que aconteceu tem
nome.

</Nota>

<Termo palavra="Paradigma DRM" ingles="Deese–Roediger–McDermott paradigm" origem="Roediger &amp; McDermott, 1995">

Uma lista de palavras associadas a um mesmo termo — a **isca crítica** — que não
é apresentado. No teste, a isca é lembrada e reconhecida com frequência
comparável à das palavras de fato apresentadas.

</Termo>

<Fonte>Num estudo normativo recente, as palavras da lista foram reconhecidas em 79% dos casos e as iscas críticas em 45% (Černe e colaboradores, 2023). A ressalva de Pardilla-Delgado &amp; Payne (2017): erro por essência semântica em laboratório não é a mesma coisa que falsa memória de um evento de vida.</Fonte>

---
layout: destaque
title: A memória não guarda registros — ela os <span class="ds-em-2">reconstrói</span>
tipo: tese
fonte: Schacter (1999)
---

---
layout: default
---

# Os sete tipos de falha da memória

<Grade :cols="3">
<Cartao rotulo="01" titulo="Transitoriedade">

O enfraquecimento do traço com o tempo. É a curva de Ebbinghaus, vista de perto.

</Cartao>
<Cartao rotulo="02" titulo="Distração">

Falha de atenção no momento da codificação: as chaves, o fogão, o nome de quem
acabou de se apresentar.

</Cartao>
<Cartao rotulo="03" titulo="Bloqueio">

Incapacidade temporária de evocar algo que está armazenado — a ponta da língua.

</Cartao>
</Grade>


---
layout: default
---

# Três distorções e uma intrusão

<Grade :cols="2">
<Cartao rotulo="04" titulo="Atribuição">

Lembrar do conteúdo certo e da fonte errada: o lugar, a época ou a pessoa
trocados. É o que produz o reconhecimento falso.

</Cartao>
<Cartao rotulo="05" titulo="Sugestibilidade">

Incorporar à lembrança informação que veio de fora — de uma pergunta, de outra
testemunha, de uma reportagem.

</Cartao>
<Cartao rotulo="06" titulo="Viés">

Crenças e conhecimentos atuais reescrevem o passado. Quem mudou de opinião tende
a lembrar que sempre pensou assim.

</Cartao>
<Cartao rotulo="07" titulo="Persistência" destaque>

O oposto do esquecimento: lembranças intrusivas que não cedem. É o eixo
mnêmico do transtorno de estresse pós-traumático.

</Cartao>
</Grade>

<Fonte>Schacter (1999) classifica as sete: 01 a 03 são formas de esquecer, 04 a 06 de distorcer, e 07 é a lembrança que não vai embora. Todas, segundo ele, são subprodutos de propriedades adaptativas do sistema.</Fonte>


---
layout: figura
imagem: /aula-03-amnesias.svg
lado: cheia
rotulo: Esquema 6
legenda: "As duas amnésias definidas pelo momento da lesão. Esquema autoral."
---


<Fonte>O gradiente é a lei de Ribot, e ele é a previsão que a consolidação sistêmica faz: memória antiga já migrou para o córtex, e por isso resiste.</Fonte>

---
layout: default
---

<Checagem
  rotulo="Checagem 4"
  pergunta="Uma testemunha, depois de ouvir outra pessoa comentar que havia um carro azul na cena, passa a relatar com segurança um carro azul que não existia. Qual das sete falhas descreve melhor o ocorrido?"
  :alternativas="[
    'Bloqueio, porque ela não conseguiu acessar a cor verdadeira',
    'Viés, porque as crenças atuais dela distorceram o passado',
    'Sugestibilidade, porque ela incorporou informação vinda de fora',
    'Persistência, porque a cena voltou à lembrança dela repetidas vezes',
  ]" />

---
layout: default
---

# Resposta 4

<Nota tipo="ok" titulo="c. Sugestibilidade, porque ela incorporou informação vinda de fora">

Há uma fonte externa identificável — o comentário da outra pessoa — e o conteúdo
dela entrou na lembrança. É a definição da falha 05.

</Nota>

- **a** descreve o contrário: no bloqueio a informação certa está lá e não sai.
  Aqui saiu uma informação errada, com segurança.
- **b** é o distrator mais forte. Viés também distorce, mas a fonte é **interna**
  — a crença atual da pessoa —, e não algo que alguém disse a ela.
- **d** confunde distorção com intrusão. Persistência é a lembrança que não vai
  embora, não a lembrança que muda.

<Fonte>A escolha entre <strong>b</strong> e <strong>c</strong> é sempre a mesma pergunta: a informação distorcida veio de fora ou de dentro?</Fonte>

---
layout: fecho
kicker: Fechando
title: O que fica
pontos:
  - "Memória são sistemas com durações e circuitos diferentes"
  - "Quatro processos para a memorização"
  - "O caso H.M."
  - "A lembrança é reconstruída, e as falhas acontecem na reconstrução"
---

---
layout: default
---

# Referências

<Referencia
  autores="Scoville, W. B., &amp; Milner, B."
  ano="1957"
  titulo="Loss of recent memory after bilateral hippocampal lesions"
  onde="Journal of Neurology, Neurosurgery &amp; Psychiatry, 20(1), 11–21"
  link="https://doi.org/10.1136/jnnp.20.1.11" />

<Referencia
  autores="Bliss, T. V. P., &amp; Lømo, T."
  ano="1973"
  titulo="Long-lasting potentiation of synaptic transmission in the dentate area of the anaesthetized rabbit following stimulation of the perforant path"
  onde="The Journal of Physiology, 232(2), 331–356"
  link="https://doi.org/10.1113/jphysiol.1973.sp010273" />

<Referencia
  autores="Schacter, D. L."
  ano="1999"
  titulo="The seven sins of memory: insights from psychology and cognitive neuroscience"
  onde="American Psychologist, 54(3), 182–203"
  link="https://doi.org/10.1037/0003-066X.54.3.182" />

<Referencia
  autores="Sparrow, B., Liu, J., &amp; Wegner, D. M."
  ano="2011"
  titulo="Google effects on memory: cognitive consequences of having information at our fingertips"
  onde="Science, 333(6043), 776–778" />

---
layout: default
---

# Referências (2)

<Referencia
  autores="Murre, J. M. J., &amp; Dros, J."
  ano="2015"
  titulo="Replication and analysis of Ebbinghaus' forgetting curve"
  onde="PLoS ONE, 10(7), e0120644"
  link="https://doi.org/10.1371/journal.pone.0120644" />

<Referencia
  autores="Yang, C., Luo, L., Vadillo, M. A., Yu, R., &amp; Shanks, D. R."
  ano="2021"
  titulo="Testing (quizzing) boosts classroom learning: a systematic and meta-analytic review"
  onde="Psychological Bulletin, 147(4), 399–435" />

<Referencia
  autores="Arce, R., Selaya, A., Sanmarco, J., &amp; Fariña, F."
  ano="2023"
  titulo="Implanting rich autobiographical false memories: meta-analysis for forensic practice and judicial judgment making"
  onde="International Journal of Clinical and Health Psychology, 23(4), 100386" />

<Fonte>Demais obras citadas em slide: Roediger &amp; McDermott (1995); Blank &amp; Launay (2014); Schwieren e colaboradores (2017); Pardilla-Delgado &amp; Payne (2017); Černe e colaboradores (2023). Retratos: Wikimedia Commons. Os seis esquemas são autorais.</Fonte>
