import React, {useState} from 'react'
import { MdArrowDropUp, MdArrowDropDown} from "react-icons/md"
const SecondSection = () => {

    const [dealType, setDealType] = useState(false);
    const [city, setCity] = useState(false);
    const [minPrice, setMinPrice] = useState(false);
    const [maxPrice, setMaxPrice] = useState(false);
    const [bedrooms, setBedrooms] = useState(false);

    const handleDealType = () => {
        if ( (city || minPrice || maxPrice || bedrooms !== false) ){
            setCity(false);
            setMinPrice(false);
            setMaxPrice(false);
            setBedrooms(false);
            setDealType(!dealType);
        }
        else{
            setDealType(!dealType);
        }
    }

    const handleCity = () => {
        if ( (dealType || minPrice || maxPrice || bedrooms !== false) ){
            setDealType(false);
            setMinPrice(false);
            setMaxPrice(false);
            setBedrooms(false);
            setCity(!city);
        }
        else{
            setCity(!city);
        }
    }

    const handleMinPrice = () => {
        if ( (dealType || city || maxPrice || bedrooms !== false) ){
            setDealType(false);
            setCity(false);
            setMaxPrice(false);
            setBedrooms(false);
            setMinPrice(!minPrice);
        }
        else{
            setMinPrice(!minPrice);
        }
    }

    const handleMaxPrice = () => {
        if ( (city || minPrice || dealType || bedrooms !== false) ){
            setCity(false);
            setMinPrice(false);
            setDealType(false);
            setBedrooms(false);
            setMaxPrice(!maxPrice);
        }
        else{
            setMaxPrice(!maxPrice);
        }
    }

    const handleBedrooms = () => {
        if ( (city || minPrice || maxPrice || dealType !== false) ){
            setCity(false);
            setMinPrice(false);
            setMaxPrice(false);
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
            <div className='w-[100%] h-[90%] md:h-[60%] flex flex-col justify-evenly '>
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
                                        type="checkbox"
                                        value="apartments"
                                        className='w-[15px] h-[15px] '
                                    />
                                    &nbsp;
                                    <label>Apartments</label>
                                </div>

                                <div className="flex flex-row content-center items-center mb-2 text-xl ">
                                    <input 
                                        type="checkbox"
                                        value="houses"
                                        className='w-[15px] h-[15px] '
                                    />
                                    &nbsp;
                                    <label>Houses</label>
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
                                <div className="border-[1px] border-gray-300 border-x-transparent border-t-transparent ">
                                    <div className="flex flex-row content-center items-center my-4 text-xl">
                                        <input 
                                            type="checkbox"
                                            value="Accra"
                                            className='w-[15px] h-[15px] '
                                        />
                                        &nbsp;
                                        <label>Accra</label>
                                    </div>

                                    <div className="flex flex-row content-center items-center mb-4 text-xl ">
                                        <input 
                                            type="checkbox"
                                            value="Tema"
                                            className='w-[15px] h-[15px] '
                                        />
                                        &nbsp;                                           
                                        <label>Tema</label>
                                    </div>

                                    <div className="flex flex-row content-center items-center mb-4 text-xl ">
                                        <input 
                                            type="checkbox"
                                            value="Kumasi"
                                            className='w-[15px] h-[15px] '
                                        />
                                        &nbsp;                                           
                                        <label>Kumasi</label>
                                    </div>

                                </div>
                            : ""
                        }
                </div>


                <div className='flex flex-col'>
                    <div onClick={() => handleMinPrice()} className='w-[100%] flex flex-row justify-between cursor-pointer '>

                        <span className='font-[400] text-base md:text-xl tracking-[5px] '>
                            MIN. PRICE
                        </span>

                        <span className='text-base md:text-xl '>
                            {
                                minPrice 
                                ? <MdArrowDropUp />
                                : <MdArrowDropDown />
                            }
                        </span>
                    </div>
                    <hr className='bg-[#470584]' />
                    {
                        minPrice ? 
                            <div className="border-[1px] border-gray-300 border-x-transparent border-t-transparent ">
                                <div className="flex flex-row content-center items-center my-2 ">
                                <input 
                                    type="number"
                                    placeholder="$1"
                                    className="w-[90%] py-2 px-4 outline-none mt-4 bg-white text-xl "
                                />
                                </div>
                            </div>
                        : ""
                    }
                </div>


                <div className='flex flex-col'>
                    <div onClick={() => handleMaxPrice()} className='w-[100%] flex flex-row justify-between cursor-pointer '>

                        <span className='font-[400] text-base md:text-xl tracking-[5px] '>
                            MAX. PRICE
                        </span>

                        <span className='text-base md:text-xl '>
                            {
                                maxPrice 
                                ? <MdArrowDropUp />
                                : <MdArrowDropDown />
                            }
                        </span>
                    </div>
                    <hr className='bg-[#470584]' />
                    {
                        maxPrice ? 
                            <div className="border-[1px] border-gray-300 border-x-transparent border-t-transparent ">
                                <div className="flex flex-row content-center items-center my-2 ">
                                <input 
                                    type="number"
                                    // value="from"
                                    placeholder="$1"
                                    className="w-[90%] py-2 px-4 outline-none mt-4 bg-white text-xl "
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