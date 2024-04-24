import React from "react";
import { RightsideInput } from './CustomInput.js';

export default function CustomInput({ inputsConfig, ...inputProps }) {
  // Verifica se inputsConfig está definido e é uma array
  if (!Array.isArray(inputsConfig)) {
    return null; // Ou outra ação apropriada, como um retorno de erro ou renderização condicional
  }

  return (
    <>
      {inputsConfig.map((inputConfig, index) => (
        <RightsideInput key={index} type={inputConfig.type} {...inputProps} />
      ))}
    </>
  );
}