

import React, { useState } from 'react';
import { useGetprojectsQuery } from './redux/projectapislice'; 

const ProjectsPage = () => {
  const {
    data: rawResponse,  
    error,
    isLoading,
    isError,
  } = useGetprojectsQuery();

  const [selectedImage, setSelectedImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // 🔍 Search input

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <span className="text-gray-500">Loading projects…</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black p-8">
        <p className="text-red-500 text-center">
          Error fetching projects: {error?.data?.message || error?.error}
        </p>
      </div>
    );
  }

  const projectsArray = Array.isArray(rawResponse?.projects)
    ? rawResponse.projects
    : [];

  // 🔍 Filter logic based on title or category
  const filteredProjects = projectsArray.filter((proj) => {
    const query = searchQuery.toLowerCase();
    return (
      proj.title?.toLowerCase().includes(query) ||
      proj.category?.toLowerCase().includes(query)
    );
  });

  return (
    <div className="relative min-h-screen bg-darkbg p-20">
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
        <a href="#" className="hover:text-white">Branding</a>
        <span className="mx-2">/</span>
        <a href="#" className="hover:text-white">Logo Design</a>
        <span className="mx-2">/</span>
        <a href="#" className="hover:text-white">UIX/UX</a>
        <span className="ml-auto w-2 h-2 bg-lab rounded-full"></span>
      </div>

      {/* 🔍 Search Bar */}
      <div className="mb-10">
        <input
          type="text"
          placeholder="Search by title or category..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/2 p-2 rounded-lg bg-[#1f1f1f] text-white border border-gray-600 placeholder-gray-400"
        />
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="bg-[#1f1f1f] p-2 rounded-2xl">
                  <img
                    src={thumbnailUrl}
                    alt={proj.title}
                    className="w-full h-52 object-cover rounded-xl cursor-pointer p-3"
                    onClick={() => setSelectedImage(thumbnailUrl)}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-center text-gray-300 leading-tight">
                    {proj.title}
                  </h3>
                  <p className="mt-2 text-gray-300 text-center">{proj.category}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full text-center text-gray-400">
            No projects found.
          </div>
        )}
      </div>

      {/* Full-Screen Lightbox */}
      {selectedImage && (
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
      )}
    </div>
  );
};

export default ProjectsPage;
