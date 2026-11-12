---
theme: none
title: Processamento espacial
info: "Definição, componentes sensorial e perceptivo, as vias ventral e dorsal, percepção visual, orientação espacial e visioconstrução"
date: "2026-11-11"
colorSchema: light
download: true
fonts:
  sans: Inter
  serif: Source Serif 4
  mono: JetBrains Mono
layout: capa
kicker: Aula 06
subtitle: Como <span class="ds-em">usamos</span> a informação espacial que vemos para reconhecer, nos orientar e construir.
meta: Processos Cognitivos e Neurociências · Psicologia · 1º semestre
---


---
layout: default
---

# Para onde vamos

<Objetivos :itens="[
  'Definir processamento visioespacial',
  'Diferenciar os componentes sensorial e perceptivo',
  'Relacionar as vias ventral e dorsal às suas lesões',
  'Diferenciar agnosia aperceptiva e associativa',
  'Descrever as formas de desorientação espacial',
  'Descrever o que a cópia de um desenho exige',
]" />

---
layout: roteiro
kicker: O caminho de hoje
title: Quatro blocos
itens:
  - {
      tema: "O que é processamento espacial",
      desc: "definição e as duas vias"
    }
  - {
      tema: "Percepção visual",
      desc: "as agnosias"
    }
  - {
      tema: "Orientação espacial",
    }
  - {
      tema: "Visioconstrução",
    }
---

---
layout: destaque
tipo: pergunta
kicker: Para começar
title: Por que algumas pessoas se perdem num lugar que <span class="ds-em">já conhecem</span>?
---

---
layout: secao
numero: "01"
kicker: Parte 1
title: O que é processamento espacial
note: Definição, componentes e as duas vias.
---

---
layout: default
---

<Termo palavra="Processamento visioespacial" ingles="visuospatial processing" origem="Paula et al., 2013">

Componente da cognição responsável por **captar, armazenar e usar** as
informações espaciais que vemos, nas tarefas do dia a dia.

</Termo>

Está em <mark>reconhecer um objeto, copiar um desenho e ler um mapa</mark>.

---
layout: comparacao
kicker: Dois componentes
title: Sensorial × perceptivo
esquerda: Componente sensorial
direita: Componente perceptivo
---

::esquerda::

- **Captar** a informação do meio
- Começa nos cones e bastonetes da retina
- Segue pelo nervo óptico até o córtex visual primário

::direita::

- **Interpretar** o que foi captado
- Acontece nas áreas visuais associativas
- Monta a cena que reconhecemos

<!--
Córtex visual primário (V1): a primeira área do córtex a receber a informação
visual, no lobo occipital.
Áreas associativas: as que recebem a informação de V1 e a combinam.
-->

---
layout: default
---

# Três componentes

<Grade :cols="3">
<Cartao rotulo="01" titulo="Percepção visual">

Reconhecer objetos, formas, cores e rostos.

</Cartao>
<Cartao rotulo="02" titulo="Orientação espacial">

Localizar-se e deslocar-se no ambiente.

</Cartao>
<Cartao rotulo="03" titulo="Visioconstrução">

Juntar partes num todo: desenhar, copiar, montar.

</Cartao>
</Grade>

---
layout: figura
imagem: /aula-02-vias-ventral-dorsal.png
rotulo: Fig. 2.3
legenda: "As vias ventral e dorsal têm origem em V1. Gazzaniga e colaboradores (2008), em Eysenck &amp; Keane (2017)."
lado: direita
ajuste: contain
---

# Duas vias a partir do lobo occipital

A via **ventral** diz <mark>o quê</mark> é o objeto.

A via **dorsal** diz <mark>onde</mark> ele está.

<!--
Já vimos as duas vias na aula 02.
Ventral: o caminho de baixo, do occipital ao temporal.
Dorsal: o caminho de cima, do occipital ao parietal.
-->

---
layout: comparacao
kicker: Lesões
title: Quando cada via falha
esquerda: Via ventral · o quê
direita: Via dorsal · onde
---

::esquerda::

- **Acromatopsia**: não reconhece cores
- **Agnosia visual**: não reconhece objetos
- **Prosopagnosia**: não reconhece rostos

::direita::

- **Heminegligência**: ignora um lado do espaço
- **Síndrome de Bálint**
- **Apraxias**

<!--
Síndrome de Bálint: a pessoa só consegue perceber um objeto de cada vez, tem
dificuldade de alcançar com a mão o que vê e de dirigir o olhar.
Apraxia: dificuldade de executar um movimento aprendido, sem fraqueza ou
paralisia que a explique.
Heminegligência: já vimos na aula 02, como negligência espacial.
-->

---
layout: secao
numero: "02"
kicker: Parte 2
title: Percepção visual
note: As agnosias visuais.
---

---
layout: default
---

<Termo palavra="Agnosia visual" ingles="visual agnosia">

Incapacidade de reconhecer e identificar objetos pela visão, com as funções
visuais básicas preservadas.

</Termo>

A informação chega ao córtex, e é o <mark>reconhecimento</mark> que falha.

<!--
É o distúrbio mais característico da percepção visual.
-->

---
layout: comparacao
kicker: Agnosia visual
title: Aperceptiva × associativa
esquerda: Aperceptiva
direita: Associativa
---

::esquerda::

- Falha na própria percepção
- Não consegue **copiar** o desenho
- Não combina formas iguais

::direita::

- A percepção está intacta
- **Copia** o desenho sem dificuldade
- Não liga o que vê ao que sabe sobre o objeto

---
layout: default
---

<Checagem
  rotulo="Checagem 1"
  pergunta="Uma mulher de 79 anos, um mês depois de um AVC posterior, copia o desenho de uma chave traço por traço, com capricho. Não sabe dizer o que desenhou. Com a chave na mão, diz na hora: “é uma chave”. O que ela tem?"
  :alternativas="[
    'Agnosia aperceptiva: ela não percebe a forma',
    'Agnosia associativa: percebe, mas não reconhece pela visão',
    'Afasia: ela não encontra a palavra',
    'Déficit visioconstrutivo: a cópia está comprometida',
  ]" />

<!--
AVC posterior: acidente vascular cerebral na parte de trás do cérebro, onde
ficam o lobo occipital e as vias visuais.
-->

---
layout: default
---

# Resposta 1

<Nota tipo="ok" titulo="b. Agnosia associativa">

A forma foi percebida e copiada, mas a visão não leva ao **reconhecimento**.
Pelo tato, ela reconhece a chave na hora.

</Nota>

- **a** não se sustenta: quem não percebe a forma não consegue copiá-la, e a
  cópia saiu correta.
- **c** contraria o enunciado: com a chave na mão, ela diz o nome.
- **d** também: a cópia está preservada, traço por traço.

---
layout: secao
numero: "03"
kicker: Parte 3
title: Orientação espacial
note: As formas de desorientação espacial.
---

---
layout: default
---

<Termo palavra="Orientação espacial" ingles="spatial orientation">

Capacidade de perceber a direção, o movimento e o volume dos objetos e as
relações entre eles, e de se deslocar usando essas informações.

</Termo>

É ela que permite <mark>ir de um lugar a outro</mark> e representar o espaço
como um mapa mental.

<!--
Mapa mental: a representação do ambiente que guardamos, com os lugares e as
relações entre eles, e que usamos para planejar um trajeto.
-->

---
layout: comparacao
kicker: Desorientação espacial
title: Agnosia topográfica × amnésia topográfica
esquerda: Agnosia topográfica
direita: Amnésia topográfica
---

::esquerda::

- Não reconhece **um** ponto de referência
- Reconhece a classe: sabe que é uma igreja
- Não sabe que é *aquela* igreja

::direita::

- Reconhece o ponto de referência
- Sabe que é a igreja do bairro
- Não sabe **onde** ela fica

<!--
Ponto de referência: um marco do ambiente usado para se orientar, como uma
igreja, uma praça ou um prédio conhecido.
-->

---
layout: default
---

# Cinco formas de desorientação

| desorientação | região | o que falha |
|---|---|---|
| **Egocêntrica** | parietal posterior | localizar objetos em relação a si |
| **Alocêntrica** | cíngulo posterior | direção e orientação em relação ao ambiente |
| **Agnosia de ponto de referência** | giro lingual | reconhecer pontos de referência |
| **Anterógrada** | giro para-hipocampal | aprender ambientes novos |
| **Déficit no mapa espacial** | hipocampo | lembrar os detalhes espaciais, antigos e novos |

<!--
Egocêntrico: centrado no próprio corpo ("a porta está à minha esquerda").
Alocêntrico: centrado no ambiente ("a porta fica ao norte da sala").
Anterógrada: o mesmo sentido da amnésia anterógrada da aula 03, a dificuldade
é aprender o que é novo.
-->

---
layout: default
---

<Checagem
  rotulo="Checagem 2"
  pergunta="Um homem de 76 anos mudou de casa há quatro meses. Ainda se perde entre o portão do condomínio novo e o próprio bloco, que reconhece quando chega nele. No domingo foi sozinho, de ônibus, até a casa antiga, em outro bairro, sem errar o caminho. O que ele tem?"
  :alternativas="[
    'Desorientação espacial retrógrada',
    'Uma falha da visão',
    'Agnosia de ponto de referência',
    'Desorientação espacial anterógrada',
  ]" />

---
layout: default
---

# Resposta 2

<Nota tipo="ok" titulo="d. Desorientação espacial anterógrada">

Ele navega no que já conhecia e **não aprende** o ambiente novo.

</Nota>

- **a** atingiria os ambientes antigos, e o caminho da casa antiga está
  preservado.
- **b** não explica a diferença: a visão é a mesma nos dois trajetos, o que
  muda é a novidade do lugar.
- **c** contraria o enunciado: ele reconhece o próprio bloco quando chega nele.

---
layout: secao
numero: "04"
kicker: Parte 4
title: Visioconstrução
note: O que a cópia de um desenho exige.
---

---
layout: default
---

<Termo palavra="Visioconstrução" ingles="visuoconstruction">

Capacidade de integrar elementos independentes num todo coeso, como num desenho
ou num modelo montado.

</Termo>

Quando ela falha sem um déficit motor ou sensorial que explique, chama-se
<mark>apraxia construtiva</mark>.

---
layout: default
---

# O que uma cópia exige

<Etapas :itens="[
  { titulo: 'Perceber', desc: 'ver o modelo e cada um dos seus elementos' },
  { titulo: 'Montar a imagem mental', desc: 'posição, proporção e relação entre as partes' },
  { titulo: 'Planejar', desc: 'decidir por onde começar e em que ordem seguir' },
  { titulo: 'Desenhar', desc: 'executar o plano com o lápis' },
]" />

<!--
Uma cópia ruim pode vir de qualquer uma das quatro etapas. Por isso a cópia de
figuras aparece em tantas avaliações: ela envolve percepção, memória
operacional, planejamento e movimento ao mesmo tempo.
-->

---
layout: default
---

<Checagem
  rotulo="Checagem 3"
  pergunta="Um homem reconhece e nomeia todas as figuras que lhe mostram e combina formas iguais sem errar. Quando pedem que copie um cubo, desenha as partes soltas, sem juntá-las num todo. Não tem tremor nem fraqueza na mão. O que falhou?"
  :alternativas="[
    'Percepção visual, com uma agnosia aperceptiva',
    'Orientação espacial',
    'Visioconstrução',
    'Memória, porque ele esqueceu o modelo',
  ]" />

---
layout: default
---

# Resposta 3

<Nota tipo="ok" titulo="c. Visioconstrução">

Ele percebe e reconhece as partes, e falha em **integrá-las num todo**. Sem
déficit motor, é uma apraxia construtiva.

</Nota>

- **a** contraria o enunciado: ele nomeia as figuras e combina formas iguais.
- **b** trata de se localizar e se deslocar no ambiente, e a tarefa é copiar.
- **d** não se aplica: numa cópia o modelo fica à vista o tempo todo.

---
layout: fecho
kicker: Fechando
title: O que fica
pontos:
  - "Processamento visioespacial é captar, armazenar e usar a informação espacial"
  - "O componente sensorial capta e o perceptivo interpreta"
  - "A via ventral diz o quê, a dorsal diz onde"
  - "Na agnosia visual a visão funciona e o reconhecimento falha"
  - "Cada forma de desorientação depende de uma região diferente"
  - "Copiar exige perceber, montar a imagem, planejar e desenhar"
---

---
layout: default
---

# Referências

<Referencia
  autores="Paula, J. J., Moreira, L., Coutinho, G., &amp; Mograbi, D. C."
  ano="2013"
  titulo="Aspectos do processamento espacial em idosos: percepção, consciência, orientação espacial e habilidades visioespaciais"
  onde="Em L. F. Malloy-Diniz, D. Fuentes, &amp; R. M. Cosenza (Orgs.), Neuropsicologia do envelhecimento: uma abordagem multidimensional. Artmed"
  capitulo="cap. 11, p. 197–209" />

<Referencia
  autores="Eysenck, M. W., &amp; Keane, M. T."
  ano="2017"
  titulo="Manual de psicologia cognitiva"
  onde="Artmed, 7ª ed." />

<Fonte>Figura das vias ventral e dorsal: Gazzaniga e colaboradores (2008), em Eysenck &amp; Keane (2017).</Fonte>
