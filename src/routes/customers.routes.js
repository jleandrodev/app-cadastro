const { Router } = require("express");
const fieldsValidation = require("../middlewares/fieldsValidation");
const cpfValidation = require("../middlewares/cpfValidation");


const customersRoute = Router(); 

const customerRepositories = require('../repositories/customers.repositories');


customersRoute.post('/customers', fieldsValidation, cpfValidation, customerRepositories.create);

customersRoute.put('/customers/:id', fieldsValidation, customerRepositories.update);

customersRoute.get('/customers', customerRepositories.all);

customersRoute.get('/customers/:id', customerRepositories.show);

customersRoute.delete('/customers/:id', customerRepositories.delete);

 
module.exports = customersRoute;
