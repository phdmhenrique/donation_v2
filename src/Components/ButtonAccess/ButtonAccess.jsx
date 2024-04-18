import React from "react";
import Google from '../../Icons/google.svg';
import Facebook from '../../Icons/facebook.svg';
import X from '../../Icons/x.svg';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGoogle, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

function ButtonAccess({ icon, text }) {
  let iconComponent;

  // Determina o ícone com base na prop 'icone'
  switch (icon) {
    case 'google':
      iconComponent = <Google />;
      break;
    case 'facebook':
      iconComponent = <Facebook />;
      break;
    case 'x':
      iconComponent = <X />;
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
