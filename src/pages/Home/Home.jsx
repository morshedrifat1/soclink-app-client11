import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import EventGallery from "./EventGallery";

const Home = () => {
    return (
        <div className="bg-base-100">
            <HeroSection></HeroSection>
            <FeaturesSection></FeaturesSection>
            <EventGallery></EventGallery>
    </div>
    );
};

export default Home;
