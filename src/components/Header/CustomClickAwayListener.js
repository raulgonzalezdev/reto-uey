import React, { useEffect, useCallback } from "react";

const CustomClickAwayListener = ({ children, onClickAway }) => {
  const handleClickAway = useCallback((event) => {
    onClickAway(event);
  }, [onClickAway]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickAway);
    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, [handleClickAway]);

  return <>{children}</>;
};

export default CustomClickAwayListener;

