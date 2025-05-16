import React, { useState } from "react";

function SelectPlan({ onNext }) {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const plans = [
    {
      id: 1,
      name: "Basic",
      priceMonthly: "$10/mo",
      priceYearly: "$100/yr",
      features: ["Feature 1", "Feature 2"],
    },
    {
      id: 2,
      name: "Pro",
      priceMonthly: "$20/mo",
      priceYearly: "$200/yr",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      id: 3,
      name: "Premium",
      priceMonthly: "$30/mo",
      priceYearly: "$300/yr",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
  ];

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Select Your Plan
      </h2>
      <p className="text-gray-600 mb-4">
        Choose the plan that best suits your needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`border rounded-md p-4 cursor-pointer ${
              selectedPlan === plan.id
                ? "border-indigo-600 shadow-md"
                : "border-gray-300 hover:shadow-md"
            }`}
            onClick={() => handlePlanSelect(plan.id)}
          >
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              {plan.name}
            </h3>
            <p className="text-gray-700 font-bold mb-2">
              {selectedPlan === plan.id ? plan.priceYearly : plan.priceMonthly}
            </p>
            <ul className="list-disc pl-4 text-gray-600">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <button
              className={`mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                selectedPlan === plan.id ? "" : "opacity-50 cursor-not-allowed"
              }`}
              disabled={selectedPlan !== plan.id}
            >
              {selectedPlan === plan.id ? "Selected" : "Select"}
            </button>
          </div>
        ))}
      </div>

      <span
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6 "
        onClick={onNext}
        disabled={!selectedPlan}
      >
        Next: Add-ons
      </span>
    </div>
  );
}

export default SelectPlan;
