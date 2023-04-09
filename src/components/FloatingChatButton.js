// src/components/FloatingChatButton.js
import React from "react";
import Fab from "@material-ui/core/Fab";
import ChatIcon from "@material-ui/icons/Chat";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const FloatingChatButton = ({ onClick }) => {
  const classes = useStyles();

  return (
    <Fab color="primary" className={classes.fab} onClick={onClick}>
      <ChatIcon />
    </Fab>
  );
};

export default FloatingChatButton;
