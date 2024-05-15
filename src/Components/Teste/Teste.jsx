import React, { useState, useEffect, useRef } from 'react';
import {
  StyledDatePicker,
  Container,
  DateField,
  ColumnDate,
  DateUnique,
} from './Teste.js';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import { differenceInYears, subYears } from 'date-fns';

registerLocale('pt-BR', ptBR);

const Teste = () => {
  const currentDate = new Date(); // Obtém a data atual
  const minDateFor18YearsOld = subYears(currentDate, 17); // Calcula a data mínima para ter 18 anos
  const [selectedDate, setSelectedDate] = useState(minDateFor18YearsOld);
  const datePickerRef = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    datePickerRef.current.setOpen(false); // Fecha o DatePicker após a seleção
  };

  const handleDateFieldClick = () => {
    datePickerRef.current.setOpen(true); // Abre o DatePicker
  };

  // Calcula a diferença em anos entre a data atual e a data selecionada
  const age = differenceInYears(currentDate, selectedDate);

  // Define as cores baseadas na idade
  const dateFieldColor = age < 18 ? 'red' : 'green';

  // Defina as restrições de data
  const minDate = subYears(currentDate, 110); // 110 anos atrás a partir da data atual
  const maxDate = subYears(currentDate, 18); // 18 anos atrás a partir da data atual

  return (
    <Container>
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
        customInput={<div />} // Usa um div vazio para esconder o input padrão
        withPortal // Abre o DatePicker em um portal para sobrepor corretamente
        minDate={minDate}
        maxDate={maxDate}
      />
    </Container>
  );
};

export default Teste;
