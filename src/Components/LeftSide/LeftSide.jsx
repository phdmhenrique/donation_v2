import React from "react";
import "./LeftSide.css";

function LeftSide({ imgPath, altImg }) { // { imgPath, altImg }
  return (
    <div className="leftside">
      <ul className="leftside__title">
        <li>do</li>
      </ul> 
      <img src={imgPath} className="img-banner" alt={altImg} /> 
    </div>
  );
}

export default LeftSide;
