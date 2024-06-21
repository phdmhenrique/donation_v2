import React from "react";
import { Container } from "./LeftSide.js";
import donationBanner from "../../Assets/donation-images/donation-banner.png";

function LeftSide({ donationTitles, customClasses, bold }) {
  return (
    <Container className="leftside">
      <ul className={`leftside-title ${customClasses}`}>
        {donationTitles.map((donationTitle, index) => (
          <li
            key={index}
            className={`leftside-item ${bold === index ? "bold" : "fw300"}`}
          >
            {donationTitle}
          </li>
        ))}
      </ul>
      <img src={donationBanner} alt="Banner Donation" className="img-banner" />
    </Container>
  );
}

export default LeftSide;
