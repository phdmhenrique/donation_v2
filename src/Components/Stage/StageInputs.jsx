import React, { useState } from "react";
import {
  RightsideLabel,
  StyledInput,
  RightsideInputs,
  StyledInfo,
  StyledField,
  StyledSelect,
  StyledOption,
} from "./StageInputs.js";

const CustomFields = ({
  label,
  type,
  placeholder,
  value,
  name,
  onChange,
  options,
  hasInfo,
}) => {
  const [inputType, setInputType] = useState(type);

  const handleInputChange = (value) => {
    onChange(name, value);
  };

  return (
    <RightsideInputs className="rightside-inputs">
      <RightsideLabel>{label}</RightsideLabel>
      {type === "select" ? (
        <StyledSelect
          onChange={(e) => handleInputChange(e.target.value)}
          value={value}
          name={name}
        >
          {options.map((option) => (
            <StyledOption key={option.value} value={option.value}>
              {option.label}
            </StyledOption>
          ))}
        </StyledSelect>
      ) : (
        <>
          {hasInfo ? (
            <StyledField>
              <StyledInfo>+55</StyledInfo>
              <StyledInput
                type={inputType}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(name, e.target.value)}
              />
            </StyledField>
          ) : (
            <StyledInput
              type={inputType}
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange(name, e.target.value)}
            />
          )}
        </>
      )}
    </RightsideInputs>
  );
};

export default CustomFields;
