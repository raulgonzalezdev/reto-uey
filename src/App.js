import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import "./App.css";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import { client } from "./graphql/client";

const App = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleProductSelection = (productId) => {
    setSelectedProductId(productId);
  };

  return (
    <ApolloProvider client={client}>
     <Header />
      <ProductList onProductSelected={handleProductSelection} />
      {selectedProductId && <ProductDetails productId={selectedProductId} />}
    </ApolloProvider>
  );
};

export default App;
