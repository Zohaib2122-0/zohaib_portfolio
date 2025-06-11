import React from 'react'
import Testimonial from './Testimonial';
import Projectcompleted from './Projectcompleted';
import OurTeam from './OurTeam';
import Proudmoments from './Proudmoments';



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

                <div className="mb-20  rounded-2xl bg-[#1f1f1f]">
                    <div className='p-4'>
                        <h1 className="text-6xl md:text-7xl font-semibold mb-6">
                            About our <span className="text-lab">Journey</span>
                        </h1>
                        <div className="flex items-center gap-2 text-gray-400">
                            <span>Home</span>
                            <span>/</span>
                            <span>About</span>
                        </div>
                    </div>
                </div>


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
    A team of <span className="text-lab">full-stack</span><br />
    <span className="text-lab">web developers</span>
  </h2>

  {/* Description */}
  <p className="text-gray-300 text-lg leading-relaxed max-w-md">
    We are a modern web development team specializing in MERN Stack and Next.js. From building high-performance
    frontends to robust backend APIs, we deliver scalable, secure, and optimized solutions that bring your ideas to life.
  </p>

  {/* Values List */}
  <div className="space-y-4 pt-4">
    <div className="flex items-center gap-3">
      <div className="w-2 h-2 bg-lab rounded-full"></div>
      <span className="text-gray-200">MERN & Next.js Expertise</span>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-2 h-2 bg-lab rounded-full"></div>
      <span className="text-gray-200">SEO-Friendly & Scalable Solutions</span>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-2 h-2 bg-lab rounded-full"></div>
      <span className="text-gray-200">Agile & Transparent Workflow</span>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-2 h-2 bg-lab rounded-full"></div>
      <span className="text-gray-200">User-Centered Design & Performance</span>
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

            <Projectcompleted />

            {/* <Proudmoments /> */}

            {/* vision and mission */}
         <div className="px-6 md:px-12 lg:px-20 my-5">
  <div className='border-2 bg-[#1F1F1F] rounded-2xl border-gray-700 space-y-4'>

    {/* Our Vision */}
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center p-4">
      {/* Left Side - Image */}
      <img src="https://demo.awaikenthemes.com/rovex/wp-content/uploads/2025/01/our-vision-img.jpg" className='relative w-96 h-96 rounded-2xl' alt="Our Vision" />

      {/* Right Side - Content */}
      <div className="space-y-8">
        {/* Section Badge */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-lab rounded-full"></div>
          <span className="text-yellow-400 text-sm font-medium">Our Vision</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
          Shaping the Future of <br />
          <span className="text-yellow-400">Web Development</span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
          Our vision is to lead the evolution of full-stack development using cutting-edge technologies like MERN and Next.js. We strive to build fast, secure, and scalable web solutions that empower businesses globally.
        </p>

        {/* Values List */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-lab rounded-full"></div>
            <span className="text-gray-200">Modern Tech Stack (MERN & Next.js)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-lab rounded-full"></div>
            <span className="text-gray-200">Scalable Architecture</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-lab rounded-full"></div>
            <span className="text-gray-200">Performance-Driven Development</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-lab rounded-full"></div>
            <span className="text-gray-200">Future-Ready Applications</span>
          </div>
        </div>
      </div>
    </div>

    {/* Our Mission */}
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center p-4 bg-[#1F1F1F]">
      
      {/* Left Side - Content */}
      <div className="space-y-8">
        {/* Section Badge */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-lab rounded-full"></div>
          <span className="text-yellow-400 text-sm font-medium">Our Mission</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
          Empowering Businesses with <br />
          <span className="text-yellow-400">Robust Web Solutions</span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
          Our mission is to deliver tailored web applications using MERN Stack and Next.js. We aim to simplify digital transformation through reliable code, optimized performance, and seamless user experiences.
        </p>

        {/* Values List */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-lab rounded-full"></div>
            <span className="text-gray-200">Full-Stack Expertise</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-lab rounded-full"></div>
            <span className="text-gray-200">Client-Focused Development</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-lab rounded-full"></div>
            <span className="text-gray-200">Agile & Transparent Process</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-lab rounded-full"></div>
            <span className="text-gray-200">Continuous Improvement</span>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <img src="https://demo.awaikenthemes.com/rovex/wp-content/uploads/2025/01/our-mission-img.jpg" className='relative w-96 h-96 rounded-2xl' alt="Our Mission" />
    </div>

  </div>
</div>


            <OurTeam />

            <Testimonial />

        </div>






    )
}
