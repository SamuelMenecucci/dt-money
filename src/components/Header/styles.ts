import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background-color: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    //Toda vez que a propriedade filter for alterada, a transição dessa alteração vai demorar 0.2s
    transition: filter 0.2s;

    //Como estou usando encadeamento, para colocar o hover basta usar o & para pegar a mesma tag que estou alterando
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
