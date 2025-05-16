import React, { useState } from "react";
import MainContent from "./MainContent";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center p-6">
      <MainContent
        currentStep={currentStep}
        onNextStep={handleNextStep}
        onPreviousStep={handlePreviousStep}
      />
    </div>
  );
}

export default App;
