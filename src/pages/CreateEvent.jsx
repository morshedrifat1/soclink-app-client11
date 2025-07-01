import React, { use, useState } from "react";
import PageTitle from "../components/PageTitle";
import {
  Calendar,
  Clock,
  FileText,
  Image,
  ListCheck,
  Mail,
  MapPin,
  Type,
  User,
  Users,
} from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Modal from "../components/Modal";
const CreateEvent = () => {
  const { user, token } = use(AuthContext);
  const [startDate, setStartDate] = useState("");
  const userImg = user.photoURL;
  
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    button: "",
    buttonUrl: "",
    icon: "",
  });
  //   create event
  const handleCreateEvent = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const eventDetails = {
      ...data,
      organizerImg: userImg,
      eventDate: startDate,
    };
    axios
      .post(`${import.meta.env.VITE_API}/create-event`, eventDetails, {
        headers: {
          authorization: `Bearer ${token}`,
          email: user.email,
        },
      })
      .then((res) => {
        if (res.data.insertedId) {
          setModalContent({
            title: "Success",
            message: "🎉 Your event has been successfully added!",
            button: "Add New Event",
            buttonUrl: "/create-event",
            icon: (
              <IoMdCheckmarkCircleOutline
                size={40}
                className="mx-auto text-[#01a101]"
              ></IoMdCheckmarkCircleOutline>
            ),
          });
          document.getElementById("my_modal_1").showModal();
          form.reset();
          setStartDate("")
        }
      });
  };

  return (
    <div className="max-w-[1420px] mx-auto px-5">
      <PageTitle
        title={"Create Events"}
        subTitle={
          "Host a social event and engage your community for positive impact."
        }
      ></PageTitle>

      {/* create event form */}
      <div className="max-w-250 mx-auto bg-boxbg shadow shadow-subHeading p-5 rounded-lg my-10">
        <form onSubmit={handleCreateEvent}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label>Event Title *</label>
              <div className="relative mt-2">
                <input
                  required
                  type="text"
                  name="title"
                  placeholder="e.g. Tree Plantation Drive - Hossainpur"
                  className="pl-10 border-2 border-mainborder w-full bg-base-100 p-2 rounded-lg text-sm text-base-content focus:outline focus:outline-offset-2 focus:outline-border-outline"
                />
                <Type
                  size={17}
                  className="absolute top-1/2 -translate-y-1/2 left-3 text-base-content "
                />
              </div>
            </div>
            <div>
              <label>Event Type *</label>
              <div className="relative mt-2">
                <select
                  name="eventType"
                  required
                  className="pl-10 border-2 border-mainborder w-full bg-base-100 p-2 rounded-lg text-sm text-base-content focus:outline focus:outline-offset-2 focus:outline-border-outline"
                >
                  <option value="">Select event type</option>
                  <option value="Cleanup">Cleanup</option>
                  <option value="Plantation">Plantation</option>
                  <option value="Donation">Donation</option>
                </select>
                <ListCheck
                  size={17}
                  className="absolute top-1/2 -translate-y-1/2 left-3 text-base-content "
                />
              </div>
            </div>
            <div>
              <label>Thumbnail Image URL *</label>
              <div className="relative mt-2">
                <input
                  required
                  type="url"
                  name="thumbnailImageURL"
                  placeholder="https://example.com/image.jpg"
                  className="pl-10 border-2 border-mainborder w-full bg-base-100 p-2 rounded-lg text-sm text-base-content focus:outline focus:outline-offset-2 focus:outline-border-outline"
                />
                <Image
                  size={17}
                  className="absolute top-1/2 -translate-y-1/2 left-3 text-base-content "
                />
              </div>
            </div>
            <div>
              <label>Event Location *</label>
              <div className="relative mt-1.5">
                <input
                  required
                  type="text"
                  name="location"
                  placeholder="e.g. Mirpur 10, Dhaka"
                  className="pl-10 border-2 border-mainborder w-full bg-base-100 p-2 rounded-lg text-sm text-base-content focus:outline focus:outline-offset-2 focus:outline-border-outline"
                />
                <MapPin
                  size={17}
                  className="absolute top-1/2 -translate-y-1/2 left-3 text-base-content "
                />
              </div>
            </div>
            <div>
              <label>Event Date *</label>
              <div className="relative mt-1.5">
                <div className="pl-10 border-2 border-mainborder w-full bg-base-100 p-2 rounded-lg text-sm text-base-content focus:outline focus:outline-offset-2 focus:outline-border-outline">
                  <DatePicker
                    required
                    selected={startDate}
                    onChange={(date) =>
                      setStartDate(date.toISOString().slice(0, 10))
                    }
                    placeholderText="Select event date"
                    className="focus:outline-0"
                  />
                </div>
                <Calendar
                  size={17}
                  className="absolute top-1/2 -translate-y-1/2 left-3 text-base-content "
                />
              </div>
            </div>
            <div>
              <label>Event Total Seats *</label>
              <div className="relative mt-1.5">
                <input
                  required
                  type="number"
                  name="capacity"
                  placeholder="e.g. 1000"
                  className="pl-10 border-2 border-mainborder w-full bg-base-100 p-2 rounded-lg text-sm text-base-content focus:outline focus:outline-offset-2 focus:outline-border-outline"
                />
                <Users
                  size={17}
                  className="absolute top-1/2 -translate-y-1/2 left-3 text-base-content "
                />
              </div>
            </div>
            <div>
              <label>Organizer Email</label>
              <div className="relative mt-1.5">
                <input
                  required
                  type="email"
                  name="organizerEmail"
                  placeholder="Email"
                  value={user?.email}
                  className="pl-10 border-2 border-mainborder w-full bg-base-100 p-2 rounded-lg text-sm text-base-content focus:outline focus:outline-offset-2 focus:outline-border-outline"
                />
                <Mail
                  size={17}
                  className="absolute top-1/2 -translate-y-1/2 left-3 text-base-content "
                />
              </div>
            </div>
            <div>
              <label>Organizer Name</label>
              <div className="relative mt-1.5">
                <input
                  required
                  type="text"
                  name="organizerName"
                  placeholder="name"
                  value={user?.displayName}
                  className="pl-10 border-2 border-mainborder w-full bg-base-100 p-2 rounded-lg text-sm text-base-content focus:outline focus:outline-offset-2 focus:outline-border-outline"
                />
                <User
                  size={17}
                  className="absolute top-1/2 -translate-y-1/2 left-3 text-base-content "
                />
              </div>
            </div>
            <div className="col-span-full">
              <label>Event Description *</label>
              <div className="relative mt-1.5">
                <textarea
                  required
                  type="text"
                  name="description"
                  placeholder="Describe your event, its purpose, and what participants can expect..."
                  className="pl-10 border-2 border-mainborder w-full bg-base-100 p-2 rounded-lg text-sm text-base-content focus:outline focus:outline-offset-2 focus:outline-border-outline h-30"
                />
                <FileText
                  size={17}
                  className="absolute top-5 -translate-y-1/2 left-3 text-base-content "
                />
              </div>
            </div>
            <div className="col-span-full pb-5">
              <input
                type="submit"
                value="Submit"
                className="w-50 mt-2 mx-auto block py-2 rounded-lg cursor-pointer bg-gradient-to-r from-primary to-secondary text-white"
              />
            </div>
          </div>
        </form>
      </div>
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

export default CreateEvent;
