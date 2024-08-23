import "../../App.css";
import "./Home.css";

import NeonLines from "../../components/NeonLines.js";
import MiniHeader from "../../components/MiniHeader.js";
import ModelViewer from "../../components/ModelViewer.js";
import HeroCarousel from "../../components/HeroCarousel.js";

import React from "react";
import {
  aaron,
  raphael,
  riccardo,
  roberto,
  symhon,
  vansh,
} from "../../utils/images.js";

import { hermesRacingCar } from "../../utils/assets.js";

import { mainVideo } from "../../utils/assets.js";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroCarousel />
      <NeonLines />

      {/* Meet The Team Section */}
      <section className="section meet-team-section">
        <MiniHeader section="Meet The Team" number="1" />
        <div className="team-members-cards">
          <img className="image" alt="Portrait of Vansh Aggarwal" src={vansh} />
          <img className="image" alt="Portrait of Symhon Borres" src={symhon} />
          <img className="image" alt="Portrait of Aaron Benson" src={aaron} />
          <img
            className="image"
            alt="Portrait of Raphael Brice"
            src={raphael}
          />
          <img
            className="image"
            alt="Portrait of Roberto Sotilli"
            src={roberto}
          />
          <img
            className="image"
            alt="Portrait of Riccardo Spada"
            src={riccardo}
          />
        </div>
        <div className="text-container">
          <h2 className="text-header">MEET THE TEAM</h2>
          <p className="text">
            We’re an F1 in Schools Team From Raha International School Abu
            Dhabi, UAE! We are participating in the 2024 F1 in Schools World
            Finals later this year!
          </p>
          {/* <Link className="link-instance" nextButton="image.svg" /> */}
        </div>
      </section>
      <NeonLines />

      {/* ---------- Section */}

      <section className="car-model-section ">
        <MiniHeader section="Team Car" number="3" right />
        <ModelViewer modelUrl={hermesRacingCar} />
        <div className="text-container">
          <h2 className="text-header">Team Car</h2>
          <p className="text">
            Our car, Talaria, remains under wraps for now, but stay tuned for
            its grand reveal prior ott the World Finals! ⁤⁤Designed by our very
            own talented and skilled engineer, Raphaël Brice, Talaria is built
            to meet the toughest regulations and push the boundaries beyond the
            limits of this competition. ⁤⁤We're driven to bring home a victory
            for the UAE. ⁤⁤Exciting times are ahead!
          </p>
        </div>
      </section>
      <NeonLines position="right" />

      <section className="car-model-section ">
        <MiniHeader section="Team Car" number="3" left />
        <div className="text-container">
          <h2 className="text-header">Team Car</h2>
          <p className="text">
            Our car, Talaria, remains under wraps for now, but stay tuned for
            its grand reveal prior ott the World Finals! ⁤⁤Designed by our very
            own talented and skilled engineer, Raphaël Brice, Talaria is built
            to meet the toughest regulations and push the boundaries beyond the
            limits of this competition. ⁤⁤We're driven to bring home a victory
            for the UAE. ⁤⁤Exciting times are ahead!
          </p>
        </div>
        {/* <video src={mainVideo}></video> */}
      </section>
      <NeonLines position="left" />

      <section className="social-media">
        <br />
        <br />
        <br />
        <br />
        <MiniHeader section="Stay Connected" number="4" left />
        <div className="text-container">
          <h2 className="text-header">Stay Connected</h2>
        </div>
        <a
          href="https://www.youtube.com/shorts/4sT-HABgmA8"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./assets/images/Frame 23.png" alt="" draggable={false} />
        </a>
      </section>
      <NeonLines />
    </>
  );
};

export default Home;
