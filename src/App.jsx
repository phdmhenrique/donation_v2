import React from "react";
import styled from "styled-components";

// Styled-Components
import { RightSideButtons__Span, RightsideLabel, RightsideInputs } from './App.js';

// Componentes
import FullSize from "./Components/FullSize/FullSize.jsx";
import Divisory from "./Components/Divisory/Divisory.jsx";
import LeftSide from "./Components/LeftSide/LeftSide.jsx";
import RightSide from "./Components/RightSide/RightSide.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import LinkStyled from "./Components/LinkStyled/LinkStyled";
import Login from "./Components/RightSide/Login/Login.jsx";
import NoAccount from "./Components/RightSide/Account/Account.jsx";
import SocialMedia from "./Components/RightSide/SocialMedia/SocialMedia.jsx";
import OtherAccess from "./Components/RightSide/OtherAccess/OtherAccess.jsx";
import Button from './Components/Button/Button.jsx';

// Assets
import imageBanner from "./Assets/donation-banner.png";
import CustomInput from "./Components/CustomInput/CustomInput.jsx";

const InputLabelPair = ({ label, input }) => (
  <RightsideInputs className="rightside-inputs">
    <RightsideLabel htmlFor={input.id}>{label.label}</RightsideLabel>
    <CustomInput inputsConfig={[input]} />
  </RightsideInputs>
);

function App() {
  const labelsConfig = [
    {
      label: "Email",
    },
    {
      label: "Senha",
    },
    // Outros objetos para mais labels
  ];

  const inputsConfig = [
    {
      id: 'emailInput',
      type: 'input',
      inputType: 'email',
      placeholder: 'Digite seu email',
    },
    {
      id: 'passwordInput',
      type: 'input',
      inputType: 'password',
      placeholder: 'Digite sua senha',
    },
    // Outros objetos para mais inputs ou selects
  ];

  return (
    <FullSize>
      <Divisory>
        <LeftSide
          DonationTitles={["do"]}
          bold={0}
          imgPath={imageBanner}
          alt="Donation Logo"
        />
        <RightSide>
          <Login
            pageTitle="Entrar"
            rightsideInputs={labelsConfig.map((label, index) => (
              <InputLabelPair
                key={index}
                label={label}
                input={inputsConfig[index]}
              />
            ))}
            formButtons={[
              <Button key={1} addStatusClass="disabled">Entrar</Button>,
              <RightSideButtons__Span key={2}>Esqueceu sua senha?</RightSideButtons__Span>
            ]}
          />

          <NoAccount className="no-account">
            Não tem uma conta?{" "}
            <LinkStyled to="/create-account" className="link">
              Criar Conta
            </LinkStyled>
          </NoAccount>

          <SocialMedia
            message={
              <React.Fragment>
                Compartilhe, Inspire, Transforme.
                <br />
                Unindo Ações para um Mundo Melhor.
              </React.Fragment>
            }
            optionalComponent={<OtherAccess />}
          />
        </RightSide>
      </Divisory>
      <Footer />
    </FullSize>
  );
}

export default App;
