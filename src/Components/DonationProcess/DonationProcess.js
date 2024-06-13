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
  flex-direction: column;
  gap: 1.2rem;

  & .infos-donation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

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
