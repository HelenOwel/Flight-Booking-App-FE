import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Backy from './assets/images/IMG_3146.jpg';
import img from './assets/images/abuja-destination.png';
import { FaTimes } from "react-icons/fa";
import {Link} from 'react-router-dom'

function CheckInModal() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
    >
      <img src={Backy} alt="background" className="bottom-0 h-screen z-0" />

      <div data-aos="fade-down"
      data-aos-delay="300"
      id="mains"
        className="absolute z-10 top-[20%] w-[70%] bg-slate-400 mx-auto items-center left-[15%] shadow-lg space-y-3"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <form
          action=""
          className="space-y-8 object-contain py-16 shadow-2xl"
        >
          <div className="border w-full mb-8">
           <Link to='/'> <FaTimes className="bg-red-400 w-5 h-6 text-white text-xl absolute right-9 top-6" /></Link>
          </div>
          <div className="px-4 space-y-8">
            <input type="text" placeholder="Booking Reference" className="w-full py-3 border font-bold px-2" /> <br />
            <input type="text" placeholder="Contact Email" className="w-full py-3 border font-bold px-2" /> <br />
            <button className="w-full bg-green-400 py-2 my-4 mx-auto text-center">Proceed</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckInModal;
