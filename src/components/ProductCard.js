import React from "react";

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

export default ProductCard;
