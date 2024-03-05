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
    const existingProductIndex = cart.findIndex((p) => p.id === product.id);
    if (existingProductIndex !== -1) {
      // El producto ya está en el carrito, actualizar la cantidad y el precio total
      const updatedCart = [...cart];
      const existingProduct = updatedCart[existingProductIndex];
      existingProduct.quantity += 1;
      existingProduct.totalPrice += existingProduct.price;
      setCart(updatedCart);
    } else {
      // El producto no está en el carrito, agregarlo al carrito
      setCart([
        ...cart,
        { ...product, quantity: 1, totalPrice: product.price },
      ]);
    }
    setTotal(total + product.price);
  };

  const decrementQuantity = (product) => {
    const existingProductIndex = cart.findIndex((p) => p.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      const existingProduct = updatedCart[existingProductIndex];
      if (existingProduct.quantity === 1) {
        updatedCart.splice(existingProductIndex, 1); // Si la cantidad es 1, eliminar completamente el producto
      } else {
        existingProduct.quantity -= 1;
        existingProduct.totalPrice -= existingProduct.price;
      }
      setCart(updatedCart);
      setTotal(total - product.price);
    }
  };

  return (
    <div className="flex-row">
      <Header cart={cart} decrementQuantity={decrementQuantity} total={total} />
      <MainP />
      <div className="flex justify-center" id="products">
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
