import React from "react";

function Header() {
  return (
    <div>
      <header className=" w-[100%] h-[6rem] bg-[#e6c660] border-b-[2px] border-black">
        <div
          className="flex justify-end gap-[2rem] relative text-[#000000] text-lg top-[2rem] font-bold"
          id="header"
        >
          <h1 className="font-bold text-[30px] absolute left-[1rem] font-pacifico">
            SHOP
          </h1>
          <div
            className="relative right-[1rem] flex gap-[2rem] max-md:hidden"
            id="links_header"
          >
            <a href="" className="header_option ">
              <span className="">Sobre Nosotros</span>
            </a>
            <a href="" className="header_option">
              <span>Nuestros Productos</span>
            </a>
            <a href="" className="header_option ">
              <span>Contacto</span>
            </a>
            <a href="" className="header_option ">
              <span className="">Iniciar Sesión</span>
            </a>
          </div>
          <button
            id="menu_burger"
            onClick={function myFunction() {
              var x = document.getElementsByClassName("header_option");
              if (x.style.display === "block") {
                x.style.display = "none";
              } else {
                x.style.display = "block";
              }
            }}
          >
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:hidden relative right-[1rem] bottom-[.5rem]"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 18L20 18"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M4 12L20 12"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M4 6L20 6"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
