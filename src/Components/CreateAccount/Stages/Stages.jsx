import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FullSize from "../../FullSize/FullSize.jsx";
import Divisory from "../../Divisory/Divisory.jsx";
import LeftSide from "../../LeftSide/LeftSide.jsx";
import RightSide from "../../RightSide/RightSide.jsx";
import Footer from "../../Footer/Footer.jsx";
import Login from "../../RightSide/Login/Login.jsx";
import Button from "../../Button/Button.jsx";
import StageInputs from "../../Stage/StageInputs.jsx";
import InterestGroup from "../../InterestGroup/InterestGroup.jsx";
import LoadingScreen from "../../LoadingScreen/LoadingScreen.jsx";
import { CustomToastContainer } from "../../Notification/Notification.js";

import imageBanner from "../../../Assets/donation-banner.png";
import DatePickerField from "../../DatePickerField/DatePickerField.jsx"; // Import the new DatePickerField

function Stages() {
  // Links
  const navigate = useNavigate();

  // UseState's
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedGroupsSecondStep, setSelectedGroupsSecondStep] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    cellphone: "",
    date: new Date(), // Ensure date is initialized as a Date object
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
    if (activeTab === 2) {
      setSelectedGroupsSecondStep(updateGroups);
      setIsButtonEnabled(updateGroups.length > 0);
    } else {
      setSelectedInterests(updateGroups);
    }
  };

  const handleFirstStepSubmit = () => {
    validateForm();
    const errorField = Object.keys(formErrors).find((key) => formErrors[key]);
    if (errorField) {
      toast.error(formErrors[errorField]);
    } else {
      setActiveTab(2);
      validateForm(); // Chama a validação novamente ao mudar para a segunda etapa
    }
  };

  const handleSecondStepSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (selectedGroupsSecondStep.length > 0) {
      toast.success("Cadastro realizado com sucesso!");
      setIsLoading(true);
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } else {
      setIsButtonEnabled(false);
      toast.error("Selecione ao menos um grupo de interesse.");
    }
  };

  const handleBackButton = () => {
    setActiveTab(1); // Volta para a primeira etapa ao clicar em "Voltar"
    setSelectedInterests(selectedGroupsSecondStep); // Restaura os grupos selecionados
  };

  // Validação
  const validateForm = () => {
    const errors = {
      cellphone: !formData.cellphone ? "Número de telefone é obrigatório." : "",
      date: !formData.date ? "Data de nascimento é obrigatória." : "",
      state: !formData.state ? "Estado é obrigatório." : "",
      city: !formData.city ? "Cidade é obrigatória." : "",
      interests:
        activeTab === 2 && selectedGroupsSecondStep.length === 0
          ? "Selecione ao menos um grupo de interesse!"
          : "",
    };

    setFormErrors(errors);

    if (activeTab === 1) {
      setIsButtonEnabled(Object.values(errors).every((error) => !error));
    } else if (activeTab === 2) {
      setIsButtonEnabled(selectedGroupsSecondStep.length > 0);
    }
  };

  useEffect(() => {
    validateForm();
  }, [formData, selectedInterests, selectedGroupsSecondStep]);

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

  if (isLoading) {
    return <LoadingScreen />;
  }

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
            showTabs={true} // Define se as tabs devem ser exibidas
            activeTab={activeTab} // Passa o estado activeTab como propriedade
            pageTitle={
              <React.Fragment>
                Prepare-se… <br /> A uma página de distância <br /> de usar o
                DoNation
              </React.Fragment>
            }
            rightsideInputs={
              activeTab === 1
                ? fieldsConfigsFirstStep.map((config) => {
                    if (config.type === "date") {
                      return (
                        <DatePickerField
                          key={config.name}
                          value={formData[config.name]}
                          onChange={handleChange}
                          label={config.label}
                        />
                      );
                    } else {
                      return <StageInputs key={config.name} {...config} />;
                    }
                  })
                : [
                    <InterestGroup
                      key="interest-group"
                      onGroupSelectionChange={handleGroupSelectionChange}
                      selectedGroups={selectedGroupsSecondStep}
                    />,
                  ]
            }
            formButtons={[
              <Link
                to={
                  activeTab === 1
                    ? "/create-account"
                    : "/create-account/stages"
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
                  key={3}
                  addStatusClass={isButtonEnabled ? "active" : "disabled"}
                  onClick={handleSecondStepSubmit}
                >
                  Confirmar
                </Button>
              ),
            ]}
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

export default Stages;
