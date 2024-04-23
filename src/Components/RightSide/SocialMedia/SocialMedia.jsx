import React from "react";

// styled-components
import { RightsideContainer, Rightside__OtherAccess__Message, Rightside__OtherAccess__or, Rightside__OtherAccess__span } from './SocialMedia.js';

// components
import ButtonAccess from "../../ButtonAccess/ButtonAccess.jsx";

export default function SocialMedia({ message }) {
  return (
    <RightsideContainer className="rightside__other-access">
      <Rightside__OtherAccess__or className="rightside__other-access__or">ou</Rightside__OtherAccess__or>
      <Rightside__OtherAccess__span>Acesse com</Rightside__OtherAccess__span>

      <ButtonAccess icon="google" text="Acesse com o Google" />
      <ButtonAccess icon="facebook" text="Acesse com o Facebook" />
      <ButtonAccess icon="x" text="Acesse com o X" />

      <Rightside__OtherAccess__Message className="rightside__other-access__message">
        { message }
      </Rightside__OtherAccess__Message>
    </RightsideContainer>
  );
}
