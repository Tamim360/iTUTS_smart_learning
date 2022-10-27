import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../layouts/Main";
import Blogs from "../pages/Blogs/Blogs";
import AllCourses from "../pages/Courses/AllCourses/AllCourses";
import CourseDetails from "../pages/Courses/CourseDetails/CourseDetails";
import Courses from "../pages/Courses/Courses";
import Error from "../pages/Error/Error";
import FAQ from "../pages/FAQ/FAQ";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Perchase from "../pages/Perchase/Perchase";
import Success from "../pages/Success/Success";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
        children: [
          {
            path: "/courses/",
            element: <AllCourses />,
          },
        ],
      },
      {
        path: "/courses/:courseName",
        element: <CourseDetails />,
      },
      {
        path: "/perchase",
        element: (
          <PrivateRoute>
            <Perchase />
          </PrivateRoute>
        ),
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/success",
        element: <Success />,
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
        path: "*",
        element: <Error />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
