import Link from 'next/link'
import React from 'react';

const FeatureCard = ({ title, data, icon }) => {

    return (
        <div className=" w-full  max-w-md lg:w-80 my-5 sm:mx-5 sm:h-72 bg-white shadow-lg rounded-2xl flex flex-col justify-center items-center py-8 px-4  space-y-4">
            <div className='w-32 mr-6 mb-6  h-32 scale-75'>
                {icon}


            </div>

            <div className=' text-2xl font-bold text-center'>{title}</div>

            <div className='text-base text-gray-500 text-center'>{data}</div>



        </div>);
}


export default FeatureCard
