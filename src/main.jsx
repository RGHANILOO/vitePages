import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router";
import App from "./App";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <HashRouter>
    <App />
  </HashRouter>
);