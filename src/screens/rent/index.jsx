import React from 'react'
import ReusableDealComponent from '../../components/deal';
import Image from "../../assets/images/hero3.jpg";

const Rent = () => {
  return (
    <div className='w-[100%] h-[100vh] md:h-[90vh] -top-[100px] 2xl:-top-[120px] relative '>
      <div className="w-[100%] h-[100%] flex flex-col flex-nowrap content-center items-start ">
        <ReusableDealComponent 
          image={Image}
          name="Search apartments and houses for sale"
        />
      
      </div>
    </div>
  )
}

export default Rent;