# Crud Cadastro de Clientes

#### Api: Api foi desenvolvida em node.js  

#### App: front-end desenvolvido em react

#### API
Desenvolvida com o framework express, com o banco de dados Mongodb. Documentação com Swagger.

#### APP
Bem basico e facil de usar.

### Instrucoes:

* Na raiz do projeto executar

* docker compose up -d

* Acesso ao front end: http://localhost:3000

* O banco de dados esta rodando na porta 27017, a API na porta 3333 e frontend na porta 3000.

## API:

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






