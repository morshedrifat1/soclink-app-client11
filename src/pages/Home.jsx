import React from "react";
import banner from '../assets/hero-banner.jpg'
import { Link } from "react-router";
const Home = () => {
  return (
    <div>
      <div
        class="bg-cover bg-center h-screen relative px-5 bg-[url('hero-banner-mobile.png')] sm:bg-[url('hero-banner.jpg')]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#269bee90] to-[#269bee10] "></div>
        <div className="z-10 relative grid justify-center top-[7%] sm:top-[10%] lg:top-[15%] gap-3 sm:gap-4 mx-auto lg:w-190">
            <h1 className="text-secondary text-2xl sm:text-5xl xl:text-6xl font-bold leading-8 sm:leading-14 xl:leading-17 text-center">Empower Your Community One Event at a Time</h1>
            <p className="text-center text-navlink text-base font-medium sm:text-xl lg:w-170 mx-auto leading-6 sm:leading-8 ">Join, create, and track impactful local social service events — together, we make a real difference in our communities.

</p>
            <div className="flex gap-4 mx-auto">
                <Link className="bg-secondary text-white px-4 sm:px-7 py-2 sm:py-2.5 text-base font-medium rounded-lg">Explore Events</Link>
                <Link className="bg-white text-secondary border border-secondary px-4 sm:px-7 py-2 sm:py-2.5 text-base font-medium rounded-lg">Create Event</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
