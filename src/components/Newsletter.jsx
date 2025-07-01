import React from "react";
import { Heart, Users, Calendar } from "lucide-react";
import { GoMail } from "react-icons/go";
const Newsletter = () => {
  return (
    <div className="max-w-[1420px] mx-auto px-5 mb-15">
      <div className="bg-boxbg py-16 rounded-lg px-5">
        {/* Icons */}
        <div className="flex justify-center gap-4 mb-6">
          <div className="p-3 bg-blue-100 rounded-full">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <div className="p-3 bg-green-100 rounded-full">
            <Heart className="w-6 h-6 text-green-600" />
          </div>
          <div className="p-3 bg-purple-100 rounded-full">
            <Calendar className="w-6 h-6 text-purple-600" />
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-heading text-center">
            Stay Connected with Your Community
          </h2>
          <p className="text-base sm:text-lg text-base-content max-w-2xl mx-auto leading-relaxed text-center">
            Get weekly updates on local volunteer opportunities, community
            events, and ways to make a difference in your neighborhood. Join
            thousands of changemakers already in our community.
          </p>
        </div>

        {/* newsletter subscribe form */}
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center justify-center max-w-150 gap-4 mx-auto mt-5">
          <div className="relative sm:col-span-2">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="pl-10 border-2 border-mainborder w-full bg-base-100 p-3 rounded-lg text-sm text-base-content focus:outline focus:outline-offset-2 focus:outline-border-outline"
            />
            <GoMail
              size={17}
              className="absolute top-1/2 -translate-y-1/2 left-3 text-base-content "
            />
          </div>
          <div>
            <input
              type="submit"
              value="Subscribe"
              className="w-full py-3 rounded-lg cursor-pointer bg-gradient-to-r from-primary to-secondary text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

// NewsLetter.jsx
