import React, { useState } from "react";
import { X } from "lucide-react";

export default function AppointmentModal({ isOpen, setIsOpen }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment booked:", formData);
    alert("Appointment request submitted successfully!");
    setFormData({ fullName: "", phone: "", email: "", date: "", time: "" });
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative transform transition-all animate-slide-up">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition p-1 hover:bg-gray-100 rounded-lg"
        >
          <X size={28} strokeWidth={2.5} />
        </button>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Request Appointment
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Fill in your details to book an appointment
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition placeholder-gray-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 mt-8"
          >
            Submit
          </button>

          <button
            onClick={() => setIsOpen(false)}
            className="w-full bg-gray-200 hover:bg-gray-300 text-slate-700 font-semibold py-3 px-4 rounded-lg transition duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
