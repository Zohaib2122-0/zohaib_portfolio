

import React, { useState } from 'react';
import { usepatientStore } from '../lib/store/usepatientstore';

export const Createpatientformm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    serialno: '',
    age: '',
    disease: '',
  });

  const createPatient = usepatientStore((state) => state.createPatient);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPatient(formData);
    setFormData({
      name: '',
      email: '',
      password: '',
      serialno: '',
      age: '',
      disease: '',
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Patient Registration Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-blue-100 rounded-md focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-blue-100 rounded-md focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-blue-100 rounded-md focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Serial Number</label>
            <input
              type="text"
              name="serialno"
              value={formData.serialno}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-blue-100 rounded-md focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-blue-100 rounded-md focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Disease</label>
            <input
              type="text"
              name="disease"
              value={formData.disease}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-blue-100 rounded-md focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};
