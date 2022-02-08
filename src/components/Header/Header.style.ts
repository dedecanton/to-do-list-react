import styled from "styled-components";

export const Header = styled.header`
  background: transparent;
  box-shadow: 0 1px 6px rgb(0 0 0 / 10%);
  height: 15px;
  padding: 1rem;
`;

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  max-width: 1440px;
`;

export const HeaderLogo = styled.h1`
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
`;
