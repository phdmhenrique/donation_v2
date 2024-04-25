import React from "react";

// Importando os estilos dos componentes
import { RightsideLogin, RightsideLogin__Title, RightSideButtons } from "./Login.js";

export default function Login({ pageTitle, formButtons, rightsideInputs, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <RightsideLogin className="rightside-login" onSubmit={handleSubmit}>
      <RightsideLogin__Title className="rightside-login__title">
        {pageTitle}
      </RightsideLogin__Title>

      {/* Adicionando a propriedade 'key' nos elementos */}
      {rightsideInputs.map((input, index) => (
        <div key={index}>{input}</div>
      ))}

      <RightSideButtons className="rightside-buttons">
        {/* Adicionando a propriedade 'key' nos elementos */}
        {formButtons.map((button, index) => (
          <div key={index}>{button}</div>
        ))}
      </RightSideButtons>
    </RightsideLogin>
  );
}
