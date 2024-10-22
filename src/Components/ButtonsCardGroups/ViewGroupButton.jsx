import React from 'react';
import { useNavigate } from 'react-router-dom';
import { JoinButton } from "../CardGroup/CardGroup.js";

const ViewGroupButton = ({ groupId }) => {
  const navigate = useNavigate();

  const handleViewGroup = () => {
    navigate(`/home/group/${groupId}`);
  };

  return (
    <JoinButton onClick={handleViewGroup}>
      Visualizar Grupo
    </JoinButton>
  );
};

export default ViewGroupButton;
