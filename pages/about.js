import { codeAbout, handAbout, registryAbout } from '../components/SVG'


export default function About() {

    return (

        <div className="pt-24 mt-14 md:mt-24 flex flex-col justify-center items-center px-2">
            <div className='flex w-full md:w-200 lg:w-300 text-center justify-center items-center text-3xl  sm:text-4xl lg:text-6xl font-extrabold'>
                {'Deploy and manage highly scalable applications on a fully managed serverless platform.'}
            </div>



            <div className='flex w-full md:w-200 justify-center items-center text-xl sm:text-2xl mt-10 font-medium text-gray-600'>
                We manage everything for you.




            </div>
            <div className='flex w-full justify-center text-center md:w-200 items-center text-xl sm:text-2xl mt-0 font-medium text-gray-600'>
                So, you can focus on more important things. With Usage based pricing, you only pay for what you use.
            </div>

            <div className='py-20 flex items-start md:space-x-8 mb-10 flex-col space-y-8 md:space-y-0 md:flex-row'>
                <div className=' space-y-2 flex flex-col justify-center items-center'>
                    <img width={80} src={'https://storage.googleapis.com/NetInc/codeAbout.png'} />
                    <div className=' font-bold text-xl'>
                        Quick
                    </div>
                    <div className='w-56 text-center text-gray-500'>
                        We know each millisecond is important for you.
                    </div>
                </div>

                <div className=' space-y-2 flex flex-col justify-center items-center'>
                    <img width={80} src={'https://storage.googleapis.com/NetInc/registryAbout.png'} />
                    <div className=' font-bold text-xl'>
                        Simple
                    </div>
                    <div className=' w-56 text-center text-gray-500'>
                        We Simplify common development tasks to help you grow.
                    </div>
                </div>
                <div className=' space-y-2 flex flex-col justify-center items-center '>
                    <img width={80} src={'https://storage.googleapis.com/NetInc/handAbout.png'} />
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
