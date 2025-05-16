import React from "react";

function Summary({ selectedPlan, selectedAddOns, plans, addOns, onPrevious }) {
  function Summary({
    selectedPlan,
    selectedAddOns,
    plans,
    addOns,
    onPrevious,
  }) {
    const selectedPlanDetails = plans.find((plan) => plan.id === selectedPlan);
    const selectedAddOnDetails = addOns.filter((addOn) =>
      selectedAddOns.includes(addOn.id)
    );
    const totalMonthlyPrice =
      (selectedPlanDetails?.priceMonthly
        ? parseFloat(selectedPlanDetails.priceMonthly.replace("$/mo", ""))
        : 0) +
      selectedAddOnDetails.reduce(
        (sum, addOn) =>
          sum + parseFloat(addOn.priceMonthly.replace("$/mo", "")),
        0
      );

    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Order Summary
        </h2>
        <p className="text-gray-600 mb-4">
          Review your order details before proceeding.
        </p>
        {
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Order Summary
            </h2>
            <p className="text-gray-600 mb-4">
              Review your order details before proceeding.
            </p>
            <div className="mb-4 border-b pb-4">
              <h3 className="font-semibold text-gray-700">Selected Plan:</h3>
              {selectedPlanDetails ? (
                <p>
                  {selectedPlanDetails.name} -{" "}
                  {selectedPlanDetails.priceMonthly}
                </p>
              ) : (
                <p className="text-gray-500">No plan selected.</p>
              )}
            </div>
            {selectedAddOnDetails.length > 0 && (
              <div className="mb-4 border-b pb-4">
                <h3 className="font-semibold text-gray-700">
                  Selected Add-ons:
                </h3>
                <ul>
                  {selectedAddOnDetails.map((addOn) => (
                    <li key={addOn.id}>
                      {addOn.name} - {addOn.priceMonthly}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mb-4">
              <h3 className="font-semibold text-gray-700">
                Total Monthly Cost:
              </h3>
              <p className="text-xl font-bold text-indigo-600">
                ${totalMonthlyPrice.toFixed(2)}/mo
              </p>
            </div>
            <div className="flex justify-between mt-6">
              <span
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={onPrevious}
              >
                Previous: Add-ons
              </span>
              <span className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Confirm & Pay
              </span>
            </div>
          </div>
        }
        <div className="flex justify-between mt-6">
          <span
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={onPrevious}
          >
            Previous: Add-ons
          </span>
          <span className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Confirm & Pay
          </span>
        </div>
      </div>
    );
  }
}

export default Summary;
