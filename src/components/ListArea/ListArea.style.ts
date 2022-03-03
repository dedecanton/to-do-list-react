import styled from "styled-components";
import ContainerStyle from "../UI/Container";

export const Container = styled(ContainerStyle)`
  flex-direction: column;
  justify-content: center;
  box-shadow: 1px 1px 6px rgb(0 0 0 / 80%);
  border-radius: 0.5rem;
  padding: 1rem;

  ul{
    width: 100%
  }

  h2{
    color: black;
    font-size: 1.2rem;
  }
`;
