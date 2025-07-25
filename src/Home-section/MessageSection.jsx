import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import SplitText from "gsap/SplitText";
const MessageSection = () => {
  useGSAP(() => {
    const firstmsg = SplitText.create(".first-message", {
      type: "words",
    });
    const Secmsg = SplitText.create(".second-message", {
      type: "words",
    });
    const paragraphsplit = SplitText.create(".para", {
      type: "words,lines",
      linesClass: "paragraph-line",
    });
    gsap.to(firstmsg.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger:{
        trigger:".message-content",
        start:"top center",
        scrub:true,
        end:"30% center",
  
      }
    });
    gsap.to(Secmsg.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger:{
        trigger:".message-content",
        start:"top center",
        scrub:true,
        end:"bottom center",
        
      }
    });
 const revealTl=gsap.timeline({
  delay:1,
  scrollTrigger:{
trigger:".msg-text-scroll",
start:"top 50%",

  }
 })
 revealTl.to(".msg-text-scroll ",{
  duration:1,
 clippath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
  ease:"circ.inOut",
 })

 const paragraphTl=gsap.timeline({
  scrollTrigger:{
    trigger:".message-content p",
    start:"top center",

  }
 })
 paragraphTl.from(paragraphsplit.words,{
  yPercent:300,
  rotate:3,
  ease:"power1.inOut",
  delay:1,
  stagger:0.01,
 })

  });

  return (
    <section className="message-content ">
      <div className="container mx-auto  flex-center py-2 relative">
        <div className="w-full h-full ">
          <div className="msg-wrapper">
            <h1 className="first-message mt-20 mb-20">Stay Active, Stay Hydrated</h1>
            <div style={{
          clipPath:"polygon(0%  0%, 100% 0%, 100% 100%, 0% 100%)"
            }} className="msg-text-scroll">
              <div className="bg-light-brown md:pb-5 pb-3 px-5">
                <h2 className=" text-red-brown">Stay Fokus</h2>
              </div>
            </div>
            <h1 className="second-message">
              Stay Active, Stay Hydrated Stay Fokus
            </h1>
          </div>
          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex-center overflow-hidden">
              <p className="para mb-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                maiores eius totam, odit quis quo? Suscipit ad vitae eum rerum!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
