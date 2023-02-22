import React from 'react'
import ReusableDealComponent from '../../components/deal';
import Image from "../../assets/images/hero2.jpg"
import DealBlog from '../../components/deal/Blog';


const Buy = () => {
  return (
    <div className='w-[100%] min-h-[100vh]  -top-[100px] 2xl:-top-[120px] relative '>
      <div className="w-[100%] h-[100%] flex flex-col flex-nowrap content-center items-start ">
        <ReusableDealComponent 
          image={Image}
          name="Search apartments and houses for sale"
        />
        <DealBlog /> 
      
      </div>
    </div>
  )
}

export default Buy;