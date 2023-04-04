import React from "react";
import "../styles/Button.css";

function Button(props) {
  const isOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  return (
    <div
      className={`boton-contenedor ${
        isOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      onClick={() => props.handlerClick(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Button;
