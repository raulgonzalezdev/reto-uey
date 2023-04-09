import React, { useState, useRef } from "react";
import { AppBar, Toolbar, Grid } from "@material-ui/core";
import Logo from "./Logo";
import MenuItems from "./MenuItems";
import SearchBar from "./SearchBar";
import ShoppingCart from "./ShoppingCart";
import UserAvatar from "./UserAvatar";
// import { makeStyles } from "@material-ui/core/styles";
import ProfileMenu from "./ProfileMenu"; // Importa el nuevo componente

import { useTheme } from "@material-ui/core/styles";
// import useMediaQuery from "@material-ui/core/useMediaQuery";

const Header = ({
  selectedQuery,
  setSelectedQuery,
  selectedTitle,
  setSelectedTitle,
  onMenuItemClick,
  isAdmin = true,
  darkMode,
  onToggleDarkMode,
  language,
  onChangeLanguage,
  onSearch,
}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event, action) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) return;

    setOpen(false);

    if (action === "maintenance") {
      onMenuItemClick();
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item xs={4} container alignItems="center">
            <Logo />
            <MenuItems
              selectedQuery={selectedQuery}
              setSelectedQuery={setSelectedQuery}
              selectedTitle={selectedTitle}
              setSelectedTitle={setSelectedTitle}
              onMenuItemClick={onMenuItemClick}
            />
          </Grid>
          <Grid
            item
            xs={6}
            container
            alignItems="center"
            justifyContent="center"
          >
            <SearchBar onChange={onSearch} />
          </Grid>
          <Grid
            item
            xs={2}
            container
            alignItems="center"
            justifyContent="flex-end"
          >
            <ShoppingCart />
            <div ref={anchorRef} onClick={handleToggle}>
              <UserAvatar />
            </div>
          </Grid>
        </Grid>
      </Toolbar>
      {/* Utiliza el componente ProfileMenu aquí */}
      <ProfileMenu
        open={open}
        anchorRef={anchorRef}
        handleClose={handleClose}
        isAdmin={isAdmin}
        darkMode={darkMode}
        onToggleDarkMode={onToggleDarkMode}
        language={language}
        onChangeLanguage={onChangeLanguage}
      />
      
    </AppBar>
  );
};

export default Header;
