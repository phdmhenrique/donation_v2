// import { Link } from "react-router-dom";
import React from "react";
import FullSize from "../FullSize/FullSize.jsx";
import Divisory from "../Divisory/Divisory.jsx";
import LeftSide from "../LeftSide/LeftSide.jsx";
import RightSide from "../RightSide/RightSide.jsx";
import Footer from "../Footer/Footer.jsx";

import imageBanner from '../../Assets/donation-banner.png'

function App() {

  const inputsConfig = [
    {
      label: "Nome Completo",
      type: "text",
      placeholder: "Seu Nome Completo",
    },
    {
      label: "Nome de Usuário",
      type: "text",
      placeholder: "Seunomedeusuario",
    },
    {
      label: "Email",
      type: "email",
      placeholder: "seuemail@gmail.com",
    },
    {
      label: "Senha (A senha deve conter de 8-16 caracteres)",
      type: "password",
      placeholder: "A-Z,a-z,0-9,!@#",
    },
    {
      label: "Repetir a Senha",
      type: "password",
      placeholder: "A-Z,a-z,0-9,!@#",
    },
  ];

  return (
    <React.Fragment>
      <FullSize>
        <Divisory>
          <LeftSide
            DonationTitles={["#Compartilhe", "#Inspire", "#Transforme"]}
            // bold={0}
            customClasses="leftside__more-titles"
            imgPath={imageBanner}
            alt="Donation Logo"
          />
          <RightSide pageTitle="Cadastrar" inputsConfig={inputsConfig} buttonText="Cadastrar" />
        </Divisory>
        <Footer />
      </FullSize>
    </React.Fragment>
  );
}

export default App;
