import React from "react";
import "../../App.css";
import "./Team.css";

import NeonLines from "../../components/NeonLines.js";
import GenericPage from "../../components/GenericPage.js";
import MiniHeader from "../../components/MiniHeader.js";
import SectionImage from "../../components/SectionImage.js";
import {
  aaron,
  raphael,
  riccardo,
  roberto,
  symhon,
  teamCoverImage,
  vansh,
} from "../../utils/images.js";

const Team = () => {
  return (
    <>
      <SectionImage imgSource={teamCoverImage} pos={-8} />
      <section className="team-statement-section">
        <MiniHeader section="Team Statement" number="1" />
        <div className="text-container">
          <h2 className="text-header">TEAM STATEMENT</h2>
          <p className="text">
            Hermes Racing, proud F1 in Schools World Finalists from the UAE,
            with a passion for engineering excellence showcasing our nation's
            talent on the world stage.
          </p>
        </div>
      </section>
      <NeonLines />

      <section id="meet-the-tea" className="meet-the-team-section">
        <MiniHeader section="Meet The Team" number="2" right />
        <div className="text-container">
          <h2 className="text-header">MEET THE TEAM</h2>
          <p className="text">
            We’re an F1 in Schools Team from Abu Dhabi, United Arab Emirates!
            The Six Individuals that Make Hermes Racing, Hermes Racing! We all
            have different skill sets, perspectives, and personalities that
            create, what we call, ‘The Hermes Touch!’
          </p>
        </div>
        <div className="img-container">
          <div className="team-member">
            <img
              className="image"
              alt="Portrait of Vansh Aggarwal"
              src={vansh}
            />
            <span className="name">Vansh Aggarwal</span>
          </div>
          <div className="team-member">
            <img
              className="image"
              alt="Portrait of Symhon Borres"
              src={symhon}
            />
            <span className="name">Symhon Borres</span>
          </div>
          <div className="team-member">
            <img className="image" alt="Portrait of Aaron Benson" src={aaron} />
            <span className="name">Aaron Benson</span>
          </div>
          <div className="team-member">
            <img
              className="image"
              alt="Portrait of Raphael Brice"
              src={raphael}
            />
            <span className="name">Raphael Brice</span>
          </div>
          <div className="team-member">
            <img
              className="image"
              alt="Portrait of Roberto Sotilli"
              src={roberto}
            />
            <span className="name">Roberto Sotilli</span>
          </div>
          <div className="team-member">
            <img
              className="image"
              alt="Portrait of Riccardo Spada"
              src={riccardo}
            />
            <span className="name">Riccardo Spada</span>
          </div>
        </div>
      </section>
      <NeonLines />
    </>
  );
};

export default Team;
