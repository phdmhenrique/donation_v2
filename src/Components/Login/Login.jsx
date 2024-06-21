import React from "react";
import {
  Container,
  RightSideButtons,
  TabHeader,
  TabHeaderItem,
} from "./Login.js";

// Components
import CustomFields from '../CustomFields/CustomFields.jsx';
import { PageTitle } from "../Template/Template.js";

export default function Login({ pageTitle }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <PageTitle>{pageTitle}</PageTitle>

      

      <RightSideButtons className="rightside-buttons">
        {/* Adicionando a propriedade 'key' nos elementos */}
        {formButtons.map((button, index) => (
          <div key={index}>{button}</div>
        ))}
      </RightSideButtons>



    </Container>
  );
}
