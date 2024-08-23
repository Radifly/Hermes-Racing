import React, { useEffect, useRef } from "react";
import Flickity from "flickity";
import "./css/SponsorCarousel.css";
import "flickity/css/flickity.css";

// Define the slides data
const slides = [
  {
    image: "./assets/images/Sponsors/here-o-donuts.png", // replace with actual image path
    header: "Here-o donuts",
    body: "HERE-O Donuts, a cherished haven for donut enthusiasts across the UAE, boasts bustling branches in Abu Dhabi and Dubai, along with the delightful surprise of occasional pop-up shops at events throughout the region. With a commitment to crafting iconic donut perfection, they have garnered widespread acclaim for its handcrafted treats, each lovingly made with a touch of heroism. Every delectable creation is a testament to precision and passion, ensuring that every bite is a memorable experience for customers who seek nothing less than the finest in donut delights.",
  },
  {
    image: "./assets/images/Sponsors/threads-and-needles.png", // replace with actual image path
    header: "Threads and Needles",
    body: "HERE-O Donuts, a cherished haven for donut enthusiasts across the UAE, boasts bustling branches in Abu Dhabi and Dubai, along with the delightful surprise of occasional pop-up shops at events throughout the region. With a commitment to crafting iconic donut perfection, they have garnered widespread acclaim for its handcrafted treats, each lovingly made with a touch of heroism. Every delectable creation is a testament to precision and passion, ensuring that every bite is a memorable experience for customers who seek nothing less than the finest in donut delights.",
  },
  {
    image: "./assets/images/Sponsors/storey-group.png", // replace with actual image path
    header: "StoreyGroup",
    body: "HERE-O Donuts, a cherished haven for donut enthusiasts across the UAE, boasts bustling branches in Abu Dhabi and Dubai, along with the delightful surprise of occasional pop-up shops at events throughout the region. With a commitment to crafting iconic donut perfection, they have garnered widespread acclaim for its handcrafted treats, each lovingly made with a touch of heroism. Every delectable creation is a testament to precision and passion, ensuring that every bite is a memorable experience for customers who seek nothing less than the finest in donut delights.",
  },
];

const SponsorsCarousel = () => {
  const flickityRef = useRef(null);

  useEffect(() => {
    const options = {
      accessibility: true,
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
      autoPlay: 5000,
    };

    flickityRef.current = new Flickity("[data-carousel]", options);

    return () => {
      if (flickityRef.current) flickityRef.current.destroy();
    };
  }, []);

  return (
    <div className="sponsors-slider" data-carousel>
      {slides.map((slide, index) => (
        <div className="carousel-cell" key={index}>
          <div className="carousel-content">
            <img
              src={slide.image}
              alt={slide.header}
              className="carousel-image"
            />
            <div className="text-group">
              <h2 className="subtitle">{slide.header}</h2>
              <p className="body-text">{slide.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SponsorsCarousel;
