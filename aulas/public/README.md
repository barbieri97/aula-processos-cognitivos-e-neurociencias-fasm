# Imagens

As figuras das aulas e os placeholders em SVG para montar slides antes de ter a imagem final.

**Esta pasta é a `public/` do Slidev.** O Slidev trata a pasta do arquivo `.md` como raiz do
projeto, e as aulas moram em `aulas/` — então é aqui que entram as imagens, e não numa
`public/` na raiz do repositório. O caminho dentro do markdown é absoluto e sem o nome da
pasta: `/exemplo-figura.svg`.

| arquivo | proporção | serve para |
|---|---|---|
| `exemplo-paisagem.svg` | 16:9 | imagem larga, layout `image` do Slidev |
| `exemplo-quadrado.svg` | 1:1 | imagem quadrada |
| `exemplo-retrato.svg` | 3:4 | imagem alta, layout `figura` com `ajuste: cover` |
| `exemplo-hero.svg` | 21:10 | fundo panorâmico — massa visual à direita, área livre à esquerda |
| `exemplo-figura.svg` | 3:2 | layout `figura` — um gráfico com eixos e legenda |
| `exemplo-avatar.svg` | 1:1 | `<Pessoa foto>` |
| `exemplo-avatar-2.svg` | 1:1 | `<Pessoa foto>`, segunda cor |
| `exemplo-fundo.svg` | 16:9 | campo `background:` do Slidev — textura de baixo contraste |
| `exemplo-logo.svg` | 1:1 | marca colorida |
| `exemplo-logo-mono.svg` | 1:1 | marca de uma cor só |

## As figuras das aulas

Nome no padrão `aula-NN-<assunto>`, para dar para apagar tudo de uma aula de uma vez.

| arquivo | o que é |
|---|---|
| `aula-01-processamento-informacao.png` | Fig. 1.1 — o modelo em fila: estímulo → atenção → percepção → decisão |
| `aula-01-paris-na-primavera.png` | Fig. 1.2 — o triângulo do processamento de cima para baixo |
| `aula-01-lobos.png` | Fig. 1.3 — os quatro lobos do córtex, hemisfério esquerdo |
| `aula-01-resolucao-tecnicas.png` | Fig. 1.6 — resolução espacial e temporal de cada técnica |
| `aula-01-salmao-morto.png` | Fig. 1.8 — o falso-positivo do salmão morto |
| `aula-01-rede-conexionista.png` | Fig. 1.9 — rede de três camadas |
| `aula-01-stroop-lista-a.svg` | material da atividade: palavra e tinta concordam |
| `aula-01-stroop-lista-b.svg` | material da atividade: palavra e tinta divergem |
| `aula-02-via-visual.svg` | esquema 1 — retina, quiasma, LGN e V1/V2; cada hemicampo no hemisfério oposto |
| `aula-02-areas-visuais.svg` | esquema 2 — V1 a V5/MT e a função de cada área (Zeki) |
| `aula-02-gestalt.svg` | esquema 3 — proximidade, similaridade, boa continuidade, fechamento e figura-fundo |
| `aula-02-vias-ventral-dorsal.svg` | esquema 4 — corrente ventral (o quê) e dorsal (como) |
| `aula-02-areas-face.svg` | esquema 5 — FFA e OFA em vista ventral |
| `aula-02-tipos-atencao.svg` | esquema 6 — o mapa dos tipos de atenção, a partir de Lima (2005) |
| `aula-02-vigilancia.svg` | esquema 7 — o decremento da vigilância ao longo do tempo |
| `aula-02-tarefa-dupla.svg` | esquema 8 — quando a atenção dividida funciona, e quando não |
| `aula-02-posner.svg` | esquema 9 — o paradigma da pista: válida, neutra, inválida |
| `aula-02-redes-atencao.svg` | esquema 10 — rede de atenção dorsal e ventral |
| `aula-02-negligencia.svg` | esquema 11 — relógio, bissecção de linha e cancelamento |
| `aula-02-busca-visual.svg` | esquema 12 — busca por traço isolado × por conjunção |
| `aula-03-taxonomia-memoria.svg` | esquema 1 — a memória por duração, por acesso consciente e por conteúdo |
| `aula-03-quatro-processos.svg` | esquema 2 — codificação, armazenamento, consolidação, evocação e o arco da reconsolidação |
| `aula-03-consolidacao-sistemica.svg` | esquema 3 — o traço migrando do hipocampo para o córtex ao longo do tempo |
| `aula-03-neuroanatomia-memoria.svg` | esquema 4 — cada estrutura ao lado do sistema de memória que sustenta |
| `aula-03-ltp-ltd.svg` | esquema 5 — a mesma sinapse potenciada e deprimida |
| `aula-03-amnesias.svg` | esquema 6 — anterógrada e retrógrada no eixo do tempo, com o gradiente de Ribot |
| `aula-03-cerebro-hm.png` | ilustração comparando o encéfalo de H.M. com um típico, em vista ventral e em corte coronal — **crédito a confirmar**: não é autoral nem veio da bibliografia da disciplina |
| `aula-04-areas-linguagem.jpg` | áreas de Broca e Wernicke, córtex auditivo e vias dorsal e ventral, hemisfério esquerdo — **crédito a confirmar**: recorte de livro-texto vindo dos slides antigos (`referencias/aula-04/`, p. 13), sem a fonte indicada |
| `aula-04-fatores-desenvolvimento.svg` | esquema 1 — seis fatores do desenvolvimento da linguagem, biologia × experiência |
| `aula-04-corpo-caloso.png` | corte coronal com o corpo caloso em destaque e rótulos traduzidos — **crédito a confirmar**: ilustração de terceiro vinda dos slides antigos (`referencias/aula-04/`, p. 15) |
| `aula-04-afasias.svg` | esquema 2 — Broca, Wernicke e condução × fluência, compreensão e repetição |

Os `.png` da aula 01 são recortes das figuras de **Eysenck & Keane, _Manual de psicologia
cognitiva_, 7ª ed. (Artmed, 2017), cap. 1** — a bibliografia da disciplina —, extraídos do
PDF em `referencias/aula-01/` para uso didático. Cada slide que usa um deles traz o crédito
num `<Fonte>`; se um dia o site precisar ser aberto para fora da turma, é este o ponto a
revisar. Foram recortados com fundo **transparente**, para o papel quente do design system
aparecer atrás em vez de um retângulo branco.

As duas listas do Stroop não vêm do livro: são SVGs gerados para a atividade, nas quatro
cores que passam de 4.5:1 sobre o fundo do slide.

Os doze `aula-02-*.svg` são **autorais**: foram desenhados para esta aula a partir do texto de
Eysenck & Keane (cap. 2, 3 e 5) e de Lima (2005), e não reproduzem figura de nenhum dos dois.
Os que mostram anatomia dizem "esquema" na própria legenda — as posições são aproximadas e
servem para localizar, não para estudar neuroanatomia.

Os seis `aula-03-*.svg` também são autorais, desenhados a partir do material da
disciplina (p. 80–101) e das fontes citadas em cada slide. O da neuroanatomia diz "esquema"
na legenda pela mesma razão que os da aula 02: as posições são aproximadas e servem para
localizar, não para estudar neuroanatomia.

A exceção da aula 03 é o `aula-03-cerebro-hm.png`, que **não é autoral** — é uma ilustração
de terceiro, e o slide ainda está sem o crédito. Antes de abrir o site para fora da turma,
é o primeiro ponto a resolver: ou a fonte entra num `<Fonte>`, ou a imagem sai.

Os dois `aula-04-*.svg` são autorais: o dos fatores, desenhado a partir dos slides antigos
da aula de linguagem (`referencias/aula-04/`), e o das afasias, a partir de Le, Lui & Lui
(2024). As fotografias da aula 04 (Broca, Wernicke, o encéfalo de Leborgne e Dina Sanichar)
não estão nesta pasta: entram por URL do Wikimedia Commons, com o crédito na legenda de cada
slide.

As exceções da aula 04 são o `aula-04-areas-linguagem.jpg` e o `aula-04-corpo-caloso.png`,
que **não são autorais**: são as figuras que já estavam nos slides antigos, extraídas do PDF.
Na primeira foi apagada a borda do texto vizinho do livro; na segunda, os rótulos em inglês
foram trocados por rótulos em português e o destaque do corpo caloso foi redesenhado. Os
slides antigos não dizem de onde as duas vêm, então os slides estão sem crédito. É o mesmo
caso do `aula-03-cerebro-hm.png`: antes de abrir o site para fora da turma, ou a fonte entra
na legenda, ou a imagem sai.

### Como recortar uma figura nova de um PDF

Não há script para isso — é pontual demais. O que funcionou, com
[PyMuPDF](https://pymupdf.readthedocs.io/) (`pip install pymupdf`):

```python
import pymupdf
doc = pymupdf.open('referencias/aula-01/cap 1 ....pdf')
# clip em PONTOS do PDF (72 por polegada), não em pixels: (x0, y0, x1, y1)
pix = doc[9].get_pixmap(dpi=200, clip=pymupdf.Rect(182, 508, 534, 688), alpha=True)
pix.save('aulas/public/aula-01-lobos.png')
```

Três coisas que custaram uma tentativa cada: `dpi=200` (a 110 a figura fica borrada na
projeção); `alpha=True` (sem ele vem um retângulo branco no meio do papel quente); e uma
folga de 3 ou 4 pontos em volta do recorte — apertar no limite corta o topo do rótulo, e
isso só se vê no slide montado. Para achar as coordenadas, renderize a página inteira
primeiro (`doc[9].get_pixmap(dpi=110).save('pagina.png')`) e meça nela.

## Duas maneiras de usar, e só uma funciona sempre

```md
![alguma coisa](/exemplo-figura.svg)   ← o Vite reescreve este caminho no build
```

```md
---
layout: figura
imagem: /exemplo-figura.svg            ← chega como prop, em tempo de execução
---
```

O segundo caso **só funciona porque o layout passa o caminho por `asset()`**
(`aulas/lib/asset.ts`). Sem isso a imagem some quando o site é publicado num subdiretório —
e localmente continua aparecendo, o que faz o erro só surgir depois do deploy. Qualquer
componente novo que aceite caminho de imagem por prop precisa fazer o mesmo.

São SVGs de propósito: pesam poucos KB, escalam sem borrar e podem ser editados em qualquer
editor de texto — as cores são as do design system (`--ds-accent` `#4b3ba6`, `--ds-accent-2`
`#a84a1a`, `--ds-ink` `#1e1c2b`, `--ds-bg` `#faf9f6`). Se você mexer em
`aulas/styles/tokens.css`, estes hexes ficam para trás: eles são cópias, não referências.
