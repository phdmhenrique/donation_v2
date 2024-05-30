import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  ImageCard,
  ContentCard,
  Title,
  Demonstrator,
  PhotoUserUnit,
  InfoNumberOfDonation,
  Description,
  Address,
  JoinButton,
  PhotoUsersFromGroup,
} from "./CardGroup.js";

// Components
import ConfirmModal from '../ConfirmationModal/ConfirmationModal.jsx';

import GroupImage from "../../Assets/prato.png";

// Icons
import GroupIcon from "../../Icons/GroupIcon.jsx";
import LocationIcon from "../../Icons/LocationIcon.jsx";

// Função para simular a chamada da API
const fetchGroupData = () => {
  return [
    {
      id: 1,
      title: "Grupo da Solidariedade 1",
      donationsPerDay: 15,
      description: "Este grupo é dedicado a fornecer suporte alimentar para famílias necessitadas na região de Registro-SP. Junte-se a nós para fazer a diferença!",
      address: "Rua do Moinho, 232, Registro-SP",
      image: "https://via.placeholder.com/150/0000FF/808080?text=Grupo+1",
      users: [
        "https://via.placeholder.com/50/FF0000/FFFFFF?text=U1",
        "https://via.placeholder.com/50/00FF00/FFFFFF?text=U2",
        "https://via.placeholder.com/50/0000FF/FFFFFF?text=U3",
        "https://via.placeholder.com/50/FFFF00/FFFFFF?text=U4",
        "https://via.placeholder.com/50/FF00FF/FFFFFF?text=U5",
        "https://via.placeholder.com/50/00FFFF/FFFFFF?text=U6",
        "https://via.placeholder.com/50/000000/FFFFFF?text=U7",
      ]
    },
    {
      id: 2,
      title: "Grupo de Apoio à Educação",
      donationsPerDay: 10,
      description: "Nosso objetivo é melhorar a educação nas comunidades carentes, fornecendo materiais escolares e apoio educacional.",
      address: "Avenida Principal, 100, São Paulo-SP",
      image: "https://via.placeholder.com/150/FF0000/808080?text=Grupo+2",
      users: [
        "https://via.placeholder.com/50/0000FF/FFFFFF?text=U1",
        "https://via.placeholder.com/50/00FF00/FFFFFF?text=U2",
        "https://via.placeholder.com/50/FF0000/FFFFFF?text=U3",
        "https://via.placeholder.com/50/FFFF00/FFFFFF?text=U4",
        "https://via.placeholder.com/50/00FFFF/FFFFFF?text=U5",
      ]
    },
    {
      id: 3,
      title: "Grupo de Apoio à Saúde",
      donationsPerDay: 8,
      description: "Nosso grupo oferece assistência médica gratuita para pessoas em situação de vulnerabilidade social.",
      address: "Rua das Flores, 50, Belo Horizonte-MG",
      image: "https://via.placeholder.com/150/00FF00/808080?text=Grupo+3",
      users: [
        "https://via.placeholder.com/50/FF0000/FFFFFF?text=U1",
        "https://via.placeholder.com/50/00FF00/FFFFFF?text=U2",
        "https://via.placeholder.com/50/0000FF/FFFFFF?text=U3",
        "https://via.placeholder.com/50/FFFF00/FFFFFF?text=U4",
        "https://via.placeholder.com/50/FF00FF/FFFFFF?text=U5",
        "https://via.placeholder.com/50/00FFFF/FFFFFF?text=U6",
      ]
    },
    {
      id: 4,
      title: "Grupo de Recolhimento de Roupas",
      donationsPerDay: 12,
      description: "Coletamos roupas usadas e distribuímos para famílias em situação de rua e em abrigos.",
      address: "Praça Central, 20, Curitiba-PR",
      image: "https://via.placeholder.com/150/FFFF00/808080?text=Grupo+4",
      users: [
        "https://via.placeholder.com/50/FF0000/FFFFFF?text=U1",
        "https://via.placeholder.com/50/00FF00/FFFFFF?text=U2",
        "https://via.placeholder.com/50/0000FF/FFFFFF?text=U3",
        "https://via.placeholder.com/50/FFFF00/FFFFFF?text=U4",
        "https://via.placeholder.com/50/FF00FF/FFFFFF?text=U5",
        "https://via.placeholder.com/50/00FFFF/FFFFFF?text=U6",
        "https://via.placeholder.com/50/000000/FFFFFF?text=U7",
      ]
    },
    {
      id: 5,
      title: "Grupo de Apoio Psicológico",
      donationsPerDay: 7,
      description: "Fornecemos apoio psicológico gratuito para pessoas que passam por dificuldades emocionais.",
      address: "Rua da Paz, 10, Rio de Janeiro-RJ",
      image: "https://via.placeholder.com/150/FF00FF/808080?text=Grupo+5",
      users: [
        "https://via.placeholder.com/50/FF0000/FFFFFF?text=U1",
        "https://via.placeholder.com/50/00FF00/FFFFFF?text=U2",
        "https://via.placeholder.com/50/0000FF/FFFFFF?text=U3",
        "https://via.placeholder.com/50/FFFF00/FFFFFF?text=U4",
        "https://via.placeholder.com/50/FF00FF/FFFFFF?text=U5",
      ]
    },
    {
      id: 6,
      title: "Grupo de Apoio Jurídico",
      donationsPerDay: 9,
      description: "Oferecemos assistência jurídica gratuita para pessoas que não têm condições de pagar por advogados.",
      address: "Avenida dos Advogados, 200, Brasília-DF",
      image: "https://via.placeholder.com/150/00FFFF/808080?text=Grupo+6",
      users: [
        "https://via.placeholder.com/50/FF0000/FFFFFF?text=U1",
        "https://via.placeholder.com/50/00FF00/FFFFFF?text=U2",
        "https://via.placeholder.com/50/0000FF/FFFFFF?text=U3",
        "https://via.placeholder.com/50/FFFF00/FFFFFF?text=U4",
        "https://via.placeholder.com/50/FF00FF/FFFFFF?text=U5",
      ]
    },
    {
      id: 7,
      title: "Grupo de Resgate Animal",
      donationsPerDay: 14,
      description: "Resgatamos animais abandonados e maltratados, proporcionando cuidados veterinários e lares temporários.",
      address: "Rua dos Animais, 300, Porto Alegre-RS",
      image: "https://via.placeholder.com/150/FF6347/808080?text=Grupo+7",
      users: [
        "https://via.placeholder.com/50/FF0000/FFFFFF?text=U1",
        "https://via.placeholder.com/50/00FF00/FFFFFF?text=U2",
        "https://via.placeholder.com/50/0000FF/FFFFFF?text=U3",
        "https://via.placeholder.com/50/FFFF00/FFFFFF?text=U4",
        "https://via.placeholder.com/50/FF00FF/FFFFFF?text=U5",
        "https://via.placeholder.com/50/00FFFF/FFFFFF?text=U6",
      ]
    },
    {
      id: 8,
      title: "Grupo de Apoio aos Idosos",
      donationsPerDay: 5,
      description: "Oferecemos suporte e companhia para idosos em lares de repouso.",
      address: "Rua da Esperança, 50, Salvador-BA",
      image: "https://via.placeholder.com/150/8A2BE2/808080?text=Grupo+8",
      users: [
        "https://via.placeholder.com/50/FF0000/FFFFFF?text=U1",
        "https://via.placeholder.com/50/00FF00/FFFFFF?text=U2",
        "https://via.placeholder.com/50/0000FF/FFFFFF?text=U3",
        "https://via.placeholder.com/50/FFFF00/FFFFFF?text=U4",
        "https://via.placeholder.com/50/FF00FF/FFFFFF?text=U5",
      ]
    },
    {
      id: 9,
      title: "Grupo de Apoio a Vítimas de Violência",
      donationsPerDay: 11,
      description: "Prestamos assistência a vítimas de violência doméstica e abuso, oferecendo apoio legal e psicológico.",
      address: "Rua da Proteção, 70, Recife-PE",
      image: "https://via.placeholder.com/150/FFD700/808080?text=Grupo+9",
      users: [
        "https://via.placeholder.com/50/FF0000/FFFFFF?text=U1",
        "https://via.placeholder.com/50/00FF00/FFFFFF?text=U2",
        "https://via.placeholder.com/50/0000FF/FFFFFF?text=U3",
        "https://via.placeholder.com/50/FFFF00/FFFFFF?text=U4",
        "https://via.placeholder.com/50/FF00FF/FFFFFF?text=U5",
      ]
    },
    {
      id: 10,
      title: "Grupo de Reflorestamento",
      donationsPerDay: 6,
      description: "Nosso grupo é dedicado ao reflorestamento de áreas desmatadas e à educação ambiental.",
      address: "Rua Verde, 90, Manaus-AM",
      image: "https://via.placeholder.com/150/32CD32/808080?text=Grupo+10",
      users: [
        "https://via.placeholder.com/50/FF0000/FFFFFF?text=U1",
        "https://via.placeholder.com/50/00FF00/FFFFFF?text=U2",
        "https://via.placeholder.com/50/0000FF/FFFFFF?text=U3",
        "https://via.placeholder.com/50/FFFF00/FFFFFF?text=U4",
        "https://via.placeholder.com/50/FF00FF/FFFFFF?text=U5",
        "https://via.placeholder.com/50/00FFFF/FFFFFF?text=U6",
        "https://via.placeholder.com/50/000000/FFFFFF?text=U7",
      ]
    }
  ];
};

const CardGroup = () => {
  const [groups, setGroups] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [requestSentGroups, setRequestSentGroups] = useState([]);
  const [hoveringGroupId, setHoveringGroupId] = useState(null);

  useEffect(() => {
    const groupData = fetchGroupData();
    setGroups(groupData);
  }, []);

  // modal open
  const openJoinModal = (groupId) => {
    setSelectedGroupId(groupId);
    setModalOpen(true);
  }

  // modal close 
  const closeJoinModal = () => {
    setModalOpen(false);
    setSelectedGroupId(null);
  }

  // modal confirm
  const handleConfirmJoinModal = () => {
    if (selectedGroupId !== null) {
      setRequestSentGroups((prev) => [...prev, selectedGroupId]);
      closeJoinModal();
    }
  }

  // cancelar solicitação
  const handleCancelRequest = (groupId) => {
    setRequestSentGroups((prev) => prev.filter((id) => id !== groupId));
  }

  return (
    <Container>
      {groups.map(group => (
        <Card key={group.id}>
          <ImageCard>
            <img src={group.image} alt={group.title} />
          </ImageCard>
          <ContentCard>
            <Title>{group.title}</Title>
            <Demonstrator>
              <GroupIcon />
              <PhotoUsersFromGroup>
                {group.users.slice(0, 5).map((user, index) => (
                  <div key={index}>
                    <img src={user} alt={`User ${index + 1}`} />
                  </div>
                ))}
                {group.users.length > 5 && (
                  <div>
                    <PhotoUserUnit>+{group.users.length - 5}</PhotoUserUnit>
                  </div>
                )}
              </PhotoUsersFromGroup>
              <InfoNumberOfDonation><strong>+{group.donationsPerDay}</strong> Doações por dia</InfoNumberOfDonation>
            </Demonstrator>
            <Description>{group.description}</Description>
            <Address>
              <LocationIcon />
              {group.address}
            </Address>
            {requestSentGroups.includes(group.id) ? (
              <JoinButton
                onMouseEnter={() => setHoveringGroupId(group.id)}
                onMouseLeave={() => setHoveringGroupId(null)}
                onClick={() => handleCancelRequest(group.id)}
                disabled={hoveringGroupId !== group.id}
              >
                {hoveringGroupId === group.id ? 'Cancelar Solicitação' : 'Solicitação Enviada'}
              </JoinButton>
            ) : (
              <JoinButton
                onMouseEnter={() => setHoveringGroupId(group.id)}
                onMouseLeave={() => setHoveringGroupId(null)}
                onClick={() => openJoinModal(group.id)}
                disabled={hoveringGroupId !== group.id}
              >
                {hoveringGroupId === group.id ? 'Se Juntar' : 'Se Juntar'}
              </JoinButton>
            )}
          </ContentCard>
        </Card>
      ))}

      <ConfirmModal
        isOpen={modalOpen}
        onClose={closeJoinModal}
        onConfirm={handleConfirmJoinModal}
        groupName={groups.find(group => group.id === selectedGroupId)?.title || ''}
      />
    </Container>
  );
};

export default CardGroup;