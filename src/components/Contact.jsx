


import React, { useState } from 'react';
import { useSendMessageMutation } from './redux/messagesapislice';

export const ContactUs = () => {




  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    no: '',
    messages: '',
  });

  const [sendMessage, { isLoading, isSuccess, isError }] = useSendMessageMutation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendMessage(formData).unwrap();
      console.log(formData)
      setFormData({
        name: '',
        lastName: '',
        email: '',
        no: '',
        messages: '',
      });
    //   alert('Message sent successfully!');
    } catch (err) {
      alert('Something went wrong!');
    }
  };



    return (
        <div className="bg-darkbg text-white min-h-screen relative overflow-hidden">


            <div className="relative z-10 px-6 py-12 ">
                {/* Header */}
                <div className="max-w-7xl mx-auto ">
                    <div className="mb-8  rounded-2xl bg-[#1f1f1f] ">
                        <div className='p-4'>

                            <h1 className="text-6xl md:text-7xl text-gray-300 font-semibold mb-4 ">
                                Contact <span className="text-lab">us</span>
                            </h1>
                            <div className="flex items-center gap-2 text-gray-300">
                                <span>Home</span>
                                <span>/</span>
                                <span>Contact Us</span>
                            </div>

                        </div>

                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20 p-12">
                        {/* Left Side - Contact Info */}
                        <div className="">
                            <div className="mb-12">
                                <div className="flex items-center gap-2 mb-8">
                                    <span className="text-lab text-lg">✦</span>
                                    <span className="text-gray-300 text-sm font-medium">Contact us</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl text-gray-300 font-bold leading-tight">
                                    Let's start a{' '}
                                    <span className="text-lab">conversation</span>
                                </h2>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-8">
                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-lab rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white text-xl font-semibold mb-1">Phone Number</h3>
                                        <p className="text-gray-400">+987 654 3210</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-lab rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white text-xl font-semibold mb-1">Email Us</h3>
                                        <p className="text-gray-400">info@domain.com</p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-lab rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white text-xl font-semibold mb-1">Address</h3>
                                        <p className="text-gray-400">7676 Arden Avenue, Ginashire</p>
                                    </div>
                                </div>
                            </div>

                            
                        </div>

                      




{/* m */}




    <form onSubmit={handleSubmit}>
      <div className="rounded-2xl p-5 bg-[#1f1f1f]">
        <div className="mb-8">
          <h2 className="text-4xl text-gray-300 md:text-5xl font-bold leading-tight">
            Get a <span className="text-lab">free advise</span>
          </h2>
        </div>

        <div className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="First Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 bg-darkbg border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-lab focus:ring-1 focus:ring-lab"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full p-2 bg-darkbg border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-lab focus:ring-1 focus:ring-lab"
                required
              />
            </div>
          </div>

          {/* Email and Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 bg-darkbg border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-lab focus:ring-1 focus:ring-lab"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                name="no"
                placeholder="Mobile Number"
                value={formData.no}
                onChange={handleInputChange}
                className="w-full p-2 bg-darkbg border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-lab focus:ring-1 focus:ring-lab"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Your Message
            </label>
            <textarea
              name="messages"
              placeholder="Subject"
              rows="6"
              value={formData.messages}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-darkbg border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-lab focus:ring-1 focus:ring-lab resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-lab text-black font-semibold px-6 py-2 rounded-lg hover:bg-yellow-300 transition-colors duration-200"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>

          {/* Feedback */}
          {isSuccess && <p className="text-green-400">Message sent successfully!</p>}
          {isError && <p className="text-red-400">Failed to send message.</p>}
        </div>
      </div>
    </form>




{/* m */}



                    </div>

                    <div className='flex justify-center items-center'>
                        <div className=' w-[90%] h-fit  rounded-3xl'>


                            <iframe
                                className='rounded-3xl'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54449.67648078805!2d74.27244847832031!3d31.46968908358896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0x c4b86de2a854!2sJohar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1640995200000!5m2!1sen!2s"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            />

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}