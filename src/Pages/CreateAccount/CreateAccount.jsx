import React from 'react';

// Components
import Template from '../../Components/Template/Template.jsx';
import Register from '../../Components/Register/Register.jsx';
import LeftSide from "../../Components/LeftSide/LeftSide.jsx";

function CreateAccount() {
  return (
    <Template
      leftsideContent={
        <LeftSide
          donationTitles={["#Compartilhe", "#Inspire", "#Transforme"]}
          customClasses="leftside__more-titles"
        />
      }
      rightsideContent={
        <Register pageTitle="Cadastrar" />
      }
    />
  );
}

export default CreateAccount;