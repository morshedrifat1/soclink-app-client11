import { CircleAlert } from "lucide-react";
import React from "react";

const NoDataFound = ({title,description}) => {
  return (
    <div className="h-screen flex flex-col max-w-[1420px] mx-auto justify-center items-center px-5">
        <div className="py-15 w-75 sm:w-150 bg-boxbg mx-auto px-5 text-center border border-mainborder rounded-lg flex flex-col justify-center items-center">
      <div className="bg-boxbg shadow-lg shadow-subHeading w-17 h-17 flex items-center rounded-full  mx-auto">
        <CircleAlert
          size={40}
          className="mx-auto text-yellow-500"
        ></CircleAlert>
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-heading mt-5">
        {title}
      </h1>
      <p className="text-base sm:text-lg text-base-content mt-3">
        {description}
      </p>
    </div>
    </div>
  );
};

export default NoDataFound;
