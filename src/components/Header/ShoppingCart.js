import React, { useState } from "react";
import ShoppingCartDrawer from "../../components/ShoppingCartDrawer";

const ShoppingCart = () => {
  
 


  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  const handleCartButtonClick = () => {
    setCartDrawerOpen(!cartDrawerOpen);
  };

  return (
    <>
       <ShoppingCartDrawer open={cartDrawerOpen} onClose={handleCartButtonClick} /> 
      {/* <ShoppingCartDrawer cartItems={cartItems} setCartItems={setCartItems}  /> */}
    </>
  );
};

export default ShoppingCart;


