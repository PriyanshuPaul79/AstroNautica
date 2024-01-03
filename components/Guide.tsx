import Image from 'next/image'
import React from 'react'

const Guide = () => {
    return (
        <section className='flexCenter flex-col'>
            <div className='padding-container max-container w-full pb-24'>
                <Image src="/Rocket.svg" alt="camp" width={50} height={50} className='pb-3'/>

                <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>
                    we are here for you
                </p>

                <div className="flex flex-wrap justify-between gap-5 lg:gap-10 ">
                    <h2 className='bold-40  lg:bold-64 xl:max-w-[390px]'>Step into the future of tourism
                    </h2>
                    <p className='regular-16 text-gray-50 xl:max-w-[520px]'>Venture beyond the
                        atmosphere, as our expert team guides you through the wonders of the universe,
                        making your dreams of space a reality.</p>
                </div>
            </div>

            <div
                className='flexCenter max-container relative w-full '>

                <video
                    width={1440}
                    height={580}
                    className='w-full object-cover object-center 2xl:rounded-5xl'
                    autoPlay
                    loop
                    muted
                    playsInline>
                    <source src='/launch.mp4' type='video/mp4'/>
                </video>

                <div
                    className=' absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%]
      lg:top-20 '>
                    <Image src='/path2.svg' alt='route' width={90} height={140}/>
                    <div className="flexBetween flex-col ">
                        <div className='flex w-full flex-col mb-3'>
                            <h4 className='bold-16 text-red-500'>This Could be You </h4>
                            <div className='flexBetween w-full gap-2'>
                                
                                <p className='regular-16 text-gray-20'>Destination
                                </p>
                                <p className='bold-16 text-green-50'>
                                    7 months
                                </p>
                            </div>
                            <p className='bold-20 mt-2  '>Mars</p>
                        </div>

                        <div className='flex w-full flex-col'>

                            <p className='regular-16 text-gray-20'>Source
                            </p>

                            <h4 className='bold-20 mt-2 whitespace-nowrap '>Earth</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Guide
