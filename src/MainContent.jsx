import React from "react";
import StepsSidebar from "./StepsSidebar";
import PersonalInfoForm from "./PersonalInfoForm";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import Summary from "./Summary";

function MainContent({ currentStep, onNextStep, onPreviousStep }) {
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoForm onNext={onNextStep} />;
      case 2:
        return <SelectPlan onNext={onNextStep} />;
      case 3:
        return <AddOns onNext={onNextStep} onPrevious={onPreviousStep} />;
      case 4:
        return (
          <Summary
            onNext={onNextStep} // ممكن نخليه لصفحة التأكيد النهائية
            onPrevious={onPreviousStep}
          />
        );
      default:
        return <PersonalInfoForm onNext={onNextStep} />;
    }
  };

  return (
    <div className="bg-white rounded-md shadow-md flex">
      <StepsSidebar currentStep={currentStep} />
      <div className="flex-1">{renderStep()}</div>
    </div>
  );
}

export default MainContent;
