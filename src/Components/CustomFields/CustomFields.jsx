import React from "react";
import { RightsideLabel, RightsideInputs, StyledInput, StyledSelect } from "./CustomFields.js";

const CustomFields = ({ label, type, placeholder, options, value, onChange, name }) => {
  const handleInputChange = (e) => {
    const { value } = e.target;
    onChange(name, value); // Passa o nome do campo junto com o valor para a função onChange
  };

  return (
    <RightsideInputs className="rightside-inputs">
      <RightsideLabel>{label}</RightsideLabel>
      {type === "select" ? (
        <StyledSelect onChange={handleInputChange} value={value}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
      ) : (
        <StyledInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
        />
      )}
    </RightsideInputs>
  );
};

export default CustomFields;
