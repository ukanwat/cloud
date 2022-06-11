import { codeAbout, handAbout, registryAbout } from '../components/SVG'
import { Button } from '@geist-ui/react'
import { Users, ShoppingCart, Book } from '@geist-ui/react-icons'
import Link from 'next/link'
export default function Contact() {

    return (

        <div className="pt-10 lg:pt-24 mt-32 flex flex-col justify-center items-center">
            <div className='flex px-2 text-center w-full justify-center  leading-none tracking-tighter items-center text-4xl  lg:text-6xl font-bold'>
                We are here to help
            </div>

            <div className='flex w-full text-center justify-center items-center text-xl lg:text-2xl mt-2 font-medium text-gray-600'>
                Get in touch and let us know how we can help.
            </div>


            <div className=' py-14  mt-14 w-screen space-y-10 md:space-y-0 flex flex-col md:flex-row items-center justify-center md:space-x-8'>

                <div className='w-full md:w-48 lg:w-64 h-80  bg-gray-100  rounded-md justify-between items-center flex flex-col py-8 px-4'>
                    <div className='rounded-full w-24 h-24 bg-black border-p flex justify-center items-center'>
                        <Users size={42} color='#fff' />
                    </div>

                    <div className='text-3xl font-bold'>Support</div>
                    <div className='text-gray-500 text-center'>We’re here to help with any question or code issue.</div>
                    <Button auto type="secondary" >Contact Us</Button>


                </div>
                <div className=' w-full md:w-48 lg:w-64 h-80 rounded-md  bg-gray-100  justify-between items-center flex flex-col py-8 px-4'>
                    <div className='rounded-full w-24 h-24 bg-white border-p flex justify-center items-center'>
                        <ShoppingCart size={42} />
                    </div>

                    <div className='text-3xl font-bold'>Sales</div>
                    <div className='text-gray-500 text-center'>We’d love to talk about how we can work together.</div>
                    <Button auto type="" >Contact Sales</Button>


                </div>

                <div className='w-full md:w-48 lg:w-64 h-80 rounded-md  bg-gray-100  justify-between items-center flex flex-col py-8 px-4'>
                    <div className='rounded-full w-24 h-24 bg-blue-600 border-p flex justify-center items-center'>
                        <Book size={42} color='#fff' />
                    </div>

                    <div className='text-3xl font-bold'>Docs</div>
                    <div className='text-gray-500 text-center'>Learn about how to make use of appwrite.</div>
                    <Button auto type="success-light" >Visit Docs</Button>


                </div>



            </div >
            <div className='py-14 flex flex-col lg:flex-row w-full space-y-8 lg:space-y-0 justify-center items-center lg:items-start space-x-4 xl:space-x-8 xl:divide-x-p'>




                <Link href='https://twitter.com/CoplaneCloud'><a target='_blank' className='  xl:pl-14 space-y-2  w-80 flex justify-center items-center space-x-6'>

                    <div className='w-20 h-20 rounded-full'>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#03A9F4" d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z" /></svg>
                    </div>     <div className='w-56  space-y-1 text-left text-gray-500'>
                        <div className=' font-bold text-black text-xl'>
                            Follow us on Twitter
                        </div>
                        <div>
                            Get Coplane news, company information, and updates at @CoplaneCloud.
                        </div>

                    </div>
                </a></Link>

            </div>

        </div >
    )
}
