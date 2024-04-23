import styled from "styled-components";

export const RightSideContainer = styled.section`
  width: 50%;
  min-width: 27rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12.6rem;
  background-color: var(--white);

  @media (max-width: 738px) {
    width: 100% !important;
    padding-top: 6rem !important;
  }
`;

export const RightsideContent = styled.div`
    max-width: 32rem;
    width: 100%;

  @media (max-width: 738px) {
    padding: 0 1rem;
  }

`;

export default RightSideContainer;
