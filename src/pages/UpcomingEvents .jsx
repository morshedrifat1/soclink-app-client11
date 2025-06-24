import React, { useEffect, useRef, useState } from "react";
import PageTitle from "../components/PageTitle";
import { Calendar, Filter, MapPin, Search, Users } from "lucide-react";
import axios from "axios";
import { Link } from "react-router";
import { Fade } from "react-awesome-reveal";
import LoadingSpiner from "../components/LoadingSpiner";
const UpcomingEvents = () => {
  const API = import.meta.env.VITE_API;
  const [UpcomingEvents, setUpcomingEvents] = useState([]);
  const [searchAPi, setSearchAPi] = useState(`${API}/upcoming-event`);
  const [loader, setLoader] = useState(true);
  const search = useRef();
  // event date fomating
  const options = { year: "numeric", month: "long", day: "numeric" };
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
      setUpcomingEvents(res.data);
      setLoader(false)
    });
  }, [searchAPi]);
  console.log(UpcomingEvents);
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
            <div className="grid grid-cols-1 sm:gird-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-10">
              {UpcomingEvents.map((event) => (
                <div className="bg-boxbg shadow rounded-lg relative group overflow-hidden">
                  <img
                    src={event.thumbnailImageURL}
                    alt=""
                    className="rounded-t-lg h-50 w-full object-cover group-hover:scale-[1.03] duration-700 transition-transform"
                  />
                  <div className="p-4 space-y-2.5">
                    <h1 className="text-heading text-xl font-bold">
                      {event.title}
                    </h1>
                    <h3 className="flex gap-1.5 items-center text-base text-base-content">
                      <MapPin size={19}></MapPin>{" "}
                      {event.location.split(" ").slice(0, 3).join(" ")}...
                    </h3>
                    <h3 className="flex gap-1.5 items-center text-base text-base-content">
                      <Calendar size={19}></Calendar>
                      {new Date(event.eventDate).toLocaleDateString(
                        "en-US",
                        options
                      )}{" "}
                      •
                      <span className="bg-mainborder px-2 rounded-full text-sm border border-gray-50/10">
                        {event.time}
                      </span>
                    </h3>
                    <h3 className="flex gap-1.5 items-center text-base text-base-content">
                      <Users size={19}></Users>{event.joinedEvent} people joined
                    </h3>
                    <Link
                      to={`/event-details/${event._id}`}
                      className="bg-gradient-to-br from-primary to-secondary rounded-lg w-full block text-center text-white text-base py-2 mt-3 cursor-pointer"
                    >
                      View Event
                    </Link>
                  </div>
                  <span className="bg-gradient-to-r from-secondary to-primary text-white px-3 py-0.5 rounded-full text-sm absolute top-2.5 left-2.5">
                    {event.eventType}
                  </span>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      )}
    </>
  );
};

export default UpcomingEvents;
