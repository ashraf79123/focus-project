import React from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./Home-section/HeroSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import MessageSection from "./Home-section/MessageSection";
import PhotoSection from "./Home-section/PhotoSection";
import Neurtration from "./Home-section/Neutration";
import BenefitSection from "./Home-section/BenefitSection";
import TestimonialSection from "./Home-section/TestimonialSection";
import FooterSection from "./components/FooterSection";
gsap.registerPlugin(ScrollTrigger);
const MainHome = () => {
  return (
    <div>
      <HeroSection />
      <MessageSection />
      <PhotoSection />
      <Neurtration />
      <BenefitSection />
      <TestimonialSection />
      <FooterSection />
    </div>
  );
};

export default MainHome;
