import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import EventGallery from "./EventGallery";
import { useLoaderData } from "react-router";

const Home = () => {
    const galleryImg = useLoaderData()
    return (
        <div className="bg-base-100">
            <HeroSection></HeroSection>
            <FeaturesSection></FeaturesSection>
            <EventGallery galleryImg={galleryImg}></EventGallery>
    </div>
    );
};

export default Home;
