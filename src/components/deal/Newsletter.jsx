import React from 'react'
import NewsletterImage from "../../assets/images/newsletter.svg"
import { useNavigate } from 'react-router-dom'


const Newsletter = () => {
    const navigate = useNavigate();

  return (
    <div className='w-[100%] h-[100%] flex flex-row justify-center overflow-hidden  '>
        <div className='w-[90%] 5xl:w-[60%] h-[100%] flex flex-row  rounded-[20px] bg-[#322744] '>
            <div className='w-[100%] h-[100%] flex flex-col-reverse md:flex-row justify-between items-center text-white py-12 px-8 gap-y-8'>
                <div className='w-[100%] md:w-[60%] '>
                    <h1 className='text-xl md:text-3xl font-[700] leading-[40px] mb-12 '>Join the millions of people getting the latest house listings</h1>

                    <p className='w-[90%] md:w-[70%] text-base md:text-2xl leading-[40px] tracking-5 mb-12 '>With omyHome, you can track properties you’re interested in. And you also get the chance to view properties together with other hunters.</p>

                    <div className='w-[100%] md:w-[50%] flex flex-row justify-between '>
                        <button onClick={() => navigate("/signup")} className=' bg-white text-[#322744] text-base md:text-2xl font-[600] py-2 px-4 rounded-[10px] transform transition duration-500 hover:scale-110 '>Register</button>

                        <button onClick={() => navigate("/login")} className=' hover:bg-white text-white hover:text-[#322744] text-base md:text-2xl font-[600] py-2 px-4 rounded-[10px] transform transition duration-500 hover:scale-110 '>Login</button>
                    </div>



                </div>

                <div className='w-[100%] md:w-[40%] '>
                    <img src={NewsletterImage} alt="newsletter" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter;