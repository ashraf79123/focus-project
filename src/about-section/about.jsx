import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef();

  useEffect(() => {
    const el = aboutRef.current;

    // Animate the image
    gsap.fromTo(
      el.querySelector(".hero-image"),
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el.querySelector(".hero-image"),
          start: "top 90%",
        },
      }
    );

    // Animate the image cards
    gsap.fromTo(
      ".about-photo",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".photo-section",
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section ref={aboutRef} className="bg-white min-h-screen py-20 px-4">
      {/* Hero Image */}
      <div className="flex justify-center mb-8">
        <img
          src="/images/Know_Fokus_Know_Us_icon_2.webp"
          alt="Know Fokus, Know Us"
          className="hero-image w-full max-w-4xl object-contain"
        />
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-center text-gray-800 mb-16 px-4">
        <p className="text-lg leading-relaxed">
          We’re more than just a brand—we’re a vibrant community driven by passion,
          purpose, and a shared vision for a better lifestyle.
          <br />
          Brought to you by your favorite content creators, Abhishek Malhan and
          Nischay Malhan, along with digital age entrepreneurs, Mayank Mishra,
          Ankit Madaan, and Aman Madaan — we fokus on creating drinks that not
          only refresh but also empower.
          <br />
          <br />
          Our mission is simple: to deliver clean, functional hydration that fits
          seamlessly into your daily routine. Whether you’re chasing fitness goals,
          building your dream, or just living life on your own terms, we’re here to
          fuel every step of your journey. <strong>#GetFokus</strong>
        </p>
      </div>

      {/* 50% Rounded Image Section */}
      <div className="photo-section grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {["../../public/images/image_7.webp", "../../public/images/image_6.webp", "../../public/images/image_5.webp"].map((img, i) => (
          <div
            key={i}
            className="about-photo flex justify-center items-center p-4"
          >
            <img
              src={`/images/${img}`}
              alt={`Founder ${i + 1}`}
              className="w-60 h-60 object-cover rounded-[50%] border-4 border-yellow-300 shadow-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
