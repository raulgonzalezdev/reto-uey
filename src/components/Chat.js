// src/components/Chat.js
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  chatContainer: {
    height: 400,
    width: 600,
  },
}));

const Chat = ({ open, onClose }) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Chat con IA</DialogTitle>
      <DialogContent>
        <div className={classes.chatContainer}>
          {/* Aquí va la implementación del chat con OpenAI */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Chat;
