import React from 'react';
import { JoinButton } from "../CardGroup/CardGroup.js";

const RemoveRequestButton = ({ groupId, handleCancelRequest }) => {
  return (
    <JoinButton onClick={() => handleCancelRequest(groupId)}>
      Cancelar Solicitação
    </JoinButton>
  );
};

export default RemoveRequestButton;
