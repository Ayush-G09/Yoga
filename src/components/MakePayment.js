import React from 'react'

function MakePayment(props) {
  return (
    <div className='absolute flex items-center justify-center bg-transparent w-full h-full'>
        <div className='bg-white w-3/4 sm:w-1/5 h-1/2 rounded-xl shadow-2xl flex flex-col justify-end items-center overflow-hidden'>
            <span className='text-xl font-bold h-1/6 flex items-center'>Complete Registartion</span>
            <div className='font-bold text-3xl bg-[#e5fbf6] w-36 h-36 flex rounded-full items-center justify-center shadow-xl'>500 Rs</div>
            <div className='w-3/5 h-1/6 flex items-center justify-between'>
                <img src='././card.png' className='h-3/4' alt='card'/>
                <img src='././upi.png' className='h-2/3' alt='upi'/>
            </div>
            <div className='flex w-full h-1/6'>
                <div onClick={() => props.mp()} className='bg-red-400 w-1/2 flex items-center justify-center text-white font-bold text-sm cursor-pointer'>Cancel</div>
                <div onClick={() => {props.ss(); props.mp()}} className='bg-green-400 w-1/2 flex items-center justify-center text-white font-bold text-sm cursor-pointer'>Make Payment</div>
            </div>
        </div>
    </div>
  )
}

export default MakePayment