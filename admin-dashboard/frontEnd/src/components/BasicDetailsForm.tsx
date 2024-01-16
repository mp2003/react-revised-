// BasicDetailsForm.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faMapMarkedAlt,
  faCity,
  faFlag,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";

interface BasicDetailsFormProps {
  formData: {
    name: string;
    email: string;
    phoneNumber: string;
    address: {
      line1: string;
      line2: string;
      city: string;
      state: string;
      pincode: string;
      country: string;
    };
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      phoneNumber: string;
      address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        pincode: string;
        country: string;
      };
    }>
  >;
  nextStep: () => void;
  prevStep: () => void;
}

const BasicDetailsForm: React.FC<BasicDetailsFormProps> = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddressChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [key]: value,
      },
    }));
  };
  return (
    <div className="pt-4">
      <div className="pt-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Step 1: Basic Details
          <hr className="mt-4" />
        </h2>
        <div className="mb-4 ">
          <label className="block mb-2 text-white">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Name:
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 border-b-2 border-white bg-transparent focus:outline-none focus:border-teal-900 focus:bg-transparent-400 rounded-md text-base text-white placeholder-style"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-white">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border-b-2 border-white bg-transparent focus:outline-none focus:border-teal-900 focus:bg-transparent-400 rounded-md text-base text-white placeholder-style"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-white">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            Phone Number:
          </label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="+91"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="w-full p-3 border-b-2 border-white bg-transparent focus:outline-none focus:border-teal-900 focus:bg-transparent-400 rounded-md text-base text-white placeholder-style"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-white">
            <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2" />
            Address Line 1:
          </label>
          <input
            type="text"
            name="line1"
            value={formData.address.line1}
            onChange={(e) => handleAddressChange(e, "line1")}
            className="w-full p-3 border-b-2 border-white bg-transparent focus:outline-none focus:border-teal-900 focus:bg-transparent-400 rounded-md text-base text-white placeholder-style"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-white">
            <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2" />
            Address Line 2:
          </label>
          <input
            type="text"
            name="line2"
            value={formData.address.line2}
            onChange={(e) => handleAddressChange(e, "line2")}
            className="w-full p-3 border-b-2 border-white bg-transparent focus:outline-none focus:border-teal-900 focus:bg-transparent-400 rounded-md text-base text-white placeholder-style"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-white">
            <FontAwesomeIcon icon={faCity} className="mr-2" />
            City:
          </label>
          <input
            type="text"
            name="city"
            value={formData.address.city}
            onChange={(e) => handleAddressChange(e, "city")}
            className="w-full p-3 border-b-2 border-white bg-transparent focus:outline-none focus:border-teal-900 focus:bg-transparent-400 rounded-md text-base text-white placeholder-style"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-white">
            <FontAwesomeIcon icon={faFlag} className="mr-2" />
            State:
          </label>
          <input
            type="text"
            name="state"
            value={formData.address.state}
            onChange={(e) => handleAddressChange(e, "state")}
            className="w-full p-3 border-b-2 border-white bg-transparent focus:outline-none focus:border-teal-900 focus:bg-transparent-400 rounded-md text-base text-white placeholder-style"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-white">
            <FontAwesomeIcon icon={faMapPin} className="mr-2" />
            Pincode:
          </label>
          <input
            type="text"
            name="pincode"
            value={formData.address.pincode}
            onChange={(e) => handleAddressChange(e, "pincode")}
            className="w-full p-3 border-b-2 border-white bg-transparent focus:outline-none focus:border-teal-900 focus:bg-transparent-400 rounded-md text-base text-white placeholder-style"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-white">
            <FontAwesomeIcon icon={faFlag} className="mr-2" />
            Country:
          </label>
          <input
            type="text"
            name="country"
            value={formData.address.country}
            onChange={(e) => handleAddressChange(e, "country")}
            className="w-full p-3 border-b-2 border-white bg-transparent focus:outline-none focus:border-teal-900 focus:bg-transparent-400 rounded-md text-base text-white placeholder-style"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicDetailsForm;
