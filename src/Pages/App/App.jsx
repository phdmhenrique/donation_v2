import React from "react";

// Components
import Template from "../../Components/Template/Template.jsx";
import LeftSide from "../../Components/LeftSide/LeftSide.jsx";
import Login from "../../Components/Login/Login.jsx";

function App() {
  return (
    <Template
      leftsideContent={<LeftSide donationTitles={["do"]} bold={0} />}
      rightsideContent={<Login pageTitle="Entrar" />}
    />
  );
}

export default App;
