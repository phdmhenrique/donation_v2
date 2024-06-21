import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
  position: relative;

  & .leftside-title {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  & .leftside__more-titles {
    padding: 0 5.5rem !important;
    align-items: flex-start !important;
  }

  & .leftside-item {
    color: var(--white);
    overflow-x: hidden;

    @media (min-width: 1765px) {
      font-size: 10rem;
    }

    @media (max-width: 1764px) {
      font-size: 9rem;
    }
    
    @media (max-width: 1464px) {
      font-size: 8rem;
    }

    @media (max-width: 1164px) {
      font-size: 7rem;
    }

    &.bold::after {
      content: "Nation";
      font-weight: bold;
    }

    &.fw300 {
      font-weight: 300;
    }
  }

  & .img-banner {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Media Queries */
  @media (max-width: 738px) {
    display: none;
  }
`;
