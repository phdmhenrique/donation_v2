import React from "react";
import "./LeftSide.css";

function LeftSide({ DonationTitles, customClasses, bold, imgPath, altImg }) { // { imgPath, altImg }
  
  const classes = `leftside__title ${customClasses}`;
  
  return (
    <div className="leftside">
      <ul className={classes}>
        {/* Mapeando o array de títulos para renderizar cada <li> com um título diferente */}
        {DonationTitles.map((DonationTitle, index) => (
          <li key={index} className={bold === index ? "bold" : "fw300"}>{DonationTitle}</li>
        ))}
      </ul> 
      <img src={imgPath} className="img-banner" alt={altImg} /> 
    </div>
  );
}

export default LeftSide;
