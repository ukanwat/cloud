import { codeAbout, handAbout, registryAbout } from '../components/SVG'
import { Button } from '@geist-ui/react'
import { Users, ShoppingCart, Book } from '@geist-ui/react-icons'
import Link from 'next/link'
export default function Contact() {

    return (

        <div className="pt-10 lg:pt-24 mt-32 flex flex-col justify-center items-center">
            <div className='flex px-2 text-center w-full justify-center items-center text-4xl  lg:text-6xl font-extrabold'>
                We are here to help
            </div>

            <div className='flex w-full text-center justify-center items-center text-xl lg:text-2xl mt-2 font-medium text-gray-600'>
                Get in touch and let us know how we can help.
            </div>


            <div className=' py-14 bg-gray-50 mt-14 w-screen space-y-10 md:space-y-0 flex flex-col md:flex-row items-center justify-center md:space-x-8'>

                <div className='w-full md:w-48 lg:w-64 h-80 md:shadow-lg bg-white rounded-xl justify-between items-center flex flex-col py-8 px-4'>
                    <div className='rounded-full w-24 h-24 bg-black border-p flex justify-center items-center'>
                        <Users size={42} color='#fff' />
                    </div>

                    <div className='text-3xl font-bold'>Support</div>
                    <div className='text-gray-500 text-center'>We’re here to help with any question or code issue.</div>
                    <Button auto type="secondary" >Contact Us</Button>


                </div>
                <div className=' w-full md:w-48 lg:w-64 h-80 md:shadow-lg bg-white rounded-xl justify-between items-center flex flex-col py-8 px-4'>
                    <div className='rounded-full w-24 h-24 bg-white border-p flex justify-center items-center'>
                        <ShoppingCart size={42} />
                    </div>

                    <div className='text-3xl font-bold'>Sales</div>
                    <div className='text-gray-500 text-center'>We’d love to talk about how we can work together.</div>
                    <Button auto type="" >Contact Sales</Button>


                </div>

                <div className='w-full md:w-48 lg:w-64 h-80 md:shadow-lg bg-white rounded-xl justify-between items-center flex flex-col py-8 px-4'>
                    <div className='rounded-full w-24 h-24 bg-blue-600 border-p flex justify-center items-center'>
                        <Book size={42} color='#fff' />
                    </div>

                    <div className='text-3xl font-bold'>Docs</div>
                    <div className='text-gray-500 text-center'>Learn about how to make use of appwrite.</div>
                    <Button auto type="success-light" >Visit Docs</Button>


                </div>



            </div >
            <div className='py-14 border-t-p flex flex-col lg:flex-row w-full space-y-8 lg:space-y-0 justify-center items-center lg:items-start space-x-4 xl:space-x-8 xl:divide-x-p'>

                <Link href='https://github.com/appwrite/appwrite'><a target='_blank' className='  xl:pl-14 lg:pl-14 space-y-2 flex justify-center w-72 xl:w-80 items-center space-x-4'>
                    <div className='w-24 h-24 rounded-full'>

                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" /></svg>

                    </div>

                    <div className='w-56 text-left  space-y-1 text-gray-500 '>
                        <div className=' font-bold text-black  text-xl'>
                            Github Repository
                        </div>
                        <div>
                            {"Visit Appwrite's github repository."}
                        </div>

                    </div>
                </a></Link>

                <Link href='https://github.com/appwrite/appwrite'><a target='_blank' className='  xl:pl-14 space-y-2  w-72 xl:w-80 flex justify-center items-center space-x-6'>
                    <div className='w-20 h-20 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" fill="#7289DA" rx="24" /><path fill="#fff" d="M36.0367 15.7798C33.8349 14.0183 31.1927 13.1376 28.4037 12.9908L27.9633 13.4312C30.4587 14.0183 32.6606 15.1926 34.7156 16.8073C32.2202 15.4862 29.4312 14.6055 26.4954 14.3119C25.6147 14.1651 24.8807 14.1651 24 14.1651C23.1193 14.1651 22.3853 14.1651 21.5046 14.3119C18.5688 14.6055 15.7798 15.4862 13.2844 16.8073C15.3394 15.1926 17.5413 14.0183 20.0367 13.4312L19.5963 12.9908C16.8073 13.1376 14.1651 14.0183 11.9633 15.7798C9.46789 20.4771 8.14679 25.7615 8 31.1926C10.2018 33.5413 13.2844 35.0092 16.5138 35.0092C16.5138 35.0092 17.5413 33.8349 18.2752 32.8073C16.367 32.367 14.6055 31.3394 13.4312 29.7248C14.4587 30.3119 15.4862 30.8991 16.5138 31.3394C17.8349 31.9266 19.156 32.2202 20.4771 32.5138C21.6514 32.6605 22.8257 32.8073 24 32.8073C25.1743 32.8073 26.3486 32.6605 27.5229 32.5138C28.844 32.2202 30.1651 31.9266 31.4862 31.3394C32.5138 30.8991 33.5413 30.3119 34.5688 29.7248C33.3945 31.3394 31.633 32.367 29.7248 32.8073C30.4587 33.8349 31.4862 35.0092 31.4862 35.0092C34.7156 35.0092 37.7982 33.5413 40 31.1926C39.8532 25.7615 38.5321 20.4771 36.0367 15.7798ZM19.156 28.5504C17.6881 28.5504 16.367 27.2293 16.367 25.6147C16.367 24 17.6881 22.6789 19.156 22.6789C20.6239 22.6789 21.945 24 21.945 25.6147C21.945 27.2293 20.6239 28.5504 19.156 28.5504ZM28.844 28.5504C27.3761 28.5504 26.055 27.2293 26.055 25.6147C26.055 24 27.3761 22.6789 28.844 22.6789C30.3119 22.6789 31.633 24 31.633 25.6147C31.633 27.2293 30.3119 28.5504 28.844 28.5504Z" /></svg>
                    </div> <div className=' w-56 space-y-1 text-left text-gray-500'>
                        <div className=' font-bold text-black text-xl'>
                            Join Appwrite community
                        </div>
                        <div>
                            Join Appwrite community on discord.
                        </div>

                    </div>
                </a></Link>
                <Link href='https://twitter.com/netincTeam'><a target='_blank' className='  xl:pl-14 space-y-2  w-80 flex justify-center items-center space-x-6'>

                    <div className='w-20 h-20 rounded-full'>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#03A9F4" d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z" /></svg>
                    </div>     <div className='w-56  space-y-1 text-left text-gray-500'>
                        <div className=' font-bold text-black text-xl'>
                            Follow us on Twitter
                        </div>
                        <div>
                            Get NetInc news, company information, and updates at @NetIncTeam.
                        </div>

                    </div>
                </a></Link>

            </div>

        </div >
    )
}
