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
import Modal from "@material-ui/core/Modal";

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
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const ProductDetailsModal = ({ productId, open, onClose, onAddToCartClick }) => {
    const handleClose = () => {
        onClose();
      };
    const classes = useStyles();
    console.log(productId);
    const { loading, error, data } = useQuery(PRODUCT_QUERY, {
        variables: { id: productId },
    });

    console.log(data);
    if (loading) return <p>Loading...</p>;
    //if (error) return <p>Error :(</p>;

    const product = data.product ;

    return (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className={classes.paper}>
            <Card className={classes.root}>
              <CardHeader
                title={product.name}
                subheader={`Vendedor: ${product.vendor}`}
                className={classes.header}
              />
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
                    <Typography>
                      {product.inventory} unidades disponibles
                    </Typography>
                  </>
                )}
      
                {product.rentalType && (
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
      
                {product.location.lat && (
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
      
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={() => onAddToCartClick(product)}
                >
                  Añadir al carrito
                </Button>
              </CardActions>
            </Card>
          </div>
        </Modal>
      );
      
};

export default ProductDetailsModal;






