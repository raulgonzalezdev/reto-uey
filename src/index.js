import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { client } from "./graphql/client";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "@apollo/client";
import { CartProvider } from "./context/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CartProvider>
        <App />
      </CartProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
