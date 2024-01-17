import React from "react";

interface SpinnerProps {
  title: string;
}

const Spinner: React.FC<SpinnerProps> = (props) => {
  return (
    <div className="w-full max-h-14">
      <div className="flex h-14 items-center justify-center bg-blue-800 rounded-md relative bottom-2">
        <div className="flex items-center">
          <span className="loading loading-spinner loading-infinity border-t-4 border-white"></span>
          <div className="ml-4 text-white">{props.title}</div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
