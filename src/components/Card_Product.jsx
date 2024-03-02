import React from "react";
import Button from "./Button";

export default function Card_Product({
  title = "yeison",
  src = "https://www.eltiempo.com/files/article_main_1200/uploads/2023/01/02/63b2fcdccd1b3.png",
}) {
  return (
    <div className="card">
      <img src={src} className="card_image" alt="Pastel de coco" />
      <h1>{title}</h1>
      <Button></Button>
    </div>
  );
}
