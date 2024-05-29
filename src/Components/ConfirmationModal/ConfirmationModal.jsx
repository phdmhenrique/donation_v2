import React from 'react';
import { ModalOverlay, ModalContent, Button, ConfirmButton, CancelButton } from './ConfirmationModal.js'

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Se Juntar</h2>
        <p>Enviar solicitação para ingressar em "Grupo da Solidariedade"</p>
        <CancelButton onClick={onClose}>Cancelar</CancelButton>
        <ConfirmButton onClick={onConfirm}>Enviar</ConfirmButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ConfirmationModal;
