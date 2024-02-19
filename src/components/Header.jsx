import React from "react";

function Header() {
  return (
    <header className="bg-[#99B2DD] w-full h-[6rem] border-b-[2px] border-black">
      <div className="flex justify-end gap-[2rem] relative text-[#3a405a] text-lg top-[2rem]">
        <h1 className="font-bold absolute left-[1rem]">SHOP</h1>
        <a href="">
          <span className="hover:underline">Sobre Nosotros</span>
        </a>
        <a href="">
          <span>Nuestros Productos</span>
        </a>
        <a href="">
          <span>Contacto</span>
        </a>
        <a href="">
          <span className="mr-[.5rem]">Iniciar Sesión</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
