import React, { useState } from "react";
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
    const [cartItems, setCartItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const classes = useStyles();

    const toggleDrawer = (open) => {
        setIsOpen(open);
    };

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
            if (cartItem.id === item.id) {
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
                    <Drawer anchor="right" open={isOpen} onClose={() => toggleDrawer(false)}>
                        <div className={classes.drawer}>
                            <Typography variant="h6" className={classes.title}>
                                Carrito de compras
                            </Typography>
                            <List>
                                {cartItems.map((item) => (
                                    <ListItem className={classes.listItem} key={item.id}>
                                        <ListItemText primary={item.name} />
                                        <div className={classes.itemActions}>
                                            <IconButton onClick={() => decrementQuantity(item)}>
                                                <Remove />
                                            </IconButton>
                                            <span>{item.quantity}</span>
                                            <IconButton onClick={() => incrementQuantity(item)}>
                                                <Add />
                                            </IconButton>
                                            <IconButton onClick={() => removeItem(item)}>
                                                <Delete />
                                            </IconButton>
                                        </div>
                                    </ListItem>
                                ))}
                            </List>
                            <div className={classes.total}>
                                <Typography variant="subtitle1">
                                    Total: ${calculateTotal(cartItems).toFixed(2)}
                                </Typography>
                            </div>
                            <div className={classes.itemActions}>
                                <Button onClick={() => clearCart()}>Vaciar carrito</Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.checkoutButton}
                                >
                                    Checkout
                                </Button>
                            </div>
                        </div>
                    </Drawer>
                    <div className={classes.total}>
                        <Typography variant="subtitle1">
                            Total: ${calculateTotal(cartItems).toFixed(2)}
                        </Typography>
                    </div>
                    <div className={classes.itemActions}>
                        <Button onClick={() => clearCart()}>Vaciar carrito</Button>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.checkoutButton}
                        >
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
                <CartList />
            </Drawer>
        </>
    );
};

export default ShoppingCartDrawer;
