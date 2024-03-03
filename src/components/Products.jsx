import React from "react";
import Button from "./Button";
import Card_Product from "./Card_Product";

export default function Products() {
  return (
    <section
      className="text-center items-center justify-center min-h-[35rem] h-auto"
      id="products"
    >
      <h1 className="font-bebas_Neue font-bold text-[40px]">
        Nuestros Productos
      </h1>

      {/* ///////////////////// */}
      {/* TARJETAS DE PRODUCTOS */}
      <section className="flex shrink-0 flex-wrap transition justify-center mb-[4.5rem]">
        <Card_Product
          title="Pastel de coco"
          src="public\img\pastel_coco.webp"
        />
        <Card_Product
          title="Pastel de fresa"
          src="public/img/pastel_fresa.jpg"
        />
        <Card_Product
          title="Pastel de chocolate"
          src="public\img\pastel_chocolate.webp"
        />
        <Card_Product
          title="Pastel de vainilla"
          src="public\img\pastel_vainilla.jpg"
        />
        <Card_Product title="Pandebono" src="public\img\pandebono.jpg" />
        <Card_Product title="Torta de oreo" src="public\img\Torta_oreo.png" />
        <Card_Product
          title="Torta venezolana"
          src="public\img\Torta_venezolana.jpg"
        />
      </section>

      {/* ///////////////////// */}
    </section>
  );
}
