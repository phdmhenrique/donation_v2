import React, { useState } from "react";
import { Container, StyledInput, StyledEyeIcon } from "./CustomFields.js";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const CustomFields = ({
  label,
  type,
  placeholder,
  value,
  name,
  onChange,
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
    <Container>
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      <div style={{ position: "relative" }}>
        <StyledInput
          id={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={(e) => onChange(name, e.target.value)}
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
    </Container>
  );
};

export default CustomFields;
