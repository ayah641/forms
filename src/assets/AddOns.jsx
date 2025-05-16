import React, { useState } from "react";

function AddOns({ nextStep, prevStep, formData }) {
  const [onlineService, setOnlineService] = useState(
    formData.onlineService || false
  );
  const [largerStorage, setLargerStorage] = useState(
    formData.largerStorage || false
  );

  const handleSubmit = () => {
    nextStep({ onlineService, largerStorage });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Add-ons</h2>
      <p className="text-gray-600 mb-4">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 focus:border-blue-500"
            checked={onlineService}
            onChange={() => setOnlineService(!onlineService)}
          />
          <span className="ml-2 text-gray-700">Online service</span>
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 focus:border-blue-500"
            checked={largerStorage}
            onChange={() => setLargerStorage(!largerStorage)}
          />
          <span className="ml-2 text-gray-700">Larger storage</span>
        </label>
      </div>
      <div className="flex justify-between">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={prevStep}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleSubmit}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default AddOns;
