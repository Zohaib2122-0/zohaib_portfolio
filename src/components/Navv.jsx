import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogoutMutation } from './redux/userapislice';

export const Navv = () => {
  const [logout, { isLoading }] = useLogoutMutation()
  const token = localStorage.getItem('auth token')

  const [authToken, setAuthToken] = useState(localStorage.getItem('auth token'));

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const handlelogout = async () => {
    try {

      let response = await logout().unwrap()
      let token = localStorage.getItem("auth token")

      if (token) {
        localStorage.removeItem("auth token")
        setAuthToken(null)
      } else {


        console.log("user not found")
      }

    } catch (error) {
      console.log(error.message)
    }
  }


  return (
    <nav className="bg-white border-b-2  border-gray-400 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0">
              <Link to={"/"} className="text-2xl font-bold text-blue-600 mt-3 ">


                <img className='w-20 h-20 rounded-lg' src="https://avatars.mds.yandex.net/i?id=ea6e17f0d187067bdf69eafe8bf7ff219f4bd6b7-5086977-images-thumbs&n=13" alt="" />
              </Link>
            </div>
            <div className="hidden md:flex space-x-4 ml-52 mt-4">
              <Link to={"/"} className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>

           

              {token ? (
                <div className='hidden md:flex space-x-4 ml-52 mt-1'>

   <Link to={"/Createpatientformm"} className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Register patient
              </Link>

               
 <Link to={"/createappointment"} className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Appointment
              </Link>

              <Link to={"/doctor/registeration"} className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Join
              </Link>
              <Link to={"/registered/doctor"} className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Our Team
              </Link>

              <Link to={"/sendmessageform"} className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Support
              </Link>
               </div>
              ) : (

  ""
)}






              <Link to={"/contact"} className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>

            </div>
          </div>

          {/* Login & Signup Buttons */}
          <div className="hidden md:flex items-center space-x-4">


            {token ? (<button
              onClick={handlelogout}
              disabled={isLoading}
              className="py-2 px-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition"
            >

              {isLoading ? 'Logging out...' : <div className=' text-white scale-100 hover:text-red-600  text-sm'>
                <Link to={"/"}>Logout</Link> </div>}
            </button>) : (

              <div className="hidden md:flex items-center space-x-4">

                <Link to={"/login"}
                  className="px-4 py-2 border-2 border-blue-400-500 bg-gray-100 text-gray-900 rounded-md hover:bg-gray-200 focus:outline-none"
                >
                  Login
                </Link>
                <Link to={"/signup"}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                >
                  Signup
                </Link>

              </div>

            )}

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-gray-900 hover:text-blue-600 focus:outline-none">
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
            <Link to={"/"} className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to={"/Createpatientformm"} className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link to={"/Createpatientformm"} className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Createpatientformm
            </Link>
            <Link to={"/contact"} className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>

            {/* Mobile Login & Signup Buttons */}
            <Link
              to={"/login"}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-200"
            >
              Login
            </Link>
            <Link
              to={"/signup"}
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// export default Navbar;
