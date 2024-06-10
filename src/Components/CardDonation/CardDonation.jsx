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
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      if (scrollContainerRef.current) {
        const { deltaY } = event;
        scrollContainerRef.current.scrollTop += deltaY;
        event.preventDefault(); // Evita o comportamento de rolagem padrão
      }
    };

    const container = scrollContainerRef.current;
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <Container>
      <ResultsAndFiltersStyled>
        Exibindo {contributions.length} de {contributions.length} resultados
      </ResultsAndFiltersStyled>

      <ContainerCard ref={scrollContainerRef}>
        {contributions.map((contribution, index) => (
          <CardItem key={index} contribution={contribution} />
        ))}
      </ContainerCard>
    </Container>
  );
}
