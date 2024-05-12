import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
  return (
    <section className='bg-slate-200 p-4 mx-2 flex flex-col my-4 '>
            <div className='flex flex-col md:flex-row max-sm:justify-center my-4 p-2  bg-white gap-4 py-4 border border-black shadow-lg'>
<div className='flex gap-2 items-center'>
<IoMdSearch />
<input className='border text-blue-700 font-bold border-purple-600 w-2/3' type='text' placeholder='Ui designer'/>
</div>
<div className='flex gap-2 items-center'>
<IoHomeOutline />
<input className='border text-blue-700 font-bold  border-purple-600 w-2/3' type='text' placeholder='Name it'/>
</div>
<div className='flex gap-2 items-center'>
<IoLocationOutline />
<input className='border text-blue-700 font-bold  border-purple-600 w-2/3' type='text' placeholder='Desired Location'/>
</div>
<button className='bg-blue-500 px-3 py-1 rounded-md text-white hover:bg-blue-900'>Search</button>
            </div>
            <div className='flex flex-col items-center md:flex-row  py-2  gap-4 px-20 '>
           <div className='flex gap-1 items-center'>
            <h3>Sort by:</h3>
            <div className='flex items-center gap-2 bg-white rounded px-2 w-fit'>
                <h3>Starts With</h3>
                <IoIosArrowDown />
            </div>
           </div>
           <div className='flex gap-1 items-center'>
            <h3>Type:</h3>
            <div className='flex items-center gap-2 bg-white px-2 w-fit rounded'>
                <h3>Remote</h3>
                <IoIosArrowDown />
            </div>
           </div>
           <div className='flex items-center gap-1'>
            <h3>Level:</h3>
            <div className='flex items-center gap-2 bg-white px-2 w-fit rounded'>
                <h3>Senior</h3>
                <IoIosArrowDown />
            </div>
           </div>
           <div className='font-light hover:bg-slate-400 hover:text-white px-3 py-1'>
           Clear All
            </div>
                </div>  
    </section>
  )
}

export default Hero
