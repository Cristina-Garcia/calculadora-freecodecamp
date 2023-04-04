import React from "react";
import "../styles/button-clear.css";

const ButtonClear = (props) => {
  return (
    <div className="boton-clear" onClick={props.handlerClear}>
      {props.children}
    </div>
  );
};

export default ButtonClear;
