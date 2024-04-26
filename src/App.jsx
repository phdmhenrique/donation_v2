import React, { useState, useEffect } from "react";

import { RightSideButtons__Span } from './App.js';

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
import CustomFields from "./Components/CustomFields/CustomFields.jsx";
import imageBanner from "./Assets/donation-banner.png";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const [formErrors, setFormErrors] = useState({
    emailError: "",
    senhaError: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  const validateForm = () => {
    console.log("Validating form...");
    let valid = true;
    const errors = {
      emailError: "",
      senhaError: "",
    };
  
    if (!formData.email) {
      errors.emailError = "Email é obrigatório.";
      valid = false;
    }
  
    if (!formData.senha) {
      errors.senhaError = "Senha é obrigatória.";
      valid = false;
    }
  
    console.log("Form valid:", valid);
    setFormErrors(errors);
    setIsFormValid(valid);
    return valid;
  };
  
  useEffect(() => {
    validateForm();
  }, [formData]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log("Formulário válido, enviando...");
      // Lógica para enviar o formulário (login)
      // Redirecionamento para a outra página após o login
    } else {
      console.log("Por favor, corrija os erros no formulário.");
    }
  };
  
  const fieldsConfigs = [
    {
      label: "Email",
      type: "email",
      name: "email",
      error: formErrors.emailError,
    },
    {
      label: "Senha",
      type: "password",
      name: "senha",
      error: formErrors.senhaError,
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
            rightsideInputs={fieldsConfigs.map(
              ({ label, type, name, placeholder, error }) => (
                <CustomFields
                  key={name}
                  label={label}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleChange}
                  error={error}
                />
              )
            )}
            formButtons={[
              <Button key="1" addStatusClass={isFormValid ? "active" : "disabled"} onClick={handleSubmit}>Entrar</Button>,
              <RightSideButtons__Span key="2">Esqueceu sua senha?</RightSideButtons__Span>
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
