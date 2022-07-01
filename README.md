# Boas vindas ao repositório do projeto de Front-End Wine Club!

<summary><strong> Iniciando o projeto</strong></summary><br />

1. Clone o projeto
    * `git clone git@github.com:itaji-create/wine-club-app.git`
    * Entre na pasta do projeto
2. Instale as dependências
    * `npm install`
3. Inicialize o projeto
    * `yarn dev` ou `npm run dev`

<summary><strong>Dependências do projeto</strong></summary><br />

    - jest-environment-jsdom
    - next
    - react
    - react-dom
    - eslint
    - jest
    - ts-node
    - typescript

<summary><strong>Linter</strong></summary><br />

Nesse projeto é feito o uso do [ESLint](https://eslint.org/), para roda-lo basta executar `npm run lint`, caso haja algum problema no código ele será impresso no terminal.

<summary><strong>Configurações mínimas que sua máquina deve ter</strong></summary><br />

1. Sistema Operacional Linux
2. Node
    * `deve ter versão igual ou superior à 16`.
    * Rode os comandos abaixo para instalar a versão correta do node:
        * `nvm install 16 --lts`
        * `nvm use 16`
		* `nvm alias default 16` 
3. Docker
    * Rode o comando abaixo para garantir que o docker está instalado em sua máquina:
        * `docker ps`

<summary><strong>Docker</strong></summary><br />

Este projeto possui um Dockerfile, para subir o conteiner do projeto siga os seguintes passos:

1. Use o comando abaixo para remover todos os containers e imagens Docker que estejam em seu computador:
    * `docker system prune -af`

2. Para processar o arquivo Dockerfile use o comando:
    * `docker build -t <nome-da-imagem> .`
    * Esse comando irá criar uma imagem com o nome que você escolher.
    * Para conferir rode o comando `docker images`.

3. Para executar o container a partir da imagem criada usando Dockerfile rode o seguinte comando:
    * `docker container run --name <nome-do-container> -p 3000:3000 <nome-da-imagem>`

Pronto, já pode acessar o site pelo localhost na porta 3000.

    
<summary><strong>Testes de cobertura</strong></summary><br />

* Neste projeto foram feitos testes em *TypeScript*, utilizando Jest na pasta `_tests_`.
* Para rodar os tests utilize o comando a seguir:
    * `yarn test` ou `npm run test`


<h4>Neste projeto foi criado uma versão simplificada de uma loja de vinhos. Nele os usuários poderão:</h4>

1. Fazer login

2. Editar perfil;

3. Salvar produtos na página de favoritos;

4. Pesquisar produto por título a parti da API da Wine;

5. Adicionar ou remover produto do carrinho em diferentes quantidades;

6. Avançar e retroceder páginas do catálogo de produtos;

7. Filtrar produtos por preço;

8. Visualizar detalhes do produto;

9. Finalizar uma compra simulada;
