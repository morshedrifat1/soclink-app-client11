import { ArrowLeft } from "lucide-react";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router";

const PageTitle = ({title,subTitle}) => {
  return (
    <Fade>
      <div className="max-w-[1420px] mx-auto">
      <div className="bg-[url(/page-title.jpg)] mt-5 h-60 rounded-lg sm:h-70 bg-center bg-cover relative flex justify-center items-center">
        <div className="absolute z-0 inset-0 h-60 sm:h-70 backdrop-blur-[2px] top-0 bg-black/70 rounded-lg"></div>
        <div className="z-1 relative text-center space-y-3 sm:space-y-4 px-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            {title}
          </h1>
          <p className="text-center text-base md:text-lg font-normal text-white max-w-110 mx-auto">
            {subTitle}
          </p>
          <Link
            className="btn w-43 mx-auto border-0 bg-gradient-to-r from-primary to-secondary text-white shadow-none flex items-center"
            to={"/"}
          >
            <ArrowLeft></ArrowLeft>
            Back Home
          </Link>
        </div>
      </div>
    </div>
    </Fade>
  );
};

export default PageTitle;
