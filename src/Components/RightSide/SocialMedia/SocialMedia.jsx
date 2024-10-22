import React from "react";

// styled-components
import { RightsideContainer, Rightside__OtherAccess__Message } from './SocialMedia.js';

export default function SocialMedia({ message, optionalComponent }) {
  return (
    <RightsideContainer className="rightside__other-access">

      { optionalComponent }

      <Rightside__OtherAccess__Message className="rightside__other-access__message">
        { message }
      </Rightside__OtherAccess__Message>
    </RightsideContainer>
  );
}
