import React from "react";
import image_A from "../image/img.jpg";

type Props = {};

function Content2_Img({}: Props) {
  return (
    <>
      <div id="ContentImg" className="col p-2 m-1">
        <img className="w-100" src={image_A} alt="image_A" />
      </div>
    </>
  );
}

export default Content2_Img;
