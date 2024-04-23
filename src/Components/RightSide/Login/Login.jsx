import React from "react";

// styled-components
import { RightSideButtons, RightsideLogin, RightsideLogin__Title } from "./Login.js";

export default function Login({ pageTitle, customComponent, formButtons }) {
  return (
    <RightsideLogin className="rightside-login">
        
      <RightsideLogin__Title className="rightside-login__title">
        {pageTitle}
      </RightsideLogin__Title>

      { customComponent }
      
      <RightSideButtons className="rightside-buttons">
        { formButtons }
      </RightSideButtons>

    </RightsideLogin>
  );
}
