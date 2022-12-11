import React, { useState } from 'react'
import MakePayment from '../components/MakePayment';
import PaymentSuccesful from '../components/PaymentSuccesful';

function UserDashboard(props) {

    const [isPaymentSectionOpen, setIsPaymentSectionOpen] = useState(false);
    const [showSuccesful, setShowSuccesful] = useState(false);

    function TogglePaymentSection() {
        setIsPaymentSectionOpen(!isPaymentSectionOpen);
    }

    function ToggleShowSuccesfull() {
        setShowSuccesful(!showSuccesful);
    }

  return (
    <div className='w-screen h-screen justify-center items-center flex-col flex sm:flex-row'>
        <div className='bg-[#F2E7E5] w-full h-1/3 flex flex-col justify-center items-center sm:w-1/2 sm:h-full'>
            <img src='././yoga.gif' className='h-full sm:h-3/4' alt='yoga'/>
        </div>
        <div className='bg-[#FEFEFE] w-full h-2/3 sm:w-1/2 sm:h-full flex flex-col'>
            <div className='h-1/6 flex items-center pl-10 text-2xl font-bold'>Hello User</div>
            <label className='text-xl w-1/2 font-bold ml-16 sm:ml-28 mt-5'>Current Batch</label>
            <select name='batch' id='batch' className='w-2/3 pointer-events-none sm:w-2/5 ml-16 sm:ml-28 h-8 border-2 border-red-300 rounded-lg px-1 outline-none'>
                <option value='b1'>Morning Batch - 06:00 Am to 07:00 Am</option>
                <option value='b2'>Morning Batch - 07:00 Am to 08:00 Am</option>
                <option value='b3'>Morning Batch - 08:00 Am to 09:00 Am</option>
                <option value='b4'>Morning Batch - 07:00 Pm to 08:00 Pm</option>
            </select>
            <span className='w-2/3 sm:w-2/5 ml-16 sm:ml-28 p-5 text-red-400 font-bold'>You will be able to change batch and make payment in next month.</span>
            <div onClick={() => setIsPaymentSectionOpen(true)} className='w-1/2 sm:w-1/4 h-10 bg-red-500 text-white ml-16 sm:ml-28 flex items-center justify-center rounded-lg shadow-2xl shadow-gray-400 cursor-pointer font-bold'>Make Payment</div>
        </div>
        {isPaymentSectionOpen ? 
        <MakePayment ss={ToggleShowSuccesfull} mp={TogglePaymentSection}/>
        : null
        }
        {showSuccesful ? 
        <PaymentSuccesful ss={ToggleShowSuccesfull}/>
        : null
        }
    </div>
  )
}

export default UserDashboard