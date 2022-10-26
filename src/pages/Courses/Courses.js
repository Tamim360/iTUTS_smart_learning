import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeProvider';
import AllCourses from './AllCourses/AllCourses';
import CourseCategory from './CourseCategory/CourseCategory';

const Courses = () => {
    const { dark } = useContext(ThemeContext)
    const categoryHandler = name => {
        console.log(name);
    }
    return (
        <div data-theme={dark ? 'dark' : 'light'} className="flex">
            <CourseCategory categoryHandler={categoryHandler} />
            <Outlet/>
        </div>
    );
};

export default Courses;