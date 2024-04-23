# 🍕 pizza shop

Neste projeto, ampliei minha expertise em React, TypeScript e manipulação de URL State, incorporando funcionalidades de paginação, tratamento de erros, como o 404, e integração de gráficos e dashboards. Além disso, explorei o uso de mocks de dados para otimizar o desenvolvimento e teste de novos recursos. Essa imersão aprofundada solidificou minhas habilidades práticas nessas tecnologias, capacitando-me a criar aplicações robustas de forma eficiente e confiável.

## 🚀 Começando

* Consulte **[Instalação](#-instalação)** para clonar e configurar o projeto;
* Consulte **[Como Iniciar o Projeto](#-como-iniciar-o-projeto)** para saber como iniciar o projeto;
* Consulte **[Testes](#-testes)** para execução dos testes unitários;
* Consulte **[Tecnologias Utilizadas](#%EF%B8%8F-tecnologias-utilizadas)** para conhecer as tecnologias utilizadas.

### 📋 Pré-requisitos
Necessita de `Node.js v20+` para rodar. Verifique a versão do Nodejs instalada na sua máquina.

```bash
node --version
```

Você receberá a seguinte mensagem após executar o comando, indicando a sua versão do Node.js.
```bash
v20.7.0
```

### 🔧 Instalação

Caso não seja identificado o ``Nodejs``, instale a **versão LTS** [clicando aqui](https://nodejs.org/en)

Clone o repositório da API para o seu ambiente local:
```bash
git clone https://github.com/rocketseat-education/pizzashop-api
```
Este projeto utiliza Bun. Em um ambiente Linux ou no WSL do Windows execute o comando para instalar as dependências:

```bash
bun i
```

Clone este repositório para o seu ambiente local para executar a aplicação web:
```bash
git clone https://github.com/Wellington-Henrique/pizzashop-web-react-ts
```

Instale as dependências do projeto:
```bash
npm i
```

## 📦 Como Iniciar o Projeto

Inicie a API com o seguinte comando:

```bash
bun run dev
```
Abra a pasta do projeto no seu editor favorito.

.**..ou utilize o seguinte comando na raiz do projeto se tiver o Visual Code instalado**:
```bash
code .
```

Inicie a aplicação:
```bash
npm run dev
```

A aplicação iniciará em modo de desenvolvimento. [Clique aqui](http://localhost:5173/) para visualizar a aplicação no seu navegador. Normalmente o **vite** utiliza a porta **5173**.

## 🎭 Testes

Inicie o Playwright para a execução dos testes:
```bash
npx playwright test --ui
```

## 🛠️ Tecnologias Utilizadas

* ⚡ [Vite](https://vitejs.dev/): Um construtor de aplicações JavaScript rápido e flexível;
* 🎨 [Tailwindcss](https://tailwindcss.com/): Biblioteca de estilização;
* 🔍 [TypeScript](https://www.typescriptlang.org/): Linguagem superset JavaScript que adiciona tipagem estática opcional;
* ♿️ [Radix UI](https://www.radix-ui.com/): Componentes web acessíveis e sofisticados para criar interfaces elegantes e inclusivas;
* 🌟 [Shadcn-UI](https://ui.shadcn.com/): Uma biblioteca de componentes React que simplifica o desenvolvimento de interfaces elegantes e responsivas. Com uma vasta gama de componentes personalizáveis e prontos para uso;
* 🔄 [Axios](https://axios-http.com/): Uma biblioteca JavaScript simplificada para fazer requisições HTTP, oferecendo uma interface fácil de usar e promessas para lidar com solicitações assíncronas de forma eficiente;
* 🔒 [Zod](https://zod.dev/): Uma biblioteca de validação de esquema para TypeScript que torna a validação de dados simples, poderosa e tipada;
* 📅 [date-fns](https://date-fns.org/): Biblioteca JavaScript de manipulação de datas;
* 📚 [Lucide React](https://lucide.dev/guide/packages/lucide-react): Biblioteca de ícones para Reactjs;
* 🔍 [ViteTest](https://vitest.dev/): Uma estrutura de teste ágil e rápida para aplicativos React desenvolvidos com Vite. Simplificando o processo de escrita e execução de testes de unidade e integração;
* 🛠️ [MSW (Mock Service Worker)](https://mswjs.io/): Uma biblioteca para interceptar e simular requisições HTTP durante o desenvolvimento de aplicativos web;
* 🎭 [Playwright](https://playwright.dev/): Uma biblioteca de automação de testes para navegadores da web, que oferece uma API simples e poderosa para escrever testes de ponta a ponta em JavaScript ou TypeScript. Com suporte para vários navegadores, incluindo Chrome, Firefox, e Safari, o Playwright permite simular interações do usuário e verificar o comportamento de aplicativos web de forma eficiente e confiável.

## 🌟 Principais Funcionalidades

* 📋 Criar Conta de Usuário;
* 🛠️ Editar Perfil do Estabelecimento;
* 📋 Listar Pedidos;
* 🔍 Filtrar Pedidos;
* ✅ Aprovar Pedido;
* 🚚 Entregar Pedido;
* 🏁 Finalizar Pedido;
* ⛔ Cancelar Pedido;
* 📊 Visualizar Dashboard de Receita Mensal Total;
* 📅 Visualizar Dashboard de Pedidos no Mês;
* 📆 Visualizar Dashboard de Pedidos no Dia;
* 📉 Visualizar Dashboard de Pedidos Cancelados no Mês;
* 🔝 Visualizar Dashboard de Produtos Mais Populares;
* 🔄 Páginação.

## ✒️ Autores
* **Rocketseat** - *Formação React* - [Rocketseat Education][rocketseat-git-url]

## 🖇️ Contribuição

* **Wellington Henrique** - *Implementação em aula* - [LinkedIn][linkedin-url]

## Banner do Projeto
![Banner](/public/banner.png)


Se você encontrar problemas, bugs ou tiver sugestões para melhorar este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## 📜 Licença
MIT

## 🎁 Expressões de gratidão

* Agradeço a [Rocketseat][rocketseat-linkedin-url] por compartilhar este conhecimento!🫂.

---

🍕 Pizza Shop com ❤️ por [Wellington Henrique][linkedin-url] 😊

[linkedin-url]: https://www.linkedin.com/in/wellingtonhlc/
[rocketseat-linkedin-url]: https://www.linkedin.com/school/rocketseat/
[rocketseat-git-url]: https://github.com/rocketseat-education/pizzashop-api