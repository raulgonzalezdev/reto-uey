import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Maintenance = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h4">Mantenimiento</Typography>
      {/* Aquí puedes agregar tus opciones de mantenimiento, como la creación de productos, categorías, usuarios, etc. */}
    </Box>
  );
};

export default Maintenance;
