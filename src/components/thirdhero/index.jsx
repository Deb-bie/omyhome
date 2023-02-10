import React from 'react'
import {FaGlasses} from 'react-icons/fa'

import VR from "../../assets/images/vr.jpg"


const ThirdHero = () => {
  return (
    <div className='relative w-[100%] h-[100vh] md:h-[100%] lg:-top-[300px] flex flex-row justify-center items-center'>
      <div className='w-[100%] h-[100%] flex flex-row justify-center pt-20 lg:pt-0 '>
        
        <div className='absolute w-[90%] h-auto flex flex-row justify-center'>
          <img src={VR}  alt="VR"  className='w-[90%] h-[95vh] object-cover ' />
        </div>

        <div className='absolute w-[90%] h-[50%] md:h-[50vh] flex flex-row justify-center md:justify-end overflow-hidden '>
          <div className='w-[80%] md:w-[50%] h-[100%] py-8 2xl:py-20 bg-white flex flex-row justify-center items-center '>
            <div className='w-[90%] md:w-[50%] h-[80%] md:h-[50%] flex flex-row justify-center'>
              <div className='h-[100%] flex flex-col justify-evenly '>
                <h1 className='text-[25px] 2xl:text-[50px] 5xl:text-[80px] tracking-[10px] '>VR Viewing</h1>

                <p className='leading-8 text-lg text-[sky]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aut dignissimos nulla repudiandae, obcaecati, ipsa alias quidem.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='relative w-[100%] h-[100vh] flex flex-row justify-center items-center '>
          <div className='w-[50%] md:w-[20%] h-[20vh] md:h-[20%] py-4 5xl:py-20 bg-[#2f2f6cdb] flex flex-row justify-center items-center '>
            <div className='w-[80%] md:w-[50%] h-[100%] flex flex-row justify-center items-center'>
              <div className='h-[100%] flex flex-col justify-evenly items-center  '>
                <div className='text-[30px] 2xl:text-[50px] 5xl:text-[80px] '><FaGlasses /></div>

                <p className='leading-4 text-[20px] 5xl:text-[50px] font-[900] '>TRY IT IN VR</p>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default ThirdHero

