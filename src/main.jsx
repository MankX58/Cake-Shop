import React from "react";
import ReactDOM from "react-dom/client";
import MainP from "./components/MainP.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Header from "./components/Header.jsx";
import Products from "./components/Products.jsx";
import { useState } from "react";
import { products } from "./data.js";
import App from "./components/App.jsx";
import "./css/style.css";
import "./css/config.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
