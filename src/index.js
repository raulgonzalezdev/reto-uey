import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { client } from "./graphql/client";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "@apollo/client";
import { CartProvider } from "./context/CartContext";
import { SnackbarProvider } from 'notistack';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CartProvider>
      <SnackbarProvider maxSnack={3}>
        <App />
        </SnackbarProvider>
      </CartProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
