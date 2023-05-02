import React  from "react";
import { Button, ButtonGroup } from "@material-ui/core";
// MenuItems.js

import {
  ALL_PRODUCTS_QUERY,
  FEATURED_PRODUCTS_QUERY,
  NEW_ARRIVALS_PRODUCTS_QUERY,
} from "../../graphql/queries";



const MenuItems = ({
  selectedQuery,
  setSelectedQuery,
  selectedTitle,
  setSelectedTitle,
  onMenuItemClick, // Agrega esta línea
}) => {


  // Aquí puedes manejar la consulta seleccionada y actualizar el estado de tus productos
  const handleButtonClick = (query, title) => {
    // Reemplaza las siguientes dos líneas
    // setSelectedQuery(query);
    // setSelectedTitle(title);
    onMenuItemClick(query, title); // Agrega esta línea
  };
  return (
    <ButtonGroup variant="text" color="inherit">
   <Button onClick={() => handleButtonClick(ALL_PRODUCTS_QUERY.queryName, "All Products")}>
  Todos Productos
</Button>
<Button
  onClick={() => handleButtonClick(NEW_ARRIVALS_PRODUCTS_QUERY.queryName, "New Arrivals")}
>
  Nueva Coleccion
</Button>
<Button onClick={() => handleButtonClick(FEATURED_PRODUCTS_QUERY.queryName, "Featured")}>
  Destacados
</Button>

    </ButtonGroup>
  );
};

export default MenuItems;
