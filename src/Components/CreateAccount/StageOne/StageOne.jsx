import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FullSize from "../../../Components/FullSize/FullSize.jsx";
import Divisory from "../../../Components/Divisory/Divisory.jsx";
import LeftSide from "../../../Components/LeftSide/LeftSide.jsx";
import RightSide from "../../../Components/RightSide/RightSide.jsx";
import Footer from "../../../Components/Footer/Footer.jsx";
import Login from "../../../Components/RightSide/Login/Login.jsx";
import Button from "../../../Components/Button/Button.jsx";
import StageInputs from "../../Stage/StageInputs.jsx";
import InterestGroup from "../../InterestGroup/InterestGroup.jsx";
import { CustomToastContainer } from "../../Notification/Notification.js";

import imageBanner from "../../../Assets/donation-banner.png";

function StageOne() {
  // UseState's
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedGroupsSecondStep, setSelectedGroupsSecondStep] = useState([]);

  const [formData, setFormData] = useState({
    cellphone: "",
    date: "",
    state: "",
    city: "",
    interests: [],
  });

  const [formErrors, setFormErrors] = useState({
    cellphone: "",
    date: "",
    state: "",
    city: "",
    interests: "",
  });

  // Handle Functions Buttons
  const handleChange = (name, value) => {
    if (name === "interests") {
      setSelectedInterests(value);
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleGroupSelectionChange = (updateGroups) => {
    setSelectedInterests(updateGroups);
  };

  const handleFirstStepSubmit = () => {
    validateForm();
    const errorField = Object.keys(formErrors).find((key) => formErrors[key]);
    if (errorField) {
      toast.error(formErrors[errorField]);
    } else {
      setActiveTab(2);
      setIsButtonEnabled(false); // Desabilitar o botão ao passar para a segunda etapa
    }
  };

  const handleSecondStepSubmit = (e) => {
    // Lógica de validação para a segunda etapa
    console.log(selectedInterests.length);
    e.preventDefault();

    if (selectedInterests.length > 0) {
      toast.success("Cadastro realizado com sucesso!");
      setTimeout(() => {
        // Redirecionamento para a próxima página ou lógica adicional
      }, 2000);
    } else {
      toast.error("Selecione ao menos um grupo de interesse.");
    }
  };

  const handleBackButton = () => {
    setActiveTab(1); // Volta para a primeira etapa ao clicar em "Voltar"
    setSelectedInterests(selectedGroupsSecondStep); // Restaura os grupos selecionados
  };

  // Validação
  useEffect(() => {
    validateForm();
  }, [formData, selectedInterests]);

  const validateForm = () => {
    const errors = {
      cellphone: !formData.cellphone ? "Número de telefone é obrigatório." : "",
      date: !formData.date ? "Data de nascimento é obrigatória." : "",
      state: !formData.state ? "Estado é obrigatório." : "",
      city: !formData.city ? "Cidade é obrigatória." : "",
      interests:
        activeTab === 2 && selectedInterests.length === 0
          ? "Selecione ao menos um grupo de interesse!"
          : "",
    };

    setFormErrors(errors);
    setIsButtonEnabled(Object.values(errors).every((error) => !error));
  };

  // SIMULANDO ENTRADA DE API.
  const fieldsConfigsFirstStep = [
    {
      label: "Seu número de telefone",
      type: "tel",
      placeholder: "99 99999-9999",
      name: "cellphone",
      hasInfo: true,
      value: formData.cellphone,
      onChange: handleChange,
      error: formErrors.cellphone,
    },
    {
      label: "Sua data de nascimento",
      type: "date",
      name: "date",
      value: formData.date,
      onChange: handleChange,
      error: formErrors.date,
    },
    {
      label: "Estado",
      type: "select",
      placeholder: "Selecione um estado",
      name: "state",
      value: formData.state,
      onChange: handleChange,
      error: formErrors.state,
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
      value: formData.city,
      onChange: handleChange,
      error: formErrors.city,
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
                Prepare-se… <br /> A uma página de distância <br /> de usar o
                DoNation
              </React.Fragment>
            }
            rightsideInputs={
              activeTab === 1
                ? fieldsConfigsFirstStep.map((config) => (
                    <StageInputs key={config.name} {...config} />
                  ))
                : [
                    <InterestGroup
                      onGroupSelectionChange={handleGroupSelectionChange}
                      selectedGroups={
                        activeTab === 2
                          ? selectedGroupsSecondStep
                          : selectedInterests
                      }
                    />,
                  ]
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
              activeTab === 1 ? (
                <Button
                  key={2}
                  addStatusClass={isButtonEnabled ? "active" : "disabled"}
                  onClick={handleFirstStepSubmit}
                >
                  Continuar
                </Button>
              ) : (
                <Button
                  key={2}
                  addStatusClass={isButtonEnabled ? "active" : "disabled"}
                  onClick={handleSecondStepSubmit}
                >
                  Confirmar
                </Button>
              ),
            ]}
            showTabs={true} // Define se as tabs devem ser exibidas
            activeTab={activeTab} // Passa o estado activeTab como propriedade
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
