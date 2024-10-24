import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterInfos,
  InfosList,
  InfosUlis,
  InfosSpan,
  InfosLi,
  SocialMedia,
  SocialMediaSpan,
  SocialMediaItems,
  FooterDonation,
} from "./Footer.js";

import FacebookMedia from "../../Icons/FacebookMedia";
import XMedia from "../../Icons/XMedia";
import TiktokMedia from "../../Icons/TiktokMedia";
import InstagramMedia from "../../Icons/InstagramMedia";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterInfos>
          <InfosList>
            <InfosUlis>
              <InfosSpan>Sobre</InfosSpan>
              <InfosLi>Termos</InfosLi>
              <InfosLi>Privacidade</InfosLi>
              <InfosLi>Disclaimer</InfosLi>
              <InfosLi>Termos de Uso</InfosLi>
            </InfosUlis>
            <InfosUlis>
              <InfosSpan>FAQ</InfosSpan>
              <InfosLi>Política de Reclamações</InfosLi>
              <InfosLi>Aviso de Cookies</InfosLi>
              <InfosLi>DMCA</InfosLi>
              <InfosLi>USC 2257</InfosLi>
            </InfosUlis>
            <InfosUlis>
              <InfosSpan>Contato</InfosSpan>
              <InfosLi>Ajuda</InfosLi>
              <InfosLi>Referência</InfosLi>
              <InfosLi>Contrato Padrão</InfosLi>
              <SocialMedia>
                <SocialMediaSpan>Compartilhe o DoNatiton</SocialMediaSpan>
                <SocialMediaItems>
                  <FacebookMedia />
                  <XMedia />
                  <TiktokMedia />
                  <InstagramMedia />
                </SocialMediaItems>
              </SocialMedia>
            </InfosUlis>
          </InfosList>
          <FooterDonation className="footer-donation">
            © 2024 DoNation. Todos os direitos reservados.
          </FooterDonation>
        </FooterInfos>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
