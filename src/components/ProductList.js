import React from "react";
import { useQuery } from "@apollo/client";
import { ALL_PRODUCTS_QUERY } from "../graphql/queries";
import CarouselProducts from "./CarouselProducts";


const ProductList = ({ onProductSelected }) => {
  const { loading, error, data } = useQuery(ALL_PRODUCTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <CarouselProducts
      products={data.products}
      onProductSelected={onProductSelected}
    />
  );
};

export default ProductList;
