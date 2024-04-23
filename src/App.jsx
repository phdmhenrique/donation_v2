import React from "react";
import FullSize from "./Components/FullSize/FullSize.jsx";
import Divisory from "./Components/Divisory/Divisory.jsx";
import LeftSide from "./Components/LeftSide/LeftSide.jsx";
import RightSide from "./Components/RightSide/RightSide.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import LinkStyled from "./Components/LinkStyled/LinkStyled";
import Login from "./Components/RightSide/Login/Login.jsx";
import CustomInputsGroups from "./Components/CustomInputsGroups/CustomInputsGroups.jsx";
import NoAccount from "./Components/RightSide/Account/Account.jsx";

import imageBanner from "./Assets/donation-banner.png";
import SocialMedia from "./Components/RightSide/SocialMedia/SocialMedia.jsx";

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
            buttonText="Entrar"
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
          />
        </RightSide>
      </Divisory>
      <Footer />
    </FullSize>
  );
}

export default App;
