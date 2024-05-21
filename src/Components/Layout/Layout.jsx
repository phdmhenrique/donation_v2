import React from 'react'
import { Container, Logo, LayoutContainer, Content, AsideSuggest  } from "./Layout.js";
import Footer from '../Footer/Footer.jsx'

import NavAccount from '../NavAccount/NavAccount.jsx';

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
