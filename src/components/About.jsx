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



export const About = () => {
    return (

        <div className="min-h-screen bg-darkbg text-white">
            {/* Header Section */}
            <div className="px-6 md:px-12 lg:px-20 pt-8 pb-20">


                {/* Main Title */}
                <h1 className="text-5xl md:text-6xl bg-[#1F1F1F] lg:text-7xl font-light mb-12 h-36 border-2 border-gray-700 rounded-xl flex items-center p-4">
                    About our <span className="text-lab px-4">journey</span>

                </h1>
                {/* Navigation */}

                {/* Content Section */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Side - Image */}
                    <div className="relative">
                        <div className="rounded-3xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Creative team working together"
                                className="w-full h-96 object-cover"
                            />
                        </div>
                        {/* Green dot decoration */}
                        <div className="absolute -top-4 -right-4 w-6 h-6 bg-lab rounded-full"></div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-8">
                        {/* About Us Badge */}
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-lab rounded-full"></div>
                            <span className="text-lab text-sm font-medium">About Us</span>
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-4xl md:text-5xl font-light leading-tight">
                            A team of <span className="text-lab">creative</span><br />
                            <span className="text-lab">thinkers</span>
                        </h2>

                        {/* Description */}
                        <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                            We're a full-service design agency specializing in branding, web design, and
                            creative strategies that elevate businesses.
                        </p>

                        {/* Values List */}
                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-lab rounded-full"></div>
                                <span className="text-gray-200">Creativity and Innovation</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-lab rounded-full"></div>
                                <span className="text-gray-200">Client-Centricity</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-lab rounded-full"></div>
                                <span className="text-gray-200">Integrity and Transparency</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-lab rounded-full"></div>
                                <span className="text-gray-200">Excellence and Quality</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Element - Bottom Right */}
                <div className="fixed bottom-8 right-8">
                    <div className="relative">
                        <div className="w-24 h-24 border-2 border-yellow-400 rounded-full flex items-center justify-center">
                            <div className="w-12 h-12 bg-lab rounded-full flex items-center justify-center">
                                <div className="w-6 h-6 text-xl lg:text-2xl font-semibold text-gray-300 rounded-full"></div>
                            </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="w-20 h-20 animate-spin" style={{ animationDuration: '20s' }}>
                                <path
                                    d="M 12,60 A 48,48 0 0,1 60,12"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    fill="none"
                                    className="text-lab"
                                />
                                <text className="text-xs fill-current text-lab">
                                    <textPath href="#circle" className="text-[8px]">
                                        • CONTACT • NOW • CREATIVE • SOLUTIONS •
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>


            {/* project complete */}
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




            <div className="bg-dark-bg text-white py-16 lg:py-24 ">
                <div className=" md:px-12 lg:px-20 ">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start  rounded-2xl ">
                        {/* Left Side - Main Content */}
                        <div className="space-y-8">
                            {/* Section Badge */}
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-lab rounded-full"></div>
                                <span className="text-lab text-sm font-medium">Our Achievements</span>
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                                proud moments<br />
                                & <span className="text-lab">milestones</span>
                            </h2>

                            {/* Description */}
                            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                                We're a full-service design agency specializing in branding, web design, and creative strategies that elevate businesses.
                            </p>

                            {/* CTA Button */}
                            <div className="pt-4">
                                <button className="bg-lab text-gray-900 px-8 py-4 rounded-full font-medium text-lg flex items-center gap-3 hover:bg-yellow-300 transition-colors">
                                    Let's Get Started !
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>

                            {/* Decorative Green Dot */}
                            <div className=" absolute top-8 right-20 w-3 h-3 bg-lab rounded-full"></div>
                        </div>

                        {/* Right Side - Achievements Grid */}
                        <div className="relative">
                            <div className="grid grid-cols-2  ">
                                {/* Achievement 1 */}
                                <div className="text-xl lg:text-2xl font-semibold text-gray-300 p-6 lg:p-8 space-y-4 border-r-2 border-b-2 border-gray-700">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-lab rounded-full"></div>
                                        <span className="text-lab text-sm font-medium">2015 - 2016</span>
                                    </div>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-300">Best Design Award</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        We begin by getting to know you and your brand. Through in-depth.
                                    </p>
                                </div>

                                {/* Achievement 2 */}
                                <div className="text-xl lg:text-2xl font-semibold text-gray-300 p-6 lg:p-8 space-y-4 border-b-2 border-gray-700 relative">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-lab rounded-full"></div>
                                        <span className="text-lab text-sm font-medium">2016 - 2017</span>
                                    </div>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-300">Dribble Winner</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        We begin by getting to know you and your brand. Through in-depth.
                                    </p>


                                </div>

                                {/* Achievement 3 */}
                                <div className="text-xl lg:text-2xl font-semibold text-gray-300 p-6 lg:p-8 space-y-4 border-r-2 border-b-2 border-gray-700">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-lab rounded-full"></div>
                                        <span className="text-lab text-sm font-medium">2017 - 2018</span>
                                    </div>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-300">Design Of The Year</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        We begin by getting to know you and your brand. Through in-depth.
                                    </p>
                                </div>

                                {/* Achievement 4 */}
                                <div className="text-xl lg:text-2xl font-semibold text-gray-300 p-6 lg:p-8 space-y-4 border-b-2 border-gray-700">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-lab rounded-full"></div>
                                        <span className="text-lab text-sm font-medium">2017 - 2018</span>
                                    </div>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-300">Graphic Design Winner</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        We begin by getting to know you and your brand. Through in-depth.
                                    </p>
                                </div>

                                {/* Achievement 5 */}
                                <div className="text-xl lg:text-2xl font-semibold text-gray-300 p-6 lg:p-8 space-y-4 border-r-2 border-gray-700">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-lab rounded-full"></div>
                                        <span className="text-lab text-sm font-medium">2018 - 2019</span>
                                    </div>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-300">Awward Winner</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        We begin by getting to know you and your brand. Through in-depth.
                                    </p>
                                </div>

                                {/* Achievement 6 */}
                                <div className="text-xl lg:text-2xl font-semibold text-gray-300 p-6 lg:p-8 space-y-4 ">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-lab rounded-full"></div>
                                        <span className="text-lab text-sm font-medium">2019 - 2020</span>
                                    </div>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-300">Best Jury Award</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        We begin by getting to know you and your brand. Through in-depth.
                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="bg-darkbg text-white py-10 lg:py-24 relative border-2 border-gray-100"> */}

            <div className="px-6 md:px-12 lg:px-20 ">
                <div className='border-2  bg-[#1F1F1F] rounded-2xl border-gray-700 space-y-4'>
                    {/* our vission */}

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center  p-4 ">
                        {/* Left Side - Device Mockups */}
                        <img src="https://demo.awaikenthemes.com/rovex/wp-content/uploads/2025/01/our-vision-img.jpg" className='relative w-96 h-96 rounded-2xl' alt="" />

                        {/* Right Side - Content */}
                        <div className="space-y-8">
                            {/* Section Badge */}
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-lab rounded-full"></div>
                                <span className="text-yellow-400 text-sm font-medium">Our Vision</span>
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                                Driving the Future of<br />
                                <span className="text-yellow-400">Creativity</span>
                            </h2>

                            {/* Description */}
                            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                                We're a full-service design agency specializing in branding, web design, and
                                creative strategies that elevate businesses.
                            </p>

                            {/* Values List */}
                            <div className="space-y-4 pt-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-lab rounded-full"></div>
                                    <span className="text-gray-200">Creativity and Innovation</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-lab rounded-full"></div>
                                    <span className="text-gray-200">Client-Centricity</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-lab rounded-full"></div>
                                    <span className="text-gray-200">Integrity and Transparency</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-lab rounded-full"></div>
                                    <span className="text-gray-200">Excellence and Quality</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* our mission */}

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center  p-4 bg-[#1F1F1F] ">
                        {/* Left Side - Device Mockups */}


                        <div className="space-y-8">
                            {/* Section Badge */}
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-lab rounded-full"></div>
                                <span className="text-yellow-400 text-sm font-medium">Our Mission</span>
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                                Driving the Future of<br />
                                <span className="text-yellow-400">Creativity</span>
                            </h2>

                            {/* Description */}
                            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                                We're a full-service design agency specializing in branding, web design, and
                                creative strategies that elevate businesses.
                            </p>

                            {/* Values List */}
                            <div className="space-y-4 pt-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-lab rounded-full"></div>
                                    <span className="text-gray-200">Creativity and Innovation</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-lab rounded-full"></div>
                                    <span className="text-gray-200">Client-Centricity</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-lab rounded-full"></div>
                                    <span className="text-gray-200">Integrity and Transparency</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-lab rounded-full"></div>
                                    <span className="text-gray-200">Excellence and Quality</span>
                                </div>
                            </div>
                        </div>
                        {/* Right Side - Content */}
                        <img src="https://demo.awaikenthemes.com/rovex/wp-content/uploads/2025/01/our-mission-img.jpg" className='relative w-96 h-96 rounded-2xl' alt="" />

                    </div>


                </div>
            </div>
            {/* </div> */}


{/* our Team */}




    <div className="bg-darkbg text-white py-16 px-" >
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
          <button className="bg-lab text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-lab transition-colors flex items-center">
            All Team Members
            <span className="ml-2">→</span>
          </button>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
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
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>



        </div>






    )
}
