import React from 'react'
import "../../screens/home/style.css"
import Slider from '../slider'

const Hero = () => {
  return (
    <div className='w-[100%] h-[90vh] -top-[100px] 2xl:-top-[120px] relative '>
        <div className='w-[100%] h-[90vh] flex flex-row justify-between items-center  '>
            <section className='w-[100%] md:w-[75%] h-[auto]  '>
                <Slider />
            </section>

            <section className='bg-gray-300 w-[25%] h-[100%] hidden md:flex flex-row justify-center items-center content-center'>
                <div className='w-[90%] lg:w-[80%] h-[100%] flex flex-col items-center content-center justify-around'>
                    <h2 className='text-xl font-bold'>FIND YOUR NEW HOME</h2>

                    <button className='px-4 md:px-6 lg:px-24 py-4 bg-[#103a50] text-white '>
                        SEARCH
                    </button>
                    
                </div>

            </section>
        </div>
    </div>
  )
}

export default Hero