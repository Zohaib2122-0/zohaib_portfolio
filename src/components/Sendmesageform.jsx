




import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { usemessagesstore } from '../lib/store/usemessagesstore';
export const Sendmesageform = () => {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: '',
  });

  const sendMessage = usemessagesstore((state) => state.sendMessage);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, subject, message } = formData;

    // Prevent submission if any field is empty
    if (!name.trim() || !phone.trim() || !subject.trim() || !message.trim()) return;

    await sendMessage(formData); // Send form data to backend
    setFormData({ name: '', phone: '', subject: '', message: '' }); // Reset form after submission
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-100 rounded-full opacity-50"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-green-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-40"></div>
        
        {/* Floating shapes */}
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-cyan-500 rounded-full opacity-50"></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-green-400 rounded-full opacity-70"></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-green-500 bg-clip-text text-transparent">
              Talk with us
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're here to help you revolutionize your hospital management. 
              <br />Get in touch and let's discuss your healthcare needs.
            </p>
            
            {/* Quick Contact Info */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-shadow">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-700">03095558054</span>
              </div>
              <div className="flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-shadow">
                <Mail className="w-5 h-5 text-cyan-600" />
                <span className="font-semibold text-gray-700">info@emareezcare.com</span>
              </div>
              <div className="flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-shadow">
                <Clock className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-700">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Side - Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Address</h4>
                      <p className="text-gray-600">123 Healthcare Street<br />Medical District, City</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-cyan-100 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">03095558054</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">info@emareezcare.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer">
                    <Facebook className="w-6 h-6" />
                  </div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer">
                    <Youtube className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Your Original Form (Enhanced Container) */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 text-white">
                  <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
                  <p className="text-blue-100">We'll get back to you within 24 hours</p>
                </div>
                
                <div className="p-8">
                  <div>
                    <div>
                      <h1 className='text-center text-4xl font-bold m-5'>Talk with us</h1>
                    </div>
                    <div className='mx-10 my-6'>
                      {/* <div className="space-y-4 p-4">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          className="w-full px-4 py-2 border rounded-md"
                          required
                        />

                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          className="w-full px-4 py-2 border rounded-md"
                          required
                        />

                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Enter your subject"
                          className="w-full px-4 py-2 border rounded-md"
                          required
                        />

                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Type your message..."
                          className="w-full h-24 px-4 py-2 border rounded-md"
                          required
                        ></textarea>

                        <button
                          type="submit"
                          onClick={handleSubmit}
                          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                        >
                          Send Message
                        </button>
                      </div> */}

  <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
        className="w-full px-4 py-2 border rounded-md"
        required
      />

      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter your phone number"
        className="w-full px-4 py-2 border rounded-md"
        required
      />

      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Enter your subject"
        className="w-full px-4 py-2 border rounded-md"
        required
      />

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Type your message..."
        className="w-full h-24 px-4 py-2 border rounded-md"
        required
      ></textarea>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Send Message
      </button>
    </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Hospital?</h3>
            <p className="text-gray-300 mb-6">
              Join hundreds of healthcare providers who trust E-Mareez Care for their management needs.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



