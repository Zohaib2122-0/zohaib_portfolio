

import { useState } from 'react';
import { Link } from 'react-router-dom';
const ProjectsPage = () => {
  // const [selectedImage, setSelectedImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const projectsArray = [
    {
      _id: "1",
      title: "youthupriser educational advisor",
      category: "Business Website",
      to: "https://youthuprisereducationaladvisor.com/",
      project: ["/youth.PNG"]
    },
    {
      _id: "2",
      title: "E-mareez",
      to: "https://e-mareez.com/products/hospitalmanagement",
      category: "Management system",
      project: ["/emarez.PNG"]
    },
    {
      _id: "3",
      title: "Aone Brokers",
      to: "https://aonebrokers.com/",
      category: "Trading plateform",
      project: ["/aone.PNG"]
    },

    {
      _id: "4",
      title: "Buraqpasha Consultant",
      to: "https://buraqpashaconsultant.com/",
      category: "Business Website",
      project: ["/project5.PNG"]
    },
    {
      _id: "5",
      title: "Mrctour sand rentacar",
      to: "https://mrctoursandrentacar.com/",
      category: "Business Website",
      project: ["/carshowroom.PNG"]
    },
    // {
    //   _id: "6",
    //   title: "Aone Brokes",
    //   to: "https://aonebrokers.com/profile",
    //   category: "Business Website",
    //   project: ["/carshowroom.PNG"]
    // },
    {
      _id: "7",
      title: "Aone User dashboard",
      to: "https://aonebrokers.com/profile",
      category: "User Dashboards",
      project: ["/aoneuserpannel.PNG"]
    },
    {
      _id: "8",
      title: "Hospital Management system",
      to: "https://faisal-hm-frontend.vercel.app/",
      category: "Management system",
      project: ["/hospital.PNG"]
    },
    {
      _id: "9",
      title: "Hospital Management system",
      to: "https://faisal-hm-frontend.vercel.app/admin",
      category: "Admin Dashboards",
      project: ["/hospialadminpannel.PNG"]
    },
    {
      _id: "10",
      title: "Peec",
      category: "Business Website",
      to: "https://peec.uk/",
      project: ["/peec.PNG"]
    },
    {
      _id: "11",
      title: "Exness Global",
      category: "Trading site",
      to: "https://www.exnesspromo.com/en/trade-with-low-spread/?partner_id=yqaqx5kryg",
      project: ["/exness.PNG"]
    },
    {
      _id: "12",
      title: "Push digits",
      category: "Tax consultant",
      to: "https://www.pushdigits.pk/",
      project: ["/tax.PNG"]
    },

  ];


  const categories = [
    "Trading site",
    "Admin Dashboards",
    "Business website",
    "User Dashboards",
    "Management system",
    "Tax consultant"

  ];

  const filteredProjects = projectsArray.filter((proj) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      proj.title?.toLowerCase().includes(query) ||
      proj.category?.toLowerCase().includes(query);

    const matchesCategory =
      selectedCategory === '' || proj.category?.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative min-h-screen bg-darkbg p-6 lg:p-14">
      {/* Breadcrumbs */}
      <div className="mb-8  rounded-2xl bg-[#1f1f1f] ">
        <div className='p-4'>
          <h1 className="text-6xl md:text-7xl text-gray-300 font-semibold mb-4 ">
            Portfolio
          </h1>
          <div className="flex items-center gap-2 text-gray-300">
            <span>Home</span>
            <span>/</span>
            <span>Portfolio</span>
          </div>
        </div>
      </div>
      <div className="flex items-center text-sm text-gray-400 mb-8">
        <a href="#" className="text-green-400 hover:text-green-300">All Projects</a>
        <span className="mx-2">/</span>
        <a href="#" className="hover:text-white">Frontend</a>
        <span className="mx-2">/</span>
        <a href="#" className="hover:text-white">Backend</a>
        <span className="mx-2">/</span>
        <a href="#" className="hover:text-white">softwares</a>
        <span className="ml-auto w-2 h-2 bg-lab rounded-full"></span>
      </div>

      <div className='lg:flex lg:justify-between'>
        {/* Search Bar */}
        <div className="mb-10">
          <input
            type="text"
            placeholder="Search by title or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-1/2 lg:w-56 p-2 rounded-lg bg-[#1f1f1f] text-white border border-gray-600 placeholder-gray-400"
          />
        </div>

        {/* Category Dropdown */}
        <div className="mb-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full  md:w-1/2 p-2 lg:w-56 rounded-lg bg-[#1f1f1f] text-white border border-gray-600"
          >
            <option value="">All Categories</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((proj) => {
            const thumbnailUrl =
              Array.isArray(proj.project) && proj.project.length > 0
                ? proj.project[0]
                : 'https://via.placeholder.com/600x400?text=No+Image';

            return (
              <div
                key={proj._id}
                className="relative bg-[#1f1f1f] rounded-3xl overflow-hidden shadow-lg"
              >
                <Link key={proj._id} to={proj.to} target='_blank'>

                  <div className="bg-[#1f1f1f] p-2 rounded-2xl">
                    <img
                      src={thumbnailUrl}
                      alt={proj.title}
                      className="w-full h-56 object-contain rounded-xl cursor-pointer p-3"
                    // onClick={() => setSelectedImage(thumbnailUrl)}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-center text-gray-300 leading-tight">
                      {proj.title}
                    </h3>
                    <p className="mt-2 text-gray-400 text-center">{proj.category}</p>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <div className="col-span-full text-center text-gray-400">
            No projects found.
          </div>
        )}
      </div>

      {/* Lightbox */}
      {/* {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full‐Screen Preview"
            className="max-w-full max-h-full object-contain cursor-pointer"
          />
        </div>
      )} */}
    </div>
  );
};

export default ProjectsPage;
