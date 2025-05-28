

import React, { useState } from 'react';
import { usedoctorstore } from '../lib/store/usedoctorstore';

const DoctorRegistrationForm = () => {
    const [doctorData, setDoctorData] = useState({
        name: '',
        email: '',
        specialization: '',
        consultationFees: ''
    });

    const { adddoctor } = usedoctorstore();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDoctorData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await adddoctor(doctorData);
        setDoctorData({
            name: '',
            email: '',
            specialization: '',
            consultationFees: ''
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
                    Doctor Registration Form
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={doctorData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded-md bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={doctorData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded-md bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Specialization</label>
                        <input
                            type="text"
                            name="specialization"
                            value={doctorData.specialization}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded-md bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Consultation Fees</label>
                        <input
                            type="number"
                            name="consultationFees"
                            value={doctorData.consultationFees}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded-md bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200"
                        >
                            Submit Form
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DoctorRegistrationForm;
