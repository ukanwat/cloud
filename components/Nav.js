import Link from 'next/link'

import React, { useEffect, useState } from "react";
import { ArrowUpRight } from '@geist-ui/react-icons'
import { Popover, Tooltip, Drawer } from '@geist-ui/react'
const Nav = () => {

    const [shadow, setShadow] = useState(false);
    const [menuState, setMenuState] = React.useState(false)
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setShadow(window.pageYOffset > 200)
            );
        }
    }, []);


    return (
        <header className="fixed top-0 z-50 w-full shadow-none shadow-transparent backdrop-blur-lg bg-white/40">
            <Drawer visible={menuState} onClose={() => setMenuState(false)} placement="top">
                <div className='flex flex-col items-center'><div className='rounded-lg bg-black px-3 py-2 text-white h-10 w-44'>Console (soon)</div>
                    <div className='flex flex-col justify-between  items-start space-y-4 pt-4  w-14 sm:space-x-10 '>
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
                </div>
            </Drawer>
            <nav className={"border-b py-2 h-16 pt-4 xl:px-40 flex justify-around items-center"}>
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

                        <div className='flex space-y-0 justify-center mb-3  font-leagueSpartan  text-5xl items-center'>

                            <div className='font-bold  text-3xl h-5'>NetInc</div>
                        </div>

                    </div>
                </a></Link>


                <div className='hidden md:flex justify-between items-center space-x-4    sm:space-x-10 '>
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

                <div className='rounded-lg bg-black px-3 py-2 text-white h-6 hidden md:block'>Console (soon)</div>
                <button className='md:hidden block' onClick={() => { setMenuState(true) }}>
                    <svg height="32px" id="Layer_1" style={{ enableBackground: 'new 0 0 32 32' }} version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" /></svg>
                </button>
            </nav>
        </header >




    )
}

export default Nav