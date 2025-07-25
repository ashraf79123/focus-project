import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const Productslider = () => {
  const sliderRef = useRef();

  useGSAP(() => {
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      },
    });

    titleTl
      .to(".first-text-split", { xPercent: -30, ease: "power1.inOut" })
      .to(".flavor-text-scroll", { xPercent: -22, ease: "power1.inOut" }, "<")
      .to(".second-text-split", { xPercent: -10, ease: "power1.inOut" }, "<");

    // 👇 Product card scroll animation
    gsap.from(".flavor-card", {
      scrollTrigger: {
        trigger: ".flavors",
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      scale: 0.9,
      stagger: 0.2,
      duration: 1,
      ease: "back.out(1.7)",
    });

    // 👇 Hover effect
    gsap.utils.toArray(".flavor-card").forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0.4,
          ease: "power2.out",
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      });
    });
  }, []);

  return (
    <div ref={sliderRef} className="flavor-section py-10">
      <div className="flavors flex gap-10 items-center m-5 ">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className="flavor-card relative z-30 w-full max-w-3xl h-[500px] rounded-xl overflow-hidden"
          >
            {/* 🟢 Increased SVG background height */}
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt=""
              className="w-full h-full  absolute bottom-0 object-cover"
              style={{ height: "150%" }}
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              {/* 🟢 Enlarged drink image */}
              <img
                src={flavor.Image}
                alt="Drink"
                className="w-72 h-72 object-contain mb-3  "
              />
              <h1 className="text-xl font-semibold mt-4">{flavor.name}</h1>

<div className="mt-4 flex gap-4">
  <button className="flavor-btn bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md">
    Buy Now
  </button>
  <button className="flavor-btn bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md">
    Add to Cart
  </button>
</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productslider;
