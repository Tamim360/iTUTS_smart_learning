import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeProvider';
import AllCourses from './AllCourses/AllCourses';
import CourseCategory from './CourseCategory/CourseCategory';

const Courses = () => {
    const { dark} = useContext(ThemeContext)
    return (
        <div data-theme={dark ? 'dark' : 'light'} className="flex">
            <CourseCategory />
            <AllCourses/>
        </div>
    );
};

export default Courses;