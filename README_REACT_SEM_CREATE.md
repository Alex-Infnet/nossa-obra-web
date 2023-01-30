# **Creating a new React App without create-react-App**

## Iniciando um novo projeto Node

```node
npm init -y
```
#### Esta etapa é requerida apenas para criar um novo projeto React. Node aqui, no contexto do React vai prover para o desenvolvedor recursos de compilação, integração com dependências, transpiladores e outros recursos. Do contrário faríamos uma importação estática, mas isso seria muito limitante para o desenvolvimento.

<br>

#### Informe os dados do projeto durante essa etapa.

<br>

## React - Adicionando as bibliotecas para Web

```node
yarn add react react-dom
```
#### Essa etapa faz a instalação das duas dependências do projeto, mas isso ainda não é suficiente. Vamos tentar montar a primeira estrutura de código, criando o arquivo de entrada index.js e o arquivo de renderização index.html

<br >

```zsh
touch src/index.js && touch public/index.html
```

#### Ao arquivo index.js, adicione a seguinte instrução (você tem a opção de criar um novo arquivo chamado app.js para ser o ponto de entrada):

```js
import React from "react";
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <div>
    Conteudo do nosso site
  </div>
);
```

#### Ao arquivo index.html, adicione:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Page - sem create-react-app</title>
</head>

<body>
  <div id="root"></div>
  <script src="main.js"></script>
</body>

</html>
```



#### Tentar acessar esse recurso, **index.html**, no navegador não é possível, certamente tomaremos erro no console de biblioteca não encontrada. Utilizar importação estática não é o desejado.

#### Para resolver nossos problemas de compilação vamos adicionar algumas bibliotecas úteis ao projeto. Além disso, precisamos de um compilador que converte JSX em código JS + HTML reconhecido pelo navegador

<br>

```node
yarn add webpack webpack-dev-server webpack-cli --dev
```

#### Webpack será responsável por buildar o nosso projeto, dessa forma, sempre que precisarmos gerar novo "executável" utilizaremos o webpack. Além disso, incluímos o webpack-dev-server que funcionará como servidor local para desenvolvimento e compilações em tempo real

#### Além do webpack, vamos incluir o babel no projeto, essa biblioteca faz algumas transpilações, convertendo código ES em versões superiores para ES em versões suportadas por navegadores antigos. 

<br>

### Babel: "The compiler for writing next generation JavaScript."

<br>

```node
yarn add babel-loader @babel/core @babel/preset-react --dev
```

<br>

## Criando um setup para o Webpack

#### Crie um arquivo webpack.config.js com a sequinte configuração. O webpack utiliza esses valores para fazer o build do projeto:

```js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ],
  },
  devServer: {
    port: 8000
  }
};
```

#### Pronto, seu código estará pronto para ser executada como uma aplicação React. Dessa vez não utilizamos o utilitário **create-react-app** e estamos conseguindo praticamente os mesmos recursos.

#### Este tutorial serve muito bem como um exercício para entendermos o que acontece "under the hood", mas na prática obtemos mais benefícios utilizando o utilitário, além de poupar tempo de desenvolvimento.