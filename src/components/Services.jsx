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
    image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=300&fit=crop&auto=format"
  },
  {
    id: 2,
    title: "Frontend Development with React",
    description: "Developing responsive, high-performance UIs with React and modern JavaScript.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&auto=format"
  },
  {
    id: 3,
    title: "Next.js Development",
    description: "Creating fast, SEO-friendly web apps with server-side rendering and API routes in Next.js.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&auto=format"
  },
  {
    id: 4,
    title: "RESTful & API Integration",
    description: "Designing and integrating robust RESTful APIs for seamless data interaction.",
    image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=300&fit=crop&auto=format"
  },
  {
    id: 5,
    title: "Authentication & Security",
    description: "Implementing secure login systems with JWT, OAuth, and session handling.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&auto=format"
  },
  {
    id: 6,
    title: "Database Design & Management",
    description: "Structuring and managing scalable databases using MongoDB and Mongoose.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&auto=format"
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

                                <div className="relative h-64 overflow-hidden">
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
