import React from "react";
import { RightsideInputs, RightsideLabel, RightsideSelect } from './CustomSelect.js';

function CustomSelect({ label, options, ...selectProps }) {
  return (
    <RightsideInputs className="rightside-inputs">
      <RightsideLabel>{label}</RightsideLabel>
      <RightsideSelect {...selectProps}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </RightsideSelect>
    </RightsideInputs>
  );
}

export default CustomSelect;
