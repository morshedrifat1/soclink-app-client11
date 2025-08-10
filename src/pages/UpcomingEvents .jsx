import React, { useEffect, useRef, useState } from "react";
import PageTitle from "../components/PageTitle";
import { Calendar, Filter, MapPin, Search, Users } from "lucide-react";
import axios from "axios";
import { Fade } from "react-awesome-reveal";
import LoadingSpiner from "../components/LoadingSpiner";
import EventCards from "./UpcomingEvent/EventCards";
const UpcomingEvents = () => {
  const API = import.meta.env.VITE_API;
  const [events, setEvents] = useState([]);
  const [searchAPi, setSearchAPi] = useState(`${API}/upcoming-event`);
  const [loader, setLoader] = useState(true);
  const search = useRef();
  // handle for only search field
  const handleSearch = () => {
    if (search) {
      setSearchAPi(`${API}/upcoming-event?search=${search.current.value}`);
    }
  };
  // handle search when fillup search field and event type
  const handleSearchEvent = (e) => {
    e.preventDefault();
    const form = e.target;
    const eventSearch = form.eventSearch.value;
    const eventType = form.eventType.value;
    if (eventSearch && eventType) {
      setSearchAPi(
        `${API}/upcoming-event?search=${eventSearch}&eventType=${eventType}`
      );
    } else if (eventSearch) {
      setSearchAPi(`${API}/upcoming-event?search=${eventSearch}`);
    } else if (eventType) {
      setSearchAPi(`${API}/upcoming-event?eventType=${eventType}`);
    } else {
      setSearchAPi(`${API}/upcoming-event`);
    }
  };
  useEffect(() => {
    axios.get(searchAPi).then((res) => {
      setEvents(res.data);
      setLoader(false)
    });
  }, [searchAPi]);
  return (
    <>
      {loader ? (
          <LoadingSpiner></LoadingSpiner>
      ) : (
        <div className="max-w-[1420px] mx-auto px-5">
          <PageTitle
            title={"Upcoming Events"}
            subTitle={
              "Join upcoming events near you and make a positive impact in your community."
            }
          ></PageTitle>
          {/* filter section start */}
          <Fade>
            <div className="mt-5 shadow p-4 rounded-md bg-boxbg">
              <form onSubmit={handleSearchEvent}>
                <div className="flex flex-wrap sm:flex-nowrap gap-4">
                  <div className="relative w-full sm:flex-3/6">
                    <input
                      ref={search}
                      onChange={handleSearch}
                      type="text"
                      name="eventSearch"
                      placeholder="Search events by name or location..."
                      className="pl-10 border-2 border-mainborder w-full bg-base-100 p-2.5 rounded-lg text-sm text-base-content focus:outline focus:outline-offset-2 focus:outline-border-outline"
                    />
                    <Search
                      size={17}
                      className="absolute top-1/2 -translate-y-1/2 left-3 text-base-content "
                    />
                  </div>
                  <div className="relative flex-3/6 sm:flex-auto">
                    <select
                      name="eventType"
                      class="pl-8 border-2 border-mainborder w-full bg-base-100 p-2.5 rounded-lg text-sm text-base-content focus:outline focus:outline-offset-2 focus:outline-border-outline"
                    >
                      <option value="">Select a category</option>
                      <option value="cleanup">Cleanup</option>
                      <option value="plantation">Plantation</option>
                      <option value="donation">Donation</option>
                    </select>
                    <Filter
                      size={17}
                      className="absolute top-1/2 -translate-y-1/2 left-3 text-base-content "
                    />
                  </div>
                  <div>
                    <input
                      type="submit"
                      value="Search"
                      className=" py-2.5 px-8 rounded-md cursor-pointer bg-gradient-to-r from-primary to-secondary text-white"
                    />
                  </div>
                </div>
              </form>
            </div>
          </Fade>

          {/* event card */}
          <Fade>
            <EventCards events={events}></EventCards>
          </Fade>
        </div>
      )}
    </>
  );
};

export default UpcomingEvents;
