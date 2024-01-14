// MultiFileUploadForm.tsx
import React, { ReactNode } from "react";

interface MultiFileUploadFormProps {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  nextStep: () => void;
  prevStep: () => void;
}

const MultiFileUploadForm: React.FC<MultiFileUploadFormProps> = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}): ReactNode => {
  // Component logic

  formData = "hello world";
  return null; // or return some JSX
};

export default MultiFileUploadForm;
