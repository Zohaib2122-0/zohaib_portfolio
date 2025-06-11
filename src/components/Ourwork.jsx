

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";


const Ourwork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // only once per scroll
const projects = [
  {
    id: 1,
    title: "E-commerce Web Application",
    description: "Developed a full-stack MERN e-commerce platform with secure user authentication, dynamic product management, and Stripe payment integration.",
    image: "https://res.cloudinary.com/dlrinxri6/image/upload/v1749631097/products/fddizg1ihbjihgpvljip.png"
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    description: "Built a real-time messaging app using React, Node.js, Socket.IO, and MongoDB, featuring private chats, group rooms, and live typing indicators.",
    image: "https://res.cloudinary.com/dlrinxri6/image/upload/v1749631051/products/fsprratvqleqbyuigp9z.png" 
  },
  {
    id: 3,
    title: "Admin Dashboard & CMS",
    description: "Designed a responsive admin panel using React and Tailwind, with backend management APIs powered by Express and MongoDB for content control and analytics.",
    image: "https://res.cloudinary.com/dlrinxri6/image/upload/v1749631133/products/er0ulpwgyl6p2afne3et.png"
  },
];

  return (
    <div className="bg-darkbg">

      <section className=" text-white  bg-[#1F1F1F] rounded-xl py-10 px-4 md:px-20 ">
        <div className="flex justify-between items-start mb-10  px-16">
          <div>
            <p className="text-sm text-lab mb-2">✨ Our Work</p>
            <h2 className="text-4xl font-semibold">
              Our design <span className="text-lab font-medium text-4xl">masterpieces</span>
            </h2>
          </div>
          <div>
            <Link to={"/portfolio"}>
              <button className="bg-lab hidden lg:block w-16 lg:w-fit text-black px-2 py-2 rounded-xl text-sm font-medium lg:font-medium hover:scale-105 transition ">
                View All Portfolio <span className="ml-2">→</span>
              </button>
            </Link>
            <Link to={"/portfolio"}>
              <button className="bg-lab lg:hidden w-16 lg:w-fit text-black px-2 py-2 rounded-xl text-sm font-medium lg:font-medium hover:scale-105 transition ">
                <span className="ml-2">→</span>
              </button>
            </Link>

          </div>

        </div>

        {/* display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  lg:px-8  ">
          {projects.map((project) => (

            <div
              key={project.id}
              className="bg-[#1f1f1f] rounded-3xl p-4 pb-8 space-y-4 hover:shadow-xl transition border-1 border-gray-700"
            >
              <motion.div
                ref={ref}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
              // className="flex items-center gap-4 mb-1 justify-center"
              >
                <Link to={"/portfolio"}>

                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-2xl w-full h-[220px] object-cover hover:scale-110 transition duration-500"
                    />
                  </div>
                  <h3 className="text-gray-300 text-lg font-semibold my-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Ourwork



