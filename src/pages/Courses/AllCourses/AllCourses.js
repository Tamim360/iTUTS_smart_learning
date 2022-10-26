import React, { useContext } from 'react';
import { useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { CategoryContext } from '../../../contexts/CategoryProvider';


const AllCourses = () => {
    const AllCourses = useLoaderData()
    const [courses, setCourses] = (useState(AllCourses))
    const { specificCourses } = useContext(CategoryContext)
    // setCourses(specificCourses)
    return (
        <div className="p-8 grow">
            <h2>all courses {courses.length}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
                {
                    courses.map(course => {
                        const {id, courseName, category, author, video} = course;
                        return (
                            <div key={id} className="card min-w-72 bg-base-100 shadow-xl p-2 border flex flex-col justify-between">
                            <figure><img className="rounded-md h-32 w-full" src={video.thumbnail} alt="Shoes" /></figure>
                            <div className="card-body p-0 flex flex-col justify-between">
                                <h2 title={courseName} className="card-title my-1 truncate">{courseName}</h2>
                                <div className="flex items-center justify-between mb-auto">
                                    <div className="flex items-center gap-x-2">
                                        <img 
                                        className="w-8 h-8 rounded-full"
                                        src={author.profile_pic} alt="profile pic" />
                                        <p className="text-[12px] font-semibold text-slate-600">{author.name}</p>
                                    </div>
                                    
                                    <p className="font-semibold text-[12px] text-slate-600 text-right">Video: {video.quantity}</p>
                                </div>
                                <div className="card-actions justify-between">
                                <button className="bg-violet-700 hover:bg-violet-600 text-white rounded-lg font-semibold px-3 py-1">See Details</button>
                                <button className="bg-violet-700 hover:bg-violet-600 text-white rounded-lg font-semibold px-3 py-1">Add to Cart</button>
                                </div>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AllCourses;