// MultiStepForm.tsx
import React, { useState } from "react";
import BasicDetailsForm from "./BasicDetailsForm";
import MultiFileUploadForm from "./MultiFileUploadForm";
import MultiFieldSelectForm from "./MultiFieldSelectForm";
import Breadcrumb from "./Breadcrumb";
import ProgressBar from "./ProgressBar";

const MultiStepForm: React.FC = () => {
  const initialFormData = {
    name: "",
    email: "",
    phoneNumber: "",
    address: {
      line1: "",
      line2: "",
      city: "",
      state: "",
      pincode: "",
      country: "",
    },
    files: [],
    geolocationStatus: "",
    selectedOptions: [],
  };

  const [formData, setFormData] = useState(initialFormData);
  const [currentStep, setCurrentStep] = useState<number>(1);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const cancelForm = () => {
    setCurrentStep(1);
    setFormData(initialFormData);
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

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

  const steps = [
    "BasicDetailsForm",
    "MultiFileUploadForm.tsx",
    "MultiFieldSelectForm.tsx",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-500 via-purple-600 to-purple-800">
      <div className="bg-white bg-opacity-30 p-8 rounded-lg shadow-md w-full md:max-w-lg relative text-white">
        <Breadcrumb steps={steps} currentStep={currentStep} />
        <ProgressBar currentStep={currentStep} />
        {renderForm()}

        <div className="flex flex-col md:flex-row md:justify-between mt-8">
          {currentStep > 1 && (
            <button
              onClick={prevStep}
              className="bg-gray-300 text-gray-700 px-6 py-4 rounded-md mb-2 md:mb-0 hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            >
              Previous
            </button>
          )}
          {currentStep < 3 && (
            <button
              onClick={nextStep}
              className="bg-teal-500 text-white font-bold text-l px-6 py-4 rounded-md mb-2 md:mb-0 hover:bg-teal-600 focus:outline-none focus:bg-teal-600"
            >
              Next
            </button>
          )}
          <button
            onClick={cancelForm}
            className="bg-red-500 text-white px-6 py-2 rounded-md mb-2 md:mb-0 hover:bg-red-600 focus:outline-none focus:bg-red-600"
          >
            Cancel
          </button>
          <button
            onClick={resetForm}
            className="bg-gray-500 text-white px-6 py-4 rounded-md mb-2 md:mb-0 hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
