import React from 'react'

function MobileNumber(props) {
  return (
    <div className='w-screen h-screen flex flex-col relative sm:flex-row'>
      <div className='bg-[#F6FFFD] w-full h-1/3 sm:w-1/2 sm:h-full flex items-center justify-center border-b-2 border-[#89f7df] sm:border-r-2 sm:border-b-0'>
        <img src='././yoga2.gif' className='h-full sm:w-full sm:h-auto' alt='yoga'/>
      </div>
      <div className='bg-white w-full h-2/3 sm:w-1/2 sm:h-full flex flex-col'>
        <span className='sm:text-5xl md:text-6xl text-4xl font-bold text-black ml-20 sm:ml-28 sm:mt-32 mt-16'>The Shiv <span className='text-[#89f7df]'>Yoga</span> Studio</span>
        <label className='text-xl font-bold text-black ml-20 sm:ml-32 sm:mt-32 mt-16'>Mobile Number</label>
        <input type='number' placeholder='9********7' className='border-[#89f7df] ml-20 sm:ml-32 outline-none border-2 w-2/5 h-10 rounded-lg px-2 text-lg'></input>
        <div onClick={() => props.change(1)} className='bg-[#89f7df] rounded-lg w-24 h-10 ml-20 sm:ml-32 mt-8 flex items-center justify-center text-xl font-bold shadow-lg shadow-gray-400 cursor-pointer'>Next</div>
      </div>
    </div>
  )
}

export default MobileNumber