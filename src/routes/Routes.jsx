import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/Home";
import Error from "../components/Error";
import StartLearning from "../components/StartLearning";
import Tutorials from "../components/Tutorials";
import AboutUs from "../components/AboutUs";
import Profile from "../components/Profile";
import Login from "../components/Login";
import Register from "../components/Register";
import LessonDetails from "../components/LessonDetails";
import PrivateRoute from "../components/PrivateRoute";
import ResetPassword from "../components/ResetPassword";
import UpdateProfile from "../components/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/learning",
        element: <StartLearning />,
      },
      {
        path: "/tutorials",
        element: <Tutorials />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/resetPassword",
        element: <ResetPassword />,
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile />,
      },
      {
        path: "/lessonDetails/:lessonNo",
        element: (
          <PrivateRoute>
            <LessonDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("../vocabulary_data.json"),
      },
    ],
  },
]);

export default router;
