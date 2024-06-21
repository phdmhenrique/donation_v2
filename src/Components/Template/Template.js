import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--white-smoke);
  font-size: var(--font__16);
  color: var(--white);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--gray-5);
  }

  &::-webkit-scrollbar-track {
    background-color: var(--white-smoke);
  }

  & .sides-container {
    max-width: 144rem;
    width: 100%;
    min-height: 87.2rem;
    max-height: 100vh;
    height: 100%;
    display: flex;
    margin: 0 auto;
    border-left: 0.2rem solid var(--gray-2);
    border-right: 0.2rem solid var(--gray-2);
  }

  & .container-leftside,
  .container-rightside {
    width: calc(100% / 2);
    height: 100%;
  }

  & .rightside {
    width: 100%;
    min-width: 22rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 12.6rem 2rem 0 12.6rem;
    background-color: var(--white);
  }

  /* MEDIA QUERY */
  @media (max-width: 1000px) {
    flex-direction: column;

    .container-leftside {
      display: none;
    }

    .container-rightside {
      width: 100%;

      .rightside {
        align-items: center;
        padding: 6rem 0.5rem;
      }
    }
  }
`;

export const PageTitle = styled.h1`
  color: var(--primary);
  font-size: var(--font__26);
  font-weight: 700;
  word-wrap: break-word;
  margin-bottom: 2.4rem;
`;
