import React from 'react'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    <div className='w-[100%] h-[100%] py-12 bg-[#e0e0e0] fixed bottom-0 flex flex-row justify-center top-[100px] md:top-0 relative'>
        <div className='w-[90%] h-[100%] gap-y-12 flex flex-col  justify-evenly items-center'>

           <div className='w-[100%] h-[100%] flex flex-row flex-wrap gap-12 justify-evenly items-center'>
                <div className=' h-[100%] flex flex-col justify-center items-center'>
                    <Link to="/" className="font-['Moon_Dance'] text-[80px] ">
                        omyHome
                    </Link>

                    <div className='text-[20px]'>35 Davidson Street. NY</div>
                </div>

                <div className=' h-[100%] gap-6 flex flex-col justify-evenly '>
                    <h4 className='h-[40%] text-[30px] font-[900]'>OMYHOME</h4>

                    <ul className='h-[40%] flex flex-col justify-between text-[25px] '>
                        <li>Hunters</li>
                        <li>Agents</li>
                        <li>Home Owners</li>
                    </ul>
                </div>

                <div className=' h-[100%] gap-6 flex flex-col justify-evenly '>
                    <h4 className='h-[40%] text-[30px] font-[900]'>COMPANY</h4>

                    <ul className='h-[40%] flex flex-col justify-between text-[25px] '>
                        <li>About omyHome</li>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
           </div>

           <div className='text-[20px] flex flex-row items-center'>
                Made with 
                <span className='text-rose-600'>&nbsp; ❤ &nbsp;</span> 
                by 
                <a className='font-["Moon_Dance"] text-[30px] ' href="https://debbie.onrender.com/" target="_blank" rel="noopener noreferrer"> &nbsp;debbie.A</a>
           </div>

        </div>
    </div>
  )
}

export default Footer