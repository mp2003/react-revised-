import React, { useState, ChangeEvent, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

interface MultiFileUploadFormProps {
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
    files: File[];
    geolocation: {
      latitude: number | null;
      longitude: number | null;
    };
    geolocationStatus: string;
    selectedOptions: string[];
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
      files: File[];
      geolocation: {
        latitude: number | null;
        longitude: number | null;
      };
      geolocationStatus: string;
      selectedOptions: string[];
    }>
  >;
  nextStep: () => void;
}

const MultiFileUploadForm: React.FC<MultiFileUploadFormProps> = ({
  setFormData,
}) => {
  const [geolocationStatus, setGeolocationStatus] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    const captureGeolocation = () => {
      if (navigator.geolocation) {
        setGeolocationStatus("Capturing geolocation...");
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setGeolocationStatus(
              `Geolocation captured successfully! Latitude: ${latitude}, Longitude: ${longitude}`
            );
            setFormData((prevFormData) => ({
              ...prevFormData,
              geolocation: {
                latitude:
                  latitude !== null
                    ? latitude
                    : (prevFormData.geolocation.latitude as number),
                longitude:
                  longitude !== null
                    ? longitude
                    : (prevFormData.geolocation.longitude as number),
              },
            }));
          },
          (error) => {
            setGeolocationStatus(
              `Error capturing geolocation: ${error.message}`
            );
          }
        );
      } else {
        setGeolocationStatus("Geolocation is not supported by your browser");
      }
    };

    captureGeolocation();
  }, [setFormData]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      const filesArray: File[] = Array.from(selectedFiles);
      setFormData((prevFormData) => ({
        ...prevFormData,
        files: filesArray,
      }));
      setStatus("File Upload Success");
    } else setStatus("File Upload Failure");
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Step 2: Multi-File Upload</h2>
      <hr />
      <div className="mb-4">
        <label className="block mb-4 mt-8 text-xl font-semibold ">
          File Upload: <span className="text-sm text-gray-900">{status}</span>
        </label>
        <div className="flex items-center">
          <label className="w-40 h-40 bg-gray-300 flex items-center justify-center rounded-md cursor-pointer">
            <FontAwesomeIcon icon={faFile} className="text-teal-500 text-2xl" />
            <input
              type="file"
              onChange={handleFileChange}
              multiple
              accept=".png, .pdf"
              className="hidden"
            />
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-4 text-l font-semibold ">
          Geolocation Status:
        </label>
        <p>{geolocationStatus}</p>
      </div>
    </div>
  );
};

export default MultiFileUploadForm;
