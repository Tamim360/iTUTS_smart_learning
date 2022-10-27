import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import CourseCategory from "./CourseCategory/CourseCategory";

const Courses = () => {
  return (
    <div className="flex">
      <CourseCategory />
      <Outlet />
    </div>
  );
};

export default Courses;
