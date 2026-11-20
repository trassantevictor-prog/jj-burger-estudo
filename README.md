# JJ Burger — projeto React + Vite

Projeto didático de uma hamburgueria, baseado nas referências visuais enviadas.

## Demonstração online

Acesse o site publicado na Vercel: [JJ Burger](https://jj-burger-estudo.vercel.app)

## 1. O que foi criado

- Página inicial com identidade visual escura, amarelo industrial, vermelho e verde WhatsApp.
- Navegação por âncoras: Home, Cardápio, Sobre nós e Contato.
- Cards de produtos renderizados a partir de um array.
- Filtros por categoria.
- Modal para personalizar hambúrguer (pão, ponto da carne e adicionais).
- Sacola com quantidade, remoção automática quando chega a zero e subtotal.
- Checkout com dados de contato, entrega e pagamento.
- Montagem da mensagem e abertura do WhatsApp.
- Layout responsivo para celular e desktop.

> Os preços e o telefone do WhatsApp são exemplos extraídos/adaptados das referências. Confirme os dados comerciais antes de publicar.

## 2. Como executar

Você precisa ter o Node.js instalado.

1. Abra a pasta `repositorio` no VS Code.
2. Abra o terminal integrado (`Terminal > Novo Terminal`).
3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. O Vite mostrará um endereço local, normalmente `http://localhost:5173`. Abra-o no navegador.
6. Para testar a versão de produção:

   ```bash
   npm run build
   npm run preview
   ```

## 3. Estrutura de pastas

```text
repositorio/
├── index.html
├── package.json
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── products.js
    └── styles.css
```

- `index.html`: documento HTML inicial e elemento `#root`.
- `main.jsx`: ponto de entrada; conecta React ao HTML com `createRoot`.
- `App.jsx`: componentes, eventos, estado e composição da página.
- `products.js`: dados do cardápio, separados da apresentação.
- `styles.css`: cores, espaçamentos, tipografia e responsividade.

## 4. Conceitos de React usados

### Componentes
`Header`, `Hero`, `ProductCard`, `ModalProduto`, `Sacola`, `Checkout`, `Footer` e `App` são funções que retornam JSX. Cada componente tem uma responsabilidade, facilitando leitura e manutenção.

### JSX
É a sintaxe parecida com HTML usada dentro do JavaScript. No JSX, atributos usam nomes como `className` e eventos usam `onClick`.

### Props
São dados enviados de um componente pai para um filho. Por exemplo, `ProductCard` recebe `produto` e `adicionar`; assim o mesmo componente serve para todos os produtos.

### Estado com `useState`
O estado guarda informações que mudam na tela: categoria, produto selecionado, itens da sacola e campos do checkout. Ao chamar a função `set...`, o React renderiza novamente a parte necessária da interface.

### Renderização de listas
`map()` transforma o array de produtos em vários componentes `ProductCard`. A propriedade `key` dá uma identidade estável a cada item da lista.

### Renderização condicional
Expressões como `produto && ...` e `if (!aberta) return null` mostram ou escondem modais conforme o estado.

### Eventos
`onClick`, `onChange` e `onSubmit` conectam ações do usuário às funções JavaScript.

### Imutabilidade
Ao atualizar a sacola, usamos `map`, `filter` e spread (`...`) para criar novos arrays/objetos em vez de alterar diretamente o estado anterior. Isso permite ao React detectar mudanças corretamente.

### `useMemo`
O total dos adicionais é um valor derivado. `useMemo` evita recalcular a soma quando os adicionais não mudaram. Em aplicações pequenas, poderia ser calculado diretamente; está aqui como exemplo de otimização simples.

## 5. Boas práticas aplicadas

- Componentes pequenos com responsabilidades claras.
- Dados do cardápio separados da interface.
- Nomes de variáveis e funções em português e com significado.
- Estado atualizado de forma imutável.
- Elementos HTML semânticos (`header`, `main`, `section`, `article`, `footer`, `form`).
- Campos com `label`, validação `required` e botões com rótulos acessíveis.
- CSS organizado por blocos e variáveis para cores reutilizáveis.
- Sem bibliotecas extras de interface: apenas React e Vite.

## 6. Ajustes importantes antes de usar de verdade

1. Em `src/App.jsx`, procure `5551999999999` e troque pelo WhatsApp comercial com código do Brasil e DDD, somente números.
2. Confira preços, ingredientes, horário de atendimento e endereço.
3. As imagens de demonstração usam URLs externas presentes nas referências. Para produção, baixe imagens próprias e guarde-as em `public/images`.
4. O checkout abre o WhatsApp; ele não grava pedidos em banco de dados nem calcula taxa de entrega. Isso pode ser desenvolvido depois, quando você estudar backend e APIs.

## 7. Sugestão de ordem de estudo

1. Comece por `src/main.jsx` para entender como o React é iniciado.
2. Leia `products.js` e entenda como os dados são organizados.
3. Em `App.jsx`, estude primeiro `ProductCard` e o uso de `props`.
4. Depois acompanhe `useState` em `App` e observe como os cliques atualizam a tela.
5. Por último, estude o fluxo completo: produto → personalização → sacola → checkout → WhatsApp.
