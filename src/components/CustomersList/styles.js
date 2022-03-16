import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    min-height: 40vh;
    max-width: 800px;
    border-radius: 20px;
    box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.2);
    margin: 50px auto;
    margin-bottom: 20vh;
    padding: 30px;

    table {
        width: 100%;
        text-align: center;
        justify-content: space-between;
        border-collapse: collapse;
        }
        
        
        
        th{
            border-bottom: 1px solid;

        }

        td{ 
            padding: 15px 0;
        }

        button{
            border: none;
            width: 60px;
            height: 20px;
            color: #fff;
            border-radius: 5px;
            cursor: pointer;
        }
        
        #edit{
            background: green;
        
        }

        #delete{
            background: red;
        }
        
    
        
        

`;