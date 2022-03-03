import styled from "styled-components";
import ContainerStyle from "../UI/Container";

type ContainerProps = {
  done: boolean;
};

export const Container = styled(ContainerStyle)`
    
    padding: 1rem;
    border-bottom: 1px solid rgba(0,0,0,.5);
    border-radius: .5rem;
    flex-direction: column;
    justify-content:initial;
    position: relative;
    text-align:center;

    input{
        width:20px;
        height:20px;
        margin-left: 0;
    }


    label{
        margin: .5rem auto;
        text-align: center;
        text-decoration: ${({done}:ContainerProps) => done ? "line-thorough" : "initial"};
        word-break: break-word;
    }

    // aditional styled button component
    button{
        width:100%;
        padding: .5rem 1rem;
        margin-top: .5rem;

    }

    @media (min-width:980px){
        flex-direction: row;

        input{
            width:15px;
        height:15px;
        }

        label{
            width: 75%;
            margin: 0;
            margin-left: .5rem;
            text-align: justify;
        }

        button{
            width: initial;
            position: absolute;
            right:2%;
            margin-top: 0;
        }
    }
`