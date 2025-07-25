import React from "react";

import Productslider from "./Productslider";
import NutritionSection from "../Home-section/Neutration.jsx";
import TestimonialSection from "../Home-section/TestimonialSection.jsx";
import FooterSection from "../components/FooterSection.jsx";

const Products = () => {
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

export default Products;
