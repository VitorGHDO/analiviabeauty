# Como editar o site da Ana Lívia Beauty

O site é feito em **Astro**, uma ferramenta que transforma arquivos simples num site rápido. Para editar, você mexe em **um arquivo de texto só**. O código fica separado e não precisa ser tocado.

## Onde fica cada coisa

| Arquivo ou pasta | O que tem | Precisa mexer? |
| --- | --- | --- |
| `src/conteudo/site.yaml` | **Todos os textos**, WhatsApp, serviços, depoimentos, perguntas | Sim, é aqui que se edita |
| `public/imagens/fotos/` | Fotos reais do site | Sim, para colocar fotos |
| `public/imagens/stickers/` | Ilustrações da marca | Só para trocar ou incluir um sticker |
| `src/styles/estilo.css` | Cores e visual | Só para trocar cores |
| `src/components/` | As peças da página (código) | Não |
| `materiais-marca/` | Design system, posts e arquivos da marca | Não, é só arquivo |

## Preparar o computador (só uma vez)

1. Instale o **Node.js** (versão LTS) pelo site nodejs.org.
2. Instale o **Visual Studio Code** (gratuito). É o editor mais confortável para estes arquivos.
3. No VS Code, abra a pasta `analiviabeauty` (Arquivo › Abrir pasta).
4. Abra o terminal do VS Code (Terminal › Novo terminal) e rode:

   ```
   npm install
   ```

## Ver o site enquanto edita

No terminal do VS Code, rode:

```
npm run dev
```

Abra **http://localhost:4321** no navegador. Cada vez que você salvar o `site.yaml`, a página se atualiza sozinha. Para parar, aperte Ctrl+C no terminal.

## 1. Editar textos, WhatsApp, serviços, depoimentos

Abra `src/conteudo/site.yaml`. Ele está dividido por seção, na mesma ordem do site, e cada parte tem um título comentado, assim:

```yaml
# ---------- Contato ----------
contato:
  whatsapp_numero: "5531987654321"     # 55 + DDD + número, só números
  whatsapp_escrito: "(31) 98765-4321"
```

Regras do arquivo:
- Edite só o que vem **depois dos dois-pontos**.
- **Não mexa nos espaços do começo da linha.** Eles mostram o que pertence a cada bloco.
- Palavra entre `*asteriscos*` fica colorida no site.
- Se o texto tiver dois-pontos (`:`) ou aspas no meio, coloque tudo entre aspas: `"Tem: 10% de desconto"`.
- Linha que começa com `#` é só anotação e não aparece no site.

**Para incluir mais um item** (depoimento, pergunta, serviço, foto), copie um item inteiro, do `-` até antes do próximo `-`, e cole embaixo do último. Exemplo de depoimento:

```yaml
    - texto: "O que a cliente escreveu."
      nome: "Nome da cliente"
```

**Para remover um item**, apague o item inteiro.

Se algo der errado, o navegador mostra uma tela de erro dizendo a linha do problema. Quase sempre é um espaço a mais ou a menos no começo da linha, ou um dois-pontos sem aspas.

## 2. Colocar as fotos

Salve cada foto em `public/imagens/fotos/` com o nome que o `site.yaml` indica. Ela aparece sozinha no lugar do espaço tracejado.

| Nome do arquivo | Onde aparece |
| --- | --- |
| `lavatorio.jpg` | Lavatório portátil montado na casa da cliente |
| `malas.jpg` | Ana chegando com as malas |
| `ana.jpg` | Retrato da Ana (seção "Prazer, Ana Lívia") |
| `resultado-1.jpg` até `resultado-6.jpg` | Galeria de resultados |

Para ter mais fotos na galeria, salve `resultado-7.jpg` e inclua um item novo em `resultados › fotos` no `site.yaml`.

Dicas:
- Use fotos na vertical (formato 4:5, como o post do Instagram).
- Mande o arquivo original do celular, não print.
- Diminua para uns 1200 px de largura antes de colocar (o site squoosh.app faz isso de graça). O site abre mais rápido.

## 3. Mudar cores

No começo de `src/styles/estilo.css`:

```css
--rosa: #f4b3bf;
--calmaria: #42412c;
--magenta: #b40252;
--raizes: #492b00;
--creme: #fff7e6;
```

Trocar um código ali muda a cor no site inteiro. A cor de cada cartão de serviço se escolhe no `site.yaml`, com `cor: magenta`, `rosa`, `calmaria` ou `raizes`.

## 4. Mudar a ordem das seções

Abra `src/pages/index.astro`. A ordem das linhas `<Topo />`, `<Servicos />`, `<Valores />`… é a ordem do site. Troque as linhas de lugar ou apague uma para esconder a seção.

## 5. Colocar no ar (de graça)

**Jeito rápido, sem conta no GitHub (Netlify Drop):**
1. No terminal, rode `npm run build`. Ele cria a pasta `dist` com o site pronto.
2. Entre em app.netlify.com/drop e arraste a pasta **`dist`** (não a pasta inteira do projeto).
3. Crie uma conta grátis para o link não expirar e troque o nome (por exemplo, `analiviabeauty.netlify.app`).
4. Coloque o link na bio do Instagram.

Depois de cada edição: rode `npm run build` de novo e arraste a nova pasta `dist` em "Deploys", no painel do Netlify.

**Jeito automático (recomendado depois):** suba esta pasta para o GitHub e conecte ao Netlify ou à Vercel. Aí cada alteração salva no GitHub atualiza o site sozinha, sem precisar arrastar nada. Dá até para editar o `site.yaml` direto no site do GitHub, pelo navegador.

Se quiser um endereço próprio (como `analiviabeauty.com.br`), compre no registro.br e ligue ao Netlify.
