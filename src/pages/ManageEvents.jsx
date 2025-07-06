import React, { use, useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { Eye, SquarePen, X } from "lucide-react";
import LoadingSpiner from "../components/LoadingSpiner";
import { Fade } from "react-awesome-reveal";
import NoDataFound from "../components/NoDataFound";

const ManageEvents = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, token } = use(AuthContext);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/my-events?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${token}`,
          email: user.email,
        },
      })
      .then((res) => {
        setEventData(res.data);
        setLoading(false);
      });
  }, [token, user.email]);

  // delete event
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete Event!",
    }).then((result) => {
      if (result.isConfirmed) {
        setEventData(eventData.filter((data) => data._id !== id));
        axios
          .delete(`${import.meta.env.VITE_API}/delete-event/${id}`, {
            headers: {
              authorization: `Bearer ${token}`,
              email: user.email,
            },
          })
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Event has been Deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <>
      {loading ? (
        <LoadingSpiner></LoadingSpiner>
      ) : eventData.length === 0 ? (
        <NoDataFound
          title={"No Data Found"}
          description={"Looks like you haven’t Create any events."}
        ></NoDataFound>
      ) : (
        <div className="max-w-[1420px] mx-auto px-5">
          <PageTitle
            title={"Manage Events"}
            subTitle={
              "View, edit, or delete the events you’ve created in one place."
            }
          ></PageTitle>
          {/* event table */}
          <Fade>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-boxbg my-10">
              <table className="table ">
                {/* head */}
                <thead>
                  <tr>
                    <th className="bg-boxbg text-heading text-sm whitespace-nowrap">
                      No
                    </th>
                    <th className="bg-boxbg text-heading text-sm whitespace-nowrap">
                      Title
                    </th>
                    <th className="bg-boxbg text-heading text-sm whitespace-nowrap">
                      Category
                    </th>
                    <th className="bg-boxbg text-heading text-sm whitespace-nowrap">
                      Event Date
                    </th>
                    <th className="bg-boxbg text-heading text-sm whitespace-nowrap">
                      Details
                    </th>
                    <th className="bg-boxbg text-heading text-sm whitespace-nowrap">
                      Edit Event
                    </th>
                    <th className="bg-boxbg text-heading text-sm whitespace-nowrap">
                      Delete Event
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {eventData?.map((event, index) => (
                    <tr key={index}>
                      <th className="text-base-content whitespace-nowrap">
                        {index + 1}
                      </th>
                      <td className="text-base-content whitespace-nowrap">
                        {event.title}
                      </td>
                      <td className="text-base-content whitespace-nowrap">
                        {event.eventType}
                      </td>
                      <td className="text-base-content whitespace-nowrap">
                        {event.eventDate}
                      </td>
                      <td className="text-heading whitespace-nowrap">
                        <Link to={`/event-details/${event._id}`}>
                          <button className="bg-boxbg shadow-md shadow-subHeading p-2.5 rounded-xl cursor-pointer">
                            <Eye size={20} />
                          </button>
                        </Link>
                      </td>
                      <td>
                        <Link to={`/edit-event/${event._id}`}>
                          <button className="bg-boxbg shadow-md shadow-subHeading p-2.5 rounded-xl cursor-pointer">
                            <SquarePen size={20}></SquarePen>
                          </button>
                        </Link>
                      </td>
                      <td className="text-heading whitespace-nowrap">
                        <button
                          onClick={() => handleDelete(event._id)}
                          className="bg-boxbg shadow-md shadow-subHeading p-2.5 rounded-xl cursor-pointer"
                        >
                          <X size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Fade>
        </div>
      )}
    </>
  );
};

export default ManageEvents;
