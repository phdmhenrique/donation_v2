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
  const [selectedDay, setSelectedDay] = useState("Seg");

  const daysOfWeek = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
  const hours = [
    ["01:00", "07:00", "13:00", "19:00"],
    ["02:00", "08:00", "14:00", "20:00"],
    ["03:00", "09:00", "15:00", "21:00"],
    ["04:00", "10:00", "16:00", "22:00"],
    ["05:00", "11:00", "17:00", "23:00"],
    ["06:00", "12:00", "18:00", "00:00"],
  ];

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

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
                    {daysOfWeek.map(day => (
                      <div
                        key={day}
                        className={`day ${selectedDay === day ? "active" : ""}`}
                        onClick={() => handleDayClick(day)}
                      >
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="availability-hours__title">Horários Disponíveis</div>
                  <div className="availability-hours">
                    {hours.map((row, rowIndex) => (
                      <div key={rowIndex} className="hours-row">
                        {row.map(hour => (
                          <div
                            key={hour}
                            className={`hour ${selectedDay === "Seg" ? "available" : ""}`}
                          >
                            {hour}
                          </div>
                        ))}
                      </div>
                    ))}
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