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
    const index = cart.findIndex(
      (product) => product.id === productToRemove.id
    );
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
      setTotal(total - productToRemove.price);
    }
  };

  return (
    <div className="flex-row">
      <Header cart={cart} removeFromCart={removeFromCart} total={total} />
      <MainP />
      <div className="flex justify-center">
        <h1 className="font-bebas_Neue font-bold text-[40px] mb-[1.5rem] text-cemter}">
          Nuestros Productos
        </h1>
      </div>
      <div className="flex flex-row gap-[2rem] flex-wrap justify-center mb-0 pb-0">
        {products.map((product) => (
          <Products key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <About />
      <Contact />
    </div>
  );
}
