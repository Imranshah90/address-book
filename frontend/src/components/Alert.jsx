import React from "react";
const Alert = (props) => {
  const style = {
    background: "red",
    color: "white",
    padding: "5px 2px",
  };
  return <div style={style}>{props.message}</div>;
};

export default Alert;
