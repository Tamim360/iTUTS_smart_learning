import React from 'react';
import AllCourses from './AllCourses/AllCourses';
import CourseCategory from './CourseCategory/CourseCategory';

const Courses = () => {
    return (
        <div>
            <CourseCategory />
            <AllCourses/>
        </div>
    );
};

export default Courses;