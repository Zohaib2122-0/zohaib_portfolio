import React, { useEffect } from 'react';
import { usedoctorstore } from '../../lib/store/usedoctorstore';
import { useRegisterdoctorMutation, useRemovedoctorMutation } from '../redux/doctortapi';
import { FcApproval } from "react-icons/fc";
import { FcDisapprove } from "react-icons/fc";
export const Doctors = () => {

    const { Doctors, loading, getdoctor } = usedoctorstore(); // Accessing Zustand store

    useEffect(() => {
        getdoctor(); // Fetch doctors when the component mounts
    }, [getdoctor]);
    // console.log(Doctors)



    const [registerdoctor, { isLoading: rejecting }] = useRegisterdoctorMutation();

    const [removedoctor, { isLoading: approving }] = useRemovedoctorMutation();





    const handleReject = async (id) => {
        try {
            await removedoctor(id).unwrap()
            getdoctor();
        } catch (error) {
            console.log(error)
        }
    }


    const handleApprove = async (id) => {
        try {
            await registerdoctor(id).unwrap()
            getdoctor()
        } catch (error) {
            console.log(error)
        }
    }


    if (loading) {
        return <div className="text-center">Loading...</div>; // Loading state
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-center mb-4">Doctors List</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700 text-left">
                            <th className="px-4 py-2 border-b">Name</th>
                            <th className="px-4 py-2 border-b">Email</th>
                            <th className="px-4 py-2 border-b">Specialization</th>
                            <th className="px-4 py-2 border-b">Consultation Fees</th>
                            <th className="px-4 py-2 border-b">Auctions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Doctors.length > 0 ? (
                            Doctors.map((doctor) => (
                                <tr key={doctor._id} className="hover:bg-gray-100">
                                    <td className="px-4 py-2 border-b">{doctor.name}</td>
                                    <td className="px-4 py-2 border-b">{doctor.email}</td>
                                    <td className="px-4 py-2 border-b">{doctor.specialization}</td>
                                    <td className="px-4 py-2 border-b">{doctor.consultationFees}</td>

                                    <div className='space-x-3'>

                                        {/* ✅ reject Button */}
                                        <button
                                            onClick={() => handleReject(doctor._id)}
                                            className="mt-3 p-2  text-white rounded  transition"
                                            disabled={rejecting}
                                        >
                                            {rejecting ? "Rejecting..." : <FcDisapprove className='w-7 h-7' />}
                                        </button>


                                        {/* ✅ Approve Button */}
                                        {!doctor.status && (
                                            <button
                                                onClick={() => handleApprove(doctor._id)}
                                                className=" mt-3 p-2  text-white rounded  transition"
                                                disabled={approving}
                                            >
                                                {approving ? "Approving..." : <FcApproval className='w-7 h-7' />}
                                            </button>
                                        )}

                                    </div>
                                    {/* Show approved status */}
                                    {doctor.status && (
                                        <p className="mt-3 text-green-700 font-semibold">Approved</p>
                                    )}


                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center py-4">No doctors found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


