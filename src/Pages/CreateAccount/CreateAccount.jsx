import React from "react";

// Components
import Template from "../../Components/Template/Template.jsx";
import LeftSide from "../../Components/LeftSide/LeftSide.jsx";
import Register from '../../Components/Register/Register.jsx';

export default function CreateAccount() {
  return (
    <Template
      leftsideContent={
        <LeftSide
          donationTitles={["#Compartilhe", "#Inspire", "#Transforme"]}
          customClasses="leftside__more-titles"
        />
      }
      rightsideContent={
        <Register />
      }
    />
  );
}
