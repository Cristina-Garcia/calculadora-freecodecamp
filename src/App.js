import "./App.css";
import logo from "./image/freecodecamp-logo.png";
import Button from "./components/Button";
import Screen from "./components/Screen";
import ButtonClear from "./components/buttonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const addInput = (value) => {
    setInput(input + value);
  };
  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor, ingrese valores para realizar los cálculos.");
    }
  };
  //Las cadenas de caracteres vacias son falsas
  //Evaluate lo conseguimos del paquete externo mathjs

  return (
    <div className="App">
      <div className="frecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={logo}
          alt="Logo de freecodecamp"
        />
      </div>
      <div className="contenedor-calculadora">
        <Screen input={input} />
        <div className="fila">
          <Button handlerClick={addInput}>7</Button>
          <Button handlerClick={addInput}>8</Button>
          <Button handlerClick={addInput}>9</Button>
          <Button handlerClick={addInput}>*</Button>
        </div>
        <div className="fila">
          <Button handlerClick={addInput}>4</Button>
          <Button handlerClick={addInput}>5</Button>
          <Button handlerClick={addInput}>6</Button>
          <Button handlerClick={addInput}>-</Button>
        </div>
        <div className="fila">
          <Button handlerClick={addInput}>1</Button>
          <Button handlerClick={addInput}>2</Button>
          <Button handlerClick={addInput}>3</Button>
          <Button handlerClick={addInput}>+</Button>
        </div>
        <div className="fila">
          <Button handlerClick={addInput}>0</Button>
          <Button handlerClick={addInput}>.</Button>
          <Button handlerClick={calculateResult}>=</Button>
          <Button handlerClick={addInput}>/</Button>
        </div>
        <div className="fila">
          <ButtonClear handlerClear={() => setInput("")}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
