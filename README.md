# Doctor App

## Instruções

## Login Screen

Login test

email: cuentatest12@gmail.com
senha: 1234576

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

`Revalidar o token de autenticação do usuario (tempo de duração: *02:00 horas*)`

- GET / List - Get Patients

`Traz para nosso usuario logado a lista de pacientes`

- POST / List - Add Patient

`Adicionar um novo paciente`

- PUT / List - Update Patient

`Actualizar os dados de um paciente`

- DELETE / List - Delete Patient

`Apagar o registro de um paciente`
