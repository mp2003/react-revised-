import React from "react";

interface SpinnerProps {
  title: string;
}
const Spinner: React.FC<SpinnerProps> = (props) => {
  return (
    <div className="flex h-screen items-center justify-center bg-red-500">
      <div className="flex items-center">
        <span className="loading loading-spinner loading-infinity h-40 w-40"></span>
        <div className="ml-9 text- font-medium text-white">{props.title}</div>
      </div>
    </div>
  );
};

export default Spinner;
