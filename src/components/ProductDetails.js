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
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
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
}));

const ProductDetails = ({ productId }) => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(PRODUCT_QUERY, {
    variables: { id: productId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const product = data.product;

  return (
    <Card className={classes.root}>
      <CardHeader
        title={product.nombre}
        subheader={`Vendedor: ${product.vendedor}`}
        className={classes.header}
      />
      <CardMedia className={classes.media} image={product.imagen} title={product.nombre} />
      <CardContent>
        <Typography variant="h6">Precio: ${product.precio}</Typography>
  
        {product.tipo === "simple" && (
          <>
            <Typography variant="h6">Inventario</Typography>
            <Typography>{product.inventario} unidades disponibles</Typography>
          </>
        )}
  
        {product.tipo === "rentable" && (
          <>
            <Typography variant="h6">Tipo de renta</Typography>
            <Typography>{product.tipoRenta}</Typography>
            <Typography variant="h6">Disponibilidad</Typography>
            <List className={classes.availabilityList}>
              {product.disponibilidad.map((fecha) => (
                <ListItem key={fecha}>
                  <ListItemText primary={formatDate(fecha)} />
                </ListItem>
              ))}
            </List>
          </>
        )}
  
        {product.tipo === "espacio" && (
          <>
            <Typography variant="h6">Ubicación</Typography>
            <div className={classes.mapContainer}>
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
  
            <Typography variant="h6">Disponibilidad</Typography>
            <List className={classes.availabilityList}>
              {product.disponibilidad.map((fecha) => (
                <ListItem key={fecha}>
                  <ListItemText primary={formatDate(fecha)} />
                </ListItem>
              ))}
            </List>
          </>
        )}
      </CardContent>
  
      <CardActions>
        <Button variant="contained" color="primary" className={classes.button}>
          Añadir al carrito
        </Button>
      </CardActions>
    </Card>
  );
  
};

export default ProductDetails;
