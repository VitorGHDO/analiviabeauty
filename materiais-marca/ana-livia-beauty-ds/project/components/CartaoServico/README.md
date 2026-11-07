# CartaoServico

Cartão arredondado de serviço com nome em itálico, uma frase e um sticker que salta para fora do topo, como no post de serviços de referência.

```html
<article class="al-cartao-servico">
  <div>
    <h2 class="titulo-cartao">Escova<br>profissional</h2>
    <p class="texto-sm">Agende sua escova e descubra a beleza do seu cabelo.</p>
  </div>
  <img class="al-cartao-servico__sticker" src="sticker-chanel-brilho.svg" alt="">
</article>
```
- Cores: padrão magenta com texto creme; `--rosa` (rosa com texto calmaria); `--calmaria`.
- `al-cartao-servico--invertido` põe o sticker à esquerda e o texto à direita. Alterne em listas de três.
- Deixe 90 px entre cartões empilhados para o sticker não encostar no cartão de cima.
- Nome em duas linhas curtas (“Hidratação / capilar”). Frase com até 60 caracteres.
