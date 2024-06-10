import React, { useState } from "react";
import {
  Card,
  CardInfoUser,
  CardInfoUserDetails,
  Usernames,
  ContributionDate,
  ContributionService,
  ContributionServiceTitle,
  ContributionServiceBanner,
  InterestsAndDetailsStyled,
} from "./CardDonationItem.js";
import {
  ButtonStyledInterests,
  Interests,
  Details,
} from "../CardContribution/CardContribution.js";

// ICONS
import MyContributionIcon from "../../Icons/MyContributionIcon.jsx";
import MoreInfoIcon from "../../Icons/MoreInfoIcon.jsx";

const CardItem = ({ contribution }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card>
      <CardInfoUser>
        <CardInfoUserDetails>
          <img
            src={contribution.avatar.image}
            alt={contribution.titleService}
          />
          <Usernames>
            <span>{contribution.avatar.name}</span>
            <p>@{contribution.avatar.username}</p>
          </Usernames>
        </CardInfoUserDetails>

        <ContributionDate>
          {contribution.date}
          <MoreInfoIcon />
        </ContributionDate>
      </CardInfoUser>

      <ContributionService>
        <ContributionServiceTitle>
          {contribution.titleService}
        </ContributionServiceTitle>

        <ContributionServiceBanner>
          <div
            className={`image-container ${isHovered ? "hovered" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? (
              <div className="alternative-content">
                <p>Conteúdo Alternativo</p>
              </div>
            ) : (
              <img src={contribution.banner} alt={contribution.titleService} />
            )}
          </div>
        </ContributionServiceBanner>
      </ContributionService>

      <InterestsAndDetailsStyled>
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
            <p>{contribution.availability}</p>
          </div>
          <button>
            Solicitar <MyContributionIcon />
          </button>
        </Details>
      </InterestsAndDetailsStyled>
    </Card>
  );
};

export default CardItem;
