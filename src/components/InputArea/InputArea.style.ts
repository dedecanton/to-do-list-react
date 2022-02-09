import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem auto;
  max-width: 1440px;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(min-width: 980px){
    flex-direction: row;
  }
`;

export const Input = styled.input`
  width: 75%;
  margin: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 6px rgb(0 0 0 / 80%);
  outline: 0;
  border-radius: 0.5rem;
  border: none;

  @media(min-width: 980px){
    width:70%
  }
`;

export const Button = styled.button`
  width: 10rem;
  margin: 0.5rem;
  padding: 1rem;
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

  @media(min-width: 980px){
    width:20rem;
    margin-left: 1rem
  }
`;
