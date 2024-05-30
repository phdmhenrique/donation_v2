import React from 'react';
import { ModalOverlay, ModalContent, ModalContentInfos, ModalContentButtons, ModalHeader } from './ConfirmationModal.js'

import Button from '../Button/Button.jsx';

// icon
import { IoMdCloseCircle } from "react-icons/io";

const ConfirmationModal = ({ isOpen, groupName, onConfirm, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader><IoMdCloseCircle onClick={onClose} /></ModalHeader>
        <ModalContentInfos>
          <h2>Se Juntar</h2>
          <p>Enviar solicitação para ingressar em: </p>
          <span>"{groupName}"</span>
        </ModalContentInfos>
        <ModalContentButtons>
          <Button addStatusClass="active" onClick={onConfirm}>Enviar</Button>
          <Button addStatusClass="inactive" onClick={onClose}>Cancelar</Button>
        </ModalContentButtons>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ConfirmationModal;
