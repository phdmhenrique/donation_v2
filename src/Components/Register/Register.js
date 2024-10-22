import styled from "styled-components";

export const Terms = styled.p`
  font-size: var(--font__12);
  font-weight: bold;
  color: var(--gray-3);
  padding-bottom: 1.2rem;
  border-bottom: 0.1rem solid var(--white-smoke);
  margin-top: 1.8rem;

  & .terms-highlight {
    color: var(--primary);
    border-bottom: 0.1rem solid var(--primary);
  }
`;