import React, { useState } from "react";
import {
  RightsideLabel,
  RightsideInputs,
  StyledInput,
  StyledSelect,
  StyledEyeIcon,
} from "./CustomFields.js";

const CustomFields = ({ label, type, placeholder, options, value, onChange, name }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { value } = e.target;
    onChange(name, value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
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
        <div style={{ position: "relative" }}>
          <StyledInput
            type={type === "password" && showPassword ? "text" : type}
            placeholder={placeholder}
            value={value}
            onChange={handleInputChange}
          />
          {type === "password" && (
            <StyledEyeIcon
              onClick={togglePasswordVisibility}
              showPassword={showPassword}
            />
          )}
        </div>
      )}
    </RightsideInputs>
  );
};

export default CustomFields;
