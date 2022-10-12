import React from "react";
import image_B from "../image/img1.png";

type Props = {};

function Content3_Img({}: Props) {
  return (
    <>
      <div id="product-img2" className="d-flex justify-content-center p-2 m-1">
        <img className="w-75" src={image_B} alt="image_B" />
      </div>
    </>
  );
}

export default Content3_Img;
