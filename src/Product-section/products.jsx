import React from "react";

import Productslider from "./productslider";
import NutritionSection from "../Home-section/Neutration";
import TestimonialSection from "../Home-section/TestimonialSection";
import FooterSection from "../components/FooterSection";

const products = () => {
  return (
    <div>
      <NutritionSection />
      <div className="h-full">
        <Productslider />
      </div>
      <div className="mt-200">
        <TestimonialSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default products;
