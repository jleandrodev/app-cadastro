const CustomerModel = require('../models/CustomerModel');

class CustomerRepositories {

    async create(req, res) {
        const { cpf } = req.body;
        req.body.cpf = cpf.replace(/\D/g,'');
        const customer = new CustomerModel(req.body);
        await customer
                    .save()
                    .then((response) => {
                        return res.status(201).json('Customer created!')
                    })
                    .catch((err) => {
                        return res.status(500).json(err)
                    });
    };

    async update(req, res) {
        await CustomerModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(err => {
                return res.status(500).json(err)
            });
    };

    async all(req, res) {
        await CustomerModel.find()
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(err => {
                return res.status(500).json(err)
            })
    };

    async show(req, res) {
        const { id } = req.params;
        await CustomerModel.findOne({ '_id': id })
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(err => {
                return res.status(500).json(err);
            });
    };

    async delete(req, res) {
        const { id } = req.params;
        await CustomerModel.deleteOne({ '_id': id })
            .then(response => {
                return res.status(200).json('Customer deleted!')
            })
            .catch(err => {
                res.status(200).json(err);
            });
    };
};

module.exports = new CustomerRepositories();