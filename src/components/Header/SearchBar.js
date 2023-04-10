import React from "react";
import { InputBase, IconButton, makeStyles } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  search: {
    width:"90%",
    display: "flex",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    justifyContent: "space-between", // Agrega esta línea
    backgroundColor: theme.palette.type === "dark" ? "#333" : "#fff",
    color: theme.palette.type === "dark" ? "#fff" : "inherit",
    padding: "2px 4px",
  },
  input: {
    marginLeft: theme.spacing(1),
  },
}));

const SearchBar = ({ onChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <InputBase
        className={classes.input}
        placeholder="Busca productos, servicios"
        onChange={onChange}
      />
      <IconButton color="primary"> {/* Cambia el color del icono aquí */}
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchBar;
