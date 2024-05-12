import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <section>
        <div className=' mx-2 bg-gray-100 flex justify-between items-center p-4'>
<div className='text-purple-500'><span className='font-bold'>Job</span>Search</div>
<div>
    <ul  className='flex gap-4 flex-col md:flex-row max-sm:hidden '>
       <li>Jobs</li>
       <li>Companies</li>
       <li>About</li>
       <li>Contact</li>
       <li>Blog</li>
       <li className='font-bold bg-blue-500 px-3 py-1 text-white rounded-md hover:bg-blue-900'>Login</li>
       <li className='font-bold bg-blue-500 px-3 py-1 text-white rounded-md hover:bg-blue-900'>Register</li>
    </ul>
    <GiHamburgerMenu className='md:hidden'/>
</div>
        </div>
      
    </section>
  )
}

export default Navbar
