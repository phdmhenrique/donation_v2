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
  }

  .alternative-content {
    width: 100%;
    height: 100%;
    background-color: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const InterestsAndDetailsStyled = styled(InterestsAndDetails)`
  border-top: 0.1rem solid var(--gray-2);
`;
