import React from "react";
import { Container } from "./OtherAccess.js";

import Google from "../../Icons/Google.jsx";
import Facebook from "../../Icons/Facebook.jsx";
import X from "../../Icons/X.jsx";

export default function OtherAccess() {

  const socialMediaButtons = [
    {
      textButton: "Acesse com o Google",
      iconButton: <Google />,
    },
    {
      textButton: "Acesse com o Facebook",
      iconButton: <Facebook />,
    },
    {
      textButton: "Acesse com o x",
      iconButton: <X />,
    },
  ]

  return (
    <Container>
      <span className="or-span">ou</span>
      <span className="access_with-span">Acesse com</span>

      {socialMediaButtons.map((socialMediaButton, index) => (
        <button type="button" key={index} className="button-access">
          {socialMediaButton.iconButton}{socialMediaButton.textButton}
        </button>
      ))}
    </Container>
  );
}
