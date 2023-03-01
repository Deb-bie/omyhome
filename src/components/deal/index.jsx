import React from 'react'
import { BiSearch } from "react-icons/bi"

const ReusableDealComponent = ({name, image}) => {
  return (
    <div className='w-[100%] h-[90vh] relative'>
        <div className='relative w-[100%] h-[100%] flex flex-row'>
            <div className='absolute w-[100%] h-[100%] '>
                <img src={image} alt="buy-image" className='w-[100%] h-[100%] object-cover ' />
            </div>

            <div className='relative w-[100%] h-[100%] flex flex-row justify-center items-end'>
                <div className='w-[90%] md:w-[80%] lg:w-[60%] h-[80%] 2xs:h-[70%] md:h-[50vh] 2xl:h-[50vh] 5xl:h-[30vh] flex flex-col justify-evenly items-center'>
                    <h1 className=' tracking-[5px] text-2xl md:text-5xl font-[900] text-white '>We know what a home really means</h1>

                    <h4 className='text-base md:text-2xl text-white '>And that's why we bring you all these amazing properties</h4>

                    <div className='w-[90%] md:w-[80%] flex flex-col items-center rounded-[10px] px-6 md:px-0 bg-white'>
                        <p className='my-8 text-2xl '>{name}</p>

                        <div className='w-[100%] md:w-[90%] flex flex-col md:flex-row gap-y-6 justify-between items-center mb-8 '>
                            <input 
                                type="text"
                                placeholder="eg. Oxford"
                                className=" w-[100%] md:w-[85%] py-2 px-4 outline-none bg-white text-xl border-2 border-gray-300 rounded-[10px] "
                            />

                            <div className='w-[100%] md:w-[10%] flex flex-row justify-center cursor-pointer bg-blue-800 text-white text-2xl py-2 px-4 rounded-[10px]'>
                                <BiSearch />
                            </div>
                        </div>


                        

                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default ReusableDealComponent