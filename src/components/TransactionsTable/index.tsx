import { useContext } from "react";
import { Container } from "./styles";
import { TransactionsContext } from "../../TransactionsContext";

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        {/* crio classes nos valores para diferenciar as entradas e saídas, pois meu layout terá diferenciação de cor para cada tipo de operação */}
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {/* utilizando uma api  nativa do browser chamada Intl para fazer a formatação de valores. utilizo o NumberFormat e passo primeiro o idioma, após isso passo o style, que é o tipo de formatação (no caso é currency pois é moeda) e após eu passo o currency para dizer qual moeda. após, coloco o format ára dizer o que eu vou formatar.   */}
                {new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-br").format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
