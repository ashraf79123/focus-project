import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import React from "react";

const HeroSection = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({ delay: 1 });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0%  0, 100% 0, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5"
      );

    const heroTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
     
      },
    });

    heroTL.to(".hero-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });

    // 👉 Image floating animation
    gsap.to(".hero-image", {
      y: "+=20",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 2,
    });

    // 👉 Image fade-in and scale on load
    gsap.from(".hero-image", {
      opacity: 0,
      scale: 0.8,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    });
  });

  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        <img
          src="../../public/images/focus-image3.webp"
          alt="heo-image"
          className="hero-image absolute bottom-50 left-[220px] -translate-x-1/2 object-auto scale-10 md:scale-100 rotate-280"
        />
        <img
          src="/images/Focus-image-2.webp"
          alt="hero-image"
          className="hero-image absolute bottom-15 left-[-200px] -translate-x-1/2 object-auto scale-100 md:scale-160 rotate-20"
        />
        <img
          src="/images/Focus-image-2.webp"
          alt="hero-image"
          className="hero-image absolute bottom-15 left-[1000px] -translate-x-1/2 object-auto scale-100 md:scale-100 rotate-20"
        />
        <img
          src="../../public/images/focus-image3.webp"
          alt="heo-image"
          className="hero-image absolute bottom-10 left-[1400px] -translate-x-1/2 object-auto scale-100 md:scale-160 rotate-340"
        />
        
        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title">Freaking Delicious</h1>
          </div>
          <div
            style={{ clipPath: "polygon(50%  0, 50% 0, 50% 100%, 50% 100%)" }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Protein + Caffine</h1>
            </div>
          </div>
          <h2>
            Fokus isn’t just a drink—it’s a lifestyle you live every day. Dive
            into our story and see what makes us different
          </h2>
          <div className="hero-button">
            <p>Chug a split</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
