import React from 'react'

function Booking() {
  return (
    <div>
        <div class='w-[1200px] mt-20 '>
            <div className=' w-[60%] md:w-full '>
            <h1 className=' mx-3 md:mx-40 text-md'> <strong>User</strong> <span>please Login to book </span> <strong>Status:</strong> Registered</h1>
           <div className='flex  mx-3 md:mx-40 mt-3'>
           <label for="choices" className='py-2 font-bold'>Currency:</label>
            <select id="choices" name="choices" className=' w-[40%] md:w-full py-2 border focus:outline-none'>
            <option value="option1">Currency</option>
            <option value="option2">Nigeria</option>
            </select>
           </div>
            <div className='my-4 w-[60%] md:w-full'>
            <label htmlFor="" className=' mx-3 md:mx-40'><input type="checkbox" name="One Way" id="" className='font-bold' />One Way</label>
            <label htmlFor="" className=' mx-24 md:mx-40'> <input type="checkbox" name="" id="" className='font-bold'  />Round Trip</label>
            </div>
            
            <div className='grid md:grid-cols-2 mx-3 gap-y-5 md:gap-4 md:mx-40'>
            <div>
                <label For="choices" className='font-bold'>Flying From:
                    <select name="" id="" className=' w-[40%]  md:w-full font-bold  py-2 border focus:outline-none '>
                        <option value="1">Select City</option>
                        <option value="1">Lagos</option>
                        <option value="1">Abuja</option>
                        <option value="1">Portharcourt</option>
                    </select>
                </label>
            </div>
            <div>
                <label For="choices" className='font-bold'>Flying To:
                    <select name="" id="" className=' w-[40%] font-bold md:w-full py-2 border focus:outline-none hover:focus:outline-blue-500' >
                        <option value="1">Select City</option>
                        <option value="1">Kano</option>
                        <option value="1">Ibadan</option>
                        <option value="1">Enugu</option>
                    </select>
                </label>
            </div>
            <div className=''>
                <label For="choices" className='font-bold inline-block md:flex gap-y-4'>Flying To:
                   <input type="date" name="" id="" className=' w-[150%]  md:w-full border py-2 ' />
                </label>
            </div>
            </div>
            <div className='md:mx-40 mx-3 mt-4'>
                <label For="choices" className='font-bold inline-block md:flex  '>Flying To:
                    <select name="" id="" className=' w-[200%] md:w-full   font-bold   py-2 border focus:outline-none hover:focus:outline-blue-500' >
                        <option value="1">Select City</option>
                        <option value="1">Kano</option>
                        <option value="1">Ibadan</option>
                        <option value="1">Enugu</option>
                    </select>
                </label>
            </div>

            <div className='grid md:grid-cols-9 mx-3 md:mx-40  mt-4 gap-y-6 gap-6'>
           <div className='md:col-span-4'>
           <div>
                <label For="choices" className='font-bold'>Adult:
                </label>
            </div>
            <div>
            <select name="" id="" className='w-[118%] md:w-full font-bold  py-2 border focus:outline-none '>
                        <option value="1">Select City</option>
                        <option value="1">Lagos</option>
                        <option value="1">Abuja</option>
                        <option value="1">Portharcourt</option>
                    </select>
            </div>
           </div>


           <div className='col-span-3'>
           <div>
                <label For="choices" className='font-bold'>Flying From:
                </label>
            </div>
            <div>
            <select name="" id="" className='w-[50%] md:w-full font-bold  py-2 border focus:outline-none '>
                        <option value="1">Select City</option>
                        <option value="1">Lagos</option>
                        <option value="1">Abuja</option>
                        <option value="1">Portharcourt</option>
                    </select>
            </div>
           </div>



            <div className='col-span-2'>
           <div>
                <label For="choices" className='font-bold'>Flying From:
                </label>
            </div>
            <div>
            <select name="" id="" className='w-[70%] md:w-full font-bold  py-2 border focus:outline-none '>
                        <option value="1">Select City</option>
                        <option value="1">Lagos</option>
                        <option value="1">Abuja</option>
                        <option value="1">Portharcourt</option>
                    </select>
            </div>
           </div>
            </div>
           <div className='flex md:justify-end w-full  md:mx-48 mx-10 my-6'>
           <button className='   bg-[#080A5F] text-white md:mx-auto w-[45%] md:w-[40%] text-md font-serif py-2 rounded-md'>Book a Flight</button>
           </div>
            
            
            </div>
        </div>
    </div>
  )
}

export default Booking