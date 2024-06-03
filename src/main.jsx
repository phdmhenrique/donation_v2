import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./Fonts/fonts.css";
import GlobalStyles from "./Styles/GlobalStyles.js";

import App from './App.jsx';
import CreateAccount from './Components/CreateAccount/CreateAccount.jsx';
import Stages from './Components/CreateAccount/Stages/Stages.jsx';
import Home from './Pages/Home.jsx';
import GroupDetails from './Pages/GroupDetails.jsx';
import Layout from './Components/Layout/Layout.jsx'; // Importando Layout

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/create-account/stages" element={<Stages />} />

        {/* Rota base para Home com Layout */}
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="group/:groupId" element={<GroupDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
