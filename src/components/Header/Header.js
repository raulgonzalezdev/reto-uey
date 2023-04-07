import React from "react";
import { AppBar, Toolbar, Grid } from "@material-ui/core";
import Logo from "./Logo";
import MenuItems from "./MenuItems";
import SearchBar from "./SearchBar";
import ShoppingCart from "./ShoppingCart";
import UserAvatar from "./UserAvatar";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item xs={6} container alignItems="center">
            <Logo />
            <MenuItems />
          </Grid>
          <Grid item xs={3} container alignItems="center" justifyContent="center">
            <SearchBar />
          </Grid>
          <Grid item xs={3} container alignItems="center" justifyContent="flex-end">
            <ShoppingCart />
            <UserAvatar />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;



