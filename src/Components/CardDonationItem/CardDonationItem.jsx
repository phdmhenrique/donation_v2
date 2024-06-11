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

// Components

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
                <div className="description-contribution">{contribution.description}</div>
                <div className="availability-contribution">

                  <div className="days">
                    <div className="day">Seg</div>
                    <div className="day">Ter</div>
                    <div className="day">Qua</div>
                    <div className="day">Qui</div>
                    <div className="day">Sex</div>
                    <div className="day">Sáb</div>
                    <div className="day">Dom</div>
                  </div>

                  <div className="availability-hours__title">Horários Disponíveis</div>
                  <div className="availability-hours">
                    
                  </div>

                </div>
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