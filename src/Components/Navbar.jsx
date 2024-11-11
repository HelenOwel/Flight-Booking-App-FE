import React, { useState } from 'react';
import { FaPlane, FaCaretLeft, FaBars, FaTwitter, FaTiktok, FaInstagram } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { Link } from 'react-router-dom';

function Nav() {
  const [nav, setNav] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const toggleContact = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className="w-full bg-[#080A5F] absolute z-10 text-white h-14 md:h-28">
        <div className="flex justify-between mx-6 md:pt-[30px]">
          
          <div className="flex text-white text-2xl gap-1">
            <FaPlane />
            <h1 className="font-3xl text-white">MQ'S FLIGHT</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <ul className="flex gap-6 text-white text-md text-center">
              <li className="border-white border md:px-2 md:py-2 bg-white text-gray-700 font-serif rounded-md">
                <Link to="/">Home</Link>
              </li>
              <li className="border-white border md:px-2 md:py-2 bg-white text-gray-700 font-serif rounded-md">
                <Link to="/checkIn">Check In</Link>
              </li>
              <li 
                className="border-white border md:px-2 md:py-2 bg-white text-gray-700 font-serif rounded-md relative"
                onClick={toggleContact}
              >
               <div className='flex'>
                <div className='pt-1'>
                  <FaCaretLeft/>
                </div>
               <Link to="#">Contact Us</Link>
               </div>

                {/* Contact Information Popup */}
                {isVisible && (
                  <div className="flex justify-center items-center bg-cover z-10 absolute bg-center top-0 mt-2 -left-80">
                    <div className="bg-slate-700 text-white rounded-lg p-8 w-80 shadow-lg">
                      <h2 className="text-2xl font-bold mb-4 text-center">Contact Details</h2>
                      <p className="text-center mb-4">Feel free to contact us with questions</p>
                      <p className="text-center font-semibold mb-6">Email: helenowel6@gmail.com</p>
                      <div className="flex justify-center space-x-4">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                          <FaTwitter className="w-6 h-6 text-blue-400 hover:text-blue-500" />
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                          <FaTiktok className="w-6 h-6 text-black hover:text-gray-600" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                          <FaInstagram className="w-6 h-6 text-pink-500 hover:text-pink-600" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li className="border-white border md:px-2 md:py-2 bg-white text-gray-700 font-serif rounded-md">
              <div className='flex'>
                <div className='pt-1'>
                  <FaCaretLeft/>
                </div>
               <Link to="/login">Login</Link>
               </div>

              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-2xl text-white" onClick={toggleNav}>
            {nav ? <MdOutlineClose /> : <FaBars />}
          </div>

          {/* Mobile Navigation */}
          <div
            className={`absolute h-screen pt-3 w-[70%] bg-gray-900 text-white md:hidden transition-transform duration-500 ${
              nav ? "right-0" : "right-[-100%]"
            }`}
          >
            <div className="flex justify-between mx-3">
              <div className="flex text-1xl gap-2">
                <FaPlane />
                <h1 className="font-3xl">MQ'S FLIGHT</h1>
              </div>
              <div onClick={toggleNav} className="font-bold text-2xl">
                <MdOutlineClose />
              </div>
            </div>
            <ul className="block pt-16 text-md text-center">
              <li className="border bg-white my-7 py-3 mx-2 text-gray-700 font-serif rounded-md">
                <Link to="/">Home</Link>
              </li>
              <li className="border bg-white my-7 py-3 mx-2 text-gray-700 font-serif rounded-md">
                <Link to="/checkIn">Check In</Link>
              </li>
              <li className="border bg-white my-7 py-3 mx-2 text-gray-700 font-serif rounded-md">
                <Link to="#" onClick={toggleContact}>Contact Us</Link>
              </li>
              <li className="border bg-white my-7 py-3 mx-2 text-gray-700 font-serif rounded-md">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
