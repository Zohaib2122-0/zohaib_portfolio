
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  {
    name: "Ayesha Khan",
    position: "Software Engineer",
    message: "This platform helped me grow faster in my career. The team is amazing!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Ali Raza",
    position: "Frontend Developer",
    message: "Excellent experience! Their support and tools are just top-notch.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sara Iqbal",
    position: "UI/UX Designer",
    message: "I’ve improved my design skills thanks to their feedback and courses.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Bilal Ahmed",
    position: "Product Manager",
    message: "Great team, great product. I’d definitely recommend them to anyone.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Nida Hussain",
    position: "Marketing Lead",
    message: "Their customer service is fantastic, and the platform is very easy to use.",
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
  return (
    <div className="w-full px-4 bg-darkbg">
      <div className="max-w-[95%] mx-auto px-4 p-10 bg-[#1F1F1F] rounded-2xl border-2 border-gray-700 ">
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
              <p className="text-sm text-gray-300 mb-2">
                {testimonial.position}
              </p>
              <p className="text-gray-300 italic">"{testimonial.message}"</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
