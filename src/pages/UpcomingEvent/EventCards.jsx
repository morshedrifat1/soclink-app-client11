import { Calendar, MapPin, Users } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const EventCards = ({events}) => {
    // event date fomating
  const options = { year: "numeric", month: "long", day: "numeric" };
  return (
    <div className="grid grid-cols-1 sm:gird-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-10">
      {events.map((event) => (
        <div className="bg-boxbg shadow rounded-lg relative group overflow-hidden">
          <img
            src={event.thumbnailImageURL}
            alt=""
            className="rounded-t-lg h-50 w-full object-cover group-hover:scale-[1.03] duration-700 transition-transform"
          />
          <div className="p-4 space-y-2.5">
            <h1 className="text-heading text-xl font-bold">{event.title}</h1>
            <h3 className="flex gap-1.5 items-center text-base text-base-content">
              <MapPin size={19}></MapPin>{" "}
              {event.location.split(" ").slice(0, 3).join(" ")}...
            </h3>
            <h3 className="flex gap-1.5 items-center text-base text-base-content">
              <Calendar size={19}></Calendar>
              {new Date(event.eventDate).toLocaleDateString("en-US", options)}
            </h3>
            <h3 className="flex gap-1.5 items-center text-base text-base-content">
              <Users size={19}></Users>
              {event.joinedEvent} people joined
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
  );
};

export default EventCards;
