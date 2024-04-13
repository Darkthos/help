import React from "react";
import Description from "../auth/Text/Description";
import Price from "../auth/Text/Price";
import Favorite from "../auth/Favorite";

function BestProduct({ id, src, text, price, favorite }) {
  return (
    <div>
      <img id={id} src={src} />
      <Description text={text + " 팝니다"} />
      <Price price={price} />
      <Favorite favorite={favorite} />
    </div>
  );
}

export default BestProduct;
