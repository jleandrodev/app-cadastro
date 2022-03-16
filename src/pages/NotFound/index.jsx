import React from "react";
import * as S from './styles';
import Header from '../../components/Header';
import GlobalStyles from '../../styles/globalStyles';


function NotFound() {
    return(
        <>
        <Header />
        <S.Container>
                <h1>404 Not Found</h1>
                <h2>Algo de errado não está certo...</h2>
            <GlobalStyles />
        </S.Container>
        </>
    )
};

export default NotFound;