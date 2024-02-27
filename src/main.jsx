import React from "react";
import ReactDOM from "react-dom/client";
import MainP from "./components/MainP.jsx";
import Header from "./components/Header.jsx";
import "./css/style.css";
import "./css/config.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <MainP />
  </>
);
