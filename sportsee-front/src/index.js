import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/main.scss";
import App from "./App";

/**
 *  Represents an analytic dashboard user
 *
 *  @author Sportsee
 *  @version 1.0
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
