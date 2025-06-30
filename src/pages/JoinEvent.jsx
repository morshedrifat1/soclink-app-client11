import React, { use, useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { Eye, X } from "lucide-react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import LoadingSpiner from "../components/LoadingSpiner";
import NoDataFound from "../components/NoDataFound";

const JoinEvent = () => {
  const { user, token } = use(AuthContext);
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel Event!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_API}/event-cencel/${id}`, {
            headers: {
              authorization: `Bearer ${token}`,
              email: user.email,
            },
          })
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Cancled!",
                text: "Your Event has been Calcled.",
                icon: "success",
              });
            }
            setEventData(eventData.filter((data) => data._id !== id));
          });
      }
    });
  };
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/join-event?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${token}`,
          email: user.email
        }
      })
      .then((res) => {
        setEventData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [user.email,token]);
  return (
    <>
      {loading ? (
        <LoadingSpiner></LoadingSpiner>
      ) : eventData.length === 0 ? (
        <NoDataFound
          title={"No Data Found"}
          description={"Looks like you haven’t joined any events."}
        ></NoDataFound>
      ) : (
        <div className="max-w-[1420px] mx-auto px-5">
          <PageTitle
            title={"Join Events"}
            subTitle={
              "Here you can view all the events you've joined or sent join requests for."
            }
          ></PageTitle>

          {/* join event table */}
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
                    Cancel Event
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
                      <Link to={`/event-details/${event.eventId}`}>
                        <button className="bg-boxbg shadow-md shadow-subHeading p-2.5 rounded-xl cursor-pointer">
                          <Eye size={20} />
                        </button>
                      </Link>
                    </td>
                    <td className="text-heading whitespace-nowrap">
                      <button
                        onClick={() => handleCancel(event._id)}
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
        </div>
      )}
    </>
  );
};

export default JoinEvent;
