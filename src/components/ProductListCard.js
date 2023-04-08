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

import {
  ALL_PRODUCTS_QUERY,
  FEATURED_PRODUCTS_QUERY,
  NEW_ARRIVALS_PRODUCTS_QUERY,
  CATEGORY_QUERY,
} from "../graphql/queries";

const ProductList = ({
  productTypeId,
  onProductClick,
  onAddToCartClick,
  query,
  title,
}) => {
    let chosenQuery;
    let queryVariables = productTypeId ? { id: productTypeId } : {};
    console.log('Query', query);
    
    switch (query) {
        case ALL_PRODUCTS_QUERY.queryName:
            console.log('ALL_PRODUCTS_QUERY.queryName', ALL_PRODUCTS_QUERY.queryName)
          chosenQuery = ALL_PRODUCTS_QUERY;
          queryVariables = {};
          break;
        case NEW_ARRIVALS_PRODUCTS_QUERY.queryName:
            console.log('NEW_ARRIVALS_PRODUCTS_QUERY.queryName', NEW_ARRIVALS_PRODUCTS_QUERY.queryName)
          chosenQuery = NEW_ARRIVALS_PRODUCTS_QUERY;
          queryVariables = {};
          break;
        case FEATURED_PRODUCTS_QUERY.queryName:
            console.log('FEATURED_PRODUCTS_QUERY.queryName', FEATURED_PRODUCTS_QUERY.queryName)
          chosenQuery = FEATURED_PRODUCTS_QUERY;
          queryVariables = {};
          break;
        default:
          chosenQuery = CATEGORY_QUERY;
      }
      
    
    // const { loading, error, data } = useQuery(chosenQuery, {
    //   variables: queryVariables,
    // });

    const { loading, error, data } = useQuery(chosenQuery, {
        variables: queryVariables,
      });

      console.log("Resultados:", loading, error, data)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  let filteredProducts = [];

  if (data.category) {
    filteredProducts = data.category.products;
  } else if (data.products) {
    filteredProducts = data.products;
  } else if (data.newArrivalsProducts) {
    filteredProducts = data.newArrivalsProducts;
  } else if (data.featuredProducts) {
    filteredProducts = data.featuredProducts;
  }
  

    //  console.log('data.products',data.products)
    //  console.log(' data.category.products', data.category.products)
//   const filteredProducts = data.category
//     ? data.category.category
//     : data.category.category;

  console.log('filtrados',filteredProducts)

  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      <Typography
        variant="h4"
        component="div"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        {title}
      </Typography>
      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
          <Grid
            key={product.id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{ marginLeft: "100px" }}
          >
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                marginLeft: "100px",
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
