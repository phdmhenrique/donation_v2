import React from "react";
import './CustomInputGroups.css'
import CustomInput from "../CustomInput/CustomInput";

function CustomInputsGroup({ inputsConfig }) {
  return (
    <div className="custom-inputs-group">
      {inputsConfig.map((inputConfig, index) => (
        <CustomInput key={index} {...inputConfig} />
      ))}
    </div>
  );
}

export default CustomInputsGroup;
