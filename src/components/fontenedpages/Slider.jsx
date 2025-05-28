// // import React from 'react';
// // import { ArrowBigDown, ArrowBigUp } from "lucide-react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const Slider = () => {
//     const responsive = {
//         desktop: {
//             breakpoint: { max: 3000, min: 1024 },
//             items: 5,
//             slidesToSlide: 1,
//         },
//         tablet: {
//             breakpoint: { max: 1024, min: 464 },
//             items: 3,
//             slidesToSlide: 1,
//         },
//         mobile: {
//             breakpoint: { max: 464, min: 0 },
//             items: 2,
//             slidesToSlide: 1,
//         },
//     };

//     return (
//         <div className="w-full py-12 bg-gray-black border-red-600 ">
//             <div className=" px-4 w-full">
//                 {/* <h2 className="text-3xl font-bold text-center mb-8">
//           Explore Trading Opportunities
//         </h2> */}
//                 <div className="relative">
//                     <Carousel
//                         // Essential props for rendering
//                         swipeable={true}
//                         draggable={true}
//                         // showDots={true}
//                         responsive={responsive}
//                         // Rendering and performance
//                         ssr={false} // Change to false for client-side rendering
//                         // Navigation and interaction
//                         infinite={true}
//                         autoPlay={true}
//                         autoPlaySpeed={1000}
//                         keyBoardControl={true}
//                         // Transition and styling
//                         customTransition="transform 300ms ease-in-out"
//                         transitionDuration={300}
//                         // Custom classes for styling
//                         containerClass="w-full"
//                         itemClass="px-2"
//                         // Arrow and dot configuration
//                         arrows={true}
//                         dotListClass="custom-dot-list-style"
//                         renderDotsOutside={true}
//                     >
                       
//                       <div>
//                         <img src="https://avatars.mds.yandex.net/i?id=6fa1ac408b68c1b0c1b9aadd96a098e623b89619-9461059-images-thumbs&n=13" alt="" />
//                       </div>
//                       <div>
//                         <img src="https://avatars.mds.yandex.net/i?id=6fa1ac408b68c1b0c1b9aadd96a098e623b89619-9461059-images-thumbs&n=13" alt="" />
//                       </div>
//                       <div>
//                         <img src="https://avatars.mds.yandex.net/i?id=6fa1ac408b68c1b0c1b9aadd96a098e623b89619-9461059-images-thumbs&n=13" alt="" />
//                       </div>
//                       <div>
//                         <img src="https://avatars.mds.yandex.net/i?id=6fa1ac408b68c1b0c1b9aadd96a098e623b89619-9461059-images-thumbs&n=13" alt="" />
//                       </div>
//                       <div>
//                         <img src="https://avatars.mds.yandex.net/i?id=6fa1ac408b68c1b0c1b9aadd96a098e623b89619-9461059-images-thumbs&n=13" alt="" />
//                       </div>
//                       <div>
//                         <img src="https://avatars.mds.yandex.net/i?id=6fa1ac408b68c1b0c1b9aadd96a098e623b89619-9461059-images-thumbs&n=13" alt="" />
//                       </div>
//                       <div>
//                         <img src="https://avatars.mds.yandex.net/i?id=6fa1ac408b68c1b0c1b9aadd96a098e623b89619-9461059-images-thumbs&n=13" alt="" />
//                       </div>
//                       <div>
//                         <img src="https://avatars.mds.yandex.net/i?id=6fa1ac408b68c1b0c1b9aadd96a098e623b89619-9461059-images-thumbs&n=13" alt="" />
//                       </div>

                       
//                     </Carousel>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Slider;


import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  {
    name: "Ayesha Khan",
    position: "Software Engineer",
    message: "This platform helped me grow faster in my career. The team is amazing!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
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

const Slider = () => {
  return (
    <div className="w-full py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
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
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {testimonial.position}
              </p>
              <p className="text-gray-600 italic">"{testimonial.message}"</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
