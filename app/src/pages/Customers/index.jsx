import React from "react";
import CustomersList from "../../components/CustomersList/CustomersList";
import GlobalStyles from '../../styles/globalStyles';
import * as S from './styles';
import Header from '../../components/Header';
import Footer from "../../components/Footer";

function Customers() {
    return(
        <S.Container>
            <Header />
            <h1>Lista de Clientes</h1>
            
            <CustomersList />
            <Footer />
            <GlobalStyles />
        </S.Container>
    )
};

export default Customers;