


import React, { useEffect } from "react";
import { usepatientStore } from "../lib/store/usepatientstore";

export default function PatientList() {
  const { patients, loading, getpatient } = usepatientStore();

  useEffect(() => {
    getpatient();
  }, []);

  if (loading) {
    return <div className="text-center text-xl py-10">Loading...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Patients List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left">
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Email</th>
              <th className="px-4 py-2 border-b">Age</th>
              <th className="px-4 py-2 border-b">Serial No</th>
              <th className="px-4 py-2 border-b">Disease</th>
              <th className="px-4 py-2 border-b text-center">Auctions</th>
            </tr>
          </thead>
          <tbody>
            {patients.length > 0 ? (
              patients.map((patient) => (
                <tr key={patient._id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b">{patient.name}</td>
                  <td className="px-4 py-2 border-b">{patient.email}</td>
                  <td className="px-4 py-2 border-b">{patient.age}</td>
                  <td className="px-4 py-2 border-b">{patient.serialno}</td>
                  <td className="px-4 py-2 border-b">{patient.disease}</td>
                  <td className="px-4 py-2 border-b text-center">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No patients found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
