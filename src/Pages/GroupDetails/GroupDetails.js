import styled from "styled-components";
import LazyLoad from "react-lazyload";
import { ButtonCreateOrEditGroup } from '../../Components/CreateGroup/CreateGroup.js';
import { Tab, TabList } from '../../Components/Tabs/Tabs.js';

export const LazyLoadStyled = styled(LazyLoad)`
    width: 100%;
    min-height: 38rem;
    background-color: var(--white);
    position: relative;

    & img {
        min-width: 100%;
        max-height: 32rem;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }
`;

export const UserPhoto = styled.div`
    width: 11.2rem;
    height: 11.2rem;
    display: flex;
    border-radius: 50%;
    outline: .2rem solid var(--white);
    position: absolute;
    bottom: -0%;
    left: 1.3rem;
    
    & img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`;

export const ComunityUsername = styled.div`
    width: max-content;
    height: fit-content;
    position: absolute;
    left: 12rem;
    top: 5.5rem;
    bottom: 0;
    color: var(--gray-0);

    & p {
        font-size: var(--font__20);
        font-weight: 700;
    }

    & p + p {
        font-size: var(--font__14);
    }
`;

export const ComunityInfosAndBack = styled.div`
    display: flex;
    position: absolute;
    top: 1.2rem;
    left: 1.2rem;
    gap: 1.6rem;

    & svg {
        width: 2.4rem;
        height: 2.4rem;
        fill: var(--white);
    }
`;

export const ComunityInformations = styled.div`
    width: 100%;
    max-width: fit-content;
    padding: 0.4rem;

    display: flex;
    flex-direction: column;
    background-color: var(--white);
    border-radius: 0.4rem;
`;

export const ComunityName = styled.h1`
    font-size: var(--font__20);
    font-weight: 700;
    color: var(--gray-0);
`;

export const ComunityAddress = styled.div`
    display: flex;
    align-items: center;
    gap: .4rem;
    font-size: var(--font__12);
    color: var(--gray-0);
    font-weight: 700;

    & svg {
        width: 1.6rem;
        height: 1.6rem;
    }

    & path {
        fill: var(--black);
    }
`;

export const ButtonCreateOrEditGroupStyled = styled(ButtonCreateOrEditGroup)`
    position: absolute;
    right: 1.2rem;
    top: 1.2rem;
`;


export const ButtonsInviteAndShare = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    gap: 1.2rem;
    right: 1.2rem;
    bottom: 10.5%;
`;

export const ButtonInviteOrShare = styled.button`
  height: min-content;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  background-color: var(--white);
  color: var(--primary);
  border: 0.1rem solid var(--primary);
  padding: 0.8rem 1.2rem;
  font-size: var(--font__16);
  font-weight: 700;
  border-radius: 5rem;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: var(--primary);
    color: var(--white);

    & svg {
      fill: var(--white);
    }
  }

  & svg {
    width: 2rem;
    height: 2rem;
    fill: var(--primary);
    transition: 0.3s ease;
  }
`;

export const ContainerTabs = styled.div`
    width: 100%;
    border-bottom: 0.1rem solid var(--gray-2);
`;

export const TabListStyled = styled(TabList)`
    max-width: 100rem;
    display: flex;
    justify-content: space-between;
    margin: 4.3rem auto 0 auto;
`;

export const TabStyled = styled(Tab)`
    
`;
