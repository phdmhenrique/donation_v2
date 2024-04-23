import React from "react";
import { CustomInputGroup } from './CustomInputGroups.js'
import { RightsideInputs, RightsideLabel, RightsideInput } from "../CustomInput/CustomInput";

function CustomInputsGroups({ inputsConfig }) {
  return (
    <CustomInputGroup className="custom-inputs-group">
      {inputsConfig.map((inputConfig, index) => (
        <RightsideInputs key={index} className="rightside-inputs">
          <RightsideLabel>{inputConfig.label}</RightsideLabel>
          <RightsideInput
            type={inputConfig.type}
            placeholder={inputConfig.placeholder}
          />
        </RightsideInputs>
      ))}
    </CustomInputGroup>
  );
}

export default CustomInputsGroups;
