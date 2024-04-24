import styled from "styled-components";

export const RightsideInput = styled.input`
  width: 100%;
  height: 4rem;
  flex-shrink: 0;
  padding: 0 1.5rem;

  border-radius: 0.4rem;
  border: 0.1rem solid var(--gray-2);
  background-color: var(--gray-1);
  transition: 0.2s ease-in-out;

  &:focus {
    outline: none;
    border: 0 solid none;
    border-radius: 0;
    border-bottom: 0.1rem solid var(--primary);
    background-color: var(--white);
  }
`;
