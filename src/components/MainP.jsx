import React from "react";
import BackToTopButton from "./BttButton";

export default function MainP() {
  return (
    <div className=" h-auto" id="header-div">
      <div className="flex flex-row flex-wrap gap-[6rem] max-sm:gap-[2rem] max-md:gap-[3rem] justify-center items-center pt-[1rem] bg-[#f5db87] h-[34rem] mb-[4.5rem] text-center max-sm:text-center">
        <img
          src="./public/img/pastel_main.webp"
          alt=""
          class="w-[400px] h-[350px] ml-[2rem] right-[1rem] relative max-xl:w-[300px] max-xl:h-[250px] max-lg:w-[250px] max-lg:h-[220px] max-lg:top-[0rem] max-md:top-[0rem] max-md:w-[180px] max-md:h-[150px] max-sm:ml-[5rem] max-sm:right-[3.8rem]"
          id="pastel-main"
        />
        <h1 className="font-bebas_Neue text-[90px] max-xl:text-[80px] max-md:text-[60px] max-sm:text-[40px] max-sm:mr-[3rem]">
          ¡BIENVENIDO A{" "}
          <h1 className="font-pacifico text-[60px] font-bold max-md:text-[40px] max-sm:text-[25px] max max-sm:mr-[3rem] max-sm:left-[1.4rem] relative">
            MANKX´S SHOP!
          </h1>
        </h1>
      </div>
      <BackToTopButton></BackToTopButton>
    </div>
  );
}
