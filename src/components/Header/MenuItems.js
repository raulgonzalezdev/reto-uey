import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";

const MenuItems = () => {
  return (
    <ButtonGroup variant="text" color="inherit">
      <Button>All Products</Button>
      <Button>New Arrivals</Button>
      <Button>Featured</Button>
    </ButtonGroup>
  );
};

export default MenuItems;

