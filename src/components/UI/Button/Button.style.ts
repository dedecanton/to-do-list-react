import styled from "styled-components";

type styleButtonType = {
    aditionalStyles: string
}

export const Button = styled.button(({aditionalStyles}: styleButtonType) => (
    `
    background-color: black;
    color: #fff;
    outline: 0;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition: all ease 0.3s;
  
    &:hover {
      transform: scale(1.1);
    }

    ${aditionalStyles}
    `
))