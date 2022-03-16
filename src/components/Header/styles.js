import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80px;
    margin-bottom: 50px;
    background: #2B2B2B;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    `;

export const Logo = styled.div`
    width: 50%;
    color: #fff;
    display: flex;
    flex-direction: flex-start;  
    padding-left: 50px ;
    `;

export const Nav = styled.div`
    width: 50%;
    display: flex;
    justify-content: end;
    color: #fff;
    
    h3{
        margin-right: 30px;
    }
    a{
        text-decoration: none;
        color: #fff;

    }

    
`;