import React, { useState } from "react";
import {
  Line,
  Container,
  TabsContainer,
  TabList,
  Tab,
  ResultsAndFilters,
  TabContent,
} from "./Tabs.js";
import DashboardIcon from "../../Icons/DashboardICon.jsx";
import UserDonationIcon from "../../Icons/UserDonationIcon.jsx";
import NewDonationIcon from "../../Icons/NewDonationIcon.jsx";
import SearchInput from '../SearchInput/SearchInput.jsx';

// Componentes
import CardGroup from '../CardGroup/CardGroup.jsx';

// Componente principal de Tabs
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      icon: <DashboardIcon />,
      title: "Geral",
      content: (
        <CardGroup />
      ),
    },
    {
      icon: <UserDonationIcon />,
      title: "Meus Grupos",
      content: (
        <div style={{ fontSize: "var(--font__16)" }}>
          Conteúdo da aba Meus Grupos
        </div>
      ),
    },
    {
      icon: <NewDonationIcon />,
      title: "Solicitações",
      content: (
        <div style={{ fontSize: "var(--font__16)" }}>
          Conteúdo da aba Solicitações
        </div>
      ),
    },
  ];

  return (
    <>
      <Line />
      <Container>
        <TabsContainer>
          <SearchInput />

          <TabList>
            {tabData.map((tab, index) => (
              <Tab
                key={index}
                active={activeTab === index ? "true" : undefined}
                onClick={() => setActiveTab(index)}
              >
                {tab.icon}
                {tab.title}
              </Tab>
            ))}
          </TabList>
        </TabsContainer>
      </Container>
      <ResultsAndFilters>Exibindo 3 de 33 resultados</ResultsAndFilters>
      <Line />
      <TabContent>{tabData[activeTab].content}</TabContent>
    </>
  );
};

export default Tabs;
