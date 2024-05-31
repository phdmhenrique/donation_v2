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

// import da "api" da pasta api dentro de src que contém os arquivos json para uso.
import { fetchGroupData } from '../../api/fetchGroupData .js';

// Components
import ConfirmModal from '../ConfirmationModal/ConfirmationModal.jsx';

import GroupImage from "../../Assets/prato.png";

// Icons
import GroupIcon from "../../Icons/GroupIcon.jsx";
import LocationIcon from "../../Icons/LocationIcon.jsx";

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
    console.log('abrir modal');
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
              >
                {hoveringGroupId === group.id ? 'Cancelar Solicitação' : 'Solicitação Enviada'}
              </JoinButton>
            ) : (
              <JoinButton
                onClick={() => openJoinModal(group.id)}
              >
                Se Juntar
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