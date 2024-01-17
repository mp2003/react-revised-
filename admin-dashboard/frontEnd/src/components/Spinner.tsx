import React from "react";

interface SpinnerProps {
  title: string;
}

const Spinner: React.FC<SpinnerProps> = (props) => {
  return (
    <div className="flex h-screen items-center justify-center bg-blue-800 h-20 w-full rounded-lg relative bottom-2">
      {/* Adjust the background color to match the login component */}
      <div className="flex items-center">
        <span className="loading loading-spinner loading-infinity  border-t-4 border-white"></span>
        {/* Adjust spinner size and border color */}
        <div className="ml-4 text-white">
          {/* Adjust text color to match your design */}
          {props.title}
        </div>
      </div>
    </div>
  );
};

export default Spinner;
