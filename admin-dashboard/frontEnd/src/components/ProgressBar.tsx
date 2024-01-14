import React from "react";

interface ProgressBarProps {
  currentStep: () => number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  // Implement the progress bar based on the current step
  return 5;
};

export default ProgressBar;
