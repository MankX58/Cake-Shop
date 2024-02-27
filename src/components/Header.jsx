import React from "react";

function Header() {
  return (
    <header className=" w-full h-[6rem] bg-[#e6c660] border-b-[2px] border-black">
      <div
        className="flex justify-end gap-[2rem] relative text-[#000000] text-lg top-[2rem] font-bold"
        id="header"
      >
        <h1 className="font-bold text-[30px] absolute left-[1rem] font-pacifico">
          SHOP
        </h1>
        <div className="relative right-[1rem] flex gap-[2rem]">
          <a href="">
            <span className="">Sobre Nosotros</span>
          </a>
          <a href="">
            <span>Nuestros Productos</span>
          </a>
          <a href="">
            <span>Contacto</span>
          </a>
          <a href="">
            <span className="">Iniciar Sesión</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
