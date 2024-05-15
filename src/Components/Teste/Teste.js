import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const StyledDatePicker = styled(DatePicker)`
  position: absolute;
  top: 40px; /* Ajuste conforme necessário */
  z-index: 1000; /* Para sobrepor outros elementos */
`;

export const ColumnDate = styled.div`
  display: flex;
  gap: 1rem;
`;

export const DateUnique = styled.span`
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 300px;
  font-size: 13px;
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
