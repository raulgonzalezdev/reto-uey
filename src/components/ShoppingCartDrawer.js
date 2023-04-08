import React, { useState, useEffect } from "react";
import { useContext } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  Badge,
  Button,
  makeStyles,
} from "@material-ui/core";
import { ShoppingCart as ShoppingCartIcon, Remove, Add, Delete } from "@material-ui/icons";
import { CartContext } from "../context/CartContext";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "400px",
    padding: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(3),
  },
  listItem: {
    marginBottom: theme.spacing(2),
  },
  listItemName: {
    marginRight: theme.spacing(1),
  },
  itemQuantity: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  itemActions: {
    display: "flex",
    alignItems: "center",
  },
  total: {
    marginTop: theme.spacing(2),
    fontWeight: "bold",
  },
  emptyCart: {
    textAlign: "center",
  },
}));

const ShoppingCartDrawer = () => {
    const { cartItems, setCartItems } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  const toggleDrawer = (open) => {
    setIsOpen(open);
  };

    // Obtener los items de Local Storage al cargar el componente
    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
        if (storedCartItems) {
          setCartItems(storedCartItems); // Actualizar el estado cartItems con los datos del Local Storage
        }
      }, []);


  // Obtener los items de Local Storage al cargar el componente
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  // Guardar los items en Local Storage al actualizar el estado
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // Emitir el evento personalizado 'cartUpdated' cuando se actualicen los datos en localStorage
    const cartUpdatedEvent = new CustomEvent("cartUpdated");
    window.dispatchEvent(cartUpdatedEvent);
  }, [cartItems]);

  const incrementQuantity = (item) => {
    const updatedItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCartItems(updatedItems);
  };

  const decrementQuantity = (item) => {
    const updatedItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id && cartItem.quantity > 1) { // Agregué una condición para que la cantidad no sea menor a 1
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    setCartItems(updatedItems);
  };

  const removeItem = (item) => {
    const updatedItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const CartList = () => (
    <>
      {cartItems.length > 0 ? (
        <>
          <List>
            {cartItems.map((item) => (
              <ListItem className={classes.listItem} key={item.id}>
                <ListItemText
                  primary={
                    <>
                      <span className={classes.listItemName}>{item.name}</span>
                      <span className={classes.itemQuantity}>x {item.quantity}</span>
                    </>
                  }
                  secondary={`$${item.price}`}
                />
                <div className={classes.itemActions}>
                  <IconButton onClick={() => incrementQuantity(item)}>
                    <Add />
                  </IconButton>
                  <IconButton onClick={() => decrementQuantity(item)}>
                    <Remove />
                  </IconButton>
                  <IconButton onClick={() => removeItem(item)}>
                    <Delete />
                  </IconButton>
                </div>
              </ListItem>
            ))}
          </List>
          <Typography variant="subtitle1" className={classes.total}>
            Total: ${calculateTotal(cartItems).toFixed(2)}
          </Typography>
          <div className={classes.itemActions}>
            <Button onClick={() => clearCart()}>Vaciar carrito</Button>
            <Button variant="contained" color="primary" className={classes.checkoutButton}>
              Checkout
            </Button>
          </div>
        </>
      ) : (
        <div className={classes.emptyCart}>
          <Typography variant="h6">Tu carrito está vacío</Typography>
          <Button variant="contained" color="primary" onClick={() => toggleDrawer(true)}>
            Agrega productos
          </Button>
        </div>
      )}
    </>
  );



  return (
    <>
      <IconButton onClick={() => toggleDrawer(true)}>
        <Badge badgeContent={cartItems.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Drawer anchor="right" open={isOpen} onClose={() => toggleDrawer(false)}>
        <div className={classes.drawer}>
          <Typography variant="h6" className={classes.title}>
            Carrito de compras
          </Typography>
          <CartList />
        </div>
      </Drawer>
    </>
  );
};

export default ShoppingCartDrawer;

