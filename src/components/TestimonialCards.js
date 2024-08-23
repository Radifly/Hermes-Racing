import "./css/TestimonialCards.css";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Testimonials = ({ testimonials }) => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="testimonials-container">
      {testimonials.map((testimonial, index) => (
        <div key={index} id={`testimonial-${index}`} className="testimonial">
          <p className="quote">{testimonial.quote}</p>
          <p className="author">- {testimonial.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
