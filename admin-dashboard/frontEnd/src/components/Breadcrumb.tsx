// Breadcrumb.tsx
import React from "react";

interface BreadcrumbProps {
  steps: string[];
  currentStep: number;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ steps, currentStep }) => {
  return (
    <div className="text-sm breadcrumbs flex items-center">
      <ul className="flex space-x-2">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`text-white-500 ${
              index + 1 === currentStep ? "font-bold text-purple-800" : ""
            }`}
          >
            <a>{step}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
