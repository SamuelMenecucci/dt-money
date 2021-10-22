import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";
import { throws } from "assert";

createServer({
  //crio um modelo de bd, aonde serão armazenadas os meus dados
  models: {
    //digo o nome da entidade que irá receber os meus dados. o Model é importado do miragejs
    transaction: Model,
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      //para listar todas as ocorrencias dentro de transaction
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      //crio a ocorrencia dentro da minha entidade transaction, que passo como primeiro parametro, e como segundo eu passo o dado que eu quero dentro do transaction
      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
