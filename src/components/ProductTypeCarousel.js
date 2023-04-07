import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SimpleProduct from "../../src/images/category-cerveza.svg";
import SpaceProduct from "../../src/images/category-familiares.svg";
import RentableProduct from "../../src/images/category-mobiliario.svg";

import { Card } from "@material-ui/core";

const cardStyle = {
  borderRadius: "15px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  margin: "10px",
  padding: "10px",
};

const ProductTypeCarousel = ({ productTypes, onTypeSelected }) => {
  const handleCarouselChange = (index) => {
    onTypeSelected(productTypes[index]);
  };

  const images = {
    SimpleProduct,
    SpaceProduct,
    RentableProduct,
  };

  const renderArrowPrev = (onClickHandler, hasPrev, label) => {
    return (
      <FaArrowLeft
        onClick={onClickHandler}
        className="control-arrow control-prev"
      />
    );
  };

  const renderArrowNext = (onClickHandler, hasNext, label) => {
    return (
      <FaArrowRight
        onClick={onClickHandler}
        className="control-arrow control-next"
      />
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
      {productTypes.map((type, index) => (
        <div key={index}>
          <Card style={cardStyle}>
            <img
              src={images[type]}
              alt={type}
              onClick={() => onTypeSelected(type)}
              style={{ width: "100%", height: "auto", cursor: "pointer" }}
            />
          </Card>
        </div>
      ))}
    </Carousel>
  );
};

export default ProductTypeCarousel;
