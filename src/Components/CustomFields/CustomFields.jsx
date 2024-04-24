import React from "react";
import { RightsideLabel, RightsideInputs } from "../../App.js";
import { StyledInput, StyledSelect } from "./CustomFields.js";

const CustomFields = ({ label, type, placeholder, options }) => {
  return (
    <RightsideInputs className="rightside-inputs">
      <RightsideLabel>{label}</RightsideLabel>
      {/* se o componente inputsConfigs  */}
      {type === "select" ? (
        <StyledSelect>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
      ) : (
        <StyledInput type={type} placeholder={placeholder} />
      )}
    </RightsideInputs>
  );
};

export default CustomFields;
