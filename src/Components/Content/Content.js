import styled from "styled-components";

export const Container = styled.section`
  width: auto;
  height: 144rem;
  border: 0.1rem solid var(--gray-2);
  border-top: none;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0rem;
  }
/* 
  &::-webkit-scrollbar-track {
    background-color: var(--gray-2);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-7);
  } */
`;
