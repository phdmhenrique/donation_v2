import React from 'react';
import ReactDOM from 'react-dom/client';

// REACT-ROUTER-DOM
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// IMPORT DE ARQUIVOS DE CSS
import "./Fonts/fonts.css";
// import "./Styles/Medias.css";
import GlobalStyles from "./Styles/GlobalStyles.js";

// COMPONENTS DE PÁGINA
import App from './App.jsx';
import Teste from './Components/Teste/Teste.jsx';
import Layout from './Components/Layout/Layout.jsx';
import CreateAccount from './Components/CreateAccount/CreateAccount.jsx';
import StageOne from './Components/CreateAccount/StageOne/StageOne.jsx';
import Home from './Pages/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/teste" element={<Teste />}></Route>
        <Route path="/create-account" element={<CreateAccount />}></Route>
        <Route path="/create-account-stageone" element={<StageOne />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
