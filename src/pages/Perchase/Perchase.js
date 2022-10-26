import React from 'react';
import { useLocation } from 'react-router-dom';

const Perchase = () => {
    const location = useLocation()
    const { author, video, courseName } = location.state
    // console.log();
    return (
        <div>
            <div className="border border-slate-900/10 rounded shadow-lg p-4 max-w-3xl mx-auto mt-8">
                
            </div>
        </div>
    );
};

export default Perchase;