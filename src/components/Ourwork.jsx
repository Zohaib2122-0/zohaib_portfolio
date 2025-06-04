import React from 'react'

const Ourwork = () => {
  const projects = [
    {
      id: 1,
      title: "Stellar Tech Solutions",
      description: "We redesigned Stellar Tech’s website to enhance.",
      image: "https://demo.awaikenthemes.com/rovex/wp-content/uploads/2025/01/work-image-2.jpg", // Replace with actual image path
    },
    {
      id: 2,
      title: "Green Wave Foods",
      description: "We built a user-friendly Shopping platform for Green Wave Foods.",
      image: "https://demo.awaikenthemes.com/rovex/wp-content/uploads/2025/01/work-image-1.jpg", // Replace with actual image path
    },
    {
      id: 3,
      title: "Horizon Real Estate",
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

          <button className="bg-lab hidden lg:block w-16 lg:w-fit text-black px-2 py-2 rounded-xl text-sm font-medium lg:font-medium hover:scale-105 transition ">
            View All Portfolio <span className="ml-2">→</span>
          </button>
          <button className="bg-lab lg:hidden w-16 lg:w-fit text-black px-2 py-2 rounded-xl text-sm font-medium lg:font-medium hover:scale-105 transition ">
           <span className="ml-2">→</span>
          </button>
         
          </div>

        </div>

        {/* display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  lg:px-8  ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1f1f1f] rounded-3xl p-4 pb-8 space-y-4 hover:shadow-xl transition"
            >
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

            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Ourwork



