import styled from 'styled-components'

export const Container = styled.div`
    width: 80%;
    max-width: 500px;
    margin: 50px auto;
    border-radius: 20px;
    box-shadow:0 0 10px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;

    form{
    display: flex;
    flex-direction: column;
    margin: 20px
    }

    input{
        margin-top: 10px;
        margin-bottom: 20px;
        height: 20px;
        padding-left: 15px;
        border: none;
        border-bottom: 1px solid;
        outline: 0;
        font-size: 16px;
        
    }

    h1, h2{
        margin: 20px;
    }

    button{
        height: 40px;
        color: #fff;
        background: green;
        border: none;
        border-radius: 20px;
        margin-top: 50px;
        font-size: 18px;
        transition: 0.2ms;
        cursor: pointer;
    }

    button:hover{
        transform: scale(1.05);
    }
   



`;