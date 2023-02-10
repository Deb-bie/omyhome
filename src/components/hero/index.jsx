import React from 'react'
import {IoMdArrowDropdown} from "react-icons/io"
import Slider from '../slider';
import FindHome from "../../data/home.js"

const Hero = () => {
  return (
    <div className='w-[100%] h-[100%] md:h-[90vh] -top-[100px] 2xl:-top-[120px] relative '>
        <div className='w-[100%] h-[100%] md:h-[95vh] flex flex-col md:flex-row justify-between items-center  '>
            <section className='w-[100%] md:w-[75%] h-[auto]  '>
                <Slider />
            </section>

            <section className='bg-gray-300 w-[100%] md:w-[25%] h-[80vh] md:h-[100%] flex flex-row justify-center items-center md:items-end content-center overflow-hidden'>
                <div className='w-[90%] 2xl:w-[80%] h-[80%] flex flex-col items-center content-center justify-around '>
                    <h2 className='md:text-base 2xl:text-2xl font-[600] leading-[50px] tracking-[5px]'>FIND YOUR NEW HOME</h2>

                    <div className='w-[100%] h-[80%] md:h-[60%] flex flex-col justify-evenly '>
                        {
                            FindHome.map((findhome, id) => (
                                <div className='flex flex-col'>
                                    <div className='w-[100%] flex flex-row justify-between '>
                                        <span className='font-[400] text-base md:text-xl tracking-[5px] '>{findhome.type}</span>
                                        <span className='text-base md:text-xl '><IoMdArrowDropdown /></span>
                                    </div>
                                    <hr className='bg-[#470584]' />
                                </div>
                            ))
                        }
                        
                    </div>

                    <button className='w-[90%] py-4 rounded-[10px] bg-[#2f2f6cdb] text-white '>
                        SEARCH
                    </button>
                    
                </div>

            </section>
        </div>
    </div>
  )
}

export default Hero