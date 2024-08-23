import "../../App.css";
// import HeroSection from './sections/HeroSection.js';
// import MeetTheTeam from './sections/MeetTheTeam.js';
// import "./MeetTheTeam.css";
// import "./HeroSection.css";

import NeonLines from "../../components/NeonLines.js";
import GenericPage from "../../components/GenericPage.js";
import MiniHeader from "../../components/MiniHeader.js";

import React from "react";
import SectionImage from "../../components/SectionImage.js";
import {
  sustainabilityCoverImage,
  sustainabilityPracticesImage,
} from "../../utils/images.js";

const Sustainability = () => {
  return (
    <>
      <SectionImage imgSource={sustainabilityCoverImage} pos={-15} />
      {/* Mission Statement Section */}
      <GenericPage
        section="sustainability practices"
        position="right"
        header="Sustainability Practices"
        body="The integral sustainability at Hermes Racing is monumental as it showcases how we long engaging and volunteering in our community. Through the various events planned our social sustainability to help each and every member of our community is the core basis on what the basic team principles and values are built on."
        img={sustainabilityPracticesImage}
        sectionNumber="1"
      />
    </>
  );
};

export default Sustainability;
