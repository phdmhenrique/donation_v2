import React from "react";
import {
  Container,
  ResultsAndFiltersStyled,
  ContainerCard,
} from "./CardDonation.js";

// Components
import CardDonationItem from "../CardDonationItem/CardDonationItem.jsx";

export default function CardDonation({ members }) {
  const donations = members.flatMap((member) =>
    member.donations.map((donation) => ({
      ...donation,
      member,
    }))
  );

  return (
    <Container>
      <ResultsAndFiltersStyled>
        Exibindo {donations.length} de {donations.length} resultados
      </ResultsAndFiltersStyled>

      <ContainerCard>
        {donations.map((donation, index) => (
          <CardDonationItem key={index} donation={donation} />
        ))}
      </ContainerCard>
    </Container>
  );
}
