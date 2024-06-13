import React, { useState } from "react";
import {
  Container,
  Item,
  InformationDetails,
  ViewSolicitationAndInfosDonation,
} from "./DonationProcess.js";

import { TabContentForTab } from "../Dashboard/Darshboard.js";
import { TabList, Tab, TabsContainer } from "../../Components/Tabs/Tabs.js";

// API
import { fetchUserDonationsData } from "../../api/fetchUserDonationsData.js";

// ICONS
import DashboardIcon from "../../Icons/DashboardICon.jsx";
import CheckedIcon from "../../Icons/CheckedIcon.jsx";
import CloseIcon from "../../Icons/CloseIcon.jsx";

// Components
import SentAndReceived from "../SentAndReceived/SentAndReceived.jsx";

const tabData = [
  {
    icon: <DashboardIcon />,
    title: "Em Andamento",
    content: <SentAndReceived />,
  },
  {
    icon: <CheckedIcon />,
    title: "Concluídos",
  },
  {
    icon: <CloseIcon />,
    title: "Cancelados",
  },
];

export default function DonationProcess({ username }) {
  const [activeTab, setActiveTab] = useState(0);

  const { donations } = fetchUserDonationsData(username);

  const filteredData = donations.filter(donation => {
    if (activeTab === 0) return donation.status === 'em andamento';
    if (activeTab === 1) return donation.status === 'concluída';
    if (activeTab === 2) return donation.status === 'cancelada';
    return false;
  });

  return (
    <TabContentForTab>
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

      {activeTab === 0 && <SentAndReceived username={username} />}

      <Container>
        {filteredData.map((process, index) => (
          <Item key={index}>
            <InformationDetails>
              <h2>{process.titleService}</h2>
              <span>Solicitação Enviada</span>
            </InformationDetails>

            <ViewSolicitationAndInfosDonation>
              <div className="infos-donation">
                <img
                  src={`../../src/Assets/photo-people-00.jpg`}
                  alt={process.titleService}
                />
                <span>{process.date}</span>
                <span>{process.timeDonationCreated}</span>
              </div>

              <div>
                <button>Visualizar Solicitação</button>
              </div>
            </ViewSolicitationAndInfosDonation>
          </Item>
        ))}
      </Container>
    </TabContentForTab>
  );
}
