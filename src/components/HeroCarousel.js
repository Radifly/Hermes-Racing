import React, { useEffect, useRef } from "react";
import Flickity from "flickity";
import "./css/HeroCarousel.css";
import "flickity/css/flickity.css";
import { background2, hermesCarBackground } from "../utils/images";

const HeroCarousel = () => {
  const flickityRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      // accessibility: true,
      prevNextButtons: true,
      pageDots: true,
      setGallerySize: false,
      wrapAround: true,
      arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 60,
        y2: 45,
        x3: 15,
      },
    };

    flickityRef.current = new Flickity("[data-carousel]", {
      ...options,
      autoPlay: 5000,
    });

    flickityRef.current.on("select", () => {
      if (flickityRef.current.selectedIndex === 0 && videoRef.current) {
        videoRef.current.play();
      }
    });

    return () => {
      if (flickityRef.current) flickityRef.current.destroy();
    };
  }, []);

  return (
    <div className="hero-slider" data-carousel>
      <div className="carousel-cell">
        <div className="video-container">
          <video
            ref={videoRef}
            src="./assets/videos/homeVideo.mp4"
            autoPlay
            muted
            className="background-video"
          ></video>
        </div>
        <div className="hero-text-group">
          <h2 className="hero-subtitle">Welcome to</h2>
          <h1 className="hero-title">Hermes Racing</h1>
        </div>
      </div>

      <div className="carousel-cell">
        <div className="background-image">
          <img src={hermesCarBackground} alt="" />
        </div>
        <div className="hero-text-group">
          <h2 className="hero-subtitle">Discover</h2>
          <h1 className="hero-title">The Thrill of Racing</h1>
        </div>
      </div>

      <div className="carousel-cell">
        <div className="background-image">
          <img src={background2} alt="" />
        </div>
        <div className="hero-text-group">
          <h2 className="hero-subtitle">Hello</h2>
          <h1 className="hero-title">World Finals</h1>
        </div>
      </div>

      {/* Rest of the slides */}
    </div>
  );
};

export default HeroCarousel;
