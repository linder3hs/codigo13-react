import React from "react";
import ReactDOM from "react-dom";
// Al importar el archivo index.css en index.js
// esto esta haciendo un import global, es decir lo puedo desde cualquiervo del proyecto
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// Para poder importar un componente debos llamarlo por el nombre que fue exportado
import PrimerComponente from "./App";

ReactDOM.render(
  <React.StrictMode>
    {/* Para usar un componente debo tratarlo como si fuera una etiqueta HTML */}
    <PrimerComponente />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
