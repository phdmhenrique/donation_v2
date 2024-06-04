import React, { useState } from "react";
import { TabContentForTab } from "../Dashboard/Darshboard.js";
import { TabList, Tab, TabsContainer } from "../../Components/Tabs/Tabs.js";

// ICONS
import DashboardIcon from "../../Icons/DashboardICon.jsx";
import MyContribution from "../../Icons/MyContribution.jsx";

const tabData = [
  {
    icon: <DashboardIcon />,
    title: "Em Andamento",
    content: "Em Andamento",
  },
  {
    icon: <MyContribution />,
    title: "Concluídos",
    content: "Concluídos",
  },
  {
    icon: <DashboardIcon />,
    title: "Cancelados",
    content: "Cancelados",
  },
];

export default function DonationProcess() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
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
    </>
  );
}
