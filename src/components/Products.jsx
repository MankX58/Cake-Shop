import React from "react";
import { useState } from "react";
import { products } from "../data";

export default function Products({ product, addToCart }) {
  return (
    <>
      <section className="text-center items-center justify-center pb-[2rem] h-auto">
        {/* ///////////////////// */}
        {/* TARJETAS DE PRODUCTOS */}
        <section className="flex shrink-0 flex-wrap transition justify-center ">
          <div className="flex ">
            {/* para cambiar clases del flex, ve al App.jsx */}
            <div className="flex flex-row shrink-0 flex-wrap justify-center ">
              <div
                key={product.id}
                className="p-[5px] bg-[#cfb253] rounded-[10px] w-[18rem] h-[21rem] max-lg:h-[18rem] max-lg:w-[15rem] max-md:w-[12rem] max-md:h-[15rem]
              } hover:scale-110 transition "
              >
                <img
                  src={product.src}
                  className="card_image rounded-t-[10px]"
                  alt={product.title}
                />
                <h1 className="font-bold">{product.title}</h1>
                <p className="">${product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-[#927d38] text-white py-2 px-4 md:mt-8 rounded hover:bg-[#77662c] transition"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ///////////////////// */}
      </section>
    </>
  );
}
