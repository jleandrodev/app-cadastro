import React, { useState } from "react";
import * as S from './styles';
import axios from 'axios';
import ModalComponent from "../ModalComponent";
import ModalMsg from "../ModalMsg";



const initial = {
    name: '',
    cpf: '',
    birth: ''
};

function Form(){

    const [values, setValues] = useState(initial);
    const [ err, setErr ] = useState('');
    const [ msg, setMsg ] = useState('');

    function onChange(e) {
        const { name, value } = e.target;

        setValues({ ...values, [name]: value})
    }

function onSubmit(e) {
    e.preventDefault();

    axios.post('http://localhost:3333/customers', values)
        .then((response) => {
            setMsg('Customer created!');
        })
        .catch(err => {
            console.log(err.response.data.error);
            setErr(err.response.data.error);
        })

};

    return(
        <S.Container> 
            <ModalComponent err={err} />
            <ModalMsg msg={msg} />
            <h1>Cadastro de Clientes</h1>
            <h2>novo cliente:</h2>

            <form onSubmit={onSubmit}>
                <label htmlFor="name">Nome:</label>
                    <input id="name" type="text" name="name" onChange={onChange} />
                <label htmlFor="cpf">CPF:</label>
                    <input id="cpf" type="number" name="cpf" onChange={onChange} />
                <label htmlFor="birth">Data de Nascimento:</label>
                    <input id="birth" type="date" name="birth" onChange={onChange} />
            
            <button type="submit">Cadastrar</button>
            </form>
        
        </S.Container>
    );
};

export default Form;