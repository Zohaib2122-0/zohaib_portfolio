
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import showcase from "../assets/images/showcase.mp4"

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // only once per scroll
  return (
    <div className="relative w-full h-screen bg-darkbg text-white overflow-hidden">

      {/* <img
        src="https://i.pinimg.com/736x/17/3a/c0/173ac00cfc540c1652df42a787eb31cb.jpg"
        alt="hero background"
        className=" absolute inset-0 w-full h-screen object-cover  object-center opacity-50"
      /> */}
      <video
        // className="absolute top-0 left-0 w-full h-screen object-cover z-0"
        className="absolute inset-0 w-full h-full object-cover  object-center "
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={showcase} type="video/mp4" />
        {/* <source src="public/Cybersecurity Landing Page  Web design Landing page design Business website design.mp4" type="video/mp4" /> */}
  
      </video>

      <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-24 max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        // className="flex items-center gap-4 mb-1 justify-center"
        >
          {/* <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Where <span className="inline-block bg-lab text-black px-3 py-1 rounded-md rotate-[-3deg]">creativity</span><br />
            meets strategy
          </h1> */}
          {/* <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl">
            We’re a full-service design agency specializing in branding,Web Designing,
            UI and Interactive Design,
            Advertising and Marketing Design,
            Motion Graphics and Animation, and creative strategies that elevate businesses.
          </p>   */}
          </motion.div>
        {/* <Button className="mt-8 bg-lime-300 text-black font-semibold hover:bg-lime-400 px-6 py-3 rounded-full w-fit">
          View Our Portfolio
        </Button> */}
      </div>

    </div>
  );
};

export default HeroSection;
