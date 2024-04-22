import React from "react";
import { Link } from "react-router-dom";

import "./RightSide.css";

import ButtonAccess from "../ButtonAccess/ButtonAccess.jsx";
import Button from "../Button/Button";
import CustomInputsGroups from "../CustomInputsGroups/CustomInputsGroups.jsx";

/*
  O que será componente aqui pra ser reutilizado com props:
  .rightside__other-access__message
  .no-account (terá que mudar de nome)
*/

function RightSide({ pageTitle, inputsConfig, buttonText }) {
  return (
    <div className="rightside">
      <div className="rightside-container">
        <div className="rightside-login">
          <h1 className="rightside-login__title">{pageTitle}</h1>
          <CustomInputsGroups inputsConfig={inputsConfig} />
          <div className="rightside-buttons">
            <Button addStatusClass="disabled">{buttonText}</Button>
            <span>Esqueceu sua senha?</span>
          </div>
        </div>

        <p className="no-account">
          Não tem uma conta?{" "}
          <Link to="/create-account" className="link">
            Criar Conta
          </Link>
        </p>

        <div className="rightside__other-access">
          <p className="rightside__other-access__or">ou</p>
          <span>Acesse com</span>
          <ButtonAccess icon="google" text="Acesse com o Google" />
          <ButtonAccess icon="facebook" text="Acesse com o Facebook" />
          <ButtonAccess icon="x" text="Acesse com o X" />
          <p className="rightside__other-access__message">
            Compartilhe, Inspire, Transforme. <br /> Unindo Ações para um Mundo
            Melhor.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
