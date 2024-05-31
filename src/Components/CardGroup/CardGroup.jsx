import React, { useState, useEffect } from "react";
import {
  ResultsAndFilters,
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
  PhotoUsersFromGroup,
} from "./CardGroup.js";

// Components
import ConfirmModal from "../ConfirmationModal/ConfirmationModal.jsx";

// Icons
import GroupIcon from "../../Icons/GroupIcon.jsx";
import LocationIcon from "../../Icons/LocationIcon.jsx";

const CardGroup = ({
  groups,
  sentRequests,
  ButtonComponent,
  openJoinModal,
  handleCancelRequest,
  hoveringGroupId,
  setHoveringGroupId,
}) => {

  return (
    <Container>
      <ResultsAndFilters>
        Exibindo {groups.length} de {groups.length} resultados
      </ResultsAndFilters>
      {groups.map((group) => (
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
              <InfoNumberOfDonation>
                <strong>+{group.donationsPerDay}</strong> Doações por dia
              </InfoNumberOfDonation>
            </Demonstrator>
            <Description>{group.description}</Description>
            <Address>
              <LocationIcon />
              {group.address}
            </Address>
            <ButtonComponent
              groupId={group.id}
              openJoinModal={openJoinModal}
              handleCancelRequest={handleCancelRequest}
              sentRequests={sentRequests}
              hoveringGroupId={hoveringGroupId}
              setHoveringGroupId={setHoveringGroupId}
            />
          </ContentCard>
        </Card>
      ))}
    </Container>
  );
};

export default CardGroup;
