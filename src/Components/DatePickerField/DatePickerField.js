import styled from "styled-components";
import DatePicker from "react-datepicker";

export const StyledDatePicker = styled(DatePicker)`
  position: absolute;
  top: 4rem;
  z-index: 5;
`;

export const Container = styled.div`
  max-width: 32rem;
  height: 8rem;
  display: flex;
  flex-direction: column;
  color: var(--gray-3);
  font-size: var(--font__14);
  font-weight: 500;
  word-wrap: break-word;
`;

export const DateField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 6.2rem;
  padding: 0 1rem;
  border-radius: 0.4rem;
  border: 0.1rem solid var(--gray-2);
  background-color: var(--gray-1);
  transition: 0.2s ease-in-out;
  cursor: pointer;
`;

export const ColumnDate = styled.div`
  display: flex;
  gap: 5rem;
`;

export const DateUnique = styled.span`
  font-size: var(--font__16);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
`;
