import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
    const location = useLocation();

    return (
        <div className="flex justify-center items-center h-screen">
            {/* Image Card */}
            <div className="bg-white shadow-md rounded-md p-6 mr-4 flex-none">
                <img src={location?.state?.data?.image} className="w-80 h-auto rounded-md" alt="Product" />
            </div>
            {/* Details Card */}
            <div className="bg-white shadow-md rounded-md p-6 max-w-md flex-auto">
                <h1 className="text-2xl font-bold mb-2">$ {location?.state?.data?.price}</h1>
                <div className="mb-2">
                    <span className="font-semibold">Category:</span> {location?.state?.data?.category}
                </div>
                <div className="mb-2">
                    <span className="font-semibold">Title:</span> {location?.state?.data?.title}
                </div>
                <div className="mb-2 max-w-full whitespace-normal">
                    <span className="font-semibold">Description:</span> {location?.state?.data?.description}
                </div>
            </div>
        </div>
    );
};

export default Details;
