import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import EventGallery from "./EventGallery";
import { useLoaderData } from "react-router";
import Newsletter from "../../components/Newsletter";
import LatestEvent from "./LatestEvent";

const Home = () => {
    const galleryImg = useLoaderData()
    return (
        <div className="bg-base-100">
            <HeroSection></HeroSection>
            <FeaturesSection></FeaturesSection>
            <LatestEvent></LatestEvent>
            <EventGallery galleryImg={galleryImg}></EventGallery>
            <Newsletter></Newsletter>
    </div>
    );
};

export default Home;
