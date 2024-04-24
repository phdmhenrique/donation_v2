import styled from "styled-components";

export const StyledInput = styled.input`
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

export const StyledSelect = styled.select`
  appearance: none;
  width: 100%;
  height: 4rem;
  padding: 0 1.5rem;
  border: 0.1rem solid var(--gray-2);
  border-radius: 0.4rem;
  background-color: var(--gray-1);
  color: var(--font-color);
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out;
`;