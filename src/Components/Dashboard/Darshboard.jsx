import React, { useEffect, useState } from "react";
import { Container, TabContentForTab } from "./Darshboard.js";
import { ResultsAndFilters } from "../CardGroup/CardGroup.js";
import { TabList, Tab, TabsContainer } from "../../Components/Tabs/Tabs.js";

// import api
import { fetchGroupData } from "../../api/fetchGroupData.js";

// ICONS
import DashboardIcon from "../../Icons/DashboardICon.jsx";
import MyContribution from "../../Icons/MyContribution.jsx";

// Components
import DonationProcess from '../DonationProcess/DonationProcess.jsx';

const tabData = [
  {
    icon: <DashboardIcon />,
    title: "Dashboard",
    content: <DonationProcess />,
  },
  {
    icon: <MyContribution />,
    title: "Contribuições",
    content: "Contribuições",
  },
];

export default function Darshboard() {
  const [activeTab, setActiveTab] = useState(0);
  const [groupsData, setGroupsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGroupData();
      setGroupsData(data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <ResultsAndFilters>
        Exibindo {groupsData.length} de {groupsData.length} resultados
      </ResultsAndFilters>

      <TabsContainer>
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
      <TabContentForTab>{tabData[activeTab].content}</TabContentForTab>
    </Container>
  );
}
