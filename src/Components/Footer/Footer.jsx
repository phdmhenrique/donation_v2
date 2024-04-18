import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-infos">
          <ul>
            <span>Sobre</span>
            <li>Termos</li>
            <li>Privacidade</li>
            <li>Disclaimer</li>
            <li>Termos de Uso</li>
          </ul>
          <ul>
            <span>FAQ</span>
            <li>Política de Reclamações</li>
            <li>Aviso de Cookies</li>
            <li>DMCA</li>
            <li>USC 2257</li>
          </ul>
          <ul>
            <span>Contato</span>
            <li>Ajuda</li>
            <li>Referência</li>
            <li>Contrato Padrão</li>
            <li>Compartilhe o DoNation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
