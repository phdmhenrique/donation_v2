import React, { useState, useEffect } from "react";
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
import CardGroup from "../CardGroup/CardGroup.jsx";
import SearchInput from "../SearchInput/SearchInput.jsx";

// Botões
import JoinCancelButton from "../ButtonsCardGroups/JoinCancelButton.jsx";
import ViewGroupButton from "../ButtonsCardGroups/ViewGroupButton.jsx";
import RemoveRequestButton from "../ButtonsCardGroups/RemoveRequestButton.jsx";

// Função para simular a chamada da API
import { fetchGroupData } from "../../api/fetchGroupData.js";

// Componentes
import ConfirmModal from "../ConfirmationModal/ConfirmationModal.jsx";

const Tabs = () => {
  const tabData = [
    {
      icon: <DashboardIcon />,
      title: "Geral",
      content: (groups, sentRequests, openJoinModal, handleCancelRequest, hoveringGroupId, setHoveringGroupId) => (
        <CardGroup
          groups={groups}
          sentRequests={sentRequests}
          ButtonComponent={JoinCancelButton}
          openJoinModal={openJoinModal}
          handleCancelRequest={handleCancelRequest}
          hoveringGroupId={hoveringGroupId}
          setHoveringGroupId={setHoveringGroupId}
        />
      ),
    },
    {
      icon: <UserDonationIcon />,
      title: "Meus Grupos",
      content: (groups, sentRequests, openJoinModal, handleCancelRequest, hoveringGroupId, setHoveringGroupId) => (
        <CardGroup
          groups={groups}
          sentRequests={sentRequests}
          ButtonComponent={ViewGroupButton}
          openJoinModal={openJoinModal}
          handleCancelRequest={handleCancelRequest}
          hoveringGroupId={hoveringGroupId}
          setHoveringGroupId={setHoveringGroupId}
        />
      ),
    },
    {
      icon: <NewDonationIcon />,
      title: "Solicitações",
      content: (groups, sentRequests, openJoinModal, handleCancelRequest, hoveringGroupId, setHoveringGroupId) => (
        <CardGroup
          groups={groups.filter((group) => group.solicited)}
          sentRequests={sentRequests}
          ButtonComponent={RemoveRequestButton}
          openJoinModal={openJoinModal}
          handleCancelRequest={handleCancelRequest}
          hoveringGroupId={hoveringGroupId}
          setHoveringGroupId={setHoveringGroupId}
        />
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [groupData, setGroupData] = useState([]);
  const [sentRequests, setSentRequests] = useState([]);
  const [hoveringGroupId, setHoveringGroupId] = useState(null);
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGroupData();
      setGroupData(data);
    };
    fetchData();
  }, []);

  const updateGroupData = (groupId, solicited) => {
    setGroupData((prevData) =>
      prevData.map((group) =>
        group.id === groupId ? { ...group, solicited } : group
      )
    );
  };

  const openJoinModal = (groupId) => {
    setSelectedGroupId(groupId);
    setModalOpen(true);
  };

  const closeJoinModal = () => {
    setModalOpen(false);
    setSelectedGroupId(null);
  };

  const handleConfirmJoinModal = () => {
    if (selectedGroupId !== null) {
      updateGroupData(selectedGroupId, true);
      setSentRequests((prev) => [...prev, selectedGroupId]);
      closeJoinModal();
    }
  };

  const handleCancelRequest = (groupId) => {
    updateGroupData(groupId, false);
    setSentRequests((prev) => prev.filter((id) => id !== groupId));
  };

  return (
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
      <TabContent>
        {tabData[activeTab].content(groupData, sentRequests, openJoinModal, handleCancelRequest, hoveringGroupId, setHoveringGroupId)}
      </TabContent>
      <ConfirmModal
        isOpen={modalOpen}
        onClose={closeJoinModal}
        onConfirm={handleConfirmJoinModal}
        groupName={
          groupData.find((group) => group.id === selectedGroupId)?.title || ""
        }
      />
    </Container>
  );
};

export default Tabs;
