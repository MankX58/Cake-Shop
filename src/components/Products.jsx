import React from "react";
import { useState } from "react";
import { products } from "../data";

export default function Products() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };

  return (
    <section
      className="text-center items-center justify-center min-h-[35rem] h-auto"
      id="products"
    >
      <div className="flex justify-center">
        <h1
          className="font-bebas_Neue font-bold text-[40px] mb-[1.5rem] text-cemter
    }"
        >
          Nuestros Productos
        </h1>
      </div>

      {/* ///////////////////// */}
      {/* TARJETAS DE PRODUCTOS */}
      <section className="flex shrink-0 flex-wrap transition justify-center mb-[4.5rem]">
        <div className="">
          <div className="flex flex-row shrink-0 flex-wrap gap-8 justify-center">
            {products.map((product) => (
              <div
                key={product.id}
                className="p-[5px] bg-[#cfb253] rounded-[10px] w-[18rem] h-[21rem] max-lg:h-[18rem] max-lg:w-[15rem] max-md:w-[12rem] max-md:h-[15rem]
              } hover:scale-110 transition"
              >
                <img
                  src={product.src}
                  className="card_image rounded-t-[10px]"
                  alt="Pastel de coco"
                />
                <h1>{product.title}</h1>
                <p className="text-gray-500">${product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600"
                >
                  Agregar al carrito
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ///////////////////// */}
    </section>
  );
}
