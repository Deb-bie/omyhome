import React, {useState, useEffect} from 'react';
import { BsArrowRight } from "react-icons/bs";
import SliderData from "../../data/slider.js"
import "./slider.css"

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = SliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
    }

    const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime )
    }

    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    useEffect(() => {
        if (autoScroll) {
            // auto()
        }
        return () => clearInterval(slideInterval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSlide, autoScroll, slideInterval])


  return (
    <div className="w-[100%] h-[95vh] object-cover ">
        <div className="flex flex-row items-center justify-between h-full w-full" >

            {
                SliderData.map((slide, i) => {
                    return (
                        <div className={i === currentSlide ? "w-[100%] h-[95vh] flex" : "hidden" }  key={i}>
                            {
                                i === currentSlide 
                                ? 
                                    <div className="relative w-[100%] h-[95vh] ">
                                        <div className="absolute w-[100%] h-full ">
                                            <div className="w-[100%] h-auto ">
                                                <img src={slide.image} className="w-[100%] h-[95vh] object-cover" alt="slider"/>
                                            </div> 
                                        </div>

                                        <div className='w-[100%] h-[90vh] relative flex flex-col justify-end items-center '>

                                            <div className='w-[100%] flex flex-row justify-center items-end pl-4 lg:pl-20 2xl:pl-32 pr-4 lg:pr-20 2xl:pr-32 overflow-hidden'>

                                                <span className='text-orange-600 text-[40px]  md:text-[80px] 2xl:text-[150px] font-[900] tracking-[20px]'>{slide.page}</span>

                                                <span className={currentSlide === 0 ? "bg-orange-600 cursor-pointer h-[3px] w-[30px] sm:w-[50px] 2xl:w-[100px] m-4 overflow-hidden" : "cursor-pointer h-[3px] w-[30px] sm:w-[50px] 2xl:w-[100px] m-4 bg-gray-800  overflow-hidden"} onClick={() => setCurrentSlide(0)}></span>

                                                <span className={currentSlide === 1 ? "bg-orange-600 cursor-pointer h-[3px] w-[30px] sm:w-[50px] 2xl:w-[100px] m-4 overflow-hidden " : "cursor-pointer h-[3px]  w-[30px] sm:w-[50px] 2xl:w-[100px] m-4 bg-gray-800 overflow-hidden"} onClick={() => setCurrentSlide(1)}></span>

                                                <span className={currentSlide === 2 ? "bg-orange-600 cursor-pointer h-[3px] w-[30px] sm:w-[50px] 2xl:w-[100px] m-4 overflow-hidden" : "cursor-pointer h-[3px] w-[30px] sm:w-[50px] 2xl:w-[100px] m-4 bg-gray-800 overflow-hidden"} onClick={() => setCurrentSlide(2)}></span>
                                            </div>

                                            <button className='w-[90%] md:w-[50%] 2xl:w-[50%] px-4 md:px-6 2xl:px-32 py-4 2xl:py-6 bg-orange-500 mt-[10vh] -mb-[4.2vh] 2xl:-mb-[3.9vh] text-[12px] sm:text-base font-[900] flex flex-row content-center justify-between items-center text-white shadow-xl overflow-x-hidden '>
                                                <span className='tracking-[5px]'>VIEW PROPERTIES</span>
                                                <span><BsArrowRight /></span>
                                            </button>
                                        </div>                                        
                                    </div>
                                : ""
                            }
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Slider;