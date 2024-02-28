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
      <div className=" h-[40rem]" id="header-div">
        <div className="flex flex-col justify-center items-center mt-[1rem]">
          <img
            src="./public/img/pastel_main.webp"
            alt=""
            class="w-[400px] h-[350px] ml-[2rem] mb-[1rem] right-[1rem] relative max-xl:w-[300px] max-xl:h-[250px]"
            id="pastel-main"
          />
          <h1 className="font-bebas_Neue text-[100px] max-xl:text-[80px]">
            ¡BIENVENIDO!
          </h1>
        </div>
        <h1 className="relative top-[2.5rem] text-xl font-bold left-[1rem]">
          ManelGuvi300 Shop
        </h1>
        <p class=" mb-[.5rem] w-[50rem] p-[1rem] relative top-[2rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nihil
          praesentium quaerat optio illo corporis ipsam! Ratione, magni!
          Dignissimos nihil doloremque alias saepe perspiciatis porro debitis
          numquam, necessitatibus voluptatum nulla. Natus, vel. Quidem magnam
          consequatur sit dolorum sequi repellendus totam magni perferendis
          fugit, nobis cupiditate quo voluptate qui esse eius blanditiis tempore
          hic! Error vitae laboriosam, quaerat adipisci accusamus minus!
          Voluptatum provident delectus harum quis cumque minima itaque
          excepturi quasi officiis porro, ab necessitatibus eaque tempore
          deserunt iste non aut laudantium odio fugiat temporibus at nam rem eos
          placeat. Inventore? Blanditiis veritatis omnis incidunt assumenda
          velit sint molestias aperiam. Amet nostrum fugit nobis. Dolorem
          facere, esse ratione temporibus, neque nulla est officiis, ab non modi
          quasi nemo accusantium eum aliquid. Eligendi, asperiores? Hic,
          deserunt quisquam voluptatum ipsum suscipit quia dolorum consectetur
          iste fuga nulla deleniti quibusdam placeat voluptatibus dolorem eius
          molestiae eum totam, quasi laborum voluptates! Optio ut similique
          officia!
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
