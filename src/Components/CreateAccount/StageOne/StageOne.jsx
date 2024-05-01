import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z, ZodError } from "zod";

import FullSize from "../../../Components/FullSize/FullSize.jsx";
import Divisory from "../../../Components/Divisory/Divisory.jsx";
import LeftSide from "../../../Components/LeftSide/LeftSide.jsx";
import RightSide from "../../../Components/RightSide/RightSide.jsx";
import Footer from "../../../Components/Footer/Footer.jsx";
import Login from "../../../Components/RightSide/Login/Login.jsx";
import Button from "../../../Components/Button/Button.jsx";
import StageInputs from "../../Stage/StageInputs.jsx";
import { CustomToastContainer } from "../../Notification/Notification.js";

import imageBanner from "../../../Assets/donation-banner.png";

const schemaFirstStep = z.object({
  cellphone: z.string().min(1, "Número de telefone é obrigatório."),
  date: z.string().min(1, "Data de nascimento é obrigatória."),
  state: z.string().min(1, "Estado é obrigatório."),
  city: z.string().min(1, "Cidade é obrigatória."),
});

const schemaSecondStep = z.object({
  interests: z.array(z.string()).min(1, "Selecione ao menos um dos seus interesses."),
});

function StageOne() {
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

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    validateForm();
  }, [formData, activeTab]);

  const validateForm = () => {
    const validateData = activeTab === 1 ? schemaFirstStep : schemaSecondStep;
    try {
      validateData.parse(formData);
      setFormErrors({});
      setIsButtonEnabled(true);
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldErrors = {};
        error.errors.forEach((err) => {
          fieldErrors[err.path[0]] = err.message;
        });
        setFormErrors(fieldErrors);
        setIsButtonEnabled(false);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 1 && isButtonEnabled) {
      setActiveTab(2);
    } else if (activeTab === 2) {
      validateInterests();
    } else {
      toast.error("Por favor, preencha todos os campos corretamente.");
    }
  };

  const validateInterests = () => {
    if (formData.interests.length > 0) {
      toast.success("Cadastro realizado com sucesso!");
      setTimeout(() => {
        // Redirecionamento para a próxima página ou lógica adicional
      }, 2000);
    } else {
      toast.error("Selecione ao menos um dos seus interesses.");
    }
  };

  const handleBackButton = () => {
    setActiveTab(1);
  };

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const fieldsConfigsFirstStep = [
    {
      label: "Seu número de telefone",
      type: "tel",
      placeholder: "99 99999-9999",
      name: "cellphone",
      hasInfo: true,
      value: formData.cellphone,
      onChange: handleChange,
      error: formErrors["cellphone"],
    },
    {
      label: "Sua data de nascimento",
      type: "date",
      name: "date",
      value: formData.date,
      onChange: handleChange,
      error: formErrors["date"],
    },
    {
      label: "Estado",
      type: "select",
      placeholder: "Selecione um estado",
      name: "state",
      value: formData.state,
      onChange: handleChange,
      error: formErrors["state"],
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
      error: formErrors["city"],
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
      value: formData.interests,
      onChange: (name, value) => {
        const updatedInterests = value.checked
          ? [...formData.interests, value.label]
          : formData.interests.filter((item) => item !== value.label);
        setFormData((prevData) => ({
          ...prevData,
          interests: updatedInterests,
        }));
      },
      error: formErrors["interests"],
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
                    <StageInputs key={config.name} {...config} />
                  ))
                : fieldsConfigsSecondStep.map((config) => (
                    <StageInputs key={config.name} {...config} />
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
                onClick={handleSubmit}
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
