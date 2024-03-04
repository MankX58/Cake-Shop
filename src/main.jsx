import React from "react";
import ReactDOM from "react-dom/client";
import MainP from "./components/MainP.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Header from "./components/Header.jsx";
import Products from "./components/Products.jsx";
import App from "./components/App.jsx";
import "./css/style.css";
import "./css/config.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="flex-row">
    <Header />
    <MainP />
    <Products />
    <About />
    <Contact />
  </div>
);
