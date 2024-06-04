import React from "react";
import {
  Container,
  Card,
  TitleAndDateInfos,
  DateInfos,
  InterestsAndDetails,
} from './CardContribution.js';

import MoreInfoIcon from '../../Icons/MoreInfoIcon.jsx'

const CardContribution = () => {
  const contributions = [
    {
      id: 1,
      titleService: "Doações de livros usados.",
      banner: "https://via.placeholder.com/150",
      tags: ["Educação", "Livros"],
      availability: "10",
      date: "2024-06-01",
    },
    {
      id: 2,
      titleService: "Serviço de diagnóstico.",
      banner: "https://via.placeholder.com/150",
      tags: ["Saúde", "Medicamentos"],
      availability: "5",
      date: "2024-05-15",
    },
  ];

  return (
    <Container>
      {contributions.map((contribution) => (
        <Card key={contribution.id}>
          <img src={contribution.banner} alt="Banner da Doação" />
          <TitleAndDateInfos>
            <h1>{contribution.titleService}</h1>
            <DateInfos>
              <p>Data: {contribution.date}</p>
              <MoreInfoIcon />
            </DateInfos>
          </TitleAndDateInfos>

          <InterestsAndDetails>
            <p>Tags: {contribution.tags.join(", ")}</p>
            <p>Disponibilidade: {contribution.availability}</p>
          </InterestsAndDetails>

        </Card>
      ))}
    </Container>
  );
};

export default CardContribution;
