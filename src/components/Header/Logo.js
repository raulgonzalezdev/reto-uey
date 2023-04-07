import React from 'react';
// Importar componentes de Material-UI

import { makeStyles } from '@material-ui/core/styles';

// Importar imagen del logotipo
import logoRosa from '../../images/logo_recortado_rosa.svg';

// Estilos personalizados para el componente
const useStyles = makeStyles({
  logo: {
    maxHeight: '32px',
  },
});

const Logo = () => {
  const classes = useStyles();

  return (
    
        <img src={logoRosa} alt="Site Logo" className={classes.logo} />

  );
};

export default Logo;


