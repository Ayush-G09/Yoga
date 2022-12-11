import React, { useState } from 'react'
import MakePayment from '../components/MakePayment';
import PaymentSuccesful from '../components/PaymentSuccesful';

function Registration(props) {

    const [isPaymentSectionOpen, setIsPaymentSectionOpen] = useState(false);
    const [showSuccesful, setShowSuccesful] = useState(false);

    function TogglePaymentSection() {
        setIsPaymentSectionOpen(!isPaymentSectionOpen);
    }

    function ToggleShowSuccesfull() {
        setShowSuccesful(!showSuccesful);
    }

  return (
    <div className='w-screen h-screen flex flex-col relative sm:flex-row'>
        <div className='bg-[#FFFFFF] w-full h-1/3 flex flex-col justify-center items-center sm:w-1/2 sm:h-full'>
            <span className='text-3xl font-bold text-[#89f7df] sm:text-5xl'>Join <span className='text-black'>Our Classes</span></span>
            <img src='././yoga3.webp' className='h-3/4 sm:h-auto sm:w-full' alt='yoga'/>
        </div>
        <div className='bg-[#89f7df] w-full h-2/3 flex flex-col sm:w-1/2 sm:h-full'>
            <label className='text-xl font-bold ml-16 mt-5 sm:mt-40 sm:ml-28'>Name</label>
            <input type='text' placeholder='Abc' className='w-1/2 sm:w-2/5 ml-16 sm:ml-28 h-8 rounded-lg p-2 outline-none placeholder-black'></input>
            <label className='text-xl font-bold ml-16 sm:ml-28 mt-5'>DOB</label>
            <input type='date' className='bg-white w-1/2 sm:w-2/5 ml-16 sm:ml-28 h-8 rounded-lg p-2 outline-none placeholder-black'></input>
            <label className='text-xl font-bold ml-16 sm:ml-28 mt-5'>Email <label className='text-sm text-red-500'>(Optional)</label></label>
            <input type='email' placeholder='abc@domain.com' className='w-1/2 sm:w-2/5 ml-16 sm:ml-28 h-8 rounded-lg p-2 outline-none placeholder-black'></input>
            <label className='text-xl font-bold ml-16 sm:ml-28 mt-5'>Select Batch</label>
            <select name='batch' id='batch' className='bg-white w-2/3 sm:w-2/5 ml-16 sm:ml-28 h-8 rounded-lg px-1 outline-none'>
                <option value='b1'>Morning Batch - 06:00 Am to 07:00 Am</option>
                <option value='b2'>Morning Batch - 07:00 Am to 08:00 Am</option>
                <option value='b3'>Morning Batch - 08:00 Am to 09:00 Am</option>
                <option value='b4'>Morning Batch - 07:00 Pm to 08:00 Pm</option>
            </select>
            <div onClick={() => setIsPaymentSectionOpen(true)} className='ml-16 sm:ml-28 bg-white text-black text-lg font-bold mt-7 sm:mt-10 w-3/12 sm:w-1/6 sm:h-10 flex items-center justify-center h-8 rounded-lg shadow-lg shadow-gray-400 cursor-pointer'>Submit</div>
        </div>
        {isPaymentSectionOpen ? 
        <MakePayment ss={ToggleShowSuccesfull} mp={TogglePaymentSection}/>
        : null
        }
        {showSuccesful ? 
        <PaymentSuccesful ss={ToggleShowSuccesfull} p={props}/>
        : null
        }
    </div>
  )
}

export default Registration