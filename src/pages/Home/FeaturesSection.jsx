import { Calendar, Gift, Leaf, Map, Trash, Users } from "lucide-react";
import React from "react";
import { Fade } from "react-awesome-reveal";

const FeaturesSection = () => {
  return (
    <div className="max-w-[1420px] mx-auto py-20 px-5">
      <Fade>
        <div className="space-y-3">
          <p className="text-center text-sm font-semibold border border-secondary rounded-full w-fit mx-auto px-5 bg-subHeading text-heading">
            Platform Features
          </p>

          <h1 className="text-center text-heading text-2xl sm:text-3xl md:text-4xl font-bold">
            Smart features designed for social change.
          </h1>
          <p className="text-center text-base md:text-lg font-normal text-base-content max-w-150 mx-auto">
            Our platform provides all the tools you need to organize, discover,
            and participate in meaningful community events.
          </p>
        </div>
      </Fade>
      <Fade>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
        <div className="shadow p-5 rounded-lg space-y-2.5 bg-base-200 group transition">
          <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg w-fit group-hover:scale-105 transition-transform duration-200">
            <Calendar className="text-white" size={25} />
          </div>
          <h1 className="text-2xl font-semibold text-heading">
            Easy Event Creation
          </h1>
          <p className="text-base font-normal text-base-content">
            Create and manage social development events with our intuitive
            interface. Set dates, locations, and track participation.
          </p>
        </div>
        <div className="shadow p-5 rounded-lg space-y-2.5 bg-base-200 group transition">
          <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg w-fit group-hover:scale-105 transition-transform duration-200">
            <Users className="text-white" size={25} />
          </div>
          <h1 className="text-2xl font-semibold text-heading">
            Community Building
          </h1>
          <p className="text-base font-normal text-base-content">
            Connect with like-minded individuals, build lasting relationships,
            and create positive change together.
          </p>
        </div>
        <div className="shadow p-5 rounded-lg space-y-2.5 bg-base-200 group transition">
          <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg w-fit group-hover:scale-105 transition-transform duration-200">
            <Map className="text-white" size={25} />
          </div>
          <h1 className="text-2xl font-semibold text-heading">
            Local Discovery
          </h1>
          <p className="text-base font-normal text-base-content">
            Find events happening in your area. Filter by type, date, and
            location to discover opportunities that matter to you.
          </p>
        </div>
        <div className="shadow p-5 rounded-lg space-y-2.5 bg-base-200 group transition">
          <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg w-fit group-hover:scale-105 transition-transform duration-200">
            <Leaf className="text-white" size={25} />
          </div>
          <h1 className="text-2xl font-semibold text-heading">
            Environmental Focus
          </h1>
          <p className="text-base font-normal text-base-content">
            Participate in tree plantation, cleanup drives, and environmental
            conservation activities in your community.
          </p>
        </div>
        <div className="shadow p-5 rounded-lg space-y-2.5 bg-base-200 group transition">
          <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg w-fit group-hover:scale-105 transition-transform duration-200">
            <Gift className="text-white" size={25} />
          </div>
          <h1 className="text-2xl font-semibold text-heading">
            Donation Drives
          </h1>
          <p className="text-base font-normal text-base-content">
            Organize and participate in donation campaigns for those in need.
            Make a direct impact on people's lives.
          </p>
        </div>
        <div className="shadow p-5 rounded-lg space-y-2.5 bg-base-200 group transition">
          <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg w-fit group-hover:scale-105 transition-transform duration-200">
            <Trash className="text-white" size={25} />
          </div>
          <h1 className="text-2xl font-semibold text-heading">
            Cleanup Initiatives
          </h1>
          <p className="text-base font-normal text-base-content">
            Join community cleanup drives to keep our neighborhoods, parks, and
            public spaces clean and beautiful.
          </p>
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default FeaturesSection;
