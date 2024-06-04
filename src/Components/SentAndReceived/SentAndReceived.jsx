import React, { useState } from "react";
import { TabContentForTab } from "../Dashboard/Darshboard.js";
import { TabList, Tab, TabsContainer } from "../../Components/Tabs/Tabs.js";

// ICONS
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const tabData = [
  {
    icon: <FaArrowRightLong />,
    title: "Enviadas",
    content: 'Enviadas',
  },
  {
    icon: <FaArrowLeftLong />,
    title: "Recebidas",
    content: "Recebidos",
  },
];

export default function SentAndReceived() {
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
