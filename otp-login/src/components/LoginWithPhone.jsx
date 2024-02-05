// LoginWithPhone.jsx
import React, { useState } from "react";
import OtpInput from "./OtpInput";

const LoginWithPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [logged, setLogged] = useState(false);
  const [showPhoneNumberError, setShowPhoneNumberError] = useState(false);
  const [typingStarted, setTypingStarted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogged(!logged);
  };

  const handleInputChange = (e) => {
    setPhoneNumber(e.target.value);
    setTypingStarted(true);
    setShowPhoneNumberError(
      e.target.value.length > 0 && e.target.value.length < 10
    );
  };

  const phoneNumberSubmit = () => {
    return phoneNumber.length < 10 || isNaN(Number(phoneNumber));
  };

  const toggleLogin = () => {
    console.log("logged");
  };

  const onOtpSubmit = (otp) => {
    console.log("entered otp " + otp);
  };

  return (
    <div className="my-4 text-center">
      {logged ? (
        <div>
          <div className="glassmorphic-container p-4">
            <span>Enter OTP sent to : {phoneNumber}</span>
            <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="glassmorphic-container p-4 inline-block">
            <input
              type="text"
              placeholder="Enter a valid phoneNumber"
              value={phoneNumber}
              onChange={handleInputChange}
              className="input input-bordered w-full max-w-xs mx-auto text-l mb-4"
              maxLength={10}
            />
            <button
              className="btn btn-success"
              disabled={phoneNumberSubmit()}
              onClick={toggleLogin}
            >
              Submit
            </button>
            <div className="my-2">
              {typingStarted && showPhoneNumberError && (
                <span className="text-red-500">
                  Phone number should be 10 digits
                </span>
              )}
              {typingStarted &&
                !showPhoneNumberError &&
                phoneNumber.length > 0 && (
                  <span className="text-green-500">Valid Phone Number</span>
                )}
              <br />
              {typingStarted && isNaN(Number(phoneNumber)) && (
                <span className="text-red-500">Enter Only Number</span>
              )}
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default LoginWithPhone;
