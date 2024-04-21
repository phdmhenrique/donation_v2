import React from "react";
import { Link } from "react-router-dom";

import "./RightSide.css";

import ButtonAccess from '../ButtonAccess/ButtonAccess.jsx';
import Button from "../Button/Button";

/*
  O que será componente aqui pra ser reutilizado com props:
  .rightside-login h1 (entrar);
  .rightside-inputs (label, input);
  .rightside__other-access__message
  .no-account (terá que mudar de nome)
*/

function RightSide() {
  return (
    <div className="rightside">
      <div className="rightside-container">

        <div className="rightside-login">
          <h1>Entrar</h1>
          <div className="rightside-inputs">
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
          <div className="rightside-inputs">
            <label htmlFor="">Senha</label>
            <input type="text" />
          </div>
          <div className="rightside-buttons">
            <Button addStatusClass="disabled">Entrar</Button>
            <span>Esqueceu sua senha?</span>
          </div>
        </div>

        <p className="no-account">Não tem uma conta? <Link to="/create-account" className="link">Criar Conta</Link></p>

        <div className="rightside__other-access">
          <p className="rightside__other-access__or">ou</p>
          <span>Acesse com</span>
          <ButtonAccess icon="google" text="Acesse com o Google" />
          <ButtonAccess icon="facebook" text="Acesse com o Facebook" />
          <ButtonAccess icon="x" text="Acesse com o X" />
          <p className="rightside__other-access__message">Compartilhe, Inspire, Transforme. <br /> Unindo Ações para um Mundo Melhor.</p>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
