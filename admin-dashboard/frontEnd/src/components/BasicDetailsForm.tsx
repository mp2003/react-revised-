// BasicDetailsForm.tsx
interface BasicDetailsFormProps {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  nextStep: () => void;
  prevStep: () => void;
}

const BasicDetailsForm: React.FC<BasicDetailsFormProps> = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) => {
  // Component logic
  return null;
};

export default BasicDetailsForm;
