import React from 'react';
import {FaAngleLeft} from "react-icons/fa";
import { Link, Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';

const CourseDetails = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {author, video, category, courseName} = location.state
    // console.log(data);
    return (
        <div className="w-full">
            <button className="mx-auto flex items-center font-bold my-3" onClick={() => navigate('/courses')}><FaAngleLeft/> Go Back</button>
            <div className={`max-w-2xl mx-auto p-2 shadow-md`}>
                <img src={video.thumbnail} alt="" />
                <h2 className="text-3xl font-bold my-4 text-center">{courseName}</h2>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-2">
                        <img className="w-8 h-8 rounded-full" src={author.profile_pic} alt={author.name} />
                        <p className="text-sm font-bold text-slate-700">{author.name}</p>
                    </div>
                    <p className="text-sm font-bold text-slate-700">Category: {category}</p>
                    <p className="text-sm font-bold text-slate-700">Videos: {video.quantity}</p>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;