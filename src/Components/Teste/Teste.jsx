import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z, ZodError } from "zod";

import FullSize from "../../Components/FullSize/FullSize.jsx";
import Divisory from "../../Components/Divisory/Divisory.jsx";
import LeftSide from "../../Components/LeftSide/LeftSide.jsx";
import RightSide from "../../Components/RightSide/RightSide.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Login from "../../Components/RightSide/Login/Login.jsx";
import Button from "../../Components/Button/Button.jsx";
import CustomFields from "../CustomFields/CustomFields.jsx";
import { CustomToastContainer } from "../Notification/Notification.js";

import imageBanner from "../../Assets/donation-banner.png";

function StageOne() {
  const [formData, setFormData] = useState({
    cellphone: "",
    date: "",
    state: "",
    city: "",
    interests: [],
  });

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const handleBackButton = () => {
    setActiveTab(1);
  };
  const handleChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const fieldsConfigsFirstStep = [
    {
      label: "Seu número de telefone",
      type: "tel",
      placeholder: "99 99999-9999",
      name: "cellphone",
      onChange: handleChange,
    },
    {
      label: "Sua data de nascimento",
      type: "date",
      name: "date",
      onChange: handleChange,
    },
    {
      label: "Estado",
      type: "select",
      placeholder: "Selecione um estado",
      name: "state",
      onChange: handleChange,
      options: [
        { value: "none", label: "Selecionar" },
        { value: "sp", label: "São Paulo" },
        { value: "rj", label: "Rio de Janeiro" },
        { value: "mg", label: "Minas Gerais" },
        { value: "ba", label: "Bahia" },
        { value: "pr", label: "Paraná" },
        { value: "am", label: "Amazonas" },
      ],
    },
    {
      label: "Cidade",
      type: "select",
      placeholder: "Selecione sua cidade",
      name: "city",
      onChange: handleChange,
      options: [
        { value: "none", label: "Selecionar" },
        { value: "saopaulo", label: "São Paulo" },
        { value: "registro", label: "Registro" },
        { value: "cajati", label: "Cajati" },
        { value: "jacupiranga", label: "Jacupiranga" },
        { value: "pariquera-acu", label: "Pariquera-Açu" },
        { value: "juquia", label: "Juquiá" },
      ],
    },
  ];

  const fieldsConfigsSecondStep = [
    {
      label: "Grupos de interesse",
      type: "checkbox",
      name: "interests",
      onChange: handleChange,
      options: [
        { label: "Esportes", value: "esportes" },
        { label: "Arte e Cultura", value: "arte-cultura" },
        { label: "Voluntariado", value: "voluntariado" },
        { label: "Tecnologia", value: "tecnologia" },
      ],
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
                Prepare-se… <br /> A uma página de distância de usar o DoNation
              </React.Fragment>
            }
            rightsideInputs={
              activeTab === 1
                ? fieldsConfigsFirstStep.map((config) => (
                    <CustomFields key={config.name} {...config} />
                  ))
                : fieldsConfigsSecondStep.map((config) => (
                    <CustomFields key={config.name} {...config} />
                  ))
            }
            formButtons={[
              <Link
                to={
                  activeTab === 1
                    ? "/create-account"
                    : "/create-account-stageone"
                }
                key="no-key"
              >
                <Button
                  key={1}
                  addStatusClass="inactive"
                  onClick={handleBackButton}
                >
                  {activeTab === 1 ? "Sair" : "Voltar"}
                </Button>
              </Link>,
              <Button
                key={2}
                addStatusClass={isButtonEnabled ? "active" : "disabled"}
              >
                {activeTab === 1 ? "Continuar" : "Confirmar"}
              </Button>,
            ]}
            showTabs={true}
            activeTab={activeTab}
          />

          <CustomToastContainer
            toastStyle={{
              fontSize: "1.4rem",
            }}
          />
        </RightSide>
      </Divisory>
      <Footer />
    </FullSize>
  );
}

export default StageOne;
