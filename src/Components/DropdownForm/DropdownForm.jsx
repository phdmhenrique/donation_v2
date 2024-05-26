import React, { useState, useEffect, useRef } from "react";
import { Select, OptionsContainer, Option, Arrow } from "./DropdownForm.js";
import { MdArrowDropUp } from "react-icons/md";

const DropdownForm = ({ value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedOption = options.find(option => option.value === value) || options[0];

  return (
    <div ref={dropdownRef}>
      <Select onClick={handleSelectClick}>
        {selectedOption.label}
        <Arrow isOpen={isOpen} />
      </Select>
      <OptionsContainer open={isOpen}>
        {options.map((option) => (
          <Option
            key={option.value}
            onClick={() => handleOptionClick(option.value)}
            active={value === option.value ? "true" : undefined}
          >
            {option.label}
          </Option>
        ))}
      </OptionsContainer>
    </div>
  );
};

export default DropdownForm;
