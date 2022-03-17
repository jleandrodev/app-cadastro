# Crud Cadastro de Clientes

<h4 align="center"> 
	🚧  Cadastro de Clientes 🚀 Concluído! 🚧
</h4>

## 🏁 Tópicos

<!--ts-->
   * [API](#api)
   * [APP](#app)
   * [Rodando o projeto](#rodando-o-projeto)
   * [Rotas da API](#rotas-da-api)
   * [Tecnologias](#tecnologias)
<!--te-->
#### Api:
     Api desenvolvida em node.js, utilizando o framework express e banco de dados Mongodb. Documentação com Swagger.

#### App:
     front-end desenvolvido em react



### Rodando o projeto:

#### Na raiz do projeto executar:
     docker compose up -d

* Acesso ao front end: http://localhost:3000

* O banco de dados esta rodando na porta 27017, a API na porta 3333 e frontend na porta 3000.

## ROTAS DA API:

#### POST: http://localhost:3333/customers/

#### GET: http://localhost:3333/customers/

#### PUT: http://localhost:3333/customers/ID

#### DELETE: http://localhost:3333/customers/ID

#### DOCUMENTAÇÂO: http://localhost:3333/api-docs


## POST: http://localhost:3333/customers/

###### Headers Obrigatorios: headers {  "Content-type": "application/json" }

###### Obrigatorio JSON exemplo:
    {
	"name": "jhonatan",
	"cpf": "71899949046",
	"birth": "18-12-1997"
    }

## GET: http://localhost:3333/customers/

###### Headers Obrigatorios: headers {  "Content-type": "application/json" }

###### Retorno:
    {
		"_id": "6231b1b4cae35591fc377b66",
		"name": "jhonatan leandro",
		"cpf": "71899949046",
		"birth": "18-12-1990",
		"created_at": "2022-03-16T09:41:25.097Z",
		"__v": 0
	}


## PUT: http://localhost:3333/customers/ID

###### Headers Obrigatorios: headers {  "Content-type": "application/json" }

###### Obrigatorio JSON exemplo:

    {
	"name": "jhonatan",
	"cpf": "71899949046",
	"birth": "18-12-1997"
    }


## DELETE: http://localhost:3333/customers/ID

###### Headers Obrigatorios: headers {  "Content-type": "application/json" }


### 🛠️ Tecnologias

Este projeto foi construido com:

- [Node.js](https://nodejs.org/en/)<br><img align="center" alt="NodeJs" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
- [Express](https://expressjs.com/)<br><img align="center" alt="Express" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
- [MongoDB](https://mongodb.com/)<br><img align="center" alt="MongoDB" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
- [Reactjs](https://reactjs.org/)<br><img align="center" alt="React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
