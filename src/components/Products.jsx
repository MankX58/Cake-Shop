import React from "react";
import Button from "./Button";

export default function Products() {
  return (
    <section className="text-center items-center justify-center min-h-[35rem] h-auto">
      <h1 className="font-bebas_Neue font-bold text-[40px]">
        Nuestros Productos
      </h1>

      {/* ///////////////////// */}
      {/* TARJETAS DE PRODUCTOS */}
      <section className="flex shrink-0 flex-wrap transition justify-center mb-[4.5rem]">
        <div className="card">
          <img
            src="public\img\pastel_coco.webp"
            className="card_image"
            alt="Pastel de coco"
          />
          <h1>Pastel de arequipe</h1>
          <Button></Button>
        </div>

        <div className="card">
          <img
            src="public/img/pastel_fresa.jpg"
            alt="Pastel de fresa"
            className="card_image"
          />
          <Button></Button>
        </div>

        <div className="card">
          <img
            src="public/img/pastel_chocolate.webp"
            alt="Pastel de chocolate"
            className="card_image"
          />
          <Button></Button>
        </div>

        <div className="card">
          <img
            src="public\img\pastel_vainilla.jpg"
            alt="Pastel de vainilla"
            className="card_image"
          />
          <Button />
        </div>
        <div className="card">
          <img src="public/img/pandebono.jpg" alt="Pandebono" />
          <h1>Pandebono</h1>
          <Button />
        </div>
      </section>

      {/* ///////////////////// */}
    </section>
  );
}
