import React from 'react'
import {data} from '../JsonObject.json'
const Cards = () => {
  return (
    <section className='mx-2 mb-4' >
      <h3 className='mb-2 md:text-4xl font-bold border border-spacing-1 border-yellow-600 w-fit bg-yellow-400 px-3 py-1 rounded '>Jobs Recommended</h3>
        <div>
            <ul className='flex flex-col md:flex-row gap-6 p-2   flex-wrap justify-center  '>
            {
                data.map((job,index)=>(
<li key={index} className='border hover:bg-yellow-100 bg-white border-black shadow-lg rounded flex  flex-col p-2 md:w-1/4'>
<h3 className='font-bold text-md'> {job.name}</h3>
<h2 className='mb-4'>{job.location}</h2>
<hr/>
<p className='my-4 font-thin text-sm '>{job.description} </p>
<div className='flex items-center gap-2 mb-2'>
  <img src={job.image} alt='no image' className='w-10 h-10 rounded-full'/>
  <h3 className='font-bold text-blue-600'>{job.company}</h3>
</div>
<button className='px-4 py-2 border text-white text-sm border-black rounded bg-blue-600'>Apply Now</button>
</li>
                ))
            }
            </ul>
        </div>
      
    </section>
  )
}

export default Cards
