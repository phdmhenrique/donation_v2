import React from "react";

// COMPONENTES
import FullSize from "./Components/FullSize/FullSize.jsx";
import Divisory from "./Components/Divisory/Divisory.jsx";
import LeftSide from "./Components/LeftSide/LeftSide.jsx";
import RightSide from "./Components/RightSide/RightSide.jsx";
import Footer from "./Components/Footer/Footer.jsx";

// IMAGENS E ÍCONES
import imageBanner from "./Assets/donation-banner.png";

function App() {

  const inputsConfig = [
    {
      label: "Email",
      type: "email",
      placeholder: "Digite seu e-mail válido",
    },
    {
      label: "Senha",
      type: "password",
      placeholder: "Digite sua senha de 8-16",
    },
  ];

  return (
    <React.Fragment>
      <FullSize>
        <Divisory>
          <LeftSide
            DonationTitles={["do"]}
            bold={0}
            imgPath={imageBanner}
            alt="Donation Logo"
          />
          <RightSide pageTitle="Entrar" inputsConfig={inputsConfig} buttonText="Entrar" />
        </Divisory>
        <Footer />
      </FullSize>
    </React.Fragment>
  );
}

export default App;
