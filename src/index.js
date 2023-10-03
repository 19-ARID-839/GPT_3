import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Rendering your main component */}
  </React.StrictMode>,
  document.getElementById("root") // Mounting your app in the 'root' HTML element
);
