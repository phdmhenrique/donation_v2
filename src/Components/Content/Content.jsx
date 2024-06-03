import React from "react";
import { Container } from "./Content.js";
import Tabs from "../Tabs/Tabs.jsx";
import CreateGroup from "../CreateGroup/CreateGroup.jsx";

export default function Content() {
  return (
    <Container>
      <CreateGroup />
      <Tabs />
    </Container>
  );
}
