import { codeAbout, handAbout, registryAbout } from '../components/SVG'


export default function About() {

    return (

        <div className="pt-24 mt-32 flex flex-col justify-center items-center">
            <div className='flex w-full justify-center items-center text-6xl font-extrabold'>
                {'Make Data the Easiest'}
            </div>
            <div className='flex w-full justify-center items-center text-6xl  font-extrabold'>
                {'Part of Your Job'}
            </div>



            <div className='flex w-full justify-center items-center text-2xl mt-10 font-medium text-gray-600'>
                We manage everything for you




            </div>
            <div className='flex w-full justify-center items-center text-2xl mt-2 font-medium text-gray-600'>
                So, you focus on more important things.
            </div>
            <div className='flex w-full justify-center items-center text-2xl mt-2 font-medium text-gray-600'>
                With Storage based pricing, you only pay for what you use.
            </div>

            <div className='py-20 flex items-start space-x-8'>
                <div className=' space-y-2 flex flex-col justify-center items-center'>
                    <img width={80} src={'https://storage.googleapis.com/netinc/codeAbout.png'} />
                    <div className=' font-bold text-xl'>
                        Quick
                    </div>
                    <div className='w-56 text-center text-gray-500'>
                        We know each millisecond is important for you.
                    </div>
                </div>

                <div className=' space-y-2 flex flex-col justify-center items-center'>
                    <img width={80} src={'https://storage.googleapis.com/netinc/registryAbout.png'} />
                    <div className=' font-bold text-xl'>
                        Simple
                    </div>
                    <div className=' w-56 text-center text-gray-500'>
                        We Simplify common development tasks to help you grow.
                    </div>
                </div>
                <div className=' space-y-2 flex flex-col justify-center items-center'>
                    <img width={80} src={'https://storage.googleapis.com/netinc/handAbout.png'} />
                    <div className=' font-bold text-xl'>
                        Amazing
                    </div>
                    <div className='w-56 text-center text-gray-500'>
                        We serve you amazing products that makes your work easy.
                    </div>
                </div>

            </div>

        </div>
    )
}
