import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ProductContext } from '../../contexts/ProductProvider';

const Perchase = () => {
    // const location = useLocation()
    // const { author, video, courseName } = location.state
    // console.log();

    const {products} = useContext(ProductContext)

    const handleForm = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <div className="border border-slate-900/10 rounded shadow-lg p-4 max-w-3xl mx-auto mt-8 flex justify-between gap-6">
                <div className="w-full">
                    <h2 className="text-2xl font-bold my-3 border-b border-violet-600 pb-2">Your selected courses</h2>
                    {
                        products.map(product => {
                            const { author, video, courseName } = product
                            return (
                                <div key={product.id} className="flex items-center border mb-3 gap-2 p-1 rounded shadow-lg">
                                    <img className="w-12 h-12" src={video.thumbnail} alt="video thumbnail" />
                                    <div>
                                        <h2 className="text-xl font-semibold mb-1">{courseName}</h2>
                                        <p className="text-sm font-semibold">Author: {author.name}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="w-full">
                <h2 className="text-2xl font-bold my-3 border-b border-violet-600 pb-2">Shipping Details</h2>
                <form action="" onSubmit={(e) => handleForm(e)}>
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
                
                <button type="submit" className="btn btn-primary block w-full mt-6"><NavLink to="/success">Complete perchase</NavLink></button>
                
                </form>
                </div>
            </div>
        </div>
    );
};

export default Perchase;