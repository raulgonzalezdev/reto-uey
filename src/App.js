import React, { useState, useEffect, useContext } from "react";
import { useQuery } from "@apollo/client";
import { Modal } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductTypeCarousel from "./components/ProductTypeCarousel";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductListCard";
import Maintenance from "./components/Maintenance";
import {  useSnackbar } from "notistack";

// import ShoppingCart from "./components/Header/ShoppingCart";
import { CartContext } from "./context/CartContext";

import { ALL_CATEGORIES_QUERY } from "./graphql/queries";

const App = () => {
  const [selectedProductTypeId, setSelectedProductTypeId] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState(
    ALL_CATEGORIES_QUERY.queryName
  );

  const [selectedTitle, setSelectedTitle] = useState("");
  const { cartItems, setCartItems } = useContext(CartContext);
  const { loading, error, data } = useQuery(ALL_CATEGORIES_QUERY);
  // eslint-disable-next-line 
  const [showMaintenance, setShowMaintenance] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const [darkMode, setDarkMode] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Agrega este estado y función para manejar el cambio de idioma
  const [language, setLanguage] = useState("es");

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  useEffect(() => {
    if (data && data.categories && data.categories.length > 0) {
      setSelectedProductTypeId(data.categories[0].id);
      setSelectedTitle(data.categories[0].name);
    }
  }, [data, setSelectedTitle]);

  const handleProductTypeSelection = (productType) => {
    setSelectedProductTypeId(productType.id);
    setSelectedTitle(productType.name);
    setSelectedQuery(ALL_CATEGORIES_QUERY.queryName); // Agrega esta línea
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
  };
  const handleMenuItemClick = (query, title) => {
    setSelectedProductTypeId(null); // Agrega esta línea
    setSelectedQuery(query);
    setSelectedTitle(title);
    // Reset selectedProductTypeId to the first category when clicking on menu items
    if (data && data.categories && data.categories.length > 0) {
      setSelectedProductTypeId(data.categories[0].id);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    enqueueSnackbar("Añadido con éxito", { variant: "success" });
    handleCloseModal();
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
     <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        selectedQuery={selectedQuery}
        setSelectedQuery={setSelectedQuery}
        selectedTitle={selectedTitle}
        setSelectedTitle={setSelectedTitle}
        onMenuItemClick={handleMenuItemClick} // Agrega esta línea
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        language={language}
        onChangeLanguage={handleChangeLanguage}
        onSearch={handleSearch}
      />

      <ProductTypeCarousel
        productTypes={data.categories}
        onProductTypeSelected={handleProductTypeSelection}
      />
      {selectedProductTypeId && (
        <ProductList
          key={selectedQuery} // Añade esta línea
          productTypeId={selectedProductTypeId}
          onProductClick={handleProductSelection}
          onAddToCartClick={handleAddToCart}
          query={selectedQuery}
          title={selectedTitle}
          searchQuery={searchQuery}
        />
      )}
      <Modal open={modalOpen} onClose={handleCloseModal}>
        {selectedProductId && (
          <ProductDetails
            productId={selectedProductId}
            onClose={handleCloseModal}
            onProductClick={handleProductSelection}
            onAddToCartClick={handleAddToCart} // Cambia 'addToCart' a 'onAddToCartClick' aquí
          />
        )}
      </Modal>
      {showMaintenance && <Maintenance />}
      <Footer appBarColor={theme.palette.primary.main} />
      </ThemeProvider>
    </>
  );
};

export default App;
