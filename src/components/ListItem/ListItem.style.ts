import styled from "styled-components";

type ContainerProps = {
    done: boolean
}

export const Container = styled.div(
  ({done}:ContainerProps) =>
    `
    width: 90%;
    margin: 1rem auto;
    padding: 1rem;
    border-bottom: 1px solid rgba(0,0,0,.5);
    border-radius: .5rem;
    display: flex;
    align-items: center;
    position: relative;
    text-align:center;

    input{
        width:15px;
        height:15px;
        margin-left: 0;
    }


    label{
        width: 80%;
        text-align: justify;
        text-decoration: ${done ? 'line-through' : 'initial'};
        margin-left: .5rem;
        word-break: break-word;
    }

    button{
        border: none;
        background-color:black;
        color: white;
        padding: .5rem 1rem;
        border-radius: 0.5rem;
        position: absolute;
        right:2%;
        cursor: pointer;
        transition: all ease .3s;
    }

    button:hover{
        transform: scale(1.1);
    }
    `
);
