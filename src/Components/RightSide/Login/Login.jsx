import React from "react";

// styled-components
import { RightSideButtons, RightSideButtons__Span, RightsideLogin, RightsideLogin__Title } from "./Login.js";

// components
import Button from "../../Button/Button";

export default function Login({ pageTitle, customComponent, buttonText }) {
  return (
    <RightsideLogin className="rightside-login">
        
      <RightsideLogin__Title className="rightside-login__title">
        {pageTitle}
      </RightsideLogin__Title>

      { customComponent }
      
      <RightSideButtons className="rightside-buttons">
        <Button addStatusClass="disabled">{buttonText}</Button>
        <RightSideButtons__Span>Esqueceu sua senha?</RightSideButtons__Span> {/* aqui vai ser direcinado de forma direta pra cada página específica */}
      </RightSideButtons>

    </RightsideLogin>
  );
}
