import React from 'react';

import FullSize from "../../Components/FullSize/FullSize.jsx";
import Divisory from "../../Components/Divisory/Divisory.jsx";
import LeftSide from "../../Components/LeftSide/LeftSide.jsx";
import RightSide from "../../Components/RightSide/RightSide.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import LinkStyled from "../../Components/LinkStyled/LinkStyled";
import Login from "../../Components/RightSide/Login/Login.jsx";
// import CustomInputsGroups from "../../Components/CustomInputsGroups/CustomInputsGroups.jsx";
import NoAccount from "../../Components/RightSide/Account/Account.jsx";

import imageBanner from '../../Assets/donation-banner.png'
import SocialMedia from "../RightSide/SocialMedia/SocialMedia.jsx";
import Button from '../Button/Button.jsx';

// Styled Components
import { Terms, TermsHightlight } from './CreateAccount.js';

function CreateAccount() {

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
    <FullSize>
      <Divisory>
        <LeftSide
          DonationTitles={["#Compartilhe", "#Inspire", "#Transforme"]}
          customClasses="leftside__more-titles"
          imgPath={imageBanner}
          alt="Donation Logo"
        />
        <RightSide>
          <Login
            pageTitle="Cadastrar"
            customComponent={<CustomInputsGroups inputsConfig={inputsConfig} />}
            formButtons={[
              <Button key={1} addStatusClass="inactive">Cancelar</Button>,
              <Button key={2} addStatusClass="active">Cadastrar</Button>,
              <Terms key={3}>
                Ao se inscrever você concorda com nossos <TermsHightlight>Termos de Serviço</TermsHightlight> e <TermsHightlight>Política de Privacidade</TermsHightlight> e confirma que tem pelo menos 18 anos de idade.
              </Terms>,
            ]}
          />



          <NoAccount className="no-account">
            Já tem uma conta?{" "}
            <LinkStyled to="/" className="link">
              Entrar agora
            </LinkStyled>
          </NoAccount>

          <SocialMedia
            message={
              <React.Fragment>
                Total de 285 comunidades criadas.
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

export default CreateAccount;
