import React from 'react'

const ReusableAgentsHomeComponent = ({title, name, image, location, type}) => {
  return (
    <div className='w-[100%] h-[90vh] mb-[45vh]  xs:mb-[50vh] md:mb-[30vh] lg:mb-[40vh] 5xl:mb-0 relative'>
        <div className='relative w-[100%] h-[100%] flex flex-row'>
            <div className='absolute w-[100%] h-[100%] '>
                <img src={image} alt="buy-image" className='w-[100%] h-[100%] object-cover ' />
            </div>

            <div className='relative w-[100%] h-[100%] flex flex-row justify-center items-end'>

                <div className='w-[90%] md:w-[80%] lg:w-[60%] h-[80%] 2xs:h-[70%] md:h-[50vh] 2xl:h-[50vh] 5xl:h-[90vh] flex flex-col justify-center items-center'>
                    
                    <h1 className=' tracking-[5px] text-2xl md:text-5xl font-[900] text-white '>We know what a home really means</h1>

                    <div className='w-[100%] md:w-[100%] 5xl:w-[80%] flex flex-col items-center rounded-[20px] bg-green-500 my-12 shadow-xl -mb-[50vh] '>

                        <p className='w-[90%] md:w-[90%] my-8 text-2xl text-center '>{title}</p>

                        <div className='w-[90%] md:w-[90%] flex flex-col md:flex-row gap-y-2 justify-between items-start md:items-center mb-8 '>
                            <label className='text-base font-[900] '>{location} lacation : </label>
                            <input 
                                type="text"
                                placeholder="eg. Oxford"
                                className=" w-[100%] md:w-[75%] py-2 px-4 outline-none bg-white text-xl border-2 border-gray-300 rounded-[10px] "
                            />
                        </div>


                        <div className='w-[90%] flex flex-col md:flex-row gap-y-2 justify-between items-start md:items-center mb-8 '>
                            <label className='text-base font-[900] '>{name} name : </label>
                            <input 
                                type="text"
                                placeholder="eg. Yriel"
                                className=" w-[100%] md:w-[75%] py-2 px-4 outline-none bg-white text-xl border-2 border-gray-300 rounded-[10px] "
                            />
                        </div>


                        <div className='w-[90%] flex flex-col md:flex-row gap-y-2 justify-between items-start md:items-center mb-8 '>
                            <label className='text-base font-[900] '>{type} : </label>
                            
                            <div className='w-[100%] md:w-[75%] flex flex-row flex-wrap justify-between gap-y-2 text-xl'>
                                <div>
                                    <input 
                                        type="radio"
                                        value="sales_lettings"
                                        name='agent_type'
                                        id='sales_lettings'
                                        className='w-[15px] h-[15px] '
                                    />
                                    &nbsp;
                                    <label for="sales_lettings">Sales and lettings</label>
                                </div>

                                <div>
                                    <input 
                                        type="radio"
                                        value="sales"
                                        name='agent_type'
                                        id='sales'
                                        className='w-[15px] h-[15px] '
                                    />
                                    &nbsp;
                                    <label for="sales">Sales</label>
                                </div>

                                <div>
                                    <input 
                                        type="radio"
                                        value="lettings"
                                        name='agent_type'
                                        id='lettings'
                                        className='w-[15px] h-[15px] '
                                    />
                                    &nbsp;
                                    <label for="sales_lettings">lettings</label>
                                </div>

                            </div>
                        </div>

                        <div className='w-[50%] flex flex-row justify-center cursor-pointer bg-blue-800 text-white text-2xl py-2 px-4 rounded-[10px] my-8 '>
                            Search.....
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default ReusableAgentsHomeComponent