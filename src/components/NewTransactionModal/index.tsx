import Modal from "react-modal";
import { FormEvent, useContext, useState } from "react";
import { TransactionsContext } from "../../TransactionsContext";

import closeImg from "../../assets/fechar.svg";
import incomeImg from "../../assets/entradas.svg";
import outcomeImg from "../../assets/saídas.svg";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);

  const [type, setType] = useState("deposit");

  //crio um estado para cada informação que irei armazenar dos inputs
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");

  async function handleNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount: value,
      category,
      type,
    });

    setTitle("");
    setValue(0);
    setCategory("");
    setType("deposit");
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleNewTransaction}>
        <h1>Cadastrar nova transação</h1>

        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(event) => setValue(+event.target.value)}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            //setando o estado pelo clique do botão
            onClick={() => setType("deposit")}
            //setando uma propriedade conforme o valor do estado
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
