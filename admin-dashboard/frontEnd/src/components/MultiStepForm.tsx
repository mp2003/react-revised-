// MultiStepForm.jsx
import React, { useState } from "react";
import BasicDetailsForm from "./BasicDetailsForm";
import MultiFileUploadForm from "./MultiFileUploadForm";
import MultiFieldSelectForm from "./MultiFieldSelectForm";
import ProgressBar from "./ProgressBar";

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    // Initialize your form data fields
    name: "",
    email: "",
    // ... other fields
  });

  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // Render the appropriate form based on the current step
  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <BasicDetailsForm
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 2:
        return (
          <MultiFileUploadForm
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <MultiFieldSelectForm
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <ProgressBar currentStep={currentStep} />
      {renderForm()}
      {/* <h1>Milind</h1> */}
      {/* You can also add Next/Previous/Cancel buttons here */}
    </div>
  );
};

export default MultiStepForm;
