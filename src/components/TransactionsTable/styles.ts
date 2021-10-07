import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      //usando o encadeamento para pegar o primeiro elemento td dentro de um conjunto
      &:first-child {
        color: var(--text-title);
      }

      //estilização quando a className dentro da td for deposit
      &.deposit {
        color: var(--green);
      }

      //estilização quando a className dentro da td for witdraw
      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
