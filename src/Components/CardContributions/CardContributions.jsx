import React from "react";
import {
  Container,
  Card,
  TitleAndDateInfos,
  DateInfos,
  InterestsAndDetails,
  ButtonStyledInterests,
  Interests,
  Details,
} from "./CardContributions.js";

import { fetchUserDonationsData } from "../../api/fetchUserDonationsData.js";

// Icons
import MoreInfoIcon from "../../Icons/MoreInfoIcon.jsx";
import { FaEdit } from "react-icons/fa";

const CardContribution = ({ username }) => {
  const { donations } = fetchUserDonationsData(username);

  return (
    <Container>
      {donations.map((contribution) => (
        <Card key={contribution.id}>
          <img src={contribution.banner} alt="Banner da Doação" />
          <TitleAndDateInfos>
            <h1>{contribution.titleService}</h1>
            <DateInfos>
              <p>{contribution.date}</p>
              <MoreInfoIcon />
            </DateInfos>
          </TitleAndDateInfos>

          <InterestsAndDetails>
            <Interests>
              {contribution.tags.map((tag, index) => (
                <ButtonStyledInterests key={index} className="inactive">
                  #{tag}
                </ButtonStyledInterests>
              ))}
            </Interests>

            <Details>
              <div>
                <span>Disponibilidade</span>
                <p>{contribution.quantityAvailability}</p>
              </div>
              <button>Editar Doação <FaEdit /></button>
            </Details>
          </InterestsAndDetails>
        </Card>
      ))}
    </Container>
  );
};

export default CardContribution;
