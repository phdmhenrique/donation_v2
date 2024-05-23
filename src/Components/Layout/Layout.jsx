import React from 'react'
import { Container, Logo, LayoutContainer } from "./Layout.js";
import Footer from '../Footer/Footer.jsx'

import NavAccount from '../NavAccount/NavAccount.jsx';
import Content from '../Content/Content.jsx';
import AsideSuggest from '../AsideSuggest/AsideSuggest.jsx';

function Layout() {
  return (
    <Container>
      <Logo>Do</Logo>
      <LayoutContainer>
        <NavAccount />
        <Content />
        <AsideSuggest />
      </LayoutContainer>
      <Footer />
    </Container>
  )
}

export default Layout
