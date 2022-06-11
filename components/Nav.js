import Link from 'next/link'

import React, { useEffect, useState } from "react";
import { ArrowUpRight } from '@geist-ui/react-icons'
import { Popover, Tooltip, Drawer } from '@geist-ui/react'
import { Icon } from './SVG';
import { Button } from '@geist-ui/react';
import { MoreHorizontal } from '@geist-ui/react-icons';

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
        <header className="fixed top-0  z-999 w-full bg-white ">
            <Drawer visible={menuState} onClose={() => setMenuState(false)} placement="top">
                <div className='flex flex-col items-center'>
                    <a href={'https://console.coplane.co'}><div className='rounded-lg bg-black px-3 py-2 text-white h-10 w-44'>Console</div></a>
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
            <nav className={" h-10 sm:h-10 py-3  justify-between   flex  md:justify-between items-center pl-2 pr-4 sm:pl-8 sm:pr-12"}>
                <Link href={'/'}><a className='text-black  scale-75  sm:scale-100'>
                    <div className='flex   items-center space-x-2'>

                        <Icon />

                        <div className='flex space-y-0 justify-center  mb-3 text-5xl items-center'>


                            <div className='font-bold   text-3xl h-6'>Coplane</div>



                        </div>

                    </div>
                </a></Link>
                <div className='hidden md:flex justify-between items-center space-x-4  font-medium  sm:space-x-10 '>
                    <Link href={'/'}><a className='text-black hover:text-gray-500 '>Product</a></Link>
                    <Link href={'/pricing'}><a className='text-black hover:text-gray-500 '>Pricing</a></Link>
                    <Link href={'/about'}><a className='text-black hover:text-gray-500'>About</a></Link>
                    <Link href={'/contact'}><a className='text-black hover:text-gray-500 '>Contact</a></Link>
                    <Tooltip text={'Product Documentation'} placement="bottom"> <Link href={'https://docs.coplane.co'}><a target="_blank" className='text-black hover:text-gray-500 '>  <div className='flex'>

                        Docs
                        <div className='mt-0.5'>
                            <ArrowUpRight size={21} color='#999' />
                        </div>

                    </div>
                    </a></Link></Tooltip>

                </div>
                <div className='flex space-x-2 scale-90 sm:scale-100'>
                    <a href={'https://console.coplane.co'}>
                        <Button auto scale={0.8} type="default" >Console</Button></a>
                    <a href={'https://console.coplane.co/auth'}>
                        <Button auto scale={0.8} type="secondary-light" >Sign Up</Button>
                    </a>
                    <button className='md:hidden block' onClick={() => { setMenuState(true) }}>
                        <MoreHorizontal />  </button>
                </div>

            </nav>
        </header >




    )
}

export default Nav