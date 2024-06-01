import React from "react";
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

// Icons
import GroupIcon from "../../Icons/GroupIcon.jsx";
import LocationIcon from "../../Icons/LocationIcon.jsx";
import NoDataMessage from "../NoDataMessage/NoDataMessage.jsx";

const CardGroup = ({
  groups,
  sentRequests,
  ButtonComponent,
  openJoinModal,
  handleCancelRequest,
  openCancelModal,
  hoveringGroupId,
  setHoveringGroupId,
  noDataMessage, // Adicionado
}) => {
  return (
    <Container>
      {groups.length === 0 ? (
        <NoDataMessage message={noDataMessage} /> // Exibir mensagem quando não houver dados
      ) : (
        <>
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
                  groupName={group.title} // Adicionado
                  openJoinModal={openJoinModal}
                  handleCancelRequest={handleCancelRequest}
                  openCancelModal={openCancelModal} // Adicionado
                  sentRequests={sentRequests}
                  hoveringGroupId={hoveringGroupId}
                  setHoveringGroupId={setHoveringGroupId}
                />
              </ContentCard>
            </Card>
          ))}
        </>
      )}
    </Container>
  );
};

export default CardGroup;
