import { Wifi, Monitor, Smartphone } from 'lucide-react';
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Example image array (you can replace with your own)
const imageUrls = [
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Herosection = () => {
  return (
    <div className="w-full py-10 bg-gray-100">


    {/* <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center px-2 py-8"> */}
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-5xl font-bold leading-tight">
                <span className="text-blue-600">Revolutionize Your</span>
                <br />
                <span className="text-green-500">Hospital Management</span>
                <br />
                <span className="text-blue-600">with Our Advanced</span>
                <br />
                <span className="text-blue-600">Software</span>
              </h1>
              
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                Eliminate inefficiencies in your healthcare processes and adopt E-Mareez Care as your hospital management system software.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
                Contact Us
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-200">
              Book Appointment Now
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Container with Gradient Background */}
            <div className="">
              {/* <img src="https://avatars.mds.yandex.net/i?id=d26309f00a71c13dd7ceaff6ca4097b2-4322265-images-thumbs&n=13" alt=""  className=' relative w-full h-96 lg:h-[500px] rounded-3xl p-8 overflow-hidden'/> */}
              <img src="https://avatars.mds.yandex.net/i?id=82f395388de38ab362908f49f3e9525abd78dfe9-12925719-images-thumbs&n=13" alt=""  className=' w-fit rounded-3xl h-96 object-cover'/>
            
            </div>

        
          </div>
        </div>
      </div>
    {/* </div> */}


{/* slider */}
      {/* <div className="max-w-7xl mx-auto px-4">
        <Carousel
          swipeable
          draggable
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="px-2"
          arrows
        >
          {imageUrls.map((src, index) => (
            <div key={index} className="w-full h-60 md:h-72 lg:h-80 overflow-hidden rounded-xl shadow-md">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div> */}


    </div>
  );
};

export default Herosection;
