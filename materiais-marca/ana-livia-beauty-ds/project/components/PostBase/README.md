# PostBase

A tela de 1080 × 1350 px que todo post da Ana Lívia Beauty usa, com a margem de segurança, a hashtag do topo, o rodapé e o logo pequeno.

## Estrutura
```html
<div class="al-post" data-theme="creme">            <!-- creme | calmaria | magenta | raizes -->
  <span class="al-hashtag rotulo">#cuidadoemcasa</span>
  <div class="al-area al-centro"> … conteúdo … </div>
  <span class="al-rodape rotulo">Cuidar é se amar.</span>
  <img class="al-marca" src="logo-ana-livia-calmaria.svg" alt="Ana Lívia Beauty">
</div>
```
- `data-theme` escolhe o fundo. Os tokens `fundo`, `tinta`, `acento`, `cta` e `linha` mudam sozinhos.
- `al-post--quadrado` (1080 × 1080) e `al-post--story` (1080 × 1920) trocam o formato.
- `al-area` ocupa a área útil (`margem-post` de 80 px em cada lado). Nenhum texto fora dela, exceto hashtag e rodapé.
- Hashtag e rodapé: classe `rotulo`, sempre em caixa alta, em `tinta-suave`. Use no máximo um de cada.
- Logo pequeno no canto (`al-marca`): versão calmaria no creme, versão creme nos fundos escuros, “para fundo magenta” no magenta.
- Monograma AL de contorno (`al-monograma`) pode entrar como marca d'água grande, vazando da borda.

## Não faça
- Não centralize tudo em todos os posts. Alterne composições, como no grid de referência.
- Não use mais de dois fundos diferentes dentro do mesmo post (o painel ondulado conta como um).
