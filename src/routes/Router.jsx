import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import CreateEvent from "../pages/CreateEvent";
import JoinEvent from "../pages/JoinEvent";
import ManageEvents from "../pages/ManageEvents";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UpcomingEvents from "../pages/UpcomingEvents ";
import PrivateRoute from "./PrivateRoute";
import LoadingSpiner from "../components/LoadingSpiner";
import EventDetails from "../pages/EventDetails";
import EditEvent from "../pages/EditEvent";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        hydrateFallbackElement: <LoadingSpiner></LoadingSpiner>,
        loader: () => fetch("/galleryImg.json"),
      },
      {
        path: "create-event",
        element: (
          <PrivateRoute>
            <CreateEvent></CreateEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "join-event",
        element: (
          <PrivateRoute>
            <JoinEvent></JoinEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-events",
        element: (
          <PrivateRoute>
            <ManageEvents></ManageEvents>
          </PrivateRoute>
        ),
      },
      { path: "auth/login", Component: Login },
      { path: "auth/register", Component: Register },
      {
        path: "upcoming-events",
        Component: UpcomingEvents,
      },
      {
        path: "event-details/:id",
        element: (
          <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "edit-event/:id",
        element: (
          <PrivateRoute>
            <EditEvent></EditEvent>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
