import React, { useRef, useEffect } from "react";
import { fetchContributionsData } from "../../api/fetchContributionsData.js";
import {
  Container,
  ResultsAndFiltersStyled,
  ContainerCard,
} from "./CardDonation.js";
import CardItem from "../CardDonationItem/CardDonationItem.jsx";

export default function CardDonation() {
  const contributions = fetchContributionsData();

  return (
    <Container>
      <ResultsAndFiltersStyled>
        Exibindo {contributions.length} de {contributions.length} resultados
      </ResultsAndFiltersStyled>

      <ContainerCard>
        {contributions.map((contribution, index) => (
          <CardItem key={index} contribution={contribution} />
        ))}
      </ContainerCard>
    </Container>
  );
}
