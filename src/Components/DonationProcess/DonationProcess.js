import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.6rem;

  /* @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  } */
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "info details";
  gap: 1.2rem;
  min-height: 10rem;
  border: 0.1rem solid var(--primary);
  padding: 1.2rem;
  border-radius: 0.5rem;
  color: var(--primary);

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "info" "details";
  }
`;

export const InformationDetails = styled.div`
  grid-area: info;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: 700;

  & h2 {
    font-size: var(--font__16);
  }

  & span {
    font-size: var(--font__12);
  }
`;

export const ViewSolicitationAndInfosDonation = styled.div`
  grid-area: details;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & button {
    width: 100%;
    background-color: var(--primary);
    color: var(--white);
    border-radius: 0.5rem;
    font-size: var(--font__16);
    padding: 0.4rem 1.2rem;
    cursor: pointer;
  }

  & .infos-donation {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: 480px) {
      justify-content: flex-start;
    }

    & .divisory {
      width: 0.2rem;
      height: 1.5rem;
      background-color: var(--primary);
    }

    & img {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
      object-fit: cover;
    }

    & span {
      font-size: var(--font__14);
    }
  }
`;
