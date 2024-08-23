import "../../App.css";
import "./Sponsors.css";
// import HeroSection from './sections/HeroSection.js';
// import MeetTheTeam from './sections/MeetTheTeam.js';
// import "./MeetTheTeam.css";
// import "./HeroSection.css";

// import NeonLines from "../../components/NeonLines.js";
import GenericPage from "../../components/GenericPage.js";
import MiniHeader from "../../components/MiniHeader.js";

import React from "react";
// import TestimonialCards from "../../components/TestimonialCards.js";
import SectionImage from "../../components/SectionImage.js";
import { sponsorsCoverImage, whySponsorImage } from "../../utils/images.js";
import { sponsorshipDocument } from "../../utils/assets.js";

import Testimonials from "../../components/TestimonialCards.js";
import NeonLines from "../../components/NeonLines.js";
import SponsorCarousel from "../../components/SponsorCarousel.js";

const testimonials = [
  {
    quote:
      "We were appalled by the project by Hermes Racing. We were more than excited to take Roberto’s design and transform it, into the uniforms where they were able to win in at the national finals!",
    author: "Threads and Needles",
  },
  {
    quote:
      "At the UAE National Finals in 2023, we supplied Hermes Racing with our Donut Tower that caught the eye of many students and parents! We were thrilled to see the passion and determination Hermes Racing brings to the floor, and were more excited to see our logo on the back of their uniforms!",
    author: "Here-o Donuts",
  },
  {
    quote:
      "I remember the calls with Hermes Racing in the first few days of opening our partnership. At the world finals, it was exciting to see the determination and passion Hermes had for winning and perfection while advocating their commitments to sustainability! Well done!",
    author: "StoreyGroup",
  },
];

const Sponsors = () => {
  return (
    <>
      <SectionImage imgSource={sponsorsCoverImage} pos={-1} />
      {/* Why Sponsor Section */}
      <GenericPage
        section="why sponsor"
        position="right"
        header="Why Sponsor?"
        body="Why partner with Hermes Racing, an F1 in Schools World Finalists team composed of 6 High School Students from the Raha International School? F1 in Schools World Finals will be broadcast to thousands of people from countries all around the globe, gaining exposure for the brand! The methodology in which we promote our sponsors will showcase your brand’s support to future pioneers of the STEM industry."
        img={whySponsorImage}
      />
      <GenericPage
        section="sponsorship document"
        position="left"
        header="Sponsorship Document"
        body="Discover the benefits of partnering with Hermes Racing! Our document outlines all the benefits your company will recieve to millions worlwide. If you're interested, in supporting this once in a lifetime cause feel free to contact us. Hope to hear from you soon!"
        pdf={sponsorshipDocument}
        sectionNumber="2"
      />
      <section className="sponsor-message-section common-padding">
        <MiniHeader number="3" section="Sponsor Message" />
        <h2 className="text-header">SPONSOR MESSAGE</h2>
        {/* <div className="message-cards-container">
          <Testimonials />
        </div> */}
        <Testimonials testimonials={testimonials} />
      </section>
      <NeonLines position="right" />

      {/* Sponsor Carousel*/}
      <section className="sponsor-details-section common-padding">
        <MiniHeader number="4" section="Sponsor Details" />
        <h2 className="text-header">SPONSOR DETAILS</h2>
        {/* <div className="message-cards-container">
          <Testimonials />
        </div> */}
        <SponsorCarousel />
      </section>
      <NeonLines />
    </>
  );
};

export default Sponsors;
