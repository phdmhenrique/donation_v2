import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.6rem;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.2rem;
  min-height: 10rem;
  border: 0.1rem solid var(--primary);
  padding: 1.2rem;
  border-radius: 0.5rem;

  color: var(--primary);
`;

export const InformationDetails = styled.div`
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
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 1.2rem;

  & button {
    background-color: var(--primary);
    color: var(--white);
    border-radius: 0.5rem;
    font-size: var(--font__16);
    padding: 0.4rem 1.2rem;
    cursor: pointer;
  }

  & .infos-donation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    & .divisory {
      width: 0.2rem;
      height: 1.5rem;
      background-color: var(--primary);
      margin: 0 0.8rem;
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
