import Link from 'next/link'

import React, { useEffect, useState } from "react";
import { ArrowUpRight } from '@geist-ui/react-icons'
import { Tooltip } from '@geist-ui/react'
const Nav = () => {

    const [shadow, setShadow] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setShadow(window.pageYOffset > 200)
            );
        }
    }, []);


    return (
        <header className="fixed top-0 z-50 w-full shadow-none shadow-transparent backdrop-blur-lg bg-white/40">
            <nav className={"border-b py-2 h-16 pt-4 px-40 flex justify-around items-center"}>
                <Link href={'/'}><a className='text-black'>
                    <div className='flex items-center'>
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

                        <div className='flex space-y-0 justify-center mb-3  text-5xl items-center'>

                            <div className='font-bold text-3xl h-5'>NET</div>
                            <div className='font-light text-3xl h-5'>INC</div>
                        </div>

                    </div>
                </a></Link>


                <div className='flex justify-between items-center space-x-10'>
                    <Link href={'/'}><a className='text-gray-600 hover:text-gray-900 hover:underline'>Product</a></Link>
                    <Link href={'/pricing'}><a className='text-gray-600 hover:text-gray-900 hover:underline'>Pricing</a></Link>
                    <Link href={'/about'}><a className='text-gray-600 hover:text-gray-900 hover:underline'>About</a></Link>
                    <Link href={'/contact'}><a className='text-gray-600 hover:text-gray-900 hover:underline'>Contact</a></Link>
                    <Tooltip text={'Appwrite Documentation'} placement="bottom"> <Link href={'https://appwrite.io/docs/sdks'}><a target="_blank" className='text-gray-600 hover:text-gray-900 hover:underline'>  <div className='flex'>

                        Docs
                        <div className='mt-0.5'>
                            <ArrowUpRight size={21} color='#999' />
                        </div>

                    </div>
                    </a></Link></Tooltip>

                </div>

                <div className='rounded-lg bg-black px-3 py-2 text-white'>Console</div>
            </nav>
        </header >




    )
}

export default Nav