const mongoose = require('../db/db');
const { Schema } = mongoose;


const CustomerSchema = new Schema ({
    name: { type: String, required: true },
    cpf: { type: String, required: true },
    birth: { type: String, required: true },
    created_at: { type: Date, default: Date.now() } 

});

module.exports = mongoose.model('Customer', CustomerSchema); 