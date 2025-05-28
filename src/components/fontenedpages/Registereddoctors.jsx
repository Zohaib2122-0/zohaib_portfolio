
import React from 'react';
import { useRegistereddoctorsQuery } from '../redux/doctortapi';

const dummyImage =["https://avatars.mds.yandex.net/i?id=6fa1ac408b68c1b0c1b9aadd96a098e623b89619-9461059-images-thumbs&n=13"]

export const Registeredoctors = () => {
  const { data, isLoading, isError } = useRegistereddoctorsQuery();
  const Doctors = data?.doctor || [];

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (isError) return <div className="text-center text-red-500">Error loading doctors.</div>;
    
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Doctors Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {Doctors.map((doctor, index) => (
          <div key={doctor._id || index} className="bg-white p-6 rounded-lg shadow-md relative border-  border-2 border-blue-200">
            {/* Quotes */}
            {/* <span className="text-4xl text-blue-400 absolute top-4 left-4">“</span> */}
            {/* <span className="text-4xl text-blue-400 absolute bottom-4 right-4 rotate-180">“</span> */}

            {/* Image */}
            <div className="flex justify-center mb-4">
              <img
                src={dummyImage}
                alt="Doctor"
                className="w-20 h-20 rounded-full object-cover border-2 border-blue-400"
              />
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-4 text-center italic">
              I’m Dr. {doctor.name}, specialized in {doctor.specialization}. I provide consultations for just Rs.{" "}
              {doctor.consultationFees}. Our service ensures comfort and convenience!
            </p>

            {/* Name and Stars */}
            <div className="text-center">
              <p className="font-semibold text-blue-500">{doctor.name}</p>
              <div className="flex justify-center text-yellow-400 mt-1">
                {/* Show 4 full stars and 1 half for example */}
                {"★★★★☆".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
