

import React, { useState } from "react";
import { useappointmentstore } from "../lib/store/useappointmentstore";
import { useRegistereddoctorsQuery } from "./redux/doctortapi";

export const Createappointmentform = () => {
  const { data, isLoading, isError } = useRegistereddoctorsQuery();
  const Doctors = data?.doctor || [];

  const { createappointment, loading } = useappointmentstore();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    date: "",
    doctor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createappointment(formData);
    setFormData({ name: "", age: "", gender: "", phone: "", date: "", doctor: "" });
    alert("Appointment Created Successfully!");
  };

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (isError) return <div className="text-center text-red-500">Error loading doctors.</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Appointment Booking Form</h2>

        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-blue-100 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Doctor</label>
          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-blue-100 focus:outline-none"
          >
            <option value="">Select a doctor</option>
            {Doctors.map((doctor, index) => (
              <option key={doctor._id || index} value={doctor.name}>
                {doctor.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-blue-100 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-blue-100 focus:outline-none"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-blue-100 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-blue-100 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
          disabled={loading}
        >
          {loading ? "Creating..." : "Submit Form"}
        </button>
      </form>
    </div>
  );
};
