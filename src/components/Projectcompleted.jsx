import React from 'react'

const Projectcompleted = () => {
    return (
        <div>
          {/* project completion and years */ }

           {/* project completion and years */}
            <div className="bg-darkbg border-t-1 border-gray-700 border-[80%] text-white py-16">
                {/* Bottom Section - Statistics Card */}
                <div className="px-6 md:px-12 lg:px-20 ">
                    <div className="bg-lab text-gray-900 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                        {/* Main Content */}
                        <div className="max-w-4xl">
                            <p className="text-lg lg:text-xl leading-relaxed mb-12">
                                We specialize in delivering innovative and impactful design solutions that elevate brands and
                                drive results. From digital experiences to print media, our team of creative professionals is
                                dedicated to transforming ideas into compelling visual stories that resonate with audiences.
                                With a focus on creativity, strategy, and client collaboration.
                            </p>

                            {/* Statistics */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                                <div className="border-l-2 border-gray-700 pl-6">
                                    <div className="text-4xl lg:text-5xl font-bold mb-2">45+</div>
                                    <div className="text-gray-700 font-medium">Project Completed</div>
                                </div>

                                <div className="border-l-2 border-gray-700 pl-6">
                                    <div className="text-4xl lg:text-5xl font-bold mb-2">15+</div>
                                    <div className="text-gray-700 font-medium">Years Of Experience</div>
                                </div>

                                <div className="border-l-2 border-gray-700 pl-6">
                                    <div className="text-4xl lg:text-5xl font-bold mb-2">100+</div>
                                    <div className="text-gray-700 font-medium">Client Satisfaction</div>
                                </div>
                            </div>
                        </div>

                        {/* Circular Badge */}
                        <div className="absolute top-8 right-8 lg:top-12 lg:right-12">
                            <div className="relative w-32 h-32 lg:w-40 lg:h-40">
                                {/* Outer Ring */}
                                <div className="absolute inset-0 border-2 border-gray-900 rounded-full"></div>

                                {/* Inner Circle */}
                                <div className="absolute inset-4 text-xl lg:text-2xl font-semibold text-gray-300 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M7 14l3-3 3 3 5-5-1.41-1.41L12 12.17 9.41 9.59 6 13l1 1z" />
                                    </svg>
                                </div>

                                {/* Rotating Text */}
                                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                                    <svg className="w-full h-full" viewBox="0 0 160 160">
                                        <defs>
                                            <path
                                                id="circle"
                                                d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                                            />
                                        </defs>
                                        <text className="text-xs font-medium fill-gray-900">
                                            <textPath href="#circle" startOffset="0%">
                                                • CONNECT NOW • CONNECT NOW • CONNECT NOW • CONNECT NOW
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      </div>
  )
}

export default Projectcompleted