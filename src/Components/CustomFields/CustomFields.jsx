import React, { useState } from "react";
import {
  RightsideLabel,
  RightsideInputs,
  StyledInput,
  StyledSelect,
  StyledEyeIcon,
  StyledOption,
} from "./CustomFields.js";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const CustomFields = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  name,
  options,
  hasIcon,
}) => {
  const [inputType, setInputType] = useState(type);

  const handleInputChange = (value) => {
    onChange(name, value);
  };

  const handleTogglePassword = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <RightsideInputs className="rightside-inputs">
      <RightsideLabel>{label}</RightsideLabel>
      {type === "select" ? (
        <StyledSelect onChange={(e) => handleInputChange(e.target.value)} value={value} name={name}>
          {options.map((option) => (
            <StyledOption key={option.value} value={option.value}>
              {option.label}
            </StyledOption>
          ))}
        </StyledSelect>
      ) : (
        <div style={{ position: "relative" }}>
          <StyledInput
            type={inputType}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(name, e.target.value)} // Passa o name junto com o value
          />

          {hasIcon && (
            <StyledEyeIcon>
              {inputType === "password" ? (
                <IoEyeOutline onClick={handleTogglePassword} />
              ) : (
                <IoEyeOffOutline onClick={handleTogglePassword} />
              )}
            </StyledEyeIcon>
          )}
        </div>
      )}
    </RightsideInputs>
  );
};

export default CustomFields;
