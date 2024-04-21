// import { Link } from "react-router-dom";
import React from "react";
import "./App.css";
import "./Fonts/fonts.css";
import './Styles/GlobalStyles.css';

import FullSize from "./Components/FullSize/FullSize.jsx";
import LeftSide from "./Components/LeftSide/LeftSide.jsx";
import RightSide from "./Components/RightSide/RightSide.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import imageBanner1 from "./Assets/donation-banner1.png";

function App() {
  return (
    <React.Fragment>
      <FullSize>
        <div className="divisory">
          <LeftSide imgPath={imageBanner1} />
          <RightSide />
        </div>
        <Footer />
      </FullSize>
    </React.Fragment>
  );
}

export default App;
