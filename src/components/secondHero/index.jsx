import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {IoMdArrowDropdown} from "react-icons/io"
import "./style.css"


const SecondHero = () => {
  const [show, setShow] = useState(false)

  const handle = () => {}


  return (
    <div className='home-nav'>
    <div className='home-container'>
        <div className='home-items'>
            <Link to='/' className='item active'>Home</Link>
        </div>

        <div className='home-items'>
            <div className='dropdown'>
                <Link to='#' className='dropbtn'>
                    Clothing
                    <IoMdArrowDropdown />
                </Link>
                <div className='dropdown-content'>
                    <Link className='a' to='#'>2 Piece Dresses</Link>
                    <Link className='a' to='#'>Club Dresses</Link>
                    <Link className='a' to='#'>2 Piece Dresses</Link>
                    <Link className='a' to='#'>2 Piece Dresses</Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SecondHero
