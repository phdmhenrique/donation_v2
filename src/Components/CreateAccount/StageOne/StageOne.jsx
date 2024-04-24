import React from 'react';
import FullSize from "../../../Components/FullSize/FullSize.jsx";
import Divisory from "../../../Components/Divisory/Divisory.jsx";
import LeftSide from "../../../Components/LeftSide/LeftSide.jsx";
import RightSide from "../../../Components/RightSide/RightSide.jsx";
import Footer from "../../../Components/Footer/Footer.jsx";
import Login from "../../../Components/RightSide/Login/Login.jsx";
import Button from '../../../Components/Button/Button.jsx';
import CustomFields from '../../CustomFields/CustomFields.jsx'; // Importe o novo componente

// Certifique-se de ter a variável imageBanner definida e importada corretamente
import imageBanner from "../../../Assets/donation-banner.png";

function StageOne() {
  const fieldsConfigs = [
    {
      id: 'phoneInput',
      label: "Seu número de telefone",
      type: "tel",
      placeholder: "99 99999-9999",
    },
    {
      id: 'dobInput',
      label: "Data de nascimento",
      type: "date",
      placeholder: "Digite sua data de nascimento",
    },
    {
      id: 'stateInput',
      label: "Estado",
      type: "select",
      options: [
        { value: 'none', label: 'Selecionar' },
        { value: 'sp', label: 'São Paulo' },
        { value: 'rj', label: 'Rio de Janeiro' },
        { value: 'mg', label: 'Minas Gerais' },
        { value: 'ba', label: 'Bahia' },
        { value: 'pr', label: 'Paraná' },
        { value: 'am', label: 'Amazonas' },
      ],
    },
    {
      id: 'cityInput',
      label: "Cidade",
      type: "select",
      options: [
        { value: 'none', label: 'Selecionar' },
        { value: 'saopaulo', label: 'São Paulo' },
        { value: 'registro', label: 'Registro' },
        { value: 'cajati', label: 'Cajati' },
        { value: 'jacupiranga', label: 'Jacupiranga' },
        { value: 'pariquera-acu', label: 'Pariquera-Açu' },
        { value: 'juquia', label: 'Juquiá' },
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
                Prepare-se… <br /> A uma página de distância 
                de usar o DoNation"
              </React.Fragment>
            }
            rightsideInputs={fieldsConfigs.map(({ id, ...rest }) => (
              <CustomFields key={id} {...rest} />
            ))}
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