import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    no: '',
    messages: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const formRef = useRef(); // This is important for EmailJS

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    emailjs
      .sendForm(
        'service_qe3mfon',       // Replace with your EmailJS Service ID
        'template_mbkpt6e',      // Replace with your EmailJS Template ID
        formRef.current,         // This passes the form fields
        'WdL1X84m5EeScjfrG'        // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          setIsSuccess(true);
          setIsLoading(false);
          setFormData({
            name: '',
            lastName: '',
            email: '',
            no: '',
            messages: '',
          });
        },
        (error) => {
          console.error('Email failed:', error.text);
          setIsError(true);
          setIsLoading(false);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div className="rounded-2xl lg:p-6  bg-[#1f1f1f]">
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
          {isSuccess && (
            <p className="text-green-400">Message sent successfully!</p>
          )}
          {isError && (
            <p className="text-red-400">Failed to send message. Please try again.</p>
          )}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
