import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import validator from "validator";
import "react-toastify/dist/ReactToastify.css";

// Components
import {
  PageTitle,
  ButtonsContainer,
  ContainerInputs,
  ContainerForm,
} from "../Template/Template.js";
import CustomFields from "../CustomFields/CustomFields.jsx";
import LoadingScreen from "../LoadingScreen/LoadingScreen.jsx";
import Button from "../Button/Button.jsx";
import NoAccount from "../RightSide/Account/Account.jsx";
import LinkStyled from "../LinkStyled/LinkStyled.jsx";
import Message from "../Message/Message.jsx";
import OtherAccess from "../OtherAccess/OtherAccess.jsx";
import { CustomToastContainer } from "../Notification/Notification.jsx";

export default function Login({ pageTitle }) {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const [formErrors, setFormErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const errors = {
      email: !formData.email
        ? "Email é obrigatório"
        : !validator.isEmail(formData.email)
        ? "Email inválido"
        : "",
      password: !formData.password
        ? "Senha é obrigatório"
        : !validator.isStrongPassword(String(formData.password), {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
            returnScore: false,
          })
        ? "Senha deve conter de 8-16 caracteres, letras maiúsculas, minúsculas, números e símbolos"
        : "",
    };

    setFormErrors(errors);
    setIsButtonEnabled(Object.values(errors).every((error) => !error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    const errorField = Object.keys(formErrors).find((key) => formErrors[key]);

    if (errorField) {
      toast.error(formErrors[errorField]);
    } else {
      setIsLoading(true);
      toast.success("Login realizado com sucesso");
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    }
  };

  const fieldsConfigs = [
    {
      label: "Email",
      type: "email",
      name: "email",
      value: formData.email,
      onChange: handleChange,
      error: formErrors.emailError,
    },
    {
      label: "Senha",
      type: formData.showPassword ? "text" : "password",
      name: "password",
      value: formData.password,
      onChange: handleChange,
      error: formErrors.senhaError,
      hasIcon: true,
    },
  ];

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ContainerForm>
      <PageTitle>{pageTitle}</PageTitle>

      <ContainerInputs>
        {fieldsConfigs.map((config) => (
          <CustomFields key={config.name} {...config} />
        ))}
      </ContainerInputs>

      <ButtonsContainer>
        <Button
          type="button"
          addStatusClass={isButtonEnabled ? "active" : "disabled"}
          onClick={handleSubmit}
        >
          Entrar
        </Button>
        <span className="forget">Esqueceu sua senha?</span>
      </ButtonsContainer>

      <NoAccount className="no-account">
        Não tem uma conta?{" "}
        <LinkStyled to="/create-account" className="link">
          Criar Conta
        </LinkStyled>
      </NoAccount>

      <OtherAccess />

      <Message
        message={
          <React.Fragment>
            Compartilhe, Inspire, Transforme.
            <br />
            Unindo Ações para um Mundo Melhor.
          </React.Fragment>
        }
      />

      <CustomToastContainer />
    </ContainerForm>
  );
}
