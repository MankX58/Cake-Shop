import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Header({ cart, decrementQuantity, total }) {
  const [showCart, setShowCart] = useState(false);
  const totalQuantity = cart.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
            className="relative right-[.5rem] flex gap-[1.3rem] text-[19px]"
            id="links_header"
          >
            <a href="#products" className="header_option">
              <span className="md:hidden">Productos</span>
            </a>
            <a href="#about" className="header_option ">
              <span className="max-md:hidden">Sobre Nosotros</span>
            </a>
            <a href="#contact" className="header_option ">
              <span className="max-md:hidden">Contacto</span>
            </a>
            {/* <a href="" className="header_option">
              <span className="max-md:hidden">Iniciar Sesión</span>
            </a> */}
            <div
              onClick={() => setShowCart(!showCart)}
              className="cursor-pointer hover:scale-110 transition max-md:absolute max-md:right-[3rem]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative right-0"
                width="1.8rem"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H3.21922L6.78345 17.2569C5.73276 17.7236 5 18.7762 5 20C5 21.6569 6.34315 23 8 23C9.65685 23 11 21.6569 11 20C11 19.6494 10.9398 19.3128 10.8293 19H15.1707C15.0602 19.3128 15 19.6494 15 20C15 21.6569 16.3431 23 18 23C19.6569 23 21 21.6569 21 20C21 18.3431 19.6569 17 18 17H8.78078L8.28078 15H18C20.0642 15 21.3019 13.6959 21.9887 12.2559C22.6599 10.8487 22.8935 9.16692 22.975 7.94368C23.0884 6.24014 21.6803 5 20.1211 5H5.78078L5.15951 2.51493C4.93692 1.62459 4.13696 1 3.21922 1H2ZM18 13H7.78078L6.28078 7H20.1211C20.6742 7 21.0063 7.40675 20.9794 7.81078C20.9034 8.9522 20.6906 10.3318 20.1836 11.3949C19.6922 12.4251 19.0201 13 18 13ZM18 20.9938C17.4511 20.9938 17.0062 20.5489 17.0062 20C17.0062 19.4511 17.4511 19.0062 18 19.0062C18.5489 19.0062 18.9938 19.4511 18.9938 20C18.9938 20.5489 18.5489 20.9938 18 20.9938ZM7.00617 20C7.00617 20.5489 7.45112 20.9938 8 20.9938C8.54888 20.9938 8.99383 20.5489 8.99383 20C8.99383 19.4511 8.54888 19.0062 8 19.0062C7.45112 19.0062 7.00617 19.4511 7.00617 20Z"
                    fill="#0F0F0F"
                  ></path>{" "}
                </g>
              </svg>
              <div>
                {cart.map((product) => (
                  <span className="absolute right-[-1rem] rounded-[100%] border-[1px] border-solid border-black w-[1.5rem] h-[1.5rem] items-center text-center justify-center content-center flex align-middle top-[1.3rem]">
                    {totalQuantity}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button onClick={toggleMenu}>
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:hidden absolute right-[1rem] bottom-[-2.5rem] hover:scale-110 transition"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 18L20 18"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M4 12L20 12"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M4 6L20 6"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>{" "}
              </g>
            </svg>
          </button>

          {isOpen && (
            <div>
              <div
                className={`menu ${
                  isOpen ? "open" : ""
                } absolute right-[1rem] top-[3rem] md:hidden bg-[#e6c660] py-[.5rem] border-solid rounded-[10px] border-black border-[2px] w-[13rem] z-50 flex justify-center text-center`}
                id="menu_l"
              >
                <ul className="flex flex-col justify-center">
                  <a href="#products">
                    <li className="mb-[.3rem] hover:bg-[#7c6f2848] transition py-[.1rem] px-[.5rem]">
                      Productos
                    </li>
                  </a>
                  <a href="#about">
                    <li className="mb-[.3rem] hover:bg-[#7c6f2848] transition py-[.1rem] px-[.5rem]">
                      Sobre Nosotros
                    </li>
                  </a>
                  <a href="#contact">
                    <li className="mb-[.3rem] hover:bg-[#7c6f2848] transition py-[.1rem] px-[.5rem]">
                      Contacto
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            // violence
          )}
        </div>
        {showCart && (
          <div
            className="container w-[15rem] right-[1rem] top-[5.4rem] rounded-[10px] mx-auto absolute z-30 transition "
            id="cart_container"
          >
            {/* Carrito */}
            <div className="text-center justify-center items-center bg-[#e6c660] border-solid border-[2px] border-black rounded-[10px] px-[.5rem]">
              <h2 className="text-lg font-bold">Carrito</h2>
              <ul className="list-disc">
                {cart.map((product) => (
                  <li
                    key={product.id}
                    className="flex justify-between items-center"
                  >
                    <span>
                      {product.title}{" "}
                      {product.quantity > 1 && `(${product.quantity})`}
                    </span>
                    <button
                      onClick={() => decrementQuantity(product)}
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

              <PayPalScriptProvider
                options={{
                  clientId:
                    "ASIAdXGmqsWKOy6gemW9lC5tpDgTdnkvSNzQc0-qMDhpd37AZNktWVHR8-c1YulbOJgGdqb6wMpHcXcK",
                }}
              >
                <div id="paypal-button-container" className="mt-[1rem]"></div>
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [{ amount: { value: total } }],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then(function () {
                      alert("transaction complete");
                    });
                  }}
                />
              </PayPalScriptProvider>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
