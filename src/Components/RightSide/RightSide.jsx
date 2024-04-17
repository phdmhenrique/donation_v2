import React from "react";
import "./RightSide.css";

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
            <button className="button">Entrar</button>
            <span>Esqueceu sua senha?</span>
          </div>
        </div>

        <div className="righside_other-access"></div>
      </div>
    </div>
  );
}

export default RightSide;
