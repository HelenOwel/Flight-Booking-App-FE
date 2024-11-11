import React from 'react'
import Desinate from '../assets/images/abuja-destination.png'

function Destination() {
  return (
    <div>
       <div className='mt-16 mx-auto pb-8 bg-gray-100 w-[80%]'>
        <h1 className=' mx-40 pt-8 text-2xl'>Our <span className='border-b border-[#080A5F]'>Destination</span> </h1>
        <div className="grid gap-7 mx-6 mt-5 md:grid-cols-2">
            <div >
                <img src={Desinate} alt="/" className='md:h-[300px]'/>
            </div>
            <p>
            At MQ's Flights, we believe that the world is a boundless adventure waiting to be explored. Our goal is to connect travellers with their dream destinations, whether it's the vibrant streets of a bustling city, the tranquile shores of an exotic beach, or the magestic heights of a far-off mountain range. We are committed to providing access to a diverse array of destinations, fostering a love for travel, discovery, and cultural exploration. With us, every journey is an opportunity to make unforgettable memories, and we are here to help you embark on your next incredible adventure.
            </p>
        </div>

       </div>



       <div className='mt-16 mx-auto pb-8 bg-gray-100 w-[80%] mb-9'>
        <h1 className=' mx-40 pt-8 text-2xl'>Our <span className='border-b border-[#080A5F]'>Mission</span> </h1>
        <div className="grid gap-7 mx-6 mt-5 md:grid-cols-2 ">
            <p>
            At MQ's Flights, we believe that the world is a boundless adventure waiting to be explored. Our goal is to connect travellers with their dream destinations, whether it's the vibrant streets of a bustling city, the tranquile shores of an exotic beach, or the magestic heights of a far-off mountain range. We are committed to providing access to a diverse array of destinations, fostering a love for travel, discovery, and cultural exploration. With us, every journey is an opportunity to make unforgettable memories, and we are here to help you embark on your next incredible adventure.
            </p>
            <div>
                <img src={Desinate} alt="/" className='md:h-[300px]'/>
            </div>
        </div>

       </div>
    </div>
  )
}

export default Destination