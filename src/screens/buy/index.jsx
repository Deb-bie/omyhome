import React from 'react'
import ReusableDealComponent from '../../components/deal';
import Image from "../../assets/images/hero2.jpg"
import DealBlog from '../../components/deal/Blog';
import Newsletter from '../../components/deal/Newsletter';


const Buy = () => {
  return (
    <div className='w-[100%] min-h-[100vh] -top-[120px] relative '>
      <div className="w-[100%] h-[100%] flex flex-col flex-nowrap content-center items-start ">
        <ReusableDealComponent 
          image={Image}
          name="Search apartments and houses for sale"
        />
        <DealBlog /> 
        <Newsletter />
      
      </div>
    </div>
  )
}

export default Buy;