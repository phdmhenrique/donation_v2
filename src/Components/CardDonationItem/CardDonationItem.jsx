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
} from "../CardContributions/CardContributions.js";
import MyContributionIcon from "../../Icons/MyContributionIcon.jsx";
import MoreInfoIcon from "../../Icons/MoreInfoIcon.jsx";

const CardItem = ({ contribution }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedDay, setSelectedDay] = useState("Seg");

  const daysOfWeek = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
  const hours = Array.from(
    { length: 24 },
    (_, i) => i.toString().padStart(2, "0") + ":00"
  );

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const isHourAvailable = (hour) => {
    return contribution.availability[selectedDay].includes(hour);
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

      <ContributionServiceTitle>
        {contribution.titleService}
      </ContributionServiceTitle>

      <ContributionService
        className={`${isHovered ? "hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <div className="alternative-content">
            <div className="description-contribution">
              {contribution.description}
            </div>

            <div className="container-availability__contribution">
              <div className="availability-contribution">
                <div className="days">
                  {daysOfWeek.map((day) => (
                    <div
                      key={day}
                      className={`day ${selectedDay === day ? "active" : ""}`}
                      onClick={() => handleDayClick(day)}
                    >
                      {day}
                    </div>
                  ))}
                </div>

                <div className="availability-hours__title">
                  Horários Disponíveis
                </div>
                <div className="availability-hours">
                  {hours.map((hour) => (
                    <div
                      key={hour}
                      className={`hour ${
                        isHourAvailable(hour) ? "available" : ""
                      }`}
                    >
                      {hour}
                    </div>
                  ))}
                </div>

                <div className="availability-address">
                  Endereço: {contribution.address}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <ContributionServiceBanner style={{height: '25rem'}}>
            <img src={contribution.banner} alt={contribution.titleService} />
          </ContributionServiceBanner>
        )}
      </ContributionService>

      <InterestsAndDetailsStyled>
        <Interests>
          {contribution.tags.map((tag, index) => (
            <ButtonStyledInterests key={index} className="inactive">
              #{tag}
            </ButtonStyledInterests>
          ))}
        </Interests>

        <Details className="fodase">
          <div>
            <span>Disponibilidade</span>
            <p>{contribution.quantityAvailability}</p>
            {/* <p>{Object.values(contribution.availability).flat().length}</p> */}
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
