import React from "react";
import {

    Grow,
    Paper,
    Popper,
    MenuItem,
    MenuList,
    ListItemIcon,
    FormControlLabel,
    Switch,
    Select,
  } from "@material-ui/core";
  
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import BuildIcon from "@material-ui/icons/Build";
import CustomClickAwayListener from "./CustomClickAwayListener";


import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import LanguageIcon from "@material-ui/icons/Language";


const ProfileMenu = ({
    open,
    anchorRef,
    handleClose,
    isAdmin = true,
    // Agrega estas propiedades
    darkMode,
    onToggleDarkMode,
    language,
    onChangeLanguage,
  }) => {
  return (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom" ? "center top" : "center bottom",
          }}
        >
          <Paper>
            <CustomClickAwayListener onClickAway={handleClose}>
              <MenuList autoFocusItem={open} id="menu-list-grow">
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  Perfil
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  Mis pedidos
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                  </ListItemIcon>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={darkMode}
                        onChange={onToggleDarkMode}
                        color="primary"
                      />
                    }
                    label={darkMode ? "Modo claro" : "Modo oscuro"}
                  />
                </MenuItem>
                {/* Agrega el select para cambiar el idioma aquí */}
                <MenuItem>
                  <ListItemIcon>
                    <LanguageIcon />
                  </ListItemIcon>
                  <Select
                    value={language}
                    onChange={onChangeLanguage}
                    displayEmpty
                  >
                    <MenuItem value="es">Español</MenuItem>
                    <MenuItem value="en">English</MenuItem>
                  </Select>
                </MenuItem>
                
                {isAdmin && (
                  <MenuItem
                    onClick={(event) => handleClose(event, "maintenance")}
                  >
                    <ListItemIcon>
                      <BuildIcon />
                    </ListItemIcon>
                    Mantenimiento
                  </MenuItem>
                )}
              </MenuList>
              <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  Cerrar sesión
                </MenuItem>
            </CustomClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export default ProfileMenu;
