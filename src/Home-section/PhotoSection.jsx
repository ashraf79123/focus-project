import React from 'react';
import Flavortitle from './Flavortitle';
import FlavourSlider from './FlavourSlider';

const PhotoSection = () => {
  return (
    <section className="flavor-section w-full px-4 py-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Text Section */}
        <div className="w-full lg:w-[57%] flex-none h-auto lg:h-full">
          <Flavortitle />
        </div>

        {/* Slider Section */}
        <div className="w-full h-auto">
          <FlavourSlider />
        </div>
      </div>
    </section>
  );
};

export default PhotoSection;
