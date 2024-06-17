import React, { useState, useEffect } from "react";
import {
  Container,
  ResultsAndFiltersStyled,
  ContainerCard,
} from "./CardDonation.js";
import CardDonationItem from "../CardDonationItem/CardDonationItem.jsx";
import { fetchGroupData } from "../../api/fetchGroupData.js";

export default function CardDonation({ members, onDonationRequest }) {
  const [groupData, setGroupData] = useState([]);
  const [sentDonations, setSentDonations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchGroupData();
      setGroupData(data);
    }
    fetchData();
  }, []);

  const handleRequestClick = (donationId) => {
    setSentDonations((prevSentDonations) => [
      ...prevSentDonations,
      donationId,
    ]);
    onDonationRequest(donationId);
  };

  const donations = members.flatMap((member) =>
    member.donations.map((donation) => ({
      ...donation,
      member,
      donationSolicited: sentDonations.includes(donation.donationId),
    }))
  );

  return (
    <Container>
      <ResultsAndFiltersStyled>
        Exibindo {donations.length} de {donations.length} resultados
      </ResultsAndFiltersStyled>

      <ContainerCard>
        {donations.map((donation, index) => (
          <CardDonationItem
            key={index}
            donation={donation}
            onDonationRequest={onDonationRequest}
            onRequestClick={handleRequestClick}
          />
        ))}
      </ContainerCard>
    </Container>
  );
}
