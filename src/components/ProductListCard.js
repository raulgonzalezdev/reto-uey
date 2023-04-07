import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

const ProductList = ({ products, onAddToCart, onProductClick }) => {
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
          <Card
            sx={{
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={product.image}
              alt={product.name}
              onClick={() => onProductClick(product.id)}
              sx={{
                borderTopLeftRadius: 2,
                borderTopRightRadius: 2,
              }}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {product.description}
              </Typography>
              <Typography variant="body2" color="text.primary">
                Precio: ${product.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => onAddToCart(product.id)}
              >
                Agregar al carrito
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
