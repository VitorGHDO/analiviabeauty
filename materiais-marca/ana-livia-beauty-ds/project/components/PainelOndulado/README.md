# PainelOndulado

A forma de nuvem com borda em ondinhas (do post “Como funciona o beauty house?”) e a borda ondulada de selo postal para recortar fotos.

```html
<div class="al-painel-ondulado" data-theme="calmaria"> … </div>
<div class="al-recorte-ondulado"><img src="foto-atendimento-em-casa.jpg" alt=""></div>
```
- `al-painel-ondulado`: fundo calmaria e texto creme. Variações `--creme` e `--magenta`. Tamanho da onda em `--onda` (padrão 30 px).
- Ponha `data-theme` com a cor do painel para que `tinta`, `acento`, `linha` e `cta` dentro dele fiquem certos.
- Use o painel por cima de `Listras` para segurar título e conteúdo.
- `al-recorte-ondulado`: deixa a borda direita de uma foto em ondinhas, como no post dividido.
