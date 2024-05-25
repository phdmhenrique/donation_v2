// src/utils/validation.js
import { subYears, isAfter, isValid } from "date-fns";

export const validatePhoneNumber = (phoneNumber) => {
  const phoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
  return phoneRegex.test(phoneNumber);
};

export const validateDate = (date) => {
  const currentDate = new Date();
  const minDateFor18YearsOld = subYears(currentDate, 18);
  return date <= minDateFor18YearsOld ? "Você precisa ter mais de 18 anos." : "";
};

export const validateState = (state) => {
  return state === "none" || !state ? "Estado é obrigatório." : "";
};

export const validateCity = (city) => {
  return city === "none" || !city ? "Cidade é obrigatória." : "";
};

export const validateForm = (formData, activeTab, selectedGroupsSecondStep) => {
  const currentDate = new Date();
  const minDateFor18YearsOld = subYears(currentDate, 18); // Data mínima para ter 18 anos

  const errors = {
    cellphone: !formData.cellphone ? "Número de telefone é obrigatório." : !validatePhoneNumber(formData.cellphone) ? "Número de telefone inválido" : "",
    date: isAfter(formData.date, minDateFor18YearsOld) ? "Data de nascimento inválida." : "",
    state: !formData.state ? "Estado é obrigatório." : "",
    city: !formData.city ? "Cidade é obrigatória." : "",
    interests: activeTab === 2 && selectedGroupsSecondStep.length === 0 ? "Selecione ao menos um grupo de interesse!" : "",
  };

  const isFormValid = Object.values(errors).every((error) => !error);

  return { errors, isFormValid };
};
