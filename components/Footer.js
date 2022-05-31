import Link from 'next/link'
import React from 'react';
import { AlertCircleFill, ArrowUpRight } from '@geist-ui/react-icons'
import Script from 'next/script';
const Footer = () => {

    return (
        <div className="border-t-p pt-5 flex flex-col items-center justify-center space-y-8 bottom-0 h-64  bg-white w-screen mt-0">

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

                    <div className='font-bold text-xl h-5'>Coplane</div>
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

                <Link href={'https://status.Coplane.io'}><a target="_blank" className='pl-2 bg-white rounded-md border-p items-center flex text-gray-600 w-20 mr-20 justify-start hover:text-gray-900 hover:underline'>  <div className='flex'>

                    Status:
                    <div className='mt-2 ml-2 h-2.5 w-2.5 rounded-full bg-primary'>

                    </div>

                </div>
                </a></Link>

            </div>
            <div className='px-2'>   <div className='text-lg px-2 text-center'>
                © 2022 Coplane. All rights reserved.
            </div></div>



        </div>);
}


export default Footer
