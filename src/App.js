import React, { useState, useEffect, useContext } from "react";
import { useQuery } from "@apollo/client";
import { Modal } from "@material-ui/core";

import "./App.css";
import Header from "./components/Header/Header";
import ProductTypeCarousel from "./components/ProductTypeCarousel";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductListCard";
import ShoppingCart from "./components/Header/ShoppingCart";
import { CartContext } from "./context/CartContext";

import { ALL_CATEGORIES_QUERY } from "./graphql/queries";

const App = () => {
  const [selectedProductTypeId, setSelectedProductTypeId] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { cartItems, setCartItems } = useContext(CartContext);
  const { loading, error, data } = useQuery(ALL_CATEGORIES_QUERY);

  useEffect(() => {
    if (data && data.categories && data.categories.length > 0) {
      setSelectedProductTypeId(data.categories[0].id);
    }
  }, [data]);

  const handleProductTypeSelection = (productType) => {
    setSelectedProductTypeId(productType.id);
  };

  const handleProductSelection = (productId) => {
    setSelectedProductId(productId);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProductId(null);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
    
    console.log('Carrito Click', cartItems)
    
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

    // Obtener los items de Local Storage al cargar el componente
    useEffect(() => {
      const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
      if (storedCartItems) {
        setCartItems(storedCartItems); // Actualizar el estado cartItems con los datos del Local Storage
      }
    }, [setCartItems]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Header />
      <ProductTypeCarousel
        productTypes={data.categories}
        onProductTypeSelected={handleProductTypeSelection}
      />
      {selectedProductTypeId && (
        <ProductList
          productTypeId={selectedProductTypeId}
          onProductClick={handleProductSelection}
          onAddToCartClick={addToCart}
        />
      )}
      <Modal open={modalOpen} onClose={handleCloseModal}>
        {selectedProductId && (
          <ProductDetails productId={selectedProductId} onClose={handleCloseModal}  addToCart={addToCart} />
        )}
      </Modal>
      <ShoppingCart  />

    </>
  );
};

export default App;
