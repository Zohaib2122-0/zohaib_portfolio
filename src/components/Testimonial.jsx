
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import { useRef } from "react";
import { motion, useInView } from "framer-motion";


const testimonials = [
  {
    name: "Ayesha Khan",
    message: "As a developer, I found this platform instrumental in accelerating my coding skills and career growth. The learning environment is incredibly supportive.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Ali Raza",
    message: "Their frontend tools and guidance helped me build cleaner, more efficient UI components. A must-use platform for any frontend developer.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sara Iqbal",
    message: "The design-focused courses and real-time feedback significantly boosted my UI/UX design abilities. Highly recommended for creatives.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Bilal Ahmed",
    message: "This platform made product planning and team coordination easier. It’s been a huge asset in improving our workflow and delivery.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Nida Hussain",
    message: "From campaign tracking to user analytics, everything is streamlined. The platform is intuitive and great for marketing teams.",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
];


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

const Testimonial = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // only once per scroll

  return (
    <div className="w-full px-4 bg-darkbg">

      <div className="max-w-[95%] mx-auto px-4 p-10 bg-[#1F1F1F] rounded-2xl border-2 border-gray-700 ">
         <motion.div
            ref={ref}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
        <h2 className="text-3xl font-bold text-center text-lab mb-10">
          What Our Clients Say
        </h2>
        <Carousel
          swipeable
          draggable
          responsive={responsive}
          ssr={true}
          infinite
          autoPlay
          autoPlaySpeed={4000}
          keyBoardControl
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="px-4"
          arrows
          dotListClass="custom-dot-list-style"
        >

          
            {testimonials.map((testimonial, index) => (

              <div
                key={index}
                className=" shadow-lg rounded-lg p-6 flex flex-col items-center text-center bg-darkbg "
              >
             
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 "
                />
         
                <h3 className="text-lg font-semibold text-gray-300">
                  {testimonial.name}
                </h3>
                {/* <p className="text-sm text-gray-300 mb-2">
                  {testimonial.position}
                </p> */}
                <p className="text-gray-300 italic">"{testimonial.message}"</p>
              </div>

            ))}
        </Carousel>
    </motion.div>
      </div>
    </div>

  );
};

export default Testimonial;
