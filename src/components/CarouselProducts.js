import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductCard from "./ProductCard";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const CarouselProducts = ({ products, onProductSelected }) => {
  const handleCarouselChange = (index) => {
    onProductSelected(products[index].id);
  };

  const renderArrowPrev = (onClickHandler, hasPrev, label) => {
    return (
        <FaArrowLeft onClick={onClickHandler}
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

export default CarouselProducts