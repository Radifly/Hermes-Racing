import "../../App.css";
// import HeroSection from './sections/HeroSection.js';
// import MeetTheTeam from './sections/MeetTheTeam.js';
// import "./MeetTheTeam.css";
// import "./HeroSection.css";

import NeonLines from "../../components/NeonLines.js";
import GenericPage from "../../components/GenericPage.js";
import MiniHeader from "../../components/MiniHeader.js";
import SectionImage from "../../components/SectionImage.js";

import { learningCoverImage } from "../../utils/images.js";
import { hermesPortfolio } from "../../utils/assets.js";
import React from "react";

import "./Learning.css";

const Learning = () => {
  return (
    <>
      <SectionImage imgSource={learningCoverImage} pos={-75} />

      {/* Video Section */}
      <section className="video-section common-padding">
        <MiniHeader section="Video" number="1" />
        <div className="text-container">
          <h2 className="text-header">What is F1 in Schools?</h2>
          <p className="text">
            F1 in Schools is a global STEM competition where students
            collaborate to design, manufacture, and race miniature Formula 1
            cars, promoting skills in science, technology, engineering, and
            mathematics.
          </p>
        </div>
        <div className="youtube-container">
          <iframe
            src="https://www.youtube.com/embed/eUz4z4Wzgvc"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="What is F1 in Schools"
          ></iframe>
        </div>
      </section>
      <NeonLines position="right" />

      <GenericPage
        section="portfolio"
        position="left"
        header="Portfolio"
        body="A range of F1 in-school resources to help future pioneers of the competition. At the UAE national finals, we were able to score the highest for our enterprise portfolio. Take a look at what has brought us the opportunity to represent the UAE! Take a look at the scenes that brought the HR23 to life!"
        pdf={hermesPortfolio}
        sectionNumber="2"
      />
    </>
  );
};

export default Learning;
