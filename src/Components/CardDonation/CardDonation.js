import styled from "styled-components";
import { ResultsAndFilters } from "../CardGroup/CardGroup.js";

export const Container = styled.div`
  font-size: var(--font__16);
`;

export const ResultsAndFiltersStyled = styled(ResultsAndFilters)`
  padding: 0 1.4rem;
  margin-bottom: 1.2rem;
`;

export const ContainerCard = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
