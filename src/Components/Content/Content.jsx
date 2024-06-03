import React from "react";
import { Container } from "./Content.js";
import { Route, Routes } from "react-router-dom";

import Tabs from "../Tabs/Tabs.jsx";
import CreateGroup from "../CreateGroup/CreateGroup.jsx";
import GroupDetails from "../../Pages/GroupDetails.jsx"; // Import necessário

export default function Content() {
  return (
    <Container>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CreateGroup />
              <Tabs />
            </>
          }
        />
        <Route
          path="/group/:groupId"
          element={
            <>
              <GroupDetails />
              <Tabs />
            </>
          }
        />
      </Routes>
    </Container>
  );
}
