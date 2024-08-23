import "../../App.css";
// import HeroSection from './sections/HeroSection.js';
// import MeetTheTeam from './sections/MeetTheTeam.js';
// import "./MeetTheTeam.css";
// import "./HeroSection.css";

import NeonLines from "../../components/NeonLines.js";
import GenericPage from "../../components/GenericPage.js";
import MiniHeader from "../../components/MiniHeader.js";
import SectionImage from "../../components/SectionImage.js";

import {
  missionStatementImage,
  visionImage,
  visionCoverImage,
} from "../../utils/images.js";

import React from "react";

const Vision = () => {
  return (
    <>
      <SectionImage imgSource={visionCoverImage} pos={-8} />
      {/* Mission Statement Section */}
      <GenericPage
        section="mission statement"
        position="left"
        header="Mission Statement"
        body="Our mission is to strive for podium success while incorporating curiosity, and sustainability, and pushing educational boundaries in terms of innovation and marketing."
        img={missionStatementImage}
        sectionNumber="1"
      />

      {/* Vision Section */}
      <GenericPage
        section="vision"
        position="right"
        header="Vision"
        body="Our vision as a team is to become the inaugural F1 in Schools World Finals Champion from the Gulf Region, fueled by innovation, collaboration, and unwavering passion."
        img={visionImage}
        sectionNumber="2"
      />
    </>
  );
};

export default Vision;
