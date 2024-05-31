import React, { useEffect, useState } from "react";
import {
  Line,
  Container,
  TabsContainer,
  TabList,
  Tab,
  TabContent,
} from "./Tabs.js";

// Icons
import DashboardIcon from "../../Icons/DashboardICon.jsx";
import UserDonationIcon from "../../Icons/UserDonationIcon.jsx";
import NewDonationIcon from "../../Icons/NewDonationIcon.jsx";

// Componentes
import CardGroup from '../CardGroup/CardGroup.jsx';
import SearchInput from '../SearchInput/SearchInput.jsx';

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
      <TabContent>{tabData[activeTab].content}</TabContent>
    </>
  );
};

export default Tabs;
