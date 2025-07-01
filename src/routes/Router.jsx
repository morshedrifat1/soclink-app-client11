import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import CreateEvent from "../pages/CreateEvent";
import JoinedEvent from "../pages/JoinedEvent";
import ManageEvents from "../pages/ManageEvents";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UpcomingEvents from "../pages/UpcomingEvents ";
import PrivateRoute from "./PrivateRoute";
import LoadingSpiner from "../components/LoadingSpiner";
import EventDetails from "../pages/EventDetails";
import EditEvent from "../pages/EditEvent";
import Error404 from "../pages/Error404";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error404></Error404>,
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
            <JoinedEvent></JoinedEvent>
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
