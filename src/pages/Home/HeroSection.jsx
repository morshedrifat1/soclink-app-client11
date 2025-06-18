import React from "react";
import { Link } from "react-router";
// motion dev
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";
import { Fade, Roll } from "react-awesome-reveal";
const HeroSection = () => {
  const containerRef = useRef(null);

  // motion dev
  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      // Hide the container until the fonts are loaded
      containerRef.current.style.visibility = "visible";

      const { words } = splitText(containerRef.current.querySelector("h1"));

      // Animate the words in the h1
      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });
  }, []);
  return (
    <div class="bg-cover bg-center h-screen relative px-5 bg-[url('/hero-banner-mobile.png')] sm:bg-[url('/hero-banner.jpg')]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#269bee90] to-[#269bee10] "></div>
      <div className="z-1 relative grid justify-center top-[7%] sm:top-[10%] lg:top-[15%] gap-3 sm:gap-4 mx-auto lg:w-190">
        {/* motion dev heading */}
        <div ref={containerRef}>
          <h1 className="text-secondary text-2xl sm:text-5xl xl:text-6xl font-bold leading-8 sm:leading-14 xl:leading-17 text-center h1">
            Empower Your Community One Event at a Time
          </h1>
          <Stylesheet />
        </div>
        {/* motion dev heading */}
        <Fade direction="up">
          <p className="text-center text-[#0a1126] text-base font-medium sm:text-xl lg:w-170 mx-auto leading-6 sm:leading-8 ">
          Join, create, and track impactful local social service events —
          together, we make a real difference in our communities.
        </p>
        <div className="flex gap-4 mx-auto justify-center">
          <Link
            to={"/upcoming-events"}
            className="bg-secondary text-white px-4 sm:px-7 py-2 sm:py-2.5 text-base font-medium rounded-lg"
          >
            Explore Events
          </Link>
          <Link
            to={"/create-event"}
            className="bg-white text-secondary border border-secondary px-4 sm:px-7 py-2 sm:py-2.5 text-base font-medium rounded-lg"
          >
            Create Event
          </Link>
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default HeroSection;

function Stylesheet() {
  return (
    <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                max-width: 420px;
                text-align: left;
                visibility: hidden;
            }

            .split-word {
                will-change: transform, opacity;
            }
        `}</style>
  );
}
