// ProgressBar.tsx
import React from "react";

interface ProgressBarProps {
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  return (
    <div className="w-full mb-4 mt-4">
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div className="flex items-center">
            <span
              className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${
                currentStep >= 1
                  ? "bg-teal-500 text-white"
                  : "bg-gray-300 text-gray-500"
              }`}
            >
              Step 1
            </span>
          </div>
          <div className="text-right">
            <span
              className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${
                currentStep >= 2
                  ? "bg-teal-500 text-white"
                  : "bg-gray-300 text-gray-500"
              }`}
            >
              Step 2
            </span>
          </div>
          <div className="text-right">
            <span
              className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${
                currentStep >= 3
                  ? "bg-teal-500 text-white"
                  : "bg-gray-300 text-gray-500"
              }`}
            >
              Step 3
            </span>
          </div>
        </div>
        <div className="flex mb-2 items-center justify-center space-x-2">
          <div
            className={`flex-auto w-full h-2.5 ${
              currentStep >= 1 ? "bg-teal-500" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`flex-auto w-full h-2.5 ${
              currentStep >= 2 ? "bg-teal-500" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`flex-auto w-full h-2.5 ${
              currentStep >= 3 ? "bg-teal-500" : "bg-gray-300"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
