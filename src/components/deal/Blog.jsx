import React from 'react'
import BlogData from '../../data/blog'
import { Link } from 'react-router-dom'


const DealBlog = () => {
  return (
    <div className='w-[100%] h-[100%] flex flex-row justify-center my-20'>
        <div className='w-[90%] 5xl:w-[60%] h-[100%] flex flex-col items-start '>
            <h1 className='text-5xl font-[900] mb-8 '>Looking for facts, figures or property advice?</h1>

            <p className='text-xl '>Just ask omyHome</p>

            <div className="flex justify-end content-center">
                <Link to="#" className="text-blue-400 underline hover:text-[red]" >See all</Link>
            </div>

            <div className='w-[100%] flex flex-row justify-evenly flex-wrap gap-x-4 gap-y-4 '>
                {
                    BlogData.map((blog, id) => (
                        <div key={id} className='w-[500px] h-[100%] flex flex-col  my-12 '>
                            <div className='w-[100%] h-[350px]'>
                                <img src={blog.image} alt="blog1" className='w-[100%] h-[100%] rounded-[20px]' />
                            </div>

                            <div className='mt-4'>
                                <h3 className='text-2xl tracking-[2px] leading-[35px] '>{blog.title}</h3>
                                <br />
                                <p>{blog.date}</p>
                            </div>

                            <p className='hidden md:flex mt-4 text-lg tracking-[2px] text-ellipsis'>{blog.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default DealBlog