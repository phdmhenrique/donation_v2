import styled from "styled-components";
import { InterestsAndDetails } from "../CardContribution/CardContribution.js";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.2rem 1.4rem;
  border-top: 0.1rem solid var(--gray-2);
`;

export const CardInfoUser = styled.div`
  display: flex;
  flex-wrap: wrap;
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
 height: 100%;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .alternative-content {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    border: 0.2rem solid var(--primary);
    border-radius: 0.4rem;
    background-color: var(--white);

    @media (max-width: 620px) {
      grid-template-columns: 1fr;
      grid-template-rows: 15rem auto;
    }
  }

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
    height: 100%;
    background-color: var(--primary);
    padding: 1rem;
    color: var(--white);
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  & .days {
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.4rem;
  }

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
    grid-auto-flow: column dense;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(4, 1fr);
    position: relative;

    &::after {
      content: "";
      width: 0.2rem;
      height: 100%;
      position: absolute;
      top: 0;
      left: calc(50% - 0.1rem); /* Adjusted to center the divider */
      background-color: var(--white);
      z-index: 1;
    }
  }

  .hour {
    display: grid;
    margin: 0 0.4rem;
    font-size: var(--font__16);
    font-weight: 500;
    cursor: pointer;
    opacity: 0.5;
  }

  .hour.available {
    opacity: 1;
    color: var(--white);
    background-color: var(--green);
    border-radius: 0.3rem;
  }

  & .availability-address {
    font-size: var(--font__12);
    font-weight: 700;
    line-height: 1.2rem;
    border-top: 0.2rem solid var(--white);
    padding-top: 0.8rem;
  }
`;

export const InterestsAndDetailsStyled = styled(InterestsAndDetails)`
  flex-wrap: wrap;
  gap: 1.2rem;
  border-top: 0.1rem solid var(--gray-2);
`;
