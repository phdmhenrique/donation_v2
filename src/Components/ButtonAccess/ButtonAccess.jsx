import React from "react";
import './ButtonAccess.css';

import Google from '../../Icons/Google.jsx';
import Facebook from '../../Icons/Facebook.jsx';
import X from '../../Icons/X.jsx';

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
