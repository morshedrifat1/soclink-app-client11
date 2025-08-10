import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import EventCards from "../UpcomingEvent/EventCards";
import axios from "axios";
import { Link } from "react-router";
import LoadingSpiner from "../../components/LoadingSpiner";

const LatestEvent = () => {
  const [loader, setLoader] = useState(false);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    setLoader(true);
    axios.get(`${import.meta.env.VITE_API}/upcoming-event`).then((res) => {
      setEvents(res.data.slice(0, 8));
      setLoader(false);
    });
  }, []);
  return (
    <div className="max-w-[1420px] mx-auto pt-5 pb-23 px-5">
      <Fade>
        <div className="space-y-3">
          <p className="text-center text-sm font-semibold border border-secondary rounded-full w-fit mx-auto px-5 bg-subHeading text-heading">
            Events
          </p>
          <h1 className="text-center text-heading text-2xl sm:text-3xl md:text-4xl font-bold">
            Latest Community Events
          </h1>
          <p className="text-center text-base md:text-lg font-normal text-base-content max-w-150 mx-auto">
            Discover the newest activities in your area and be part of
            initiatives that inspire change and bring people together.
          </p>
        </div>
      </Fade>
      <Fade>
        {loader ? <LoadingSpiner></LoadingSpiner> : <EventCards events={events}></EventCards>}
      </Fade>
      <div className="flex items-center justify-center">
        <Link
          to="/upcoming-events"
          className="btn px-12 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded shadow text-center mt-8"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default LatestEvent;
