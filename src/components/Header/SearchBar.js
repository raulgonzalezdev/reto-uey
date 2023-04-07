import React from "react";
import { InputBase, IconButton } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";

const SearchBar = () => {
  return (
    <div>
      <InputBase placeholder="Search products" />
      <IconButton color="inherit">
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchBar;

