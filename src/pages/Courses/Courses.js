import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeProvider';
import AllCourses from './AllCourses/AllCourses';
import CourseCategory from './CourseCategory/CourseCategory';

const Courses = () => {
    const { dark } = useContext(ThemeContext)
    return (
        <div className="flex">
            <CourseCategory />
            <Outlet/>
        </div>
    );
};

export default Courses;