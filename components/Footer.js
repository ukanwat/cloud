import Link from 'next/link'
import React from 'react';
import { ArrowUpRight } from '@geist-ui/react-icons'
const Footer = () => {

    return (
        <div className=" pt-5 flex flex-col items-center justify-center space-y-8 bottom-0 h-96 bg-gray-50 w-screen mt-0">
            <div className='flex'>
                <div className='h-12 w-12'>

                    <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">

                        <g>
                            <ellipse ry="18" rx="18" id="svg_1" cy="24" cx="24" stroke="#000" fill="#05b" strokeWidth="0">

                            </ellipse>
                            <ellipse ry="15" rx="15" id="svg_2" cy="24" cx="24" stroke="#000" fill="#08f" strokeWidth="0" />
                            <ellipse ry="11.5" rx="11.5" id="svg_3" cy="24" cx="24" stroke="#000" fill="#0bf" strokeWidth="0" />
                            <ellipse ry="8" rx="8" id="svg_3" cy="24" cx="24" stroke="#000" fill="#fff" strokeWidth="0" />
                        </g>
                    </svg>
                </div>

                <div className='flex flex-col space-y-0 font-extrabold text-3xl items-center'>

                    <div className='font-bold text-xl h-5'>NetInc</div>
                    <div className='font-light text-lg h-5'>CLOUD</div>
                </div>

            </div>



            <div className='flex flex-col sm:flex-row items-center space-x-0 space-y-2 sm:space-x-8 sm:space-y-0
            '>

                <Link href={'/legal/privacy'}><a className='text-gray-600 w-40 hover:text-gray-900  flex justify-start hover:underline'>  <div className='flex'>

                    Privacy Policy
                    <div className='mt-0.5'>
                        <ArrowUpRight size={21} color='#999' />
                    </div>

                </div>
                </a></Link>
                <Link href={'/legal/terms'}><a className='text-gray-600 w-40 hover:text-gray-900 flex justify-start hover:underline'>  <div className='flex'>
                    Terms of Service
                    <div className='mt-0.5'>
                        <ArrowUpRight size={21} color='#999' />
                    </div>

                </div>
                </a></Link>
                <Link href={'/contact'}><a target="_blank" className='text-gray-600 w-40 flex justify-start hover:text-gray-900 hover:underline'>  <div className='flex'>

                    Contact Us
                    <div className='mt-0.5'>
                        <ArrowUpRight size={21} color='#999' />
                    </div>

                </div>
                </a></Link>
            </div>
            <div className='px-2'>   <div className='text-lg px-2 text-center'>
                © 2022 Netinc. All rights reserved.
            </div></div>
            <div className='px-2'>
                <div className='w-full sm:w-150 text-sm text-gray-500 text-center  pb-5'>
                    * Appwrite is a trademark of APPWRITE CODE LTD. Any rights therein are reserved to APPWRITE CODE LTD. Any use by Netinc is for referential purposes only and does not indicate any sponsorship, endorsement or affiliation between Appwrite and Netinc.
                </div>
            </div>




        </div>);
}


export default Footer
