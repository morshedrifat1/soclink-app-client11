import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="bg-boxbg">
      <footer className="footer sm:footer-horizontal  text-base-content pt-10 px-5 max-w-[1420px] mx-auto rounded-lg">
        <aside className="w-80 md:w-90">
          <img className="w-40" src={logo} alt="" />
          <p className="leading-7 mt-2 text-base font-normal">
            Soclink helps communities create, join, and manage social events —
            making it easy to connect and make an impact.
          </p>
        </aside>
        <nav className="space-y-.5">
          <h6 className="text-lg font-bold text-heading">Gardening</h6>
          <Link className="link link-hover text-base">Resources</Link>
          <Link className="link link-hover text-base">About Us</Link>
          <Link className="link link-hover text-base">Contact</Link>
          <Link className="link link-hover text-base">Shop</Link>
        </nav>
        <nav className="space-y-.5">
          <h6 className="text-lg font-bold text-heading">Terms</h6>
          <Link className="link link-hover text-base">Terms of Service</Link>
          <Link className="link link-hover text-base">Privacy policy</Link>
          <Link className="link link-hover text-base">Cookie policy</Link>
        </nav>
        <nav>
          <h6 className="text-lg font-bold text-heading">Contact Us</h6>
          <div className="space-y-3">
            <p className="flex items-center gap-2 text-base ">
              <IoIosMail size={22} />
              hello@plantly.com
            </p>
            <p className="flex items-center gap-2 text-base ">
              <MdPhoneInTalk size={22} />
              01234567890
            </p>
            <p className="flex items-center gap-2 text-base ">
              <FiMapPin size={22} />
              Dhaka,Bangladesh
            </p>
          </div>
          <div className="flex gap-3 mt-3">
            <Link to={"https://facebook.com"} target="_blank">
              <FaFacebook size={24} />
            </Link>
            <Link to={"https://x.com/"} target="_blank">
              <BsTwitterX size={24} />
            </Link>
            <Link to={"https://www.github.com/"} target="_blank">
              <FaGithub size={24} />
            </Link>
          </div>
        </nav>
      </footer>
      <div className="bg-boxbg">
        <div className=" text-base-content pt-10 px-5 pb-5 max-w-[1420px] mx-auto rounded-lg">
          <hr className="text-base-content" />
          <p className="text-center pt-5">
            Copyright © {new Date().getFullYear()} - All right reserved by
            Plantly Ltd
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
