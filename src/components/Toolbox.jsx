
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";



const Toolbox = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // only once per scroll


  const tools = [
  {
  name: 'Next.js',
  category: 'React Framework',
  icon: '🚀',
  bgColor: 'bg-gray-800',
  iconBg: 'bg-black',
},
  {
    name: 'Postman',
    category: 'API Testing Tool',
    icon: '📬',
    bgColor: 'bg-gray-800',
    iconBg: 'bg-orange-500',
  },
  {
    name: 'MongoDB Compass',
    category: 'Database GUI',
    icon: '🗄️',
    bgColor: 'bg-gray-800',
    iconBg: 'bg-green-600',
  },
  {
    name: 'Git & GitHub',
    category: 'Version Control',
    icon: '🌱',
    bgColor: 'bg-gray-800',
    iconBg: 'bg-black',
  },
  {
    name: 'Node.js',
    category: 'Backend Runtime',
    icon: '⚙️',
    bgColor: 'bg-gray-800',
    iconBg: 'bg-green-700',
  },
  {
    name: 'React',
    category: 'Frontend Library',
    icon: '⚛️',
    bgColor: 'bg-gray-800',
    iconBg: 'bg-blue-400',
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling Framework',
    icon: '🎨',
    bgColor: 'bg-gray-800',
    iconBg: 'bg-sky-500',
  },
  {
    name: 'Firebase',
    category: 'Authentication/Hosting',
    icon: '🔥',
    bgColor: 'bg-gray-800',
    iconBg: 'bg-yellow-500',
  }
];


  return (

    <div className="min-h-fit bg-darkbg text-white p-8 lg:p-16 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-16">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span className="text-sm text-gray-300">Creative Toolkit</span>
          </div>
          <h1 className="text-6xl font-semibold">
            Our toolbox for <span className="text-yellow-400">innovation</span>
          </h1>
        </div>
        {/* <div className="absolute top-8 right-8">
          <div className="w-10 text-white h-10 bg-yellow-400 rounded-full">ssss</div>
        </div> */}
        {/* <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-300 transition-colors flex items-center gap-2 ">
          Let's Get Started ! →
        </button> */}
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
    
          {tools.map((tool, index) => (


            <div
              key={index}
              className=" border-2 border-gray-700 rounded-2xl p-2  items-center hover:bg-[#1f1f1f] transition-colors cursor-pointer"
            >
                  <motion.div
          ref={ref}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          // className="flex items-center gap-4 mb-1 justify-center"
        >
              <div className="flex items-center gap-4 mb-1 justify-center">
                {tool.icon.length > 2 ? (
                  <div className={`w-10 h-10 ${tool.iconBg} rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                    {tool.icon}
                  </div>



                ) : (
                  <div className="text-2xl">{tool.icon}</div>
                )}
              </div>


              <h3 className="text-xl text-gray-300 text-center font-semibold mb-2">{tool.name}</h3>
              <p className="text-gray-400 text-sm text-center">{tool.category}</p>
              </motion.div>
            </div>

          ))}


        {/* </motion.div> */}
      </div>
    </div>
  )
}

export default Toolbox





