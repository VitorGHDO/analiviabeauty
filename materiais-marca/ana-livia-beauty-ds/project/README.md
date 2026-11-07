Ana Lívia Beauty é uma cabeleireira domiciliar: um *beauty house* que leva o salão até a casa da cliente. Este sistema junta a identidade visual da marca (cores, fontes, logo, mascote e stickers) com a estrutura de posts de Instagram das referências: título forte em duas linhas, estrelinhas, pílula de “Agende seu horário”, cartões de serviço, caixas de preço e posts educativos. Todo post é feito em HTML a partir de `.al-post` e dos componentes `al-*` de `components/bundle.css`.

## Como montar um post

1. Carregue `tokens.css`, `components/bundle.css` e as fontes do Google (link abaixo).
2. Comece por um modelo pronto em `components/Post*/preview.html` e troque textos, fotos e stickers.
3. Escolha o fundo com `data-theme` no `.al-post`: `creme`, `calmaria`, `magenta` ou `raizes`. Os tokens `fundo`, `tinta`, `tinta-suave`, `acento`, `cta`, `on-cta`, `linha` e `cartao` se ajustam ao fundo.
4. Use as classes de tipografia dos tokens (`titulo-lg`, `impacto-xl`, `manuscrita-md`, `texto-md`, `cta-numero`, `rotulo`…) direto no HTML.
5. Exporte em 1080 × 1350 px (feed 4:5). `al-post--quadrado` dá 1080 × 1080 e `al-post--story` dá 1080 × 1920.

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Just+Me+Again+Down+Here&family=Libre+Franklin:wght@700;800;900&family=Newsreader:ital,opsz,wght@1,6..72,600;1,6..72,700;1,6..72,800&display=swap">

<div class="al-post" data-theme="creme">
  <span class="al-hashtag rotulo">#agendeseuhorário</span>
  <div class="al-area al-centro">
    <h1 class="al-titulo-misto al-titulo-misto--centro">
      <span class="impacto-xl">Agenda</span>
      <span class="titulo-xl al-cor-acento">aberta</span>
    </h1>
    <div class="al-agende">
      <span class="al-agende__rotulo texto-md">Agende seu horário</span>
      <span class="al-agende__pill cta-numero"><span class="al-agende__ddd">(00)</span>00000-0000</span>
    </div>
  </div>
</div>
```

| Modelo | Quando usar |
| --- | --- |
| `PostNovosHorarios` | Agenda nova, vagas, novidades. Mascote no centro. |
| `PostAtendimento` | Posicionamento, “como é o atendimento”. Foto cheia com véu. |
| `PostRegiao` | Onde atende (região, cidade, telefone). |
| `PostTransforme` | Transformação, antes e depois, finalização. |
| `PostServicos` | Cardápio de serviços em três cartões. |
| `PostPreco` | Um serviço com preço. |
| `PostAgendaAberta` | Abertura de agenda só com tipografia. |
| `PostCombos` | Combos e promoções da semana. |
| `PostErrosComuns` | Capa de conteúdo educativo (erros, mitos, dicas). |
| `PostRecorte` | Capa de carrossel com autora e foto recortada. |
| `PostTudoSobre` | Capa “Tudo sobre…” com ícone da marca. |

No feed, alterne posts claros (`creme`) e posts escuros ou com foto (`calmaria`, `raizes`, `magenta`), formando um xadrez como no grid de referência.

## Voz e conteúdo

A marca fala como a própria Ana Lívia: próxima, carinhosa, feminina e direta. É uma conversa entre amigas, não um anúncio de salão.

- Primeira pessoa do singular para a Ana (“Eu levo o salão até a sua casa”, “Obrigada por confiar no meu trabalho”) e “você” para a cliente. No plural, “juntas” (“Vamos juntas!”). Feminino por padrão (“Bem-vinda!”).
- Frases curtas. Títulos de 2 a 6 palavras.
- Frases da marca, para usar como estão:
  - “Levar o cuidado até você.”
  - “Beleza que acolhe. Cuidado que vai até você.”
  - “Seu cabelo, seu jeito, no seu tempo.”
  - “cuidado em casa” · “Cabeleireira Domiciliar” · “Beleza em cada detalhe” · “Do seu jeito, no seu tempo!”
- Palavras da marca: cuidado, auto cuidado, acolhimento, exclusividade, autenticidade, sensibilidade, movimento, beleza própria, diversidade capilar, conforto de casa, praticidade, proximidade.
- Títulos com inicial maiúscula e o resto minúsculo (“Novos horários disponíveis”). Caixa alta só em uma palavra de impacto (“TRANSFORME”) e nos microtextos `rotulo`.
- A letra manuscrita é sempre minúscula.
- Sem emoji dentro da arte. Os enfeites são a estrela de quatro pontas, os corações e brilhos que já vêm nos stickers.
- Telefone sempre no formato “(00) 00000-0000”, com o DDD menor. Preço sempre “R$ 110,00”, com “R$” e centavos menores.
- Os telefones, regiões, preços e horários das prévias são exemplos. Confirme cada um antes de publicar.
- Arroba: @analiviabeautyy.

## Cores

A paleta oficial tem cinco cores, com nomes do manual:

| Token | Nome no manual | Hex | Papel |
| --- | --- | --- | --- |
| `beleza-intimista` | Beleza intimista | #f4b3bf | rosa claro: listras, destaques sobre escuro, pílula |
| `calmaria` | Calmaria | #42412c | verde-oliva escuro: texto principal, fundo escuro, traço das ilustrações |
| `rosa-fora-da-caixa` | Rosa fora da caixa | #b40252 | magenta: cor-assinatura, “Beauty”, estrelas, cartões |
| `raizes` | Raízes | #492b00 | marrom: fundo escuro alternativo |
| `auto-cuidado` | Auto cuidado | #fff7e6 | creme: fundo claro principal |

Apoio, tirados do desenho original: `creme-logo` (#fffdde, letras do logo), `contorno-sticker` (#fdedd3, contorno recortado dos stickers) e `rosa-vivo` (#e03b6e, só em listras).

- Proporção num feed: creme como base, magenta como cor que aparece em todo post, calmaria e raízes para os posts escuros, rosa como apoio.
- Magenta e rosa são a dupla das listras. Nunca troque o magenta por vermelho ou o rosa por lilás.
- Combinações de texto aprovadas (todas com pelo menos 4,5:1): calmaria ou magenta sobre creme; creme ou rosa sobre calmaria; creme sobre magenta; creme ou rosa sobre raízes; calmaria sobre rosa.
- Rosa sobre magenta dá só 3,9:1: use apenas em títulos de 24 px ou mais.
- Foto sempre sob um véu da cor do fundo (`al-veu`): degradê de baixo para cima, ou véu inteiro a 68% (`al-veu--total`) quando o texto vai no meio.

## Tipografia

| Papel | Fonte oficial (manual) | Fonte na web (Google Fonts) | Família do token |
| --- | --- | --- | --- |
| Títulos | Sitka Subheading Bold Italic | Newsreader 700 itálico | `titulo` |
| Impacto | Americane Bold | Libre Franklin 800 | `impacto` |
| Manuscrita | Sunset Script | Just Me Again Down Here | `manuscrita` |
| Texto | Inter | Inter | `texto` |

Sitka, Americane e Sunset Script não existem no Google Fonts, então as versões web usam as fontes mais parecidas. Quem tiver as fontes oficiais licenciadas pode enviá-las para `fonts/` e trocar as famílias em `tokens.json`.

- **Título misto** é o jeito da marca escrever: uma linha na pesada (`impacto-*`) e a palavra emocional no itálico (`titulo-*`). Ex.: “Levar o / *cuidado* / até você”, “Agenda / *aberta*”, “Combos / *da semana*”.
- Títulos sozinhos vão sempre em itálico 700 (`titulo-xl` 150 px, `titulo-lg` 112 px, `titulo-md` 76 px, `titulo-cartao` 60 px, `titulo-sm` 44 px), com espaçamento fechado.
- Pinte uma parte do título com `al-cor-acento`, nunca o título todo.
- Manuscrita só em anotações curtas em volta do título ou da foto (`manuscrita-lg`, `manuscrita-md`), no máximo quatro por post.
- Texto corrido em Inter (`texto-lg` 36 px, `texto-md` 30 px, `texto-sm` 24 px). Destaque dentro da frase com `al-forte` (Inter Bold), às vezes em `acento`.
- Preço: número em `preco` (Libre Franklin 800, 160 px).
- Microtextos de moldura (`rotulo`, 18 px, caixa alta, espaçado): hashtag no alto à direita e rodapé embaixo à esquerda.

## Elementos gráficos

- **Estrela de quatro pontas** (`Estrela`): o brilho de se cuidar. Uma grande e uma ou duas pequenas por post, sempre em `acento`.
- **Listras** (`Listras`): magenta + rosa, verticais, 56 px. Fundo inteiro ou faixa. Texto nunca direto em cima.
- **Painel ondulado** (`PainelOndulado`): a nuvem de borda em ondinhas, em calmaria, por cima das listras. E o recorte ondulado de selo postal para fotos.
- **Círculo à mão** (`Circulado`): elipse fina em volta de uma palavra, uma vez por post.
- **Stickers ilustrados** (`Sticker`): mascote e meninas com cabelos diferentes, secador, máscara, tigela. Entram no lugar das pessoas recortadas dos posts de referência. Giro entre −8° e 8°.
- **Stickers de texto** (`StickerTexto`): “cuidado em casa”, “Beauty”, “Cabeleireira Domiciliar”, com o mesmo contorno creme das ilustrações.
- **Selos redondos** (`Selo`): quatro círculos do manual, um por post, girados num canto.
- **Monograma AL** (`assets/Logos/monograma-al-contorno-*.svg`): contorno fino, como marca d'água grande vazando da borda (opacidade de 60 a 80%).
- **Ondas** (`assets/Ornamentos/ondas-*.svg`): três fios de cabelo em movimento para encostar numa borda.
- Sombra só no cartão claro que flutua (`sombra-cartao`). O resto é chapado.
- Cantos: `raio-cartao` (40 px) em cartões, `raio-caixa` (28 px) em caixas de preço, `raio-foto` (48 px) em fotos emolduradas, `raio-pill` nas pílulas. Linhas finas em `traco-fino` (3 px).

## Fotos

- Atendimento real em casa: luz natural de janela, sala ou cozinha, madeira e plantas, a Ana de avental verde-oliva com o logo.
- Cabelos reais e diversos: cachos, ondas, lisos, crespos. Cabelo em movimento, de costas ou de lado.
- Tons quentes; o magenta aparece nos objetos (secador, mala, cadeira, escovas).
- As quatro fotos em `assets/Fotos/` são as imagens do manual, para as prévias. Troque por fotos reais da cliente sempre que possível.
- Foto de fundo (`al-foto-fundo`) sempre com véu (`al-veu`) da cor do tema.

## Layout do post

- Tela 1080 × 1350 px, margem de segurança `margem-post` (80 px).
- Hashtag no alto à direita e rodapé embaixo à esquerda, a `espaco-6` (48 px) das bordas.
- Título no terço de cima ou de baixo. CTA sempre na parte de baixo.
- Stickers e selos podem vazar da borda; texto não.
- Rodapés aprovados: “Cuidar é se amar.”, “Viva o seu melhor”, “O seu melhor te espera.”, “2026”.
- Hashtags aprovadas: #agendeseuhorário, #marqueseuhorário, #cuidadoemcasa, #atendimentodomiciliar, #cuide-se, #renovação, #serviços, #combosparavocê, #cuidadoscomocabelo.

## Iconografia

A marca tem quatro ícones próprios, em `assets/Icones/`, cada um em quatro cores (creme, rosa, magenta, calmaria):

- `raizes-*`: as raízes, origem e pertencimento (couro cabeludo, tratamento).
- `tesoura-*`: transformação (corte).
- `movimento-*`: o movimento dos fios (finalização, escova).
- `estrela-*`: autocuidado e brilho.

Não há outro sistema de ícones. Não use emoji, ícones de biblioteca nem ícone de pino de mapa: no post de região, o selo “cuidado em casa” ocupa esse lugar.
