import React from "react";
import './ButtonAccess.css';
import Google from '../../Icons/google.png';
import Facebook from '../../Icons/facebook.png';
import X from '../../Icons/x.png';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGoogle, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

function ButtonAccess({ icon, text }) {
  let iconComponent;

  // Determina o ícone com base na prop 'icone'
  switch (icon) {
    case 'google':
      iconComponent = <img src={Google} alt={Google} />;
      break;
    case 'facebook':
      iconComponent = <img src={Facebook} alt={Facebook} />;
      break;
    case 'x':
      iconComponent = <img src={X} alt={X} />;
      break;
    default:
      iconComponent = null;
  }

  return (
    <button className='button__social-media'>
      {iconComponent}
      {text}
    </button>
  );
}

export default ButtonAccess;
