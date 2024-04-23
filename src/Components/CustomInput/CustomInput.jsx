import React from "react";
import {RightsideInputs, RightsideLabel, RightsideInput } from './CustomInput.js';

function CustomInput({ label, type, placeholder, ...inputProps }) {
  return (
    <RightsideInputs className="rightside-inputs">
      <RightsideLabel>{label}</RightsideLabel>
      <RightsideInput type={type} placeholder={placeholder} {...inputProps} />
    </RightsideInputs>
  );
}

export default CustomInput;
