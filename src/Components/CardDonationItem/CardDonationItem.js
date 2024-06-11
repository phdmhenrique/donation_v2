import styled from "styled-components";
import { InterestsAndDetails } from "../CardContribution/CardContribution.js";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  min-height: 45.8rem;
  padding: 1.2rem 1.4rem;
  border-top: 0.1rem solid var(--gray-2);
`;

export const CardInfoUser = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.2rem;

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const CardInfoUserDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const Usernames = styled.div`
  flex-direction: column;
  line-height: 1.4rem;
  color: var(--gray-0);
  font-weight: 700;

  & span {
    font-size: var(--font__16);
  }

  & p {
    font-size: var(--font__12);
  }
`;

export const ContributionDate = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
  color: var(--gray-7);
`;

export const ContributionService = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const ContributionServiceTitle = styled.h1`
  font-size: var(--font__16);
  font-weight: 700;
  color: var(--gray-5);
`;

export const ContributionServiceBanner = styled.div`
  width: 100%;
  height: 23.7rem;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-container {
    height: 100%;

    & .alternative-content {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      border: 0.2rem solid var(--primary);
      border-radius: 0.4rem;
      background-color: var(--white);

      & .description-contribution {
        width: 100%;
        height: 100%;
        padding: 1rem;
        font-size: var(--font__14);
        color: var(--gray-5);
        overflow-y: scroll;

        &::-webkit-scrollbar {
          width: 0.5rem;
          height: 4rem;
        }

        &::-webkit-scrollbar-track {
          background-color: var(--gray-2);
        }

        &::-webkit-scrollbar-thumb {
          background: var(--gray-7);
        }
      }

      & .availability-contribution {
        width: 38rem;
        height: 100%;
        background-color: var(--primary);
        padding: 1rem;
        color: var(--white);
        display: flex;
        flex-direction: column;
        gap: 0.4rem;

        & .days {
          width: 100%;
          height: max-content;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.4rem;

          & .day {
            width: 2.9rem;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.2rem;
            border-radius: 0.5rem;
            background-color: var(--white);
            color: var(--primary);
            font-size: var(--font__12);
            opacity: 0.75;
            cursor: pointer;
          }

          & .day.active {
            opacity: 1;
            font-weight: bold;
          }
        }

        & .availability-hours__title {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--white);
          color: var(--primary);
          border-radius: 0.5rem;
          font-weight: bold;
        }

        & .availability-hours {
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          justify-items: center;

          & .hours-row {
            display: contents;

            & .hour {
              padding: 0.2rem;
              font-size: var(--font__16);
              font-weight: 500;
              cursor: pointer;
            }

            & .hour.available {
              color: var(--white);
              background-color: var(--green);
              border-radius: 0.3rem;
            }
          }
        }
      }
    }
  }
`;

export const InterestsAndDetailsStyled = styled(InterestsAndDetails)`
  border-top: 0.1rem solid var(--gray-2);
`;