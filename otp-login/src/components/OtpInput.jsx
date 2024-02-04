import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => { } }) => {
    const [otp, setOtp] = useState(new Array(length).fill(""));
    const inputRefs = useRef([]);

    useEffect(() => {
        if (inputRefs.current[0])
            inputRefs.current[0].focus();
    }, [])

    // console.log(inputRefs);
    const handleChange = (index, e) => {
        const value = e.target.value;
        if (isNaN(value))
            return;
        const newOtp = [...otp]
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        //submitt trigger change
        const combinedOtp = newOtp.join("");

        if (combinedOtp.length === length) {
            console.log(combinedOtp);

            onOtpSubmit(combinedOtp);
        }
        // return combinedOtp;

        if (value && index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }

        // if (index < length - 1 && )
    };
    const handleClick = (index) => {
        inputRefs.current[index].setSelectionRange(1, 1);

        const emptyIndex = otp.findIndex(value => value === "");
        if (emptyIndex !== -1 && index > 0 && emptyIndex !== index - 1) {
            inputRefs.current[emptyIndex].focus();
        }
    }


    const handleKeyDown = (index, e) => {
        if (e.keyCode === 8 && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].focus();
        }
    }


    return <div>
        {otp.map((value, index) => {
            return <input
                type="text"
                key={index}
                ref={(input => inputRefs.current[index] = input)}
                value={value}
                onChange={(e) => handleChange(index, e)}
                onClick={() => handleClick(index)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="border-2 border-black"
                maxLength={1} />
        })}</div>;
};

export default OtpInput;
