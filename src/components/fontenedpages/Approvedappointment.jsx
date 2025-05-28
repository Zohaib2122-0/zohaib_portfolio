


import React, { useEffect } from "react";
import { useappointmentstore } from "../lib/store/useappointmentstore";


export const Approvedappointment = () => {
  const { getappoinment, appointments, loading } = useappointmentstore();


  useEffect(() => {
    getappoinment();
  }, []);



 

  if (loading) {
    return <div className="text-center text-xl mt-10">Loading Appointments...</div>;
  }

  return (
    // <div className="max-w-6xl mx-auto p-6">
    //   <h2 className="text-2xl font-bold text-center mb-6">Appointment List</h2>
    //   <div className="overflow-x-auto">
    //     <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
    //       <thead>
    //         <tr className="bg-gray-200 text-gray-700 text-left">
    //           <th className="px-4 py-2 border-b">Name</th>
    //           <th className="px-4 py-2 border-b">Age</th>
    //           <th className="px-4 py-2 border-b">Gender</th>
    //           <th className="px-4 py-2 border-b">Phone</th>
    //           <th className="px-4 py-2 border-b">Date</th>
    //           <th className="px-4 py-2 border-b">Doctor</th>
    //           <th className="px-4 py-2 border-b">Status</th>
    //           <th className="px-4 py-2 border-b">Actions</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {appointments.length > 0 ? (
    //           appointments.map((appointment) => (
    //             <tr key={appointment._id} className="hover:bg-gray-100">
    //               <td className="px-4 py-2 border-b">{appointment.name}</td>
    //               <td className="px-4 py-2 border-b">{appointment.age}</td>
    //               <td className="px-4 py-2 border-b">{appointment.gender}</td>
    //               <td className="px-4 py-2 border-b">{appointment.phone}</td>
    //               <td className="px-4 py-2 border-b">
    //                 {new Date(appointment.date).toLocaleDateString()}
    //               </td>
    //               <td className="px-4 py-2 border-b">{appointment.doctor}</td>
    //               <td className="px-4 py-2 text-yellow-500 border-b">{appointment.status}</td>
                  
                  
    //             </tr>
    //           ))
    //         ) : (
    //           <tr>
    //             <td colSpan="8" className="text-center py-4 text-gray-500">
    //               No Appointments Available
    //             </td>
    //           </tr>
    //         )}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
  
  
       <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Appointment List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left">
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Age</th>
              <th className="px-4 py-2 border-b">Gender</th>
              <th className="px-4 py-2 border-b">Phone</th>
              <th className="px-4 py-2 border-b">Date</th>
              <th className="px-4 py-2 border-b">Doctor</th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length > 0 ? (
              appointments.map((appointment) => (
                <tr key={appointment._id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b">{appointment.name}</td>
                  <td className="px-4 py-2 border-b">{appointment.age}</td>
                  <td className="px-4 py-2 border-b">{appointment.gender}</td>
                  <td className="px-4 py-2 border-b">{appointment.phone}</td>
                  <td className="px-4 py-2 border-b">
                    {new Date(appointment.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 border-b">{appointment.doctor}</td>
                  <td className="px-4 py-2 text-yellow-500 border-b">{appointment.status}</td>
                  
                  
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-500">
                  No Appointments Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  
  
  );
};




