# TailwindCSS Workshop

![Exercício 1 - Tela de Login](/docs/exercise-1-preview.png)

Este repositório contém exercícios e recursos do **Workshop de TailwindCSS** assim como dicas sobre Tailwind e CSS.

Este projeto faz parte de uma iniciativa para ajudar devs a construir interfaces com mais previsibilidade, menos sofrimento com CSS e mais velocidade no dia a dia.

O **TailwindCSS Workshop** é dividido em 3 partes:

### 1. Fundamentos

- Mental model do Tailwind
- Configuração de editor de código
- Espaçamentos, cores, tipografia
- Layout com CSS Flexbox
- Hover, focus, transitions
- Construção de uma tela de login do zero

### 2. Responsividade

- Introdução prática a CSS Grid
- Combinação de Flexbox com Grid
- Construção de uma tela de listagem de cards com filtros

### 3. Arquitetura de estilos para projetos de larga escala

- Padrões de componentização
- Estrutura de arquivos e pastas
- Manutenção e Legibilidade
- `clsx`, `cva` e funções utilitárias

## Índice

- [Pré-requisitos e setup inicial](#pré-requisitos-e-setup-inicial)
- [Rodando o projeto](#rodando-o-projeto)
- [Editor de código e extensões](#editor-de-código-e-extensões)
- [Exercícios](#exercícios)
- [Tailwindcss](#tailwindcss)
- [Extra](#extra)

## Pré-requisitos e setup inicial

Para executar este projeto, é necessário ter os seguintes recursos: [Node.js](https://nodejs.org/en/download/archive/v22.22.0) instalado, o gerenciador de pacotes nas versões:

- [Node.js](https://nodejs.org/en/download/archive/v22.22.0) - v20.18.1+
- [pnpm](https://pnpm.io/installation#using-corepack) - v10.30.1+
- [git](https://git-scm.com/install) - v2+

Apesar de o projeto funcionar com o Node.js v20.18.1+, recomendo que você instale a versão [20.20.0](https://nodejs.org/en/download/archive/v20.20.0) ou até mesmo a [22.22.0](https://nodejs.org/en/download/archive/v22.22.0), pois ambas são LTS.

Obs.: recomendo o uso de gerenciadores de versão como [nvm](https://github.com/nvm-sh/nvm) ou [asdf](https://asdf-vm.com/) (este gerencia versões não somente do Node.js, mas de diversas plataformas como python, rusty, php, java, etc.).

Em relação ao pnpm, você não precisa instalá-lo, pois já vem incluso no Node.js v16+. Bastando apenas habilitá-lo através do [Corepack](https://github.com/nodejs/corepack) (um gerenciador de versão de gerenciadores de pacotes) como veremos a seguir.

Habilite o Corepack:

```bash
corepack enable
```

Agora, clone o projeto na sua máquina local e entre em seu diretório:

```bash
git clone https://github.com/danilobjr/tailwindcss-workshop.git
cd tailwindcss-workshop
```

Faça download e instale o gerenciador de pacotes já configurado no projeto:

```bash
corepack install
```

O corepack vai detectar, atravês de algumas configurações presentes no arquivo package.json, que o pnpm deve ser utilizado.

Caso tenha algum problema com o corepack ou pnpm, acesse [este link](https://pnpm.io/installation#using-corepack).

## Rodando o projeto

Na raiz do projeto, instale as dependências se ainda não o fez:

```bash
pnpm install
```

Rode o projeto:

```bash
pnpm dev
```

## Editor de código e extensões

O editor de código com o qual trabalharemos nos exercícios é o [VS Code](https://code.visualstudio.com/). Porém fique à vontade para usar qualquer editor de sua escolha.

### Extensões

Selecionei algumas extensões para o VS Code que são imprescindíveis para seguir sem problema. Ao utilizá-las, além de uma experiência mais fluida através do intellisense, você terá avisos do que pode estar errado.

Ao abrir o VS Code no diretório do projeto, uma notificação irá sugerir a instalação das extensões recomendadas para o projeto. Então, basta instalar estas recomendações automaticamente. Caso a notificação não apareça, instale-as manualmente seguindo os seguintes passos:

1. Pressione `Ctrl + p` ou `Cmd + p`;
2. Digite `>install extensions` ou `>instalar extensões` (não esqueça de incluir o `>` no início) e pressione enter. Isso navegará para o menu de extensões, na lateral esquerda do editor;
3. Busque pelos termos: [editorconfig.editorconfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig), [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) e [bradlc.vscode-tailwindcss](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss);
4. Instale cada uma.

## Exercícios

Temos alguns exercícios propostos. Nesta sessão, você encontrará os recursos necessários para completá-los.

### Branches

O projeto tem dois branches:

- **main** - contém o código completo com os exercícios prontos.
- **develop** - o código está no ponto para você iniciar os exercícios.

Então, antes de iniciar os exercícios, faça um checkout para o branch develop:

```bash
git checkout develop
```

### Design

Você pode consultar o design dos exercícios no [Figma](https://www.figma.com). Lá você terá acesso às cores, tamanhos de fonte, bordas, etc. Acesse o design pelo link abaixo:

- [Tailwindcss Workshop - Design](https://www.figma.com/design/Bid8m3nUkjiEBpdAtjHmrA/Tailwindcss-Workshop---Design?node-id=6-172&t=0mfGEMwhHjvxMxfO-1)

### Exercício 1

Tela de login.

#### Design

Link do [design no Figma](https://www.figma.com/design/Bid8m3nUkjiEBpdAtjHmrA/Tailwindcss-Workshop---Design?node-id=6-172&t=0mfGEMwhHjvxMxfO-1).

![Exercício 1 - Tela de Login](/docs/exercise-1-preview.png)

#### Ícones

Usaremos os ícones [Lucide](https://lucide.dev/icons) em todos os exercícios.

Neste exercício 1, utilizaremos os ícones abaixo. Para colocá-los no projeto basta clicar nos links abaixo e, no site, clique em Copy SVG. Agora é só colar no projeto.

- [square-arrow-out-up-right](https://lucide.dev/icons/square-arrow-out-up-right)
- [key-round](https://lucide.dev/icons/key-round)
- [pencil-ruler](https://lucide.dev/icons/pencil-ruler)

#### Notícia

A manchete e a foto de uma notícia são exibidas no quadro esquerdo da tela de login. São elas:

- Manchete: Doação de repelentes a famílias no interior do Ceará.
- Imagem: Arquivo _/public/img/exercise-1/news.png_.
- Link da notícia: https://boanoticia.org.br/acao-beneficente-promove-doacao-de-repelentes-a-familias-no-interior-do-ceara/

### Exercício 2

Formulário com inputs e lista de cards.

> Detalhes em breve.

### Demais exercícios

> A serem definidos.

## Tailwindcss

A documentação do Tailwind é excelente — porém extensa. Reuni algumas dicas que ajudam a encontrar mais rápido o que você precisa.

### 1. Entenda o padrão mental do Tailwind

Antes de procurar, pense assim:

```css
[property]-[value]
```

Exemplos:

| CSS (property: value)                 | Tailwind       |
| ------------------------------------- | -------------- |
| justify-content: center               | justify-center |
| padding: 1rem                         | p-4            |
| margin-top: 8px                       | mt-2           |
| grid-template-columns: repeat(3, 1fr) | grid-cols-3    |

Claro que nem tudo obedecerá a essa linha de racioncínio como, por exemplo, `display: flex` no CSS não se "traduz" como `display-flex` no Tailwind, mas apenas `flex`. Entretanto, pensar `[property]-[value]` é um bom ponto de partida.

### 2. Memorize os padrões mais usados

Com o tempo, você vai internalizar:

- Espaçamento: p-, m-, gap-, space-
- Layout: flex, grid, inline-
- Tamanhos: w-, h-, min-, max-
- Texto: text-, font-, leading-, tracking-
- Responsividade: sm:, md:, lg:, xl:

A documentação deixa de ser consulta constante e vira apenas referência pontual.

### 3. Atenção às diferenças da v4

Ao consultar exemplos na internet:

- Sempre confirme se o conteúdo é da v4.1
- Algumas APIs e configurações mudaram da v3 para v4
- Priorize:
  - Documentação oficial
  - Exemplos atualizados

### 4. Use o DevTools + Docs juntos

Fluxo recomendado:

1. Inspecione o elemento no navegador
2. Veja a propriedade CSS desejada
3. Procure essa propriedade na documentação
4. Encontre a utility equivalente

Isso evita tentativa e erro.

### 5. Use a busca, não navegue manualmente

A barra de busca da documentação é a forma mais rápida de encontrar qualquer utility que você precisa.

Dicas:

- Pesquise pelo nome da propriedade CSS, não pelo nome da utility
- Exemplos:
  - Pesquise por `height` ao invés de `h-`
  - Pesquise `box shadow` ao invés de `shadow-md`
  - Pesquise `grid template columns` ao invés de `grid-cols-3`

Isso ajuda quando você sabe CSS, mas não lembra o nome da utility.

### 6.️ Sempre confira a tabela inicial

Cada página mostra:

- Uma tabela inicial
  - A utility class à esquerda
  - O CSS renderizado pela utility class à direita

Isso é útil para:

- Entender exatamente o que a classe faz
- Ver o valor exato aplicado

Igualmente importante, cada página também exibe:

- Exemplos visuais
- Variantes disponíveis (hover:, focus:, md:, etc.)

### 7. Quer explorar? Consulte pela categoria

Se não souber o nome da propriedade, navegue pelo menu lateral:

- Layout
- Flexbox & Grid
- Spacing
- Sizing
- Typography
- Backgrounds
- Borders
- Effects
- Filters
- Tables
- Transitions & Animation
- Transforms
- Interactivity
- SVG
- Accessibility

Isso ajuda quando você está explorando, não apenas buscando algo específico.

## Extra

Aqui estão alguns recursos interessantes mencionados durante a ministração do workshop:

- [CSS Flexbox Layout Guide - CSS-TRICKS](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Use data attributes - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes)

## Licença

MIT © Feito com <strike>amor</strike> _um teclado_ por [Danilo Barros](https://danilobjr.mit-license.org/)
