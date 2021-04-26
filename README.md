# Doctor App

É um sistema onde um médico pode acompanhar seus pacientes (adicionando novos pacientes, modificando pacientes existentes e eliminando pacientes inativos).

Quando este aplicativo é usado pela primeira vez, o médico só precisa criar um usuário, preenchendo corretamente o formulário de registro e ele será automaticamente redirecionado para a lista onde ele poderá adicionar seus pacientes.

Após o registro, o médico só precisará fazer o login com seu e-mail e senha.

**OBS:** O médico só pode estar ativo dentro da aplicação por duas horas de cada vez, depois disso ele terá que entrar novamente no sistema.

## Instruções para sua instalação local

O usuário que quiser usar este projeto, basta fazer um Git clone do repositorio, e uma vez baixado só entrar no seu IDE de preferencia e fazer um `npm install` para baixar os pacotes de Node.

Uma vez pronto, basta ir até o terminal e se posicionar em seu projeto e fazer um `npm start` isto abrirá a aplicação no servidor local, basta colocar `Localhost://3000` em seu navegador de escolha.

API Link -> `https://crud-doctorapp.herokuapp.com/api`

Para trabalhar em seu ambiente local é simples, você só precisa declarar em seu ambiente local `.env.production` uma variável de ambiente onde você definirá o link API.

Exemplo:

posicionado em seu `.env.production` você deve definir

```
REACT_APP_API_URL=https://crud-doctorapp.herokuapp.com/api

```

para testar como as informações que estão sendo tratadas, você pode usar a collection de Postman que está disponível abaixo, lá você poderá testar livremente e entender como realmente funciona.

## Postman Collection

CRUD_TDR -> `https://www.getpostman.com/collections/3571129ef634a2f1b53a`

Esta coleção faz pedidos diretamente ao anfitrião onde meu backend é hospedado, que neste caso é Heroku.

Instruções para a utilização da coleção

Para fazer as solicitações de 'Renew JWT', 'Get Patients', 'Add Patient', 'Update Patient', 'Delete Patient' , nosso usuário deve ser validado, para validar um usuário nós simplesmente fazemos uma petição de login e ele irá gerar um token, copiar esse token e ir para a solicitação que queremos fazer na parte dos headers e alterar o valor do VALOR para o novo token.

Que você encontrará nesta lista?

- POST / Auth - Create User

`Criar um novo usuario`

- POST / Auth - Login User

`Fazer o login do usuario`

- GET / Auth - Renew JWT

`Revalidar o token de autenticação do usuario (tempo de duração: 02:00 horas)`

- GET / List - Get Patients

`Traz para nosso usuario logado a lista de pacientes`

- POST / List - Add Patient

`Adicionar um novo paciente`

- PUT / List - Update Patient

`Actualizar os dados de um paciente`

- DELETE / List - Delete Patient

`Apagar o registro de um paciente`

## Tecnologias utilizadas para este projeto

Eu criei este projeto com `npx create-react-app`.

em seu desenvolvimento, usei:

- [JavaScript](https://www.javascript.com/)
- [React.js](https://es.reactjs.org/)
- [Redux](https://es.redux.js.org/)
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)
- [moment.js](https://momentjs.com/)
- [react-modal](https://github.com/reactjs/react-modal)
- [Material-UI](https://material-ui.com/)
- [sweetalert2](https://sweetalert2.github.io/)
- [fontAwsome](https://fontawesome.com/icons)
- [Scss](https://sass-lang.com/)
