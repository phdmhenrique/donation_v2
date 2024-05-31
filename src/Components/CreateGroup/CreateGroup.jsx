import React from "react";
import {
  Container,
  ContainerReturnPage,
  ContainerCreateGroup,
  ReturnPageMessage,
  ButtonCreateGroup,
} from "./CreateGroup.js";
import { FaArrowLeftLong } from "react-icons/fa6";
import { AiFillEdit } from "react-icons/ai";

export default function CreateGroup() {
  return (
    <Container>
      <ContainerReturnPage>
        <FaArrowLeftLong />
        <ReturnPageMessage>Grupos</ReturnPageMessage>
      </ContainerReturnPage>

      <ContainerCreateGroup>
          <ButtonCreateGroup><AiFillEdit /> Criar Grupo</ButtonCreateGroup>
      </ContainerCreateGroup>
    </Container>
  );
}
