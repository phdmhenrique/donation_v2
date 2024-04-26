import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator"; // Importando a biblioteca validator

import FullSize from "../../Components/FullSize/FullSize.jsx";
import Divisory from "../../Components/Divisory/Divisory.jsx";
import LeftSide from "../../Components/LeftSide/LeftSide.jsx";
import RightSide from "../../Components/RightSide/RightSide.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import LinkStyled from "../../Components/LinkStyled/LinkStyled";
import Login from "../../Components/RightSide/Login/Login.jsx";
import NoAccount from "../../Components/RightSide/Account/Account.jsx";
import Button from "../../Components/Button/Button.jsx";
import imageBanner from "../../Assets/donation-banner.png";
import SocialMedia from "../../Components/RightSide/SocialMedia/SocialMedia.jsx";
import CustomFields from "../../Components/CustomFields/CustomFields.jsx"; // Importe CustomFields corretamente
import { Terms, TermsHightlight } from "./CreateAccount.js";
import { CustomToastContainer } from "../Notification/Notification.js";

import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5"; // Importe os ícones corretamente

function CreateAccount() {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha

  const handleChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const errors = {
      fullName:
        !formData.fullName
          ? "Nome Completo é obrigatório"
          : /\d/.test(formData.fullName)
          ? "Nome Completo não pode conter números"
          : "",
      username:
        !formData.username
          ? "Nome de Usuário é obrigatório"
          : !validator.isAlphanumeric(formData.username.replace(/\s/g, ""))
          ? "Nome de Usuário não pode conter espaços, caracteres especiais ou acentos"
          : formData.username.length > 12
          ? "Nome de Usuário deve ter no máximo 12 caracteres"
          : "",
      email:
        !formData.email
          ? "Email é obrigatório"
          : !validator.isEmail(formData.email)
          ? "Email inválido"
          : "",
      password:
        !formData.password
          ? "Senha é obrigatória"
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
      repeatPassword:
        !formData.repeatPassword && formData.password
          ? "Repetir a senha é obrigatório"
          : formData.password !== formData.repeatPassword
          ? "As senhas não estão iguais"
          : "",
    };

    setFormErrors(errors);
    setIsButtonEnabled(Object.values(errors).every((error) => !error));
  };

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    const errorField = Object.keys(formErrors).find((key) => formErrors[key]);
    if (errorField) {
      toast.error(formErrors[errorField]);
    } else {
      toast.success("Cadastro realizado com sucesso!");
      // Simulando o envio do formulário
      setTimeout(() => {
        // Redirecionamento para a próxima página ou lógica adicional
      }, 2000); // Simula um atraso para redirecionamento após 2 segundos
    }
  };

  const fieldsConfigs = [
    {
      label: "Nome Completo",
      type: "text",
      placeholder: "Seu Nome Completo",
      name: "fullName",
      value: formData.fullName,
      onChange: handleChange,
      error: formErrors.fullName,
    },
    {
      label: "Nome de Usuário",
      type: "text",
      placeholder: "Seunomedeusuario",
      name: "username",
      value: formData.username,
      onChange: handleChange,
      error: formErrors.username,
    },
    {
      label: "Email",
      type: "email",
      placeholder: "seuemail@gmail.com",
      name: "email",
      value: formData.email,
      onChange: handleChange,
      error: formErrors.email,
    },
    {
      label: "Senha (A senha deve conter de 8-16 caracteres)",
      type: showPassword ? "text" : "password",
      placeholder: "A-Z,a-z,0-9,!@#",
      name: "password",
      value: formData.password,
      onChange: handleChange,
      error: formErrors.password,
      icon: showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />,
      onIconClick: handleTogglePassword,
      showPassword: showPassword, // Garanta que a propriedade showPassword esteja sendo passada
    },
    {
      label: "Repetir a Senha",
      type: showPassword ? "text" : "password",
      placeholder: "A-Z,a-z,0-9,!@#",
      name: "repeatPassword",
      value: formData.repeatPassword,
      onChange: handleChange,
      error: formErrors.repeatPassword,
      icon: showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />,
      onIconClick: handleTogglePassword,
      showPassword: showPassword, // Garanta que a propriedade showPassword esteja sendo passada
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
            rightsideInputs={fieldsConfigs.map((config) => (
              <CustomFields key={config.name} {...config} />
            ))}
            formButtons={[
              <Link to="/" key="no-key">
                <Button key={1} addStatusClass="inactive">
                  Cancelar
                </Button>
              </Link>,
              <Button
                key={2}
                addStatusClass={isButtonEnabled ? "active" : "disabled"}
                onClick={handleSubmit}
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

          <CustomToastContainer
            toastStyle={{
              fontSize: "1.4rem", // Tamanho da fonte desejado
            }}
          />
        </RightSide>
      </Divisory>
      <Footer />
    </FullSize>
  );
}

export default CreateAccount;
