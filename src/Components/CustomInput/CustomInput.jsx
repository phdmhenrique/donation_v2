import React from "react";
import './CustomInput.css';

function CustomInput({ label, type, placeholder, ...inputProps }) {
  return (
    <div className="rightside-inputs">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...inputProps} />
    </div>
  );
}

export default CustomInput;
