const CustomerModel = require("../models/CustomerModel");

const fieldsValidation = async (req, res, next) => {

    const { name, cpf, birth } = req.body;

    if(!name) {
        return res.status(400).json({ error: "Name is required!"});
    } else if(!cpf) {
        return res.status(400).json({ error: "CPF is required!"});
    } else if(!birth) {
        return res.status(400).json({ error: "Birth is required!"});
    }  else {

        if(req.params.id){
            await CustomerModel.findOne({ 
                '_id': { '$ne': req.params.id },
                'cpf': { '$eq': cpf }});
            } else {
            
            const cpfExists = await CustomerModel.findOne({ 'cpf': { '$eq': cpf }});
            if(cpfExists) {
                return res.status(400).json({ error: "an account with this CPF already exists"})
        }

        }
    };

    next();

    

    };


module.exports = fieldsValidation;