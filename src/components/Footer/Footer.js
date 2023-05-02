// src/components/Footer.js
import React from "react";
import { Grid, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: (props) => props.appBarColor,
    padding: theme.spacing(2),
  },
  text: {
    color: theme.palette.text.secondary, // Agrega esta línea
  },
}));



const Footer = ({ appBarColor }) => {
    const classes = useStyles({ appBarColor });

  return (
    <footer className={classes.footer}>
      <Grid container spacing={2} justify="center">
        <Grid item>
          <Link href="#" color="inherit">
            Ayuda
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" color="inherit">
            Términos y Condiciones
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" color="inherit">
            Política de Privacidad
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" color="inherit">
            Contacto
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" color="inherit">
            Vende con Nosotros
          </Link>
        </Grid>
      </Grid>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        © 2023 Uey, S.A. de C.V. Todos los derechos reservados.
      </Typography>
    </footer>
  );
};

export default Footer;
