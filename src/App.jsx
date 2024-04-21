// import { Link } from "react-router-dom";
import React from "react";
import "./Fonts/fonts.css";
import './Styles/GlobalStyles.css';

import FullSize from "./Components/FullSize/FullSize.jsx";
import Divisory from "./Components/Divisory/Divisory.jsx";
import LeftSide from "./Components/LeftSide/LeftSide.jsx";
import RightSide from "./Components/RightSide/RightSide.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import imageBanner from "./Assets/donation-banner.png";

function App() {
  return (
    <React.Fragment>
      <FullSize>
        <Divisory>
          <LeftSide imgPath={imageBanner} alt="Donation Logo" />
          <RightSide />
        </Divisory>
        <Footer />
      </FullSize>
    </React.Fragment>
  );
}

export default App;
