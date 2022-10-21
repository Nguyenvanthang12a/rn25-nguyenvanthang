import React from "react";
import image_C from "../image/img2.jpg";

type Props = {};

function Conten4_Img({}: Props) {
  return (
    <>
      <div id="product-img2" className="d-flex justify-content-center p-2 m-1">
        <img className="w-75" src={image_C} alt="image_C" />
      </div>
    </>
  );
}

export default Conten4_Img;
