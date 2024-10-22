import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 5rem;

  & .or-span {
    color: var(--gray-3);
    font-size: var(--font__16);
    font-weight: 500;
    padding: 2.4rem 0 1.7rem 0;
  }

  & .access_with-span {
    color: var(--gray-6);
    font-size: var(--font__16);
    font-weight: 700;
  }

  & .button-access {
    width: 20.3rem;
    height: 4rem;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 0 1rem;
    outline: none;
    border: 0.1rem solid var(--gray-2);
    border-radius: 0.5rem;

    color: var(--gray-3);
    font-size: var(--font__14);
    font-weight: 500;

    cursor: pointer;
    transition: 0.1s ease-in-out;

    &:hover {
      font-size: 1.42rem;
    }
  }
`;
