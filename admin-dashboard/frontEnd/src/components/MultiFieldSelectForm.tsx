// MultiFieldSelectForm.tsx
import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faCheck } from "@fortawesome/free-solid-svg-icons";

interface MultiFieldSelectFormProps {
  formData: {
    selectedOptions: string[];
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      selectedOptions: string[];
    }>
  >;
}

const MultiFieldSelectForm: React.FC<MultiFieldSelectFormProps> = ({
  formData,
  setFormData,
}) => {
  const navigate = useNavigate();

  const handleOptionSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );

    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedOptions,
    }));
  };

  const handleSubmit = () => {
    // Add any additional logic for form submission if needed
    navigate("/submission-table");
  };

  const generateOptions = () => {
    const options = [];

    for (let i = 1; i <= 20; i++) {
      options.push(
        <option key={i} value={`option${i}`}>
          Option {i}
        </option>
      );
    }

    return options;
  };

  return (
    <div className="max-w-6xl mx-auto pt-8 pb-2 ">
      <h2 className="text-2xl font-semibold mb-4 ">
        <FontAwesomeIcon
          icon={faList}
          className="text-teal-500 text-2xl mr-4"
        />
        Step 3: Multi-Field Select Dropdown
      </h2>
      <label
        htmlFor="multiFieldSelect"
        className="block mb-4 text-l font-semibold"
      >
        Select Options:
      </label>
      <select
        id="multiFieldSelect"
        multiple
        value={formData.selectedOptions}
        onChange={handleOptionSelect}
        className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-teal-500 rounded-md shadow-md"
        style={{
          minHeight: "3rem", // Adjust the height as needed
          backgroundColor: "white", // Set your desired background color
          color: "#4B5563", // Set your desired text color
          borderRadius: "0.7rem", // Set your desired
        }}
      >
        {generateOptions()}
      </select>
      <br />
      <br />
      <button
        onClick={handleSubmit}
        className="bg-teal-500 text-white px-4 pt-4 pb-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:bg-teal-600"
      >
        Submit <FontAwesomeIcon icon={faCheck} className="ml-2" />
      </button>
    </div>
  );
};

MultiFieldSelectForm.propTypes = {
  setFormData: PropTypes.func.isRequired,
};

export default MultiFieldSelectForm;
