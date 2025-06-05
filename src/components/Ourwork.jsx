

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";



const Ourwork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // only once per scroll
  const projects = [
    {
      id: 1,
      title: "UI and UX experience",
      description: "We redesigned Stellar Tech’s website to enhance.",
      image: "https://demo.awaikenthemes.com/rovex/wp-content/uploads/2025/01/work-image-2.jpg", // Replace with actual image path
    },
    {
      id: 2,
      title: "Advertising and Marketing Design.",
      description: "We built a user-friendly Shopping platform for Green Wave Foods.",
      image: "https://demo.awaikenthemes.com/rovex/wp-content/uploads/2025/01/work-image-1.jpg", // Replace with actual image path
    },
    {
      id: 3,
      title: "Motion Graphics and Animation",
      description: "We helped Horizon Real Estate establish a trusted brand identity.",
      image: "https://demo.awaikenthemes.com/rovex/wp-content/uploads/2025/01/work-image-2.jpg", // Replace with actual image path
    },
  ];
  return (
    <div>

      <section className="bg-darkbg text-white py-10 px-4 md:px-20 ">
        <div className="flex justify-between items-start mb-10  px-16">
          <div>
            <p className="text-sm text-lab mb-2">✨ Our Work</p>
            <h2 className="text-4xl font-semibold">
              Our design <span className="text-lab">masterpieces</span>
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
              className="bg-[#1f1f1f] rounded-3xl p-4 pb-8 space-y-4 hover:shadow-xl transition"
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
                  <h3 className="text-gray-300 text-lg font-semibold">
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



