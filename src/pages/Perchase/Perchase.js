import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Perchase = () => {
    const location = useLocation()
    const { author, video, courseName } = location.state
    // console.log();
    return (
        <div>
            <div className="border border-slate-900/10 rounded shadow-lg p-4 max-w-3xl mx-auto mt-8 flex justify-between gap-6">
                <div className="w-full">
                    <h2 className="text-2xl font-bold my-3 border-b border-violet-600 pb-2">Your selected courses</h2>
                    <div className="flex items-center justify-between gap-2 p-1 rounded shadow-xl">
                        <img className="w-12 h-12" src={video.thumbnail} alt="video thumbnail" />
                        <div>
                            <h2 className="text-xl font-semibold mb-1">{courseName}</h2>
                            <p className="text-sm font-semibold">Author: {author.name}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                <h2 className="text-2xl font-bold my-3 border-b border-violet-600 pb-2">Shipping Details</h2>
                <form action="">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Your full name</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" required />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Your address</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full " required />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full " required />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Email address</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full " required />
                </div>
                <NavLink to="/success">
                <button type="submit" className="btn btn-primary block w-full mt-6">Complete perchase</button>
                </NavLink>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Perchase;