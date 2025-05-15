import React from "react";

function StepsSidebar() {
  return (
    <div className="bg-indigo-600 text-white p-6 rounded-tl-md rounded-bl-md flex flex-col justify-center items-start space-y-4">
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 rounded-full bg-indigo-400 flex items-center justify-center text-sm">
          1
        </div>
        <span className="text-sm font-semibold">
          <a href="#">YOUR INFO</a>
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 rounded-full bg-indigo-800 flex items-center justify-center text-sm">
          2
        </div>
        <span className="text-sm">
          <a href="#">SELECT PLAN</a>
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 rounded-full bg-indigo-800 flex items-center justify-center text-sm">
          3
        </div>
        <span className="text-sm">
          <a href="#">ADD-ONS</a>
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 rounded-full bg-indigo-800 flex items-center justify-center text-sm">
          4
        </div>
        <span className="text-sm">
          <a href="#">SUMMARY</a>
        </span>
      </div>
    </div>
  );
}

export default StepsSidebar;
