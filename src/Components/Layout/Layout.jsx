import React from 'react';
import { Container, Logo, LayoutContainer } from "./Layout.js";
import Footer from '../Footer/Footer.jsx';
import NavAccount from '../NavAccount/NavAccount.jsx';
import AsideSuggest from '../AsideSuggest/AsideSuggest.jsx';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <Container>
      <Logo>Do</Logo>
      <LayoutContainer>
        <NavAccount />
        <Outlet /> {/* Renderiza o conteúdo da rota atual */}
        <AsideSuggest />
      </LayoutContainer>
      <Footer />
    </Container>
  )
}

export default Layout;
