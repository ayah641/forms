import React, { useState } from "react";

function AddOns({ onNext, onPrevious }) {
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const addOns = [
    {
      id: 1,
      name: "Extra Storage",
      description: "1TB of extra secure storage",
      priceMonthly: "$5/mo",
    },
    {
      id: 2,
      name: "Customizable Theme",
      description: "Premium theme with customization options",
      priceMonthly: "$7/mo",
    },
    {
      id: 3,
      name: "24/7 Support",
      description: "Priority access to our support team",
      priceMonthly: "$10/mo",
    },
  ];

  const handleAddOnChange = (addOnId) => {
    if (selectedAddOns.includes(addOnId)) {
      setSelectedAddOns(selectedAddOns.filter((id) => id !== addOnId));
    } else {
      setSelectedAddOns([...selectedAddOns, addOnId]);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Pick Add-ons</h2>
      <p className="text-gray-600 mb-4">
        Enhance your plan with these optional add-ons.
      </p>
      <div>
        {
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Pick Add-ons
            </h2>
            <p className="text-gray-600 mb-4">
              Enhance your plan with these optional add-ons.
            </p>
            <div>
              {addOns.map((addOn) => (
                <div key={addOn.id} className="mb-4 flex items-center">
                  <input
                    type="checkbox"
                    id={`addon-${addOn.id}`}
                    className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
                    checked={selectedAddOns.includes(addOn.id)}
                    onChange={() => handleAddOnChange(addOn.id)}
                  />
                  <label
                    htmlFor={`addon-${addOn.id}`}
                    className="ml-2 block text-gray-700"
                  >
                    <span className="font-semibold">{addOn.name}</span> -{" "}
                    {addOn.description} ({addOn.priceMonthly})
                  </label>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={onPrevious}
              >
                Previous: Select Plan
              </button>
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={onNext}
              >
                Next: Summary
              </button>
            </div>
          </div>
        }
      </div>
      <div className="flex justify-between mt-6">
        <span
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={onPrevious}
        >
          Previous: Select Plan
        </span>
        <span
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={onNext}
        >
          Next: Summary
        </span>
      </div>
    </div>
  );
}

export default AddOns;
