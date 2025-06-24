import axios from "axios";
import {
  BadgeCheck,
  Calendar,
  CircleAlert,
  CirclePlus,
  Clock3,
  MapPin,
  User,
  Users,
} from "lucide-react";
import { use, useState } from "react";
import { Fade } from "react-awesome-reveal";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link, useLoaderData } from "react-router";
import { Slide, toast } from "react-toastify";
import Modal from "../components/Modal";
import { AuthContext } from "../context/AuthContext";

const EventDetails = () => {
  const data = useLoaderData();
  const [singleEvent, setSingleEvent] = useState(data);
  const { user } = use(AuthContext);
  // event date fomating
  const options = { year: "numeric", month: "long", day: "numeric" };
  // participants progress
  const participante = singleEvent.joinedEvent;
  const maxParticipants = singleEvent.capacity;
  const percentage = (participante / maxParticipants) * 100;
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    button: "",
    buttonUrl: "",
    icon: "",
  });
  // handle join event
  const handleJoinEvent = () => {
    const joinUserDetails = {
      eventId: singleEvent._id,
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      eventDate:singleEvent.eventDate
    };

    // sit fillup aleart
    if (singleEvent.joinedEvent >= singleEvent.capacity) {
      setModalContent({
        title: "Notice",
        message: "Maximum Capacity Reached",
        button: "Another Events",
        buttonUrl: "/upcoming-events",
        icon: (
          <CircleAlert
            size={40}
            className="mx-auto text-yellow-500"
          ></CircleAlert>
        ),
      });
      document.getElementById("my_modal_1").showModal();
      return;
    }
    // join req and joined user data post
    axios
      .post(`${import.meta.env.VITE_API}/join-event-req`, joinUserDetails)
      .then((res) => {
        if (res?.data?.insertedId) {
          setModalContent({
            title: "Success",
            message: "Thanks! You’ve successfully joined.",
            button: "Explore Events",
            buttonUrl: "/upcoming-events",
            icon: (
              <IoMdCheckmarkCircleOutline
                size={40}
                className="mx-auto text-[#01a101]"
              ></IoMdCheckmarkCircleOutline>
            ),
          });
          document.getElementById("my_modal_1").showModal();
          // jouned user count increment
          const newData = {
            ...singleEvent,
            joinedEvent: singleEvent.joinedEvent + 1,
          };
          setSingleEvent(newData);
        }
        if (res?.data?.alertMessage) {
          setModalContent({
            title: "Notice",
            message: res.data.alertMessage,
            button: "Another Events",
            buttonUrl: "/upcoming-events",
            icon: (
              <CircleAlert
                size={40}
                className="mx-auto text-yellow-500"
              ></CircleAlert>
            ),
          });
          document.getElementById("my_modal_1").showModal();
        }
      })
      .catch((error) => {
        toast.error(error.message, {
          autoClose: 3000,
          hideProgressBar: true,
          transition: Slide,
        });
      });
  };
  return (
    <div className="max-w-[1420px] mx-auto px-5">
      {/* event details section */}
      <Fade>
        <div className="max-w-[800px] mx-auto my-10 bg-boxbg shadow p-4 rounded-lg relative">
          <img
            src={singleEvent.thumbnailImageURL}
            className="w-full h-50 sm:h-80 object-cover rounded-lg"
            alt=""
          />
          <h1 className="text-heading text-2xl font-bold mt-3">
            {singleEvent.title}
          </h1>
          <p className="text-base-300 text-base mt-3 leading-7">
            {singleEvent.description}
          </p>

          {/* event details */}
          <div className="grid grid-cols-1 sm:grid-cols-10 mt-4 gap-y-3 sm:gap-3">
            <div className="col-span-6 border border-mainborder rounded-md p-3 bg-base-100">
              <h1 className="flex items-center text-xl gap-2 text-heading font-semibold">
                <Calendar size={20} />
                Event Details
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <div>
                    <h1 className="text-base text-heading font-medium">Date</h1>
                    <p className="text-sm text-base-content">
                      {new Date(singleEvent.eventDate).toLocaleDateString(
                        "en-US",
                        options
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock3 size={18} />
                  <div>
                    <h1 className="text-base text-heading font-medium">Time</h1>
                    <p className="text-sm text-base-content">
                      {singleEvent.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={20} />
                  <div>
                    <h1 className="text-base text-heading font-medium">
                      Location
                    </h1>
                    <p className="text-sm text-base-content">
                      {singleEvent.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={18} />
                  <div>
                    <h1 className="text-base text-heading font-medium">
                      Capacity
                    </h1>
                    <p className="text-sm text-base-content">
                      {singleEvent.capacity} People
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* event organizer */}
            <div className="border border-mainborder rounded-md p-3 bg-base-100 col-span-4">
              <h1 className="flex items-center text-xl gap-2 text-heading font-semibold">
                <User size={22} />
                Event Organizer
              </h1>
              <div className="flex items-center flex-wrap gap-3 mt-5">
                <div className="">
                  <img
                    src={singleEvent.organizerImg}
                    className="w-9 h-9 outline-1 outline-offset-2 rounded-full object-cover"
                    alt=""
                  />
                </div>
                <div className="flex-auto">
                  <h1 className="text-base text-heading font-medium flex gap-1.5 items-center">
                    {singleEvent.organizerName}{" "}
                    <BadgeCheck
                      size={16}
                      className="text-white bg-primary rounded-full"
                    />
                  </h1>
                  <p className="text-sm text-base-content">
                    {singleEvent.organizerEmail}
                  </p>
                </div>
              </div>
              {/* share event */}
              <div className="mt-6">
                <div className="flex gap-4">
                  <Link
                    className="bg-boxbg p-2 shadow shadow-subHeading rounded-lg"
                    to={`https://www.facebook.com/`}
                    target="_blank"
                  >
                    <BsFacebook
                      className="text-[#0866ff]"
                      size={22}
                    ></BsFacebook>
                  </Link>
                  <Link
                    className="bg-boxbg p-2 shadow shadow-subHeading rounded-lg"
                    to={`https://x.com/`}
                    target="_blank"
                  >
                    <BsTwitterX
                      className="text-base-300"
                      size={22}
                    ></BsTwitterX>
                  </Link>
                  <Link
                    className="bg-boxbg p-2 shadow shadow-subHeading rounded-lg"
                    to={`https://www.instagram.com/`}
                    target="_blank"
                  >
                    <BsInstagram
                      className="text-[#c81b90]"
                      size={22}
                    ></BsInstagram>
                  </Link>
                  <Link
                    className="bg-boxbg p-2 shadow shadow-subHeading rounded-lg"
                    to={`https://www.linkedin.com/`}
                    target="_blank"
                  >
                    <BsLinkedin
                      className="text-[#0c61bf]"
                      size={22}
                    ></BsLinkedin>
                  </Link>
                </div>
              </div>
            </div>
            {/* event participants prograss */}
            <div className="col-span-full bg-base-100 border rounded-lg border-mainborder p-3">
              <div className="flex justify-between">
                <h1 className="flex text-base text-heading gap-2">
                  <Users size={18}></Users>Participants
                </h1>
                <p className="text-sm text-base-content">
                  {participante}/{maxParticipants}
                </p>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
                <div
                  className="h-full bg-gradient-to-r from-secondary to-primary"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div>
            <hr className="text-mainborder mt-5" />
            <button
              onClick={handleJoinEvent}
              className="bg-gradient-to-br from-primary to-secondary text-white w-full sm:w-50 py-2 rounded-md mt-4 mx-auto  hover:bg-gradient-to-bl cursor-pointer flex text-center justify-center items-center gap-2"
            >
              join Event <CirclePlus size={18} />
            </button>
          </div>
          <span className="bg-gradient-to-r from-secondary to-primary text-white px-3 py-0.5 rounded-full text-sm absolute top-7 right-7">
            {singleEvent.eventType}
          </span>
        </div>
      </Fade>
      {/* modal popup */}
      <Modal
        title={modalContent.title}
        message={modalContent.message}
        button={modalContent.button}
        buttonUrl={modalContent.buttonUrl}
        icon={modalContent.icon}
      ></Modal>
    </div>
  );
};

export default EventDetails;
