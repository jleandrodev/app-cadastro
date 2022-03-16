import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as S from './styles';
import Modal from 'react-modal';
import ModalMsg from "../ModalMsg";

Modal.setAppElement('#root');

function CustomersList() {

    const [ customer, setCustomer ] = useState([]);
    const [ msg, setMsg ] = useState('');

    async function getData(){

        await axios.get('http://localhost:3333/customers')
            .then(response => {
                setCustomer(response.data)
            })
    };

    async function remove(id) {
       
            await axios.delete(`http://localhost:3333/customers/${id}`)
                .then(response => {
                    setMsg("Customer deleted!");
                });
        
    };

    useEffect(() => {
        getData();
    }, []);

    return(
        <S.Container>
            <ModalMsg msg={msg} />
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Data de Nascimento</th>
                        <th>Ações</th>
                    </tr>

                </thead>
            {
            customer.map(item => {
            return (
                <tbody key={item._id}>

                    <tr>
                        <td>{item.name}</td>
                        <td>{item.cpf}</td>
                        <td>{item.birth}</td>
                        <td>
                            <Link to={`/customers/${item._id}`}><button id="edit">Editar</button></Link>
                            <button id="delete" onClick={e => remove(item._id)}>Excluir</button>
                        </td>
                    </tr>
                </tbody>

                    )
                    })
                }
            </table>
        </S.Container>
    )
};

export default CustomersList;