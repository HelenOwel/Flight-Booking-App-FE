import React from 'react'
import { FaInstagram, FaTiktok, FaTwitter, FaFacebook, FaPlane } from 'react-icons/fa'

function Footer() {
  return (
    <div>
    <div className='bg-[#080A5F] text-white border-b border-gray-300 w-full pb-9 '>
    <div className="grid font-serif space-y-6 md:grid-cols-3 w-[1200px] mx-10 md:mx-40 ">
        <div>
        <div className="flex  pt-6 text-white text-2xl gap-1">
          <FaPlane />
          <h1 className="font-3xl text-white">MQ'S FLIGHT</h1>
        </div>
        <h2 className='pt-3'>Follow Us</h2>
       <div className='flex gap-5 pt-3 text-3xl '>
       <FaFacebook />
        <FaTiktok />
        <FaTwitter />
        <FaInstagram />
       </div>
        <h1 className="text-2xl border-2 w-[15%] md:w-[40%] mt-4 mb-4  ">MQ'S FLIGHT</h1>
        <p className='hidden md:block'>wuesemimi@gmail.com</p>
        <p className='hidden md:block'>+234 815 272 39</p>
        </div>

        <div className=''>
            <h1 className='font-bold text-2xl pb-1'>ABOUT MQ's FLIGHT</h1>
            <ul>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Our team</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Careers</a></li>
            </ul>
        </div>

        <div >
            <h1 className='font-bold text-2xl pb-1'>SUPPORT</h1>
            <ul>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Offices</a></li>
                <li><a href="#">FAQs</a></li>
            </ul> <br />
            <div className=' pt-3 block md:hidden'>
                <h1 className='font-bold text-2xl pb-1' >MQ's Flight</h1>
                <p>wuesemimi@gmail.com</p>
                <p>+234 815 272 39</p>
            </div>
        </div>


      </div>
      <div  className='border-t md:mx-10 mt-8 border-teal-500 mx-20  '>
        <p className='text-center pt-6'>Copyright <p className='inline'>&copy; 2023 MQ's Flight</p></p>
      </div>
    </div>
    </div>
  )
}

export default Footer
