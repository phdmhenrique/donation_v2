import React from 'react';
import ReactDOM from 'react-dom/client';

// REACT-ROUTER-DOM
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// IMPORT DE ARQUIVOS DE CSS
import "./Fonts/fonts.css";
import GlobalStyles from "./Styles/GlobalStyles.js";

// COMPONENTS DE PÁGINA
import App from './App.jsx';
import CreateAccount from './Components/CreateAccount/CreateAccount.jsx';
import Stages from './Components/CreateAccount/Stages/Stages.jsx';
import Home from './Pages/Home.jsx';
import GroupDetails from './Pages/GroupDetails.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/create-account/stages" element={<Stages />} />
        <Route path="/group/:groupId" element={<GroupDetails/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
