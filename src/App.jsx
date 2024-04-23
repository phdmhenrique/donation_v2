import React from "react";

// Styled-Components
import { RightSideButtons__Span} from './App.js';

// Componentes
import FullSize from "./Components/FullSize/FullSize.jsx";
import Divisory from "./Components/Divisory/Divisory.jsx";
import LeftSide from "./Components/LeftSide/LeftSide.jsx";
import RightSide from "./Components/RightSide/RightSide.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import LinkStyled from "./Components/LinkStyled/LinkStyled";
import Login from "./Components/RightSide/Login/Login.jsx";
import CustomInputsGroups from "./Components/CustomInputsGroups/CustomInputsGroups.jsx";
import NoAccount from "./Components/RightSide/Account/Account.jsx";
import SocialMedia from "./Components/RightSide/SocialMedia/SocialMedia.jsx";
import OtherAccess from "./Components/RightSide/OtherAccess/OtherAccess.jsx";
import Button from './Components/Button/Button.jsx';

// Assets
import imageBanner from "./Assets/donation-banner.png";

function App() {

  const inputsConfig = [
    {
      label: "Email",
      type: "email",
    },
    {
      label: "Senha",
      type: "password",
    },
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
            customComponent={<CustomInputsGroups inputsConfig={inputsConfig} />}
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
