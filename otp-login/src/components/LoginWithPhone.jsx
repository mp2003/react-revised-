import React, { useState } from 'react';
import OtpInput from './OtpInput';

const LoginWithPhone = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
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
        setShowPhoneNumberError(e.target.value.length > 0 && e.target.value.length < 10);
    };

    const phoneNumberSubmit = () => {
        return phoneNumber.length < 10 || isNaN(Number(phoneNumber));
    };

    const toggleLogin = () => {
        console.log("logged");
    };

    return (
        <div className='my-4'>
            {logged ? (
                <OtpInput />
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter your phoneNumber"
                        value={phoneNumber}
                        onChange={handleInputChange}
                        className="input input-bordered w-full max-w-xs mx-4 text-l"
                        maxLength={10}
                    />
                    <button className="btn btn-neutral" disabled={phoneNumberSubmit()} onClick={toggleLogin}>
                        Submit
                    </button>
                    <div>
                        {typingStarted && showPhoneNumberError && (
                            <span className="text-red-500">
                                Phone number should be 10 digits
                            </span>
                        )}
                        {typingStarted && !showPhoneNumberError && phoneNumber.length > 0 && (
                            <span className="text-green-500">Valid Phone Number</span>
                        )}
                        <br />
                        {typingStarted && isNaN(Number(phoneNumber)) && (
                            <span className="text-red-500">Enter Only Number</span>
                        )}
                    </div>
                </form>
            )}
        </div>
    );
};

export default LoginWithPhone;
