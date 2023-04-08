import React from "react";

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "20%", height: "auto" }}
      />
      <h3>{product.name}</h3>
    </div>
  );
};

export default ProductCard;
