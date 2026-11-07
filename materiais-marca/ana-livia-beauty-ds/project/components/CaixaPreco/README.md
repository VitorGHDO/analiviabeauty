# CaixaPreco

Caixas de contorno fino para preço de serviço e combos, com o valor grande na pesada.

```html
<div class="al-caixa-preco">
  <span class="texto-lg">por apenas:</span>
  <span class="al-preco"><span class="al-preco__moeda">R$</span><span class="preco">110</span><span class="al-preco__centavos">,00</span></span>
</div>

<div class="al-combo">
  <span class="titulo-sm">Escova +<br>Hidratação</span>
  <span class="al-combo__valor"><span class="al-preco">…</span><span class="texto-sm">em até 2x no cartão</span></span>
</div>
```
- Contorno em `linha` (`traco-fino`), cantos `raio-caixa`. O texto segue `tinta` do tema.
- Preço: “R$” pequeno no alto, número inteiro em `preco`, centavos pequenos embaixo. Sempre “,00” quando não houver centavos.
- Os valores das prévias são exemplos. Confirme cada preço antes de publicar.
- Até dois combos por post.
