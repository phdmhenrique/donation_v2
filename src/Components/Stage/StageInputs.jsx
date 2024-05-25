import React from "react";
import MaskedInput from "react-text-mask";
import {
  Container,
  RightsideLabel,
  StyledInput,
  RightsideInputs,
  StyledField,
  StyledSelect,
  StyledOption,
  StyledInfo,
} from "./StageInputs.js";
import DatePickerField from "../DatePickerField/DatePickerField.jsx";
import { subYears } from 'date-fns';

const phoneNumberMask = [
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const StageInputs = ({ formData, updateFormData, stateOptions, cityOptions }) => {
  // Inicialize a data de nascimento com 18 anos atrás
  const initialDate = subYears(new Date(), 18);

  // Máscara de data
  const dateFormatMask = [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/];

  return (
    <Container>
      <RightsideInputs className="rightside-inputs">
        <RightsideLabel>Seu número de telefone</RightsideLabel>
        <StyledField>
          <StyledInfo>+55</StyledInfo>
          <MaskedInput
            mask={phoneNumberMask}
            value={formData.cellphone}
            onChange={(e) => updateFormData("cellphone", e.target.value)}
            placeholder="99 99999-9999"
            render={(ref, props) => (
              <StyledInput ref={ref} {...props} />
            )}
          />
        </StyledField>
      </RightsideInputs>

      <RightsideInputs className="rightside-inputs">
        <RightsideLabel>Sua data de nascimento</RightsideLabel>
        <DatePickerField
          value={formData.date}
          onChange={(value) => updateFormData("date", value)}
          maxDate={initialDate} // Adicione a propriedade maxDate com a data inicial
          dateFormatMask={dateFormatMask} // Adicione a máscara de data
        />
      </RightsideInputs>

      <RightsideInputs className="rightside-inputs">
        <RightsideLabel>Estado</RightsideLabel>
        <StyledSelect
          value={formData.state}
          onChange={(e) => updateFormData("state", e.target.value)}
          name="state"
        >
          {stateOptions.map((option) => (
            <StyledOption key={option.value} value={option.value}>
              {option.label}
            </StyledOption>
          ))}
        </StyledSelect>
      </RightsideInputs>

      <RightsideInputs className="rightside-inputs">
        <RightsideLabel>Cidade</RightsideLabel>
        <StyledSelect
          value={formData.city}
          onChange={(e) => updateFormData("city", e.target.value)}
          name="city"
        >
          {cityOptions.map((option) => (
            <StyledOption key={option.value} value={option.value}>
              {option.label}
            </StyledOption>
          ))}
        </StyledSelect>
      </RightsideInputs>
    </Container>
  );
};

export default StageInputs;
