import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../layouts/Main";
import Blogs from "../pages/Blogs/Blogs";
import AllCourses from "../pages/Courses/AllCourses/AllCourses";
import CourseDetails from "../pages/Courses/CourseDetails/CourseDetails";
import Courses from "../pages/Courses/Courses";
import FAQ from "../pages/FAQ/FAQ";
import Home from "../pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Navigate to="/home" />            
            },
            {
                path: '/home',
                element: <Home />            
            },
            {
                path: '/courses',
                element: <Courses />,
                children: [
                    {
                        path: '/courses/',
                        element: <AllCourses />,
                        loader: () => fetch(`http://localhost:5000/courses`)
                    },
                    {
                        path: '/courses/:courseName',
                        element: <CourseDetails/>
                    }
                ]
            },
            {
                path: '/faq',
                element: <FAQ/>
            },
            {
                path: '/blogs',
                element: <Blogs />
            }
        ]
    }
])