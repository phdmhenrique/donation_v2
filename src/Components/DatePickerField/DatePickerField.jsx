import React, { useState, useRef } from 'react';
import { differenceInYears, subYears } from 'date-fns';
import { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Container,
  DateField,
  ColumnDate,
  DateUnique,
  StyledDatePicker,
} from './DatePickerField.js';

registerLocale('pt-BR', ptBR);

const DatePickerField = ({ value, onChange, label }) => {
  const currentDate = new Date();
  const minDateFor18YearsOld = subYears(currentDate, 18);
  const datePickerRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(value ? new Date(value) : minDateFor18YearsOld);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onChange('date', date);
    datePickerRef.current.setOpen(false);
  };

  const handleDateFieldClick = () => {
    datePickerRef.current.setOpen(true);
  };

  const age = differenceInYears(currentDate, selectedDate);
  const dateFieldColor = age < 18 ? 'var(--primary)' : 'var(--tertiary)';
  const minDate = subYears(currentDate, 110);
  const maxDate = subYears(currentDate, 18);

  return (
    <Container>
      <label>{label}</label>
      <DateField onClick={handleDateFieldClick} style={{ color: dateFieldColor }}>
        <ColumnDate>
          <DateUnique>Mês</DateUnique>
          <DateUnique>Dia</DateUnique>
          <DateUnique>Ano</DateUnique>
        </ColumnDate>
        {selectedDate ? (
          <ColumnDate>
            <DateUnique>{selectedDate.toLocaleDateString('pt-BR', { month: 'short' })}</DateUnique>
            <DateUnique>{selectedDate.getDate()}</DateUnique>
            <DateUnique>{selectedDate.getFullYear()}</DateUnique>
          </ColumnDate>
        ) : (
          'Selecione a Data'
        )}
      </DateField>
      <StyledDatePicker
        ref={datePickerRef}
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        locale="pt-BR"
        customInput={<div />}
        withPortal
        minDate={minDate}
        maxDate={maxDate}
      />
    </Container>
  );
};

export default DatePickerField;
