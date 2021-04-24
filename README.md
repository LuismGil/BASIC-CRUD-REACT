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
- POST / Auth - Login User
- GET / Auth - Renew JWT
- GET / List - Get Patients
- POST / List - Add Patient
- PUT / List - Update Patient
- DELETE / List - Delete Patient
