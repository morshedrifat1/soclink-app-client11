import React from "react";
import { Link } from "react-router";
import { IoIosArrowRoundBack } from "react-icons/io";
import error from "../assets/error.json";
import Lottie from "lottie-react";
const ErrorPage = () => {
  return (
    <div className="bg-white">
      <div className="flex h-screen flex-col justify-center items-center">
        <div className="max-w-100 sm:max-w-150">
          <Lottie animationData={error} />
        </div>
        <Link
          className="bg-gradient-to-r from-primary to-secondary text-white shadow-none py-1 rounded-lg justify-center mx-auto flex items-center w-[150px]"
          to={"/"}
        >
          <IoIosArrowRoundBack className="mt-1" size={30} />
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
