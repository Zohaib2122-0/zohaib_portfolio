import React from 'react'
const teamMembers = [
    {
        name: "Joseph G. Brown",
        role: "Director",
        image: "https://avatars.mds.yandex.net/i?id=c31ad3a12f1911fa194c71768c82791f75b04b6c-5231753-images-thumbs&n=13"
    },
    {
        name: "Liam Brooks",
        role: "Art Director",
        image: "https://avatars.mds.yandex.net/i?id=b84d049672264b44387c4dce2d9215fbefcdfdf9-4055226-images-thumbs&n=13"
    },
    {
        name: "Sophia Evans",
        role: "Illustrator",
        image: "https://avatars.mds.yandex.net/i?id=b84d049672264b44387c4dce2d9215fbefcdfdf9-4055226-images-thumbs&n=13"
    },
    {
        name: "Noah Bennett",
        role: "UI/UX Designer",
        image: "https://avatars.mds.yandex.net/i?id=b84d049672264b44387c4dce2d9215fbefcdfdf9-4055226-images-thumbs&n=13"
    }
];
import { motion } from "framer-motion";

const OurTeam = () => {
    return (
        <div className="bg-darkbg text-white py-8 " >
            <div className="max-w-7xl mx-auto  p-10 ">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-12 ">
                    <div>
                        <div className="flex items-center mb-4">
                            <span className="text-lab mr-2">✦</span>
                            <span className="text-gray-300 text-sm font-medium">Our Team</span>
                        </div>
                        <h2 className="text-5xl font-bold">
                            The minds behind the <span className="text-lab">magic</span>
                        </h2>
                    </div>
                    <button className="bg-lab text-gray-900 px-4 w-32  py-1 rounded-full font-medium hover:bg-lab transition-colors flex items-center">
                        Our Team
                        {/* <span className="ml-2">→</span> */}
                    </button>

                    {/* <button className="hidden lg:flex bg-lab text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-lab transition-colors items-center">
                        Our Team
                        <span className="ml-2">→</span>
                    </button> */}


                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group">
                            {/* <div className="relative overflow-hidden rounded-2xl bg-gray-800 border-2 border-gray-700 opacity-75">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                    <p className="text-gray-300 text-sm mb-3">{member.role}</p>
                                    <div className="flex space-x-3">
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div> */}
                            <motion.div
                                key={index}
                                className="group"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <div className="relative overflow-hidden rounded-2xl bg-gray-800 border-2 border-gray-700 opacity-75">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                        <p className="text-gray-300 text-sm mb-3">{member.role}</p>
                                        <div className="flex space-x-3">
                                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                                </svg>
                                            </a>
                                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                                </svg>
                                            </a>
                                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>


                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurTeam