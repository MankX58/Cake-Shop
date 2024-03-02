import React from "react";

export default function Contact() {
  return (
    <div className="text-center bg-[#cfb253] py-[7rem]" id="contact">
      <h1 className="font-bebas_Neue text-[40px] font-bold mb-[2.5rem]">
        Contacto
      </h1>
      <div className="flex flex-row justify-center">
        <form
          action="/procesar-contacto"
          method="post"
          className="border-solid border-black border-[1px] w-[25rem] p-[1rem] rounded-[5px] bg-[#d3b962]"
        >
          <label className="float-left font-bold">Nombre</label>
          <br />
          <input
            type="text"
            name="nombre"
            required
            className="mb-[1rem] rounded-[5px] w-[23rem] focus:outline-none px-[.5rem] py-[.5rem"
          />
          <br />
          <label className="float-left font-bold">Email</label>
          <br />
          <input
            type="email"
            name="email"
            required
            className="mb-[1rem] rounded-[5px] w-[23rem] focus:outline-none px-[.5rem] py-[.5rem"
          />
          <br />

          <label className="float-left font-bold">Mensaje</label>
          <br />
          <textarea
            name="mensaje"
            required
            className="mb-[1rem] h-[4rem] resize-none rounded-[5px] w-[23rem] focus:outline-none px-[.5rem] py-[.5rem"
          />
          <br />
          <button
            type="submit"
            className="border-black border-[1px] rounded-[5px] px-[1.5rem] py-[.5rem] bg-[#c4a950] hover:scale-110 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
