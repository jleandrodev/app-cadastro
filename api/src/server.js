const express = require("express");
const customersRoute = require("./routes/customers.routes");
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const swaggerFile = require('./swagger.json');

const PORT = process.env.PORT || 3333;

const app = express();

// Configurações da aplicação
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Documentação
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

// Configurações de Rotas
app.use(customersRoute);


// Inicialização do Servidor
app.listen(3333, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});
