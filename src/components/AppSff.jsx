import React, { useState } from "react";

function AppS() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product.id !== productToRemove.id));
    setTotal(total - productToRemove.price);
  };

  return (
    <div className="container w-[40rem] bg-[red] mx-auto">
      {/* Carrito */}
      <div className="mt-8 ">
        <h2 className="text-lg font-bold">Carrito</h2>
        <ul className="list-disc pl-4">
          {cart.map((product) => (
            <li key={product.id} className="flex justify-between items-center">
              <span>{product.name}</span>
              <button
                onClick={() => removeFromCart(product)}
                className="text-red-500"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <h3 className="text-lg font-bold">Total: ${total}</h3>
        </div>
      </div>
    </div>
  );
}
