import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchGroupData } from "../../api/fetchGroupData.js";

// Styles
import {
  LazyLoadStyled,
  UserPhoto,
  ComunityInfosAndBack,
  ComunityInformations,
  ComunityAddress,
  ComunityName,
  ComunityUsername,
  ButtonCreateOrEditGroupStyled,
  ButtonsInviteAndShare,
  ButtonInviteOrShare,
  ContainerTabs,
  TabStyled,
  TabListStyled,
  TabContainerStyled,
} from './GroupDetails.js';
import { Container } from '../../Components/Content/Content.js';
import { TabList, Tab, TabContent } from '../../Components/Tabs/Tabs.js';

// ICONS
import { FaArrowLeft } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { RiUserAddFill } from "react-icons/ri";
import { IoMdShare } from "react-icons/io";
import LocationIcon from '../../Icons/LocationIcon.jsx';
import DashboardIcon from "../../Icons/DashboardICon.jsx";
import UserDonationIcon from "../../Icons/UserDonationIcon.jsx";
import NewDonationIcon from "../../Icons/NewDonationIcon.jsx";

// Components
import SearchInput from "../../Components/SearchInput/SearchInput.jsx";
import Dashboard from '../../Components/Dashboard/Darshboard.jsx';

const GroupDetails = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const { groupId } = useParams();
  const groups = fetchGroupData();
  const group = groups.find((group) => group.id === parseInt(groupId));

  if (!group) {
    return <div>Grupo não encontrado</div>;
  }

  const tabButtons = [
    {
      text: `Doações`,
    },
    {
      text: `Membros (${group.users.length})`,
    },
    {
      text: `Regras do Grupo`,
    },
    {
      text: `Sobre`,
    },
  ];

  const tabData = [
    {
      icon: <DashboardIcon />,
      title: "Geral",
      content: 'Opa',
    },
    {
      icon: <UserDonationIcon />,
      title: "Minhas Doações",
      content: <Dashboard />,
    },
    {
      icon: <NewDonationIcon />,
      title: "Nova Doação",
      content: 'Opa 03',
    },
  ];

  return (
    <Container>
      <LazyLoadStyled height={200} offset={100} once>
        <img src={group.banner} alt={group.title} />
        <UserPhoto>
          <img src={group.image} alt={group.title} />
          <ComunityUsername>
            <p>{group.title}</p>
            <p>@{group.username}</p>
          </ComunityUsername>
        </UserPhoto>

        <ComunityInfosAndBack>
          <Link to="/home"><FaArrowLeft /></Link>
          <ComunityInformations>
            <ComunityName>{group.title}</ComunityName>
            <ComunityAddress><LocationIcon />{group.address}</ComunityAddress>
          </ComunityInformations>
        </ComunityInfosAndBack>

        <ButtonCreateOrEditGroupStyled><AiFillEdit />Editar Grupo</ButtonCreateOrEditGroupStyled>

        <ButtonsInviteAndShare>
          <ButtonInviteOrShare><RiUserAddFill />Convidar Membro</ButtonInviteOrShare>
          <ButtonInviteOrShare><IoMdShare />Compartilhar</ButtonInviteOrShare>
        </ButtonsInviteAndShare>
      </LazyLoadStyled>

      <ContainerTabs>
        <TabListStyled>
          {tabButtons.map((tab, index) => (
            <TabStyled
              key={index}
              active={activeButton === index ? "true" : undefined}
              onClick={() => setActiveButton(index)}
            >
              {tab.text}
            </TabStyled>
          ))}
        </TabListStyled>
      </ContainerTabs>

      <TabContainerStyled>
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
      </TabContainerStyled>

      <TabContent>
        {tabData[activeTab].content}
      </TabContent>

    </Container>
  );
};

export default GroupDetails;