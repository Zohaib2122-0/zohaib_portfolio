

// import React, { useState } from 'react';
// import { useGetprojectsQuery } from './redux/projectapislice';

// const ProjectsPage = () => {
//   const {
//     data: rawResponse,
//     error,
//     isLoading,
//     isError,
//   } = useGetprojectsQuery();

//   const [selectedImage, setSelectedImage] = useState(null);
//   const [searchQuery, setSearchQuery] = useState(''); // 🔍 Search input



//   const categories = [
//     "Web design",
//     "Advertising design",
//     "Branding",
//     "Packaging design",
//     "Banners",
//     "Business card design",
//     "Brochures",
//     "thumbnail",
//     "uiux",
//     "logo design"
//   ];

//   const [selectedCategory, setSelectedCategory] = useState(''); // ⬇️ Dropdown selected value



//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-black">
//         <span className="text-gray-500">Loading projects…</span>
//       </div>
//     );
//   }

//   if (isError) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-black p-8">
//         <p className="text-red-500 text-center">
//           Error fetching projects: {error?.data?.message || error?.error}
//         </p>
//       </div>
//     );
//   }

//   const projectsArray = Array.isArray(rawResponse?.projects)
//     ? rawResponse.projects
//     : [];

//   // 🔍 Filter logic based on title or category
//   // const filteredProjects = projectsArray.filter((proj) => {
//   //   const query = searchQuery.toLowerCase();
//   //   return (
//   //     proj.title?.toLowerCase().includes(query) ||
//   //     proj.category?.toLowerCase().includes(query)
//   //   );
//   // });

//   const filteredProjects = projectsArray.filter((proj) => {
//     const query = searchQuery.toLowerCase();
//     const matchesSearch =
//       proj.title?.toLowerCase().includes(query) ||
//       proj.category?.toLowerCase().includes(query);

//     const matchesCategory =
//       selectedCategory === '' || proj.category?.toLowerCase() === selectedCategory.toLowerCase();

//     return matchesSearch && matchesCategory;
//   });


//   return (
//     <div className="relative min-h-screen bg-darkbg p-6 lg:p-14">
//       {/* Breadcrumbs */}
//       <div className="mb-8  rounded-2xl bg-[#1f1f1f] ">
//         <div className='p-4'>

//           <h1 className="text-6xl md:text-7xl text-gray-300 font-semibold mb-4 ">
//             Portfolio
//           </h1>
//           <div className="flex items-center gap-2 text-gray-300">
//             <span>Home</span>
//             <span>/</span>
//             <span>Portfolio</span>
//           </div>

//         </div>

//       </div>
//       <div className="flex items-center text-sm text-gray-400 mb-8">
//         <a href="#" className="text-green-400 hover:text-green-300">All Projects</a>
//         <span className="mx-2">/</span>
//         <a href="#" className="hover:text-white">Frontend</a>
//         <span className="mx-2">/</span>
//         <a href="#" className="hover:text-white">Backend</a>
//         <span className="mx-2">/</span>
//         <a href="#" className="hover:text-white">softwares</a>
//         <span className="ml-auto w-2 h-2 bg-lab rounded-full"></span>
//       </div>


//       <div className='lg:flex lg:justify-between'>


//         {/* 🔍 Search Bar */}
//         <div className="mb-10">
//           <input
//             type="text"
//             placeholder="Search by title or category..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full md:w-1/2 lg:w-56 p-2 rounded-lg bg-[#1f1f1f] text-white border border-gray-600 placeholder-gray-400"
//           />
//         </div>



//         {/* category filtering */}
//         <div className="mb-4">
//           <select
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             className="w-full  md:w-1/2 p-2 lg:w-56 rounded-lg bg-[#1f1f1f] text-white border border-gray-600"
//           >
//             <option value="">All Categories</option>
//             {categories.map((cat, idx) => (
//               <option key={idx} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//         </div>


//       </div>


//       {/* Project Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 lg:p-96">
//         {filteredProjects.length > 0 ? (
//           filteredProjects.map((proj) => {
//             const thumbnailUrl =
//               Array.isArray(proj.project) && proj.project.length > 0
//                 ? proj.project[0]
//                 : 'https://via.placeholder.com/600x400?text=No+Image';

//             return (
//               <div
//                 key={proj._id}
//                 className="relative bg-[#1f1f1f] rounded-3xl overflow-hidden shadow-lg"
//               >
//                 <div className="bg-[#1f1f1f] p-2 rounded-2xl">
//                   <img
//                     src={thumbnailUrl}
//                     alt={proj.title}
//                     className="w-full h-52 object-cover rounded-xl cursor-pointer p-3"
//                     onClick={() => setSelectedImage(thumbnailUrl)}
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-center text-gray-300 leading-tight">
//                     {proj.title}
//                   </h3>
//                   <p className="mt-2 text-gray-300 text-center">{proj.category}</p>
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <div className="col-span-full text-center text-gray-400">
//             No projects found.
//           </div>
//         )}
//       </div>

//       {/* Full-Screen Lightbox */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
//           onClick={() => setSelectedImage(null)}
//         >
//           <img
//             src={selectedImage}
//             alt="Full‐Screen Preview"
//             className="max-w-full max-h-full object-contain cursor-pointer"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProjectsPage;




import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  // const [selectedImage, setSelectedImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // 🔧 Manually define your projects here
  const projectsArray = [
    {
      _id: "1",
      title: "Modern Website Design",
      category: "Web design",
      project: ["https://via.placeholder.com/600x400?text=Web+Design"]
    },
    {
      _id: "2",
      title: "Creative Branding Pack",
      category: "Branding",
      to:"/contact",
      project: ["https://via.placeholder.com/600x400?text=Branding"]
    },
    {
      _id: "3",
      title: "Business Card Concept",
      category: "Business card design",
      project: ["https://avatars.mds.yandex.net/i?id=1420466f171af96c121d5b09073c6f6a-5875996-images-thumbs&n=13"]
    },
    {
      _id: "4",
      title: "App UI/UX",
      category: "uiux",
      project: ["https://avatars.mds.yandex.net/i?id=bfa4a934df6900fe4b878c6cace7f0071e458147-3530742-images-thumbs&n=13"]
    },
    // ➕ Add more static projects here
  ];

  const categories = [
    "Web design",
    "Advertising design",
    "Branding",
    "Packaging design",
    "Banners",
    "Business card design",
    "Brochures",
    "thumbnail",
    "uiux",
    "logo design"
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
                <Link key={proj._id} to={proj.to}>
             
                <div className="bg-[#1f1f1f] p-2 rounded-2xl">
                  <img
                    src={thumbnailUrl}
                    alt={proj.title}
                    className="w-full h-52 object-cover rounded-xl cursor-pointer p-3"
                    // onClick={() => setSelectedImage(thumbnailUrl)}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-center text-gray-300 leading-tight">
                    {proj.title}
                  </h3>
                  <p className="mt-2 text-gray-300 text-center">{proj.category}</p>
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
