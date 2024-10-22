import React from "react";
import { Container } from "./Template.js";

// Components
import Footer from "../Footer/Footer.jsx";

export default function Template({ leftsideContent, rightsideContent }) {
  return (
    <Container>
      <header className="sides-container">
        <section className="container-leftside">{leftsideContent}</section>
        <section className="container-rightside">
          <div className="rightside">
            {/* <form className="form-container"> */}
              {rightsideContent}
            {/* </form> */}
          </div>
        </section>
      </header>
      <Footer />
    </Container>
  );
}
