import React from 'react'
import Projectcompleted from './Projectcompleted';
import Toolbox from './Toolbox';

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
const Services = () => {


    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // only once per scroll

 const services = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description: "Building dynamic web applications using MongoDB, Express.js, React, and Node.js.",
    image: "https://i.pinimg.com/736x/52/19/d9/5219d9b3f4606ed553479e91b2b9b8d2.jpg"
  },
  {
    id: 2,
    title: "Frontend Development with React",
    description: "Developing responsive, high-performance UIs with React and modern JavaScript.",
    image: "https://i.pinimg.com/736x/35/23/7b/35237b71b5a926c82446fd96baee4b7c.jpg"
  },
  {
    id: 3,
    title: "Next.js Development",
    description: "Creating fast, SEO-friendly web apps with server-side rendering and API routes in Next.js.",
    image: "https://i.pinimg.com/736x/73/d0/97/73d097290223416d69c7e9765a0c4a27.jpg"
  },
  {
    id: 4,
    title: "RESTful & API Integration",
    description: "Designing and integrating robust RESTful APIs for seamless data interaction.",
    image: "https://i.pinimg.com/736x/3d/64/d0/3d64d065313c7fc92e53d82350760d64.jpg"
  },
  {
    id: 5,
    title: "Authentication & Security",
    description: "Implementing secure login systems with JWT, OAuth, and session handling.",
    image: "https://i.pinimg.com/736x/d6/26/e3/d626e3f52bb78222aabd7b1a5bc6450d.jpg"
  },
  {
    id: 6,
    title: "Database Design & Management",
    description: "Structuring and managing scalable databases using MongoDB and Mongoose.",
    image: "https://i.pinimg.com/736x/9b/e1/61/9be1611e91502cfc144d190c79323f05.jpg"
  }
];


    return (
        <div>


            <div className="bg-darkbg text-white min-h-screen py-16 px-4 lg:px-16 relative overflow-hidden">

                <div className="max-w-7xl mx-auto relative z-10 0 ">
                    {/* Header */}
                    <div className="mb-20  rounded-2xl bg-[#1f1f1f]">
                        <div className='p-4'>
                            <h1 className="text-6xl md:text-7xl font-semibold mb-6">
                                Explore our <span className="text-lab">services</span>
                            </h1>
                            <div className="flex items-center gap-2 text-gray-400">
                                <span>Home</span>
                                <span>/</span>
                                <span>Services</span>
                            </div>
                        </div>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (

                            <div
                                key={service.id}
                                className="group relative bg-[#1f1f1f] backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-gray-700 hover:border-lab transition-all duration-300"
                            >
                                {/* Service Image */}

                                <div className="relative h-60 w-full object-cover overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/20"></div>
                                </div>

                                {/* Service Content */}
                                <div className="p-8">
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-2xl font-bold  text-gray-300 transition-colors duration-300">
                                            {service.title}
                                        </h3>

                                        {/* Arrow Icon */}
                                        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-lab group-hover:text-black transition-all duration-300 cursor-pointer">
                                            <svg
                                                className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    <p className="text-base leading-relaxed text-gray-400">
                                        {service.description}
                                    </p>
                                </div>
                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 bg-lime-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                            </div>
                        ))}

                    </div>


                </div>
            </div>
            <Projectcompleted />
            <Toolbox />
        </div>
    )
}

export default Services
