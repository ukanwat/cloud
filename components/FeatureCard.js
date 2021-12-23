import Link from 'next/link'
import React from 'react';

const FeatureCard = ({ title, data, icon }) => {

    return (
        <div className="w-80 h-72 bg-gray-50 rounded-2xl flex flex-col justify-center items-center py-8 px-6  space-y-4">
            <div className='w-40 h-40'>
                {icon}


            </div>

            <div className=' text-2xl font-bold'>{title}</div>

            <div className='text-base text-gray-500 text-center'>{data}</div>



        </div>);
}


export default FeatureCard
