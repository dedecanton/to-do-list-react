import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem auto;
  max-width: 300px;
  width: 80%;
  background-color: black;
  color: white;
  padding: 1rem;
  border-radius: .5rem;
  display: flex;
  justify-content:center;
  align-items:center;

  table{
    border:none;
    width:100%;
    text-align:center;
}

th,td{
    padding:.3rem;
    font-weight: bold;
    font-family: sans-serif;
}
`;
