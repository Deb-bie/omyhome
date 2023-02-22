import React, {useState} from 'react'
import { MdArrowDropUp, MdArrowDropDown} from "react-icons/md"

const SecondSection = () => {

    const [dealType, setDealType] = useState(false);
    const [city, setCity] = useState(false);
    const [price, setPrice] = useState(false);
    const [bedrooms, setBedrooms] = useState(false);

    const handleDealType = () => {
        if ( (city || price || bedrooms !== false) ){
            setCity(false);
            setPrice(false);
            setBedrooms(false);
            setDealType(!dealType);
        }
        else{
            setDealType(!dealType);
        }
    }

    const handleCity = () => {
        if ( (dealType || price || bedrooms !== false) ){
            setDealType(false);
            setPrice(false);
            setBedrooms(false);
            setCity(!city);
        }
        else{
            setCity(!city);
        }
    }


    const handleprice = () => {
        if ( (city || dealType || bedrooms !== false) ){
            setCity(false);
            setDealType(false);
            setBedrooms(false);
            setPrice(!price);
        }
        else{
            setPrice(!price);
        }
    }

    const handleBedrooms = () => {
        if ( (city || price || dealType !== false) ){
            setCity(false);
            setPrice(false);
            setDealType(false);
            setBedrooms(!bedrooms);
        }
        else{
            setBedrooms(!bedrooms);
        }
    }


    return (
        <div className='w-[90%] 2xl:w-[80%] h-[90%] flex flex-col items-center content-center justify-around '>
            <h2 className='md:text-base 2xl:text-2xl font-[600] leading-[50px] tracking-[5px]'>FIND YOUR NEW HOME</h2>

            <div className='w-[100%] h-[90%] md:h-[50%] flex flex-col justify-evenly '>
                <div className='flex flex-col'>
                    <div onClick={() => handleDealType()} className='w-[100%] flex flex-row justify-between cursor-pointer '>
                        <span className='font-[400] text-base md:text-xl tracking-[5px] '>
                            DEAL TYPE
                        </span>

                        <span className='text-base md:text-xl '>
                            {
                                dealType 
                                ? <MdArrowDropUp />
                                : <MdArrowDropDown />
                            }
                        </span>
                    </div>

                    <hr className='bg-[#470584]' />

                    {
                        dealType ? 
                            <div className="border-[1px] border-gray-300 border-x-transparent border-t-transparent ">
                                <div className="flex flex-row content-center items-center my-4 text-xl ">
                                    <input 
                                        type="radio"
                                        value="rent"
                                        className='w-[15px] h-[15px] '
                                    />
                                    &nbsp;
                                    <label>Rent a property</label>
                                </div>

                                <div className="flex flex-row content-center items-center mb-2 text-xl ">
                                    <input 
                                        type="radio"
                                        value="buy"
                                        className='w-[15px] h-[15px] '
                                    />
                                    &nbsp;
                                    <label>Buy a property</label>
                                </div>
                            </div>
                        : ""
                    }
                </div>

                <div className='flex flex-col'>
                    <div onClick={() => handleCity()} className='w-[100%] flex flex-row justify-between cursor-pointer '>
                        <span className='font-[400] text-base md:text-xl tracking-[5px] '>
                            CITY
                        </span>

                        <span className='text-base md:text-xl '>
                            {
                                city 
                                ? <MdArrowDropUp />
                                : <MdArrowDropDown />
                            }
                        </span>
                    </div>
                    <hr className='bg-[#470584]' />
                        {
                            city ? 
                                <div className='w-[100%] flex flex-row justify-evenly items-center mt-8 mb-4 '>
                                    <input 
                                    type="text"
                                    // value="from"
                                    placeholder="eg. Oxford"
                                    className="w-[90%] py-2 px-4 outline-none bg-white text-xl rounded-[10px] "
                                />

                                    {/* <div className='w-[15%] flex flex-row justify-center bg-blue-800 text-white text-xl py-2 px-4 rounded-[10px] '>
                                        <BiSearch />
                                    </div> */}
                                </div>
                            : ""
                        }
                </div>


                <div className='flex flex-col'>
                    <div onClick={() => handleprice()} className='w-[100%] flex flex-row justify-between cursor-pointer '>

                        <span className='font-[400] text-base md:text-xl tracking-[5px] '>
                            PRICE
                        </span>

                        <span className='text-base md:text-xl '>
                            {
                                price 
                                ? <MdArrowDropUp />
                                : <MdArrowDropDown />
                            }
                        </span>
                    </div>
                    <hr className='bg-[#470584]' />
                    {
                        price ? 
                            <div className="border-[1px] border-gray-300 border-x-transparent border-t-transparent ">
                                <div className="flex flex-col content-center items-start my-2 ">
                                    <h1>Min. Price</h1>

                                    <input 
                                        type="number"
                                        // value="from"
                                        placeholder="$1"
                                        className="w-[90%] py-2 px-4 outline-none my-4 bg-white text-xl rounded-[10px] "
                                    />

                                    <h1>Max. Price</h1>

                                    <input 
                                        type="number"
                                        // value="from"
                                        placeholder="$1"
                                        className="w-[90%] py-2 px-4 outline-none my-4 bg-white text-xl rounded-[10px] "
                                    />
                                </div>
                            </div>
                        : ""
                    }
                </div>

                <div className='flex flex-col'>
                    <div onClick={() => handleBedrooms()} className='w-[100%] flex flex-row justify-between cursor-pointer '>
                        <span className='font-[400] text-base md:text-xl tracking-[5px] '>
                            BEDROOMS
                        </span>

                        <span className='text-base md:text-xl '>
                            {
                                bedrooms 
                                ? <MdArrowDropUp />
                                : <MdArrowDropDown />
                            }
                        </span>
                    </div>
                    <hr className='bg-[#470584]' />
                    {
                        bedrooms ? 
                            <div className="border-[1px] border-gray-300 border-x-transparent border-t-transparent ">
                                <div className="flex flex-row content-center items-center my-2 text-xl ">
                                    <input 
                                        type="checkbox"
                                        value="1"
                                        className='w-[15px] h-[15px] '
                                    />
                                    &nbsp;
                                    <label>1</label>
                                </div>
                                
                                <div className="flex flex-row content-center items-center mb-2 text-xl ">
                                    <input 
                                        type="checkbox"
                                        value="2"
                                        className='w-[15px] h-[15px]'
                                    />
                                    &nbsp;
                                    <label>2</label>
                                </div>

                                <div className="flex flex-row content-center items-center mb-2 text-xl">
                                    <input 
                                        type="checkbox"
                                        value="3"
                                        className='w-[15px] h-[15px] '
                                    />
                                    &nbsp;                                       
                                    <label>3</label>
                                </div>

                            </div>
                        : ""
                    }
                </div>

            </div>

            <button className='w-[90%] py-4 rounded-[10px] bg-[#2f2f6cdb] text-white '>
                SEARCH
            </button>
                
        </div>
    )
}

export default SecondSection;