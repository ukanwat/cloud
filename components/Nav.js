import Link from 'next/link'

import React, { useEffect, useState } from "react";
import { ArrowUpRight } from '@geist-ui/react-icons'
import { Popover, Tooltip, Drawer } from '@geist-ui/react'
import { Icon } from './SVG';
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
        <header className="fixed top-0 z-999 w-full shadow-none shadow-transparent backdrop-blur-lg bg-white/60">
            <Drawer visible={menuState} onClose={() => setMenuState(false)} placement="top">
                <div className='flex flex-col items-center'><div className='rounded-lg bg-black px-3 py-2 text-white h-10 w-44'>Console (soon)</div>
                    <div className='flex flex-col justify-between  items-start space-y-4 pt-4  w-14 sm:space-x-10 '>
                        <Link href={'/'}><a className='text-gray-600 hover:text-gray-900 hover:underline'>Product</a></Link>
                        <Link href={'/pricing'}><a className='text-gray-600 hover:text-gray-900 hover:underline'>Pricing</a></Link>
                        <Link href={'/about'}><a className='text-gray-600 hover:text-gray-900 hover:underline'>About</a></Link>
                        <Link href={'/contact'}><a className='text-gray-600 hover:text-gray-900 hover:underline'>Contact</a></Link>
                        <Tooltip text={'Product Documentation'} placement="bottom"> <Link href={'https://docs.coplane.co'}><a target="_blank" className='text-gray-600 hover:text-gray-900 hover:underline'>  <div className='flex'>

                            Docs
                            <div className='mt-0.5'>
                                <ArrowUpRight size={21} color='#999' />
                            </div>

                        </div>
                        </a></Link></Tooltip>

                    </div>
                </div>
            </Drawer>
            <nav className={"border-b  h-10 sm:h-10 py-3    justify-between  px-8 xl:px-40  flex  md:justify-around items-center"}>
                <Link href={'/'}><a className='text-black  scale-90 sm:scale-100'>
                    <div className='flex items-center scale-75'>

                        <Icon />

                        <div className='flex space-y-0 justify-center  mb-3 text-5xl items-center'>


                            <div className='font-bold font-poppins  text-4xl h-5'>Coplane</div>



                        </div>

                    </div>
                </a></Link>
                <div className='hidden md:flex justify-between items-center space-x-4    sm:space-x-10 '>
                    <Link href={'/'}><a className='text-gray-600 hover:text-gray-900 hover:underline'>Product</a></Link>
                    <Link href={'/pricing'}><a className='text-gray-600 hover:text-gray-900 hover:underline'>Pricing</a></Link>
                    <Link href={'/about'}><a className='text-gray-600 hover:text-gray-900 hover:underline'>About</a></Link>
                    <Link href={'/contact'}><a className='text-gray-600 hover:text-gray-900 hover:underline'>Contact</a></Link>
                    <Tooltip text={'Product Documentation'} placement="bottom"> <Link href={'https://docs.coplane.co'}><a target="_blank" className='text-gray-600 hover:text-gray-900 hover:underline'>  <div className='flex'>

                        Docs
                        <div className='mt-0.5'>
                            <ArrowUpRight size={21} color='#999' />
                        </div>

                    </div>
                    </a></Link></Tooltip>

                </div>
                <div className='rounded-lg bg-black px-3 py-2 text-white h-5 text-sm hidden md:block'>Console</div>
                <button className='md:hidden block' onClick={() => { setMenuState(true) }}>
                    <svg height="32px" id="Layer_1" style={{ enableBackground: 'new 0 0 32 32' }} version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" /></svg>
                </button>
            </nav>
        </header >




    )
}

export default Nav