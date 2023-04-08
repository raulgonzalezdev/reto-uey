import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography, IconButton } from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  carouselContainer: {
    maxWidth: "50%",
    margin: "0 auto",
  },
  cardStyles: {
    width: "25%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    boxSizing: "border-box",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    margin: "10px",
  },
  imgStyle: {
    width: "60%",
    maxWidth: "60%",
    height: "60%",
    cursor: "pointer",
    maxHeight: "150px",
    objectFit: "contain",
  },
}));

const ProductTypeCarousel = ({ productTypes, onProductTypeSelected }) => {
    const classes = useStyles();
    const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setSelectedProductIndex((selectedProductIndex) =>
          selectedProductIndex === productTypes.length - 1 ? 0 : selectedProductIndex + 1
        );
      }, 4000);
      return () => clearInterval(interval);
    }, [productTypes]);
  
    const handleCardClick = (type, index) => {
      setSelectedProductIndex(index);
      onProductTypeSelected(type);
    };
  
    const handlePrevClick = () => {
      setSelectedProductIndex((selectedProductIndex) =>
        selectedProductIndex === 0 ? productTypes.length - 1 : selectedProductIndex - 1
      );
    };
  
    const handleNextClick = () => {
      setSelectedProductIndex((selectedProductIndex) =>
        selectedProductIndex === productTypes.length - 1 ? 0 : selectedProductIndex + 1
      );
    };
  
    const productTypeCards = productTypes.map((type, index) => (
      <Card
        key={index}
        className={classes.cardStyles}
        onClick={() => handleCardClick(type, index)}
      >
        <img src={type.image} alt={type.name} className={classes.imgStyle} />
        <Typography variant="h7" align="center" style={{ fontWeight: "bold" }}>
          {type.name}
        </Typography>
      </Card>
    ));
  
    // En lugar de cortar la lista de productos, repítala con un índice de desplazamiento
    const offset = Math.max(0, selectedProductIndex - 3);
    const displayedCards = productTypeCards.slice(offset).concat(productTypeCards.slice(0, offset));
  
    return (
      <div className={classes.carouselContainer}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={handlePrevClick}>
            <ChevronLeft />
          </IconButton>
          {displayedCards.slice(0, 4)}
          <IconButton onClick={handleNextClick}>
            <ChevronRight />
          </IconButton>
        </div>
      </div>
    );
  };
  

export default ProductTypeCarousel;
