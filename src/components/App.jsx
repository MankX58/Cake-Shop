import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import MainP from "./MainP.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Header from "./Header.jsx";
import Products from "./Products.jsx";
import { products } from "../data.js";
import "../css/style.css";
import "../css/config.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product.id !== productToRemove.id));
    setTotal(total - productToRemove.price);
  };

  return (
    <div className="flex-row">
      <Header />
      <MainP />
      <Products />
      <About />
      <Contact />
    </div>
  );
}
