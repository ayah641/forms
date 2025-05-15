import React from "react";
import { useNavigate } from "react-router-dom";
import SelectPlan from "./SelectPlan";

function PersonalInfoForm() {
  const navigate = useNavigate();

  const handleNextStep = () => {
    navigate("/select-plan"); // المسار اللي تبغى تنتقل له
  };
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Personal info
      </h2>
      <p className="text-gray-600 mb-4">
        Please provide your name, email address, and phone number.
      </p>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="e.g. Stephen King"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="e.g. stephenking@lorem.com"
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
      <button className="mt-6" onClick={SelectPlan}>
        <span className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Next Step
        </span>
      </button>
    </div>
  );
}

export default PersonalInfoForm;
