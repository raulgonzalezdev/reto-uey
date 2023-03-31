import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { gql, useQuery } from "@apollo/client";
import GoogleMapReact from "google-map-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import { format } from "date-fns";
import { es } from 'date-fns/locale';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const ALL_PRODUCTS_QUERY = gql`
  query AllProductsQuery {
    products {
      id
      nombre
      imagen
    }
  }
`;

const PRODUCT_QUERY = gql`
  query ProductQuery($id: ID!) {
    product(id: $id) {
      id
      nombre
      vendedor
      imagen
      precio
      tipo
      ... on RentableProduct {
        tipoRenta
        disponibilidad
      }
      ... on SpaceProduct {
        ubicacion {
          lat
          lng
        }
        disponibilidad
      }
      ... on SimpleProduct {
        inventario
      }
    }
  }
`;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return format(date, "dd MMMM, yyyy", { locale: es });
};

const ProductDetails = ({ productId }) => {
  const { loading, error, data } = useQuery(PRODUCT_QUERY, {
    variables: { id: productId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const product = data.product;

  return (
    <div className="card">
      <div className="card-header">
        <h1>{product.nombre}</h1>
      </div>
      <div className="card-body">
        <p>Vendedor: {product.vendedor}</p>
        <img
          className="product-image"
          src={product.imagen}
          alt={product.nombre}
        />
        <p>Precio: ${product.precio}</p>

        {product.tipo === "simple" && (
          <>
            <h3>Inventario</h3>
            <p>{product.inventario} unidades disponibles</p>
          </>
        )}

        {product.tipo === "rentable" && (
          <>
            <h3>Tipo de renta</h3>
            <p>{product.tipoRenta}</p>
            <h3>Disponibilidad</h3>
            <ul className="disponibilidad-list">
              {product.disponibilidad.map((fecha) => (
                <li key={fecha} className="disponibilidad-list-item">
                  {formatDate(fecha)}
                </li>
              ))}
            </ul>
          </>
        )}

        {product.tipo === "espacio" && (
          <>
            <h3>Ubicación</h3>
            <div className="map-container">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
                }}
                defaultCenter={product.ubicacion}
                defaultZoom={15}
              >
                <div lat={product.ubicacion.lat} lng={product.ubicacion.lng}>
                  <img
                    src="https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png"
                    alt="Ubicación"
                  />
                </div>
              </GoogleMapReact>
            </div>
        
            <h3>Disponibilidad</h3>
            <ul className="disponibilidad-list">
              {product.disponibilidad.map((fecha) => (
                <li key={fecha} className="disponibilidad-list-item">
                  {formatDate(fecha)}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

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

// Componente ProductCard
const ProductCard = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <img
        src={product.imagen}
        alt={product.nombre}
        style={{ width: "20%", height: "auto" }}
      />
      <h3>{product.nombre}</h3>
    </div>
  );
};

// Componente CarouselProducts
const CarouselProducts = ({ products, onProductSelected }) => {
  const handleCarouselChange = (index) => {
    onProductSelected(products[index].id);
  };

  const renderArrowPrev = (onClickHandler, hasPrev, label) => {
    return (
     
        <FaArrowLeft Click={onClickHandler}
        className="control-arrow control-prev" />
 
    );
  };

  const renderArrowNext = (onClickHandler, hasNext, label) => {
    return (

        <FaArrowRight onClick={onClickHandler}
         className="control-arrow control-next"/>
   
    );
  };

  return (
  
    <Carousel
      showThumbs={false}
      showStatus={false}
      onChange={handleCarouselChange}
      showArrows={true}
      renderArrowPrev={renderArrowPrev}
      renderArrowNext={renderArrowNext}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => onProductSelected(product.id)}
        />
      ))}
    </Carousel>

  );
};

const App = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleProductSelection = (productId) => {
    setSelectedProductId(productId);
  };
  console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
  return (
    <ApolloProvider client={client}>
      <ProductList onProductSelected={handleProductSelection} />
      {selectedProductId && <ProductDetails productId={selectedProductId} />}
    </ApolloProvider>
  );
};



export default App;
