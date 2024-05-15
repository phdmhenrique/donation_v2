import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const StyledDatePicker = styled(DatePicker)`
  position: absolute;
  top: 40px; /* Ajuste conforme necessário */
  z-index: 1000; /* Para sobrepor outros elementos */
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const DateField = styled.div`
    display: flex;
    width: 100%;
    height: 4rem;
    padding: 0 1rem;
    border-radius: 0.4rem;
    border: 0.1rem solid var(--gray-2);
    background-color: var(--gray-1);
    transition: 0.2s ease-in-out;
    align-items: center;
    cursor: pointer;
`;
