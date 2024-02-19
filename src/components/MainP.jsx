import React from "react";
import Button from "./Button";

<img
  src="./public/img/joy.png"
  alt="tumalakaaskfsk"
  className="w-[700px] h-[500px] float-right"
/>;
export default function MainP() {
  return (
    <main>
      <div className=" h-[40rem] bg-gradient-to-b from-[#f7ef99] via-[#f7ef99] to-[#F9DEC9] ">
        <img
          src="./public/img/joy.png"
          alt=""
          class="w-[600px] h-[400px] float-right ml-[2rem] mb-[1rem] "
          id="joy-foto"
        />
        <h1 className="relative top-[2.5rem] text-xl font-bold left-[1rem]">
          MANKX´S SHOP
        </h1>
        <p class=" mb-[.5rem] w-[50rem] p-[1rem] relative top-[2rem]">
          Mi experiencia en desarrollo web me ha brindado la oportunidad de
          colaborar estrechamente con diversos profesionales que desempeñan
          roles similares. A lo largo de mi trayectoria, he tenido la fortuna de
          interactuar con diseñadores, desarrolladores, especialistas en UX/UI,
          y otros expertos del campo. Estas interacciones han enriquecido mi
          perspectiva y me han permitido comprender la importancia del trabajo
          en equipo y la comunicación efectiva en el desarrollo de proyectos
          web. A través de estas experiencias, he aprendido a valorar la
          diversidad de enfoques y habilidades, lo que me ha ayudado a crecer
          tanto a nivel profesional como personal. Además, el intercambio de
          ideas y conocimientos con colegas del desarrollo web me ha permitido
          adquirir una visión más amplia de las tendencias y prácticas actuales
          en la industria.
        </p>
        <br />
        <div className="relative left-[1rem]">
          <Button />
          <Button />
          <Button />
        </div>
      </div>
    </main>
  );
}
