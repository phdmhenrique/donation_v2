import React, { useState } from "react";
import FullSize from "../../Components/FullSize/FullSize.jsx";
import Divisory from "../../Components/Divisory/Divisory.jsx";
import LeftSide from "../../Components/LeftSide/LeftSide.jsx";
import RightSide from "../../Components/RightSide/RightSide.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import LinkStyled from "../../Components/LinkStyled/LinkStyled";
import Login from "../../Components/RightSide/Login/Login.jsx";
import NoAccount from "../../Components/RightSide/Account/Account.jsx";
import Button from "../Button/Button.jsx";
import imageBanner from "../../Assets/donation-banner.png";
import SocialMedia from "../RightSide/SocialMedia/SocialMedia.jsx";
import { Terms, TermsHightlight } from "./CreateAccount.js";
import CustomFields from "../CustomFields/CustomFields.jsx";
import { Link } from "react-router-dom";

function CreateAccount() {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const { fullName, username, email, password, repeatPassword } = formData;
    const isValid =
      fullName.trim() !== "" &&
      username.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== "" &&
      password.length >= 8 && // Senha com pelo menos 8 caracteres
      password === repeatPassword;
  
    setFormValid(isValid);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (formValid) {
      console.log("Formulário enviado!");
      // Adicione aqui a lógica para enviar o formulário
    } else {
      console.log("Por favor, preencha todos os campos corretamente.");
    }
  };

  const fieldsConfigs = [
    {
      label: "Nome Completo",
      type: "text",
      placeholder: "Seu Nome Completo",
      name: "fullName",
    },
    {
      label: "Nome de Usuário",
      type: "text",
      placeholder: "Seunomedeusuario",
      name: "username",
    },
    {
      label: "Email",
      type: "email",
      placeholder: "seuemail@gmail.com",
      name: "email",
    },
    {
      label: "Senha (A senha deve conter de 8-16 caracteres)",
      type: "password",
      placeholder: "A-Z,a-z,0-9,!@#",
      name: "password",
    },
    {
      label: "Repetir a Senha",
      type: "password",
      placeholder: "A-Z,a-z,0-9,!@#",
      name: "repeatPassword",
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
            onSubmit={handleSubmit}
            pageTitle="Cadastrar"
            rightsideInputs={fieldsConfigs.map(
              ({ label, type, placeholder, name }) => (
                <CustomFields
                  key={name}
                  label={label}
                  type={type}
                  placeholder={placeholder}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                />
              )
            )}
            formButtons={[
              <Link to="/" key="no-key">
                <Button key={1} addStatusClass="inactive">
                  Cancelar
                </Button>
              </Link>,
              <Button
                key={2}
                addStatusClass={formValid ? "active" : "disabled"}
                type="submit"
              >
                Cadastrar
              </Button>,
              <Terms key={3}>
                Ao se inscrever você concorda com nossos{" "}
                <TermsHightlight>Termos de Serviço</TermsHightlight> e{" "}
                <TermsHightlight>Política de Privacidade</TermsHightlight> e
                confirma que tem pelo menos 18 anos de idade.
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
