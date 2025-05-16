import React, { useState } from "react";
import YourInfo from "./YourInfo";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import Summary from "./Summary";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <YourInfo nextStep={nextStep} formData={formData} />;
      case 2:
        return (
          <SelectPlan
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
          />
        );
      case 3:
        return (
          <AddOns nextStep={nextStep} prevStep={prevStep} formData={formData} />
        );
      case 4:
        return <Summary formData={formData} prevStep={prevStep} />;
      default:
        return <YourInfo nextStep={nextStep} formData={formData} />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <div className="flex justify-between mb-4">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            1
          </div>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === 2
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            2
          </div>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === 3
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            3
          </div>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === 4
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            4
          </div>
        </div>
        {renderStep()}
      </div>
    </div>
  );
}

export default App;
