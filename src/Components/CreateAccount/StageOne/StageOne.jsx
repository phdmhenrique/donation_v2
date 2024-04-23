import React from 'react';

import FullSize from "../../../Components/FullSize/FullSize.jsx";
import Divisory from "../../../Components/Divisory/Divisory.jsx";
import LeftSide from "../../../Components/LeftSide/LeftSide.jsx";
import RightSide from "../../../Components/RightSide/RightSide.jsx";
import Footer from "../../../Components/Footer/Footer.jsx";
import Login from "../../../Components/RightSide/Login/Login.jsx";
import CustomInputsGroups from "../../../Components/CustomInputsGroups/CustomInputsGroups.jsx";

import imageBanner from '../../../Assets/donation-banner.png'
import Button from '../../Button/Button.jsx';

// Styled Components

function StageOne() {

  const inputsConfig = [
    {
      label: "Seu número de telefone",
      type: "tel",
    },
    {
      label: "Data de nascimento",
      type: "date",
    },
    {
      label: "Email",
      type: "email",
      placeholder: "seuemail@gmail.com",
    },
    {
      label: "Email",
      type: "email",
      placeholder: "seuemail@gmail.com",
    },
  ];

  return (
    <FullSize>
      <Divisory>
        <LeftSide
          DonationTitles={["#Cultive", "#Manifeste", "#Impacte"]}
          customClasses="leftside__more-titles"
          imgPath={imageBanner}
          alt="Donation Logo"
        />
        <RightSide>
          <Login
            pageTitle={
                <React.Fragment>
                    Prepare-se… <br /> A uma página de distância 
                    de usar o DoNation"
                </React.Fragment>
            }
            customComponent={<CustomInputsGroups inputsConfig={inputsConfig} />}
            formButtons={[
              <Button key={1} addStatusClass="inactive">Cancelar</Button>,
              <Button key={2} addStatusClass="disabled">Cadastrar</Button>,
            ]}
          />

        </RightSide>
      </Divisory>
      <Footer />
    </FullSize>
  );
}

export default StageOne;
