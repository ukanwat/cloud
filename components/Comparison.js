import Link from 'next/link'
import React from 'react';
import { Button, Popover, Tooltip } from '@geist-ui/react'
import { Check, QuestionCircle } from '@geist-ui/react-icons';

const ComparisonList = ({ features, info, comparisonFeatures }) => {

    return (
        <div className='flex'>
            <div className='block lg:hidden'>
                <FeatureList topButton={info.topButton} features={comparisonFeatures} />
            </div>

            <div className='flex flex-col divide-y-p bg-white'>


                <div className='w-full lg:w-64 font-bold flex flex-col justify-center items-center text-2xl'>
                    {info.type}

                    <div className='text-gray-600 font-semibold text-base pb-1
                '>
                        {info.pricing}
                    </div>

                    {info.topButton == true && <div className='py-4'> <Button auto type={info.secondary == true ? '' : "success"}>{info.action}</Button> </div>}

                </div>





                {features.map((feature) => (
                    <div key={feature} className={'w-full lg:w-64 h-12 flex justify-center items-center'}>

                        <div className={
                            feature == null ? ' bg-gray-50 h-full w-full flex justify-center items-center ' : ''}>
                            {

                                feature == null ? '' :
                                    typeof feature == 'string' ? feature : feature == true ?

                                        <Check size={26} color="#08f" /> : '_'
                            }</div></div>
                ))}

                <div className='w-full lg:w-64 h-24 font-bold flex justify-center items-center'>
                    <Button auto type={info.secondary == true ? '' : "success"}>{info.action}</Button>

                </div>

            </div>



        </div>
    );
}
const FeatureList = ({ features, topButton }) => {

    return (
        <div className='flex flex-col divide-y-p bg-white'>

            <div className={'w-full lg:w-64  font-bold flex justify-center items-center text-2xl'}>
                <div className={topButton == true ? ' h-33' : 'h-15'}>

                </div>

            </div>


            {features.map((feature) => (
                <div key={feature} className={'w-full lg:w-64 h-12 flex justify-start pl-6 items-center space-x-2' + ' ' + (feature.section == true ? 'bg-gray-50' : '')}>

                    {feature.icon}
                    <div className=' '>
                        {feature.name}</div>
                    {feature.info &&
                        <Tooltip text={feature.info}  >  <QuestionCircle size={16} /></Tooltip>}
                </div>
            ))}

            <div className='w-full lg:w-64  h-24 font-bold flex justify-center items-center'>


            </div>





        </div>
    );
}


export { ComparisonList, FeatureList }
