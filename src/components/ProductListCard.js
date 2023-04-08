import React from "react";
import { useQuery } from "@apollo/client";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@material-ui/core";

import { CATEGORY_QUERY } from "../graphql/queries";

const ProductList = ({ productTypeId, onProductClick, onAddToCartClick }) => {

   
    const { loading, error, data } = useQuery(CATEGORY_QUERY, {
        variables: { id: productTypeId },
      });

      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
    
      const filteredProducts = data.category.products;
      

  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
    <Grid container spacing={4}>
      {filteredProducts.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3} sx={{ marginLeft: "100px" }}>
          <Card
            sx={{
              boxShadow: 3,
              borderRadius: 2,
              marginLeft: "100px"
              
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
              <Typography variant="body2" color="text.primary">
                Precio: ${product.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => onProductClick(product.id)}
              >
                Ver detalles
              </Button>
           
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => onAddToCartClick(product)}
                 
                >
                  + carrito
                </Button>
              </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
    </div>
  );
};

export default ProductList;
