import React from 'react';
import { JoinButton } from "../CardGroup/CardGroup.js";

const RemoveRequestButton = ({ groupId, groupName, openCancelModal }) => {
  return (
    <JoinButton onClick={() => openCancelModal(groupId, groupName)}>
      Cancelar Solicitação
    </JoinButton>
  );
};

export default RemoveRequestButton;
