// import { Link } from "react-router-dom";
import React from "react";
import FullSize from "../FullSize/FullSize.jsx";
import Divisory from "../Divisory/Divisory.jsx";
import LeftSide from "../LeftSide/LeftSide.jsx";
import RightSide from "../RightSide/RightSide.jsx";
import Footer from "../Footer/Footer.jsx";

import imageBanner from '../../Assets/donation-banner.png'

function App() {
  return (
    <React.Fragment>
      <FullSize>
        <Divisory>
          <LeftSide
            DonationTitles={["#Compartilhe", "#Inspire", "#Transforme"]}
            // DonationTitles={["do"]}
            // bold={0}
            customClasses="leftside__more-titles"
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
