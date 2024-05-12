import React from 'react'
import {accounts} from '../JsonObject.json'
const Accounts = () => {
  return (
    <section className='bg-slate-200 p-2 '>
        <h2 className='mb-4  md:text-4xl sm:text-2xl font-bold border border-spacing-1 border-yellow-600 w-fit bg-yellow-400 px-3 py-1 rounded'>The value that holds us true and to account</h2>
        <div >
            <ul className='flex  flex-wrap flex-col md:flex-row gap-4 p-4 justify-center'>
           {
accounts.map((account,index)=>(
<li key={index} className='border bg-white border-black rounded shadow-lg md:w-1/4 p-4 hover:bg-yellow-100'>
  <div className='flex gap-2 items-center'>
  <img src={account.image} alt='no image' className='w-12 h-12 rounded-full'/>
    <div className='font-bold text-md'>{account.name} </div></div>
    <hr className='my-2 '/>
    <p>{account.description} </p>
</li>
))
           }
           </ul>

        </div>
      
    </section>
  )
}

export default Accounts
