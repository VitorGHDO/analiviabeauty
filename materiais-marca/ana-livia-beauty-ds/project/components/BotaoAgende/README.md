# BotaoAgende

O chamado “Agende seu horário” com o telefone numa pílula, que fecha quase todo post.

```html
<div class="al-agende">
  <span class="al-agende__rotulo texto-md">Agende seu horário</span>
  <span class="al-agende__pill cta-numero"><span class="al-agende__ddd">(00)</span>00000-0000</span>
</div>
```
- A pílula usa `cta` com texto `on-cta`: magenta no creme, rosa na calmaria e nas raízes, creme no magenta.
- `al-agende--contorno`: o rótulo vai numa pílula de contorno (`linha`) e o telefone fica solto embaixo. Para posts com foto.
- `al-agende--simples`: só rótulo e número, sem pílula. Para o canto de posts de preço.
- `al-agende--esquerda` alinha à esquerda.
- Troque “(00) 00000-0000” pelo WhatsApp real. O DDD vai menor, dentro de `al-agende__ddd`.
- Rótulos aprovados: “Agende seu horário”, “Agende seu horário:”, “Agende agora e garanta seu atendimento”, “Agende seu horário e viva a transformação:”.
- Um por post, sempre na parte de baixo.
