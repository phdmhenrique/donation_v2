import React from "react";
import "./Footer.css";

import FacebookMedia from "../../Icons/FacebookMedia";
import XMedia from "../../Icons/XMedia";
import TiktokMedia from "../../Icons/TiktokMedia";
import InstagramMedia from "../../Icons/InstagramMedia";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-infos">
          <div className="footer-infos__list">
            <ul className="footer-infos__ulis">
              <span>Sobre</span>
              <li>Termos</li>
              <li>Privacidade</li>
              <li>Disclaimer</li>
              <li>Termos de Uso</li>
            </ul>

            <ul className="footer-infos__ulis">
              <span>FAQ</span>
              <li>Política de Reclamações</li>
              <li>Aviso de Cookies</li>
              <li>DMCA</li>
              <li>USC 2257</li>
            </ul>

            <ul className="footer-infos__ulis">
              <span>Contato</span>
              <li>Ajuda</li>
              <li>Referência</li>
              <li>Contrato Padrão</li>

              <div className="social-media">
                <span>Compartilhe o DoNatiton</span>
                <div className="footer-infos__social-media">
                  <li>
                    <FacebookMedia />
                  </li>
                  <li>
                    <XMedia />
                  </li>
                  <li>
                    <TiktokMedia />
                  </li>
                  <li>
                    <InstagramMedia />
                  </li>
                </div>
              </div>
            </ul>
          </div>
          <div className="footer-donation">
            © 2024 DoNation. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
