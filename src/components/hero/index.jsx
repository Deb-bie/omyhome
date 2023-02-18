import React from 'react'
import Slider from '../slider';
import SecondSection from './SecondSection';

const Hero = () => {

  return (
    <div className='w-[100%] h-[100%] md:h-[90vh] -top-[100px] 2xl:-top-[120px] relative '>
        <div className='w-[100%] h-[100%] md:h-[95vh] flex flex-col md:flex-row justify-between items-center  '>
            <section className='w-[100%] md:w-[75%] h-[auto]  '>
                <Slider />
            </section>

            <section className='bg-gray-300 w-[100%] md:w-[25%] h-[90vh] md:h-[100%] flex flex-row justify-center items-center md:items-end content-center overflow-hidden'>
                <SecondSection />
            </section>
        </div>
    </div>
  )
}

export default Hero