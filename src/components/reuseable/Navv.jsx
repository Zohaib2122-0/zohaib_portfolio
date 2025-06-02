import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navv = () => {



  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };





  return (
    <nav className="bg-darkbg border-b-2  border-gray-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex justify-center items-center">
              <Link to={"/"} className="text-2xl font-bold text-blue-600 mt-3 ">


                <img className='w-10 h-10 rounded-lg' src="https://avatars.mds.yandex.net/i?id=ea6e17f0d187067bdf69eafe8bf7ff219f4bd6b7-5086977-images-thumbs&n=13" alt="" />
              </Link>
            </div>
            <div className="hidden md:flex space-x-4 ml-52 mt-4">
              <Link to={"/"} className="text-cont hover:text-lab px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>




              <div className='hidden md:flex space-x-4 ml-52 mt-1'>

                <Link to={"/about"} className="text-cont hover:text-lab px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                {/* <Link to={"/queries"} className="text-cont hover:text-lab px-3 py-2 rounded-md text-sm font-medium">
                  Messages
                </Link> */}
             
                <Link to={"/services"} className="text-cont hover:text-lab px-3 py-2 rounded-md text-sm font-medium">
                  Services
                </Link>
                <Link to={"/portfolio"} className="text-cont hover:text-lab px-3 py-2 rounded-md text-sm font-medium">
                  portfolio
                </Link>
                   <Link to={"/upload"} className="text-cont hover:text-lab px-3 py-2 rounded-md text-sm font-medium">
                  upload
                </Link>
              </div>


            </div>
          </div>

          {/* Login & Signup Buttons */}
          <div className="md:flex items-center ">


            <button
           className="py-2 px-3 bg-lab text-black font-medium rounded-lg hover:bg-yellow-300 transition">

              <Link to={"/contact"}>
                Contact Us
              </Link>
            </button>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-cont hover:text-lab focus:outline-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to={"/"} className="text-cont hover:text-lab block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>


            <Link to={"/services"} className="text-cont hover:text-lab block px-3 py-2 rounded-md text-base font-medium">
              Services
            </Link>
            {/* <Link to={"/queries"} className="text-cont hover:text-lab block px-3 py-2 rounded-md text-base font-medium">
              messages
            </Link> */}
           
            <Link to={"/portfolio"} className="text-cont hover:text-lab block px-3 py-2 rounded-md text-base font-medium">
              Portfolio
            </Link>
            <Link to={"/about"} className="text-cont hover:text-lab block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>

            <Link to={"/contact"} className="text-cont hover:text-lab block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
 <Link to={"/upload"} className="text-cont hover:text-lab block px-3 py-2 rounded-md text-base font-medium">
              upload
            </Link>
            <button

              className="py-2 px-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition"
            >

              <div className=' text-white scale-100  hover:text-red-600  text-sm'>
                <Link to={"/contact"}>Contact Us</Link> </div>
            </button>

          </div>
        </div>
      )}
    </nav>
  );
};

