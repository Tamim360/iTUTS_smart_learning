import React, { useContext, useRef } from 'react';
import {FaAngleLeft, FaDownload} from "react-icons/fa";
import { Link, Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ProductContext } from '../../../contexts/ProductProvider';
import Pdf from "react-to-pdf";

const CourseDetails = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { author, video, category, courseName, description } = location.state
    const {handleProducts} = useContext(ProductContext)
    // console.log(description);

    const ref = useRef()

    return (
        <div className="w-full">
            <button className="mx-auto flex items-center font-bold my-3" onClick={() => navigate('/courses')}><FaAngleLeft/> Go Back</button>
            <div ref={ref} className={`max-w-2xl mx-auto mb-8 p-2 shadow-lg border border-slate-900/10 rounded`}>
                <div className="flex items-center justify-between my-3">
                <h2 className="text-xl sm:text-3xl font-bold my-4 text-center">{courseName}</h2>
                <Pdf targetRef={ref} filename={courseName}>
                        {({ toPdf }) => 
                            <button onClick={toPdf} className="flex items-center font-bold gap-x-1"><span className="hidden sm:block">Download pdf</span> <FaDownload title="Download" /></button>
                        }
                </Pdf>
                </div>
                <img className="w-full" src={video.thumbnail} alt="" />
                <div className="flex justify-between items-center my-3">
                    <div className="flex items-center gap-x-2">
                        <img className="w-8 h-8 rounded-full" src={author.profile_pic} alt={author.name} />
                        <p className="text-sm font-bold text-slate-700">{author.name}</p>
                    </div>
                    <p className="text-sm font-bold text-slate-700">Category: {category}</p>
                    <p className="text-sm font-bold text-slate-700">Videos: {video.quantity}</p>
                </div>
                <p className="my-3 font-semibold">{description}</p>
                <button className="btn btn-primary my-4 mx-auto block">
                    <NavLink onClick={() => handleProducts(location.state)} to="/perchase">Perchase this course</NavLink>
                </button>
            </div>
        </div>
    );
};

export default CourseDetails;