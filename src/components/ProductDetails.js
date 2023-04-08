import React from "react";
import { useQuery } from "@apollo/client";
import { PRODUCT_QUERY } from "../graphql/queries";
import formatDate from "../utils/formatDate";
import GoogleMapReact from "google-map-react";


import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "60%",
    margin: "auto",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    // overflowY: "auto",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  availabilityList: {
    marginTop: theme.spacing(2),
  },
  mapContainer: {
    height: 200,
    width: "100%",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  contentWrapper: {
    maxHeight: "calc(100vh - 150px)",
    overflowY: "auto",
  },
}));

const ProductDetails = ({ productId, onClose, onAddToCartClick }) => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(PRODUCT_QUERY, {
    variables: { id: productId },
    skip: !productId, // Evita ejecutar la consulta si no hay un productId
  });
 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const product = data?.product || {};




  return (
    <div className={classes.root}>
      <Card >
        <CardHeader
          title={product.name}
          subheader={`Vendedor: ${product.vendor}`}
          className={classes.header}
        />
        <div className={classes.contentWrapper}>
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.name}
        />
        <CardContent>
          <Typography variant="h6">Precio: ${product.price}</Typography>

          {product.inventory && (
            <>
              <Typography variant="h6">Inventario</Typography>
              <Typography>{product.inventory} unidades disponibles</Typography>
            </>
          )}

          {product.location && product.location.lat && (
            <>
              <Typography variant="h6">Tipo de renta</Typography>
              <Typography>{product.rentalType}</Typography>
              <Typography variant="h6">Disponibilidad</Typography>
              <List className={classes.availabilityList}>
                {product.availability.map((fecha) => (
                  <ListItem key={fecha}>
                    <ListItemText primary={formatDate(fecha)} />
                  </ListItem>
                ))}
              </List>
            </>
          )}

          {product.location && product.location.lat && (
            <>
              <Typography variant="h6">Ubicación</Typography>
              <div className={classes.mapContainer}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
                  }}
                  defaultCenter={product.location}
                  defaultZoom={15}
                >
                  <div lat={product.location.lat} lng={product.location.lng}>
                    <img
                      src="https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png"
                      alt="Ubicación"
                    />
                  </div>
                  </GoogleMapReact>
              </div>
              <Typography variant="h6">Disponibilidad</Typography>
              <List className={classes.availabilityList}>
                {product.availability.map((fecha) => (
                  <ListItem key={fecha}>
                    <ListItemText primary={formatDate(fecha)} />
                  </ListItem>
                ))}
              </List>
            </>
          )}
        </CardContent>
        </div>

        <CardActions>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => onAddToCartClick(product)}
          >
            Añadir al carrito
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={onClose}
          >
            Regresar
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductDetails;

