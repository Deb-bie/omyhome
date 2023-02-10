import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {RxPerson} from "react-icons/rx";
import {FaBars} from "react-icons/fa";
import {MdClose} from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";


import Mobile from "../../data/mobile.js"
import Logo from "../../assets/logo/logo.svg";


import "./style.css";

const Navbar = () => {
    window.addEventListener("scroll", function () {
        const stick = document.querySelector("nav")
        stick.classList.toggle('active', window.scrollY > 100)
    })

    const [mobile, setMobile] = useState(false);
    const handleMobile = () => {setMobile(!mobile)}

  return (
    <nav className='w-[100%] h-[100px] 2xl:h-[120px] sticky top-0 bg-[transparent] flex flex-col justify-between overflow-hidden z-[10] '>
        <div className='w-[100%] h-[100%] flex flex-row justify-between '>
            <section className='w-[75%] flex flex-row justify-start items-center text-xl pl-4 lg:pl-20 2xl:pl-32'>
                <Link to="/">
                    <div className=' '>
                        <img src={Logo} alt="logo" className="w-[100%] h-[100%] object-contain " />
                    </div>
                </Link>

                <ul className='w-[65%] 2xl:w-[65%] hidden md:flex flex-row justify-between pl-12 lg:pl-20 2xl:pl-32'>
                    <Link to="/buy-a-property" className='text-base lg:text-lg 2xl:text-2xl'>Buy</Link>
                    <Link to="/rent-a-property" className='text-base lg:text-lg 2xl:text-2xl'>Rent</Link>
                    <li>
                        <span>
                            <Link to="/agents" className='text-base lg:text-base 2xl:text-2xl'>Find Agents </Link>
                        </span>
                        /
                        <span>
                            <Link to="/home-owners" className='text-base lg:text-lg 2xl:text-2xl'> Home Owners</Link>
                        </span>
                    </li>
                </ul>
            </section>

            <Link to="/login" className='w-[25%] hidden md:flex flex-row justify-end items-center text-base lg:text-lg 2xl:text-2live-serverxl md:pr-6 lg:pr-20 2xl:pr-32 '>
                <RxPerson />
                &nbsp; &nbsp;
                Login
            </Link>

            <section onClick={() => handleMobile()} className='md:hidden flex flex-row items-center justify-center pr-4 text-3xl z-[80]'>
                {mobile ? <MdClose /> : <FaBars />}
            </section>
        </div>

        <hr className='bg-[#333] ' />

        {
            mobile ? 
                <section className='bg-white fixed h-[100%] w-[100%] sm:w-[70%] z-[70] right-0 pt-[50px] flex flex-row justify-center content-center items-center '>
                    <div className='w-[80%] h-[100%] flex flex-col justify-evenly '>
                        {
                            Mobile.map((mobile, id) => (
                                <div key={id} className='flex flex-col'>
                                    <Link to={mobile.link} onClick={() => handleMobile()} className='flex flex-row justify-between items-center text-base sm:text-xl'>
                                        <span>{mobile.item}</span>
                                        <span><BsArrowRight /></span>
                                    </Link>
                                    <hr />
                                </div>
                            ))
                        }

                        <div className='flex flex-col'>
                            <Link to="/login" onClick={() => handleMobile()} className='flex flex-row justify-center items-center text-base sm:text-xl'>
                                <span><RxPerson /></span>
                                &nbsp; &nbsp;
                                <span>Login</span>
                            </Link>
                            <hr />
                        </div>
                    </div>
                </section>

            : ""
        }
    </nav>
  )
}

export default Navbar

