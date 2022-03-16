import React, { useEffect, useState } from "react";
import axios from 'axios';
import * as S from './styles';
import { useParams } from 'react-router-dom';
import ModalComponent from "../ModalComponent";
import ModalMsg from "../ModalMsg";


function Form(){

    const [ values, setValues ] = useState({});
    const [ err, setErr ] = useState('');
    const [ msg, setMsg ] = useState('');

    const { id } = useParams();

    function onChange(e) {
        const { name, value } = e.target;

        setValues({ ...values, [name]: value})
    }

function onSubmit(e) {
    e.preventDefault();

    axios.put(`http://localhost:3333/customers/${id}`, values)
        .then((response) => {
            setMsg('Updated customer!');
        })
        .catch(err => {
            setErr(err.response.data.error);
        })

};

async function getCustomer() {
    
    await axios.get(`http://localhost:3333/customers/${id}`)
        .then(response => {
            setValues(response.data)
        });
};

useEffect(() => {
    getCustomer();
},[]);

    return(
        <S.Container>
            <ModalComponent err={err} />
            <ModalMsg msg={msg} />
            <h1>Atualização de Cadastro</h1>
            <h2>Cliente:</h2>

            <form onSubmit={onSubmit}>
                <label htmlFor="name">Nome:</label>
                    <input id="name" type="text" name="name" onChange={onChange} value={values.name} />
                <label htmlFor="birth">Data de Nascimento:</label>
                    <input id="birth" type="date" name="birth" onChange={onChange} value={values.birth} />
            
            <button type="submit">Atualizar</button>
            </form>
        
        </S.Container>
    );
};

export default Form;