// import { Link } from "react-router-dom";
import React from "react";

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
          <LeftSide
            // DonationTitles={["#Compartilhe", "#Inspire", "#Transforme"]}
            DonationTitles={["do"]}
            bold={0}
            // customClasses="leftside__more-titles"
            imgPath={imageBanner}
            alt="Donation Logo"
          />
          <RightSide />
        </Divisory>
        <Footer />
      </FullSize>
    </React.Fragment>
  );
}

export default App;
