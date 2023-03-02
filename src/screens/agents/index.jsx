import React from 'react'
import ReusableAgentsHomeComponent from '../../components/agentsHome';
import Image from "../../assets/images/hero2.jpg"
import DealBlog from '../../components/deal/Blog';
import Newsletter from '../../components/deal/Newsletter';



const Agents = () => {
  return (
    <div className='w-[100%] min-h-[100vh] -top-[120px] relative '>
      <div className="w-[100%] h-[100%] flex flex-col flex-nowrap content-center items-start ">
        <ReusableAgentsHomeComponent 
          image={Image}
          title="Search for home agents the right way on omyHome"
          location="Agent's"
          name="Agent's"
          type="Type of leasing"
        />
        <DealBlog /> 
        <Newsletter />
      
      </div>
    </div>
  )
}

export default Agents;