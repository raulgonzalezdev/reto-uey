
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { gql, useQuery } from "@apollo/client";
import GoogleMapReact from "google-map-react";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const ALL_PRODUCTS_QUERY = gql`
  query AllProductsQuery {
    products {
      id
      nombre
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



const ProductDetails = ({ productId }) => {
  const { loading, error, data } = useQuery(PRODUCT_QUERY, {
    variables: { id: productId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const product = data.product;

  return (
    <div>
      <h1>{product.nombre}</h1>
      <p>Vendedor: {product.vendedor}</p>
      <img src={product.imagen} alt={product.nombre} />
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
          <ul>
            {product.disponibilidad.map((fecha) => (
              <li key={fecha}>{fecha}</li>
            ))}
          </ul>
        </>
      )}

      {product.tipo === "espacio" && (
        <>
          <h3>Ubicación</h3>
          <div style={{ height: "300px", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY  }}
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
          <ul>
            {product.disponibilidad.map((fecha) => (
              <li key={fecha}>{fecha}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

const ProductList = ({ onProductSelected }) => {
  const { loading, error, data } = useQuery(ALL_PRODUCTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {data.products.map((product) => (
        <li key={product.id} onClick={() => onProductSelected(product.id)}>
          {product.nombre}
        </li>
      ))}
    </ul>
  );
};



const App = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleProductSelection = (productId) => {
    setSelectedProductId(productId);
  };

  return (
    <ApolloProvider client={client}>
      <ProductList onProductSelected={handleProductSelection} />
      {selectedProductId && <ProductDetails productId={selectedProductId} />}
    </ApolloProvider>
  );
};


ReactDOM.render(<App />, document.getElementById("root"));

export default App;