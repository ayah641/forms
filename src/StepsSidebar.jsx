import React from "react";

function StepsSidebar({ currentStep }) {
  const getStepClass = (stepNumber) => {
    return `w-6 h-6 rounded-full flex items-center justify-center text-sm ${
      currentStep === stepNumber ? "bg-indigo-400" : "bg-indigo-800"
    }`;
  };

  const getTextColorClass = (stepNumber) => {
    return currentStep === stepNumber ? "font-semibold" : "";
  };

  return (
    <div className="bg-indigo-600 text-white p-6 rounded-tl-md rounded-bl-md flex flex-col items-start">
      <button className="flex items-center space-x-2 py-2 w-full focus:outline-none bg-transparent mb-4">
        <div className={getStepClass(1)}>1</div>
        <span className={`text-sm ${getTextColorClass(1)}`}>YOUR INFO</span>
      </button>
      <button className="flex items-center space-x-2 py-2 w-full focus:outline-none bg-transparent mb-4">
        <div className={getStepClass(2)}>2</div>
        <span className={`text-sm ${getTextColorClass(2)}`}>SELECT PLAN</span>
      </button>
      <button className="flex items-center space-x-2 py-2 w-full focus:outline-none bg-transparent mb-4">
        <div className={getStepClass(3)}>3</div>
        <span className={`text-sm ${getTextColorClass(3)}`}>ADD-ONS</span>
      </button>
      <button className="flex items-center space-x-2 py-2 w-full focus:outline-none bg-transparent mb-4">
        <div className={getStepClass(4)}>4</div>
        <span className={`text-sm ${getTextColorClass(4)}`}>SUMMARY</span>
      </button>
    </div>
  );
}

export default StepsSidebar;
