function Button() {
  return (
    <button
      onClick={() => {
        prompt("hola");
      }}
      className="bg-[#c4a950] w-[7rem] h-[3rem] rounded-[10px] hover:outline hover:outline-[2px] hover:scale-[1.10] transition m-[.4rem]"
    >
      Conoce más
    </button>
  );
}

export default Button;
