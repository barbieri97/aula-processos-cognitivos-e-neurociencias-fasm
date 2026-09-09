# Artigos complementares da aula 02

Os quatro artigos abaixo entram na aula 02 por MCP (PubMed e Consensus) e constam do slide de
referências do deck. **Nenhum deles pôde ser salvo em PDF aqui**: a consulta de licença via
PubMed devolveu `is_open_access: false` para os dois que têm PMID, e o PMC serve o arquivo
atrás de uma página intermediária que exige sessão de navegador. Ficam os links estáveis.

| artigo | onde entra na aula | link |
|---|---|---|
| Nguyen, L. e colaboradores (2025). *Feeds, feelings, and focus: a systematic review and meta-analysis examining the cognitive and mental health correlates of short-form video use*. Psychological Bulletin, 151(9), 1125–1146. | slide de destaque `r = −0,38` | https://doi.org/10.1037/bul0000498 · PMID 41231585 |
| Corbetta, M. & Shulman, G. L. (2011). *Spatial neglect and attention networks*. Annual Review of Neuroscience, 34, 569–599. | esquema das redes dorsal e ventral; slide da negligência | https://doi.org/10.1146/annurev-neuro-061010-113731 · PMID 21692662 · PMC3790661 |
| Kong, F. e colaboradores (2023). *Cognitive control in adolescents and young adults with media multitasking experience: a three-level meta-analysis*. Educational Psychology Review, 35, 103. | slide de destaque, como segunda meta-análise | https://doi.org/10.1007/s10648-023-09788-4 |
| Telzer, E. e colaboradores (2026). *Smartphone use during school hours and association with cognitive control in youths aged 11 to 18 years*. JAMA Network Open. | dado de contexto, não citado no deck | consultado via Consensus |

A base primária da aula não está aqui: são os dois PDFs em `referencias/aula-02/`
(Eysenck & Keane, Parte I; e Lima, 2005).

## Nota sobre o PDF do Lima (2005)

`Franco de Lima - 2005 - Compreendendo os Mecanismos Atencionais.pdf` tem fontes TrueType
subsetadas **sem tabela `ToUnicode` e com `post` versão 3.0**. `pdftotext` e `pypdf` devolvem
texto ilegível — os códigos de caractere são índices de glifo arbitrários, não Unicode.

O texto foi recuperado deduzindo o mapa código→caractere: o resumo em português, obtido da
página da revista, foi alinhado com o fluxo de conteúdo da primeira página, e o restante do
alfabeto saiu por contexto. Se for preciso reler o artigo, esse é o caminho — ou abrir o PDF
num leitor, onde ele aparece normalmente.
