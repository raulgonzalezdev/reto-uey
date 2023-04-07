import React from "react";
import { useQuery } from "@apollo/client";
import { PRODUCT_QUERY } from "../graphql/queries";
import formatDate from "../utils/formatDate";
import GoogleMapReact from "google-map-react";

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

export default ProductDetails;
