import React from "react";
import { Link } from "react-router-dom";
import * as S from './styles';

function Header() {
    return(
        <S.Container>
            <S.Logo>
                <h1>MOCX</h1>
            </S.Logo>
            <S.Nav>
                <Link to={'/'}>
                    <h3>Home</h3>
                </Link>
                <Link to={'/customers'}>
                    <h3>Admin</h3>
                </Link>
            </S.Nav>
        </S.Container>
    )
};

export default Header;