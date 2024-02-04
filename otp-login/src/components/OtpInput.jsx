import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSumbit = () => { } }) => {
    const [otp, setOtp] = useState(new Array(length).fill(""));
    const inputRefs = useRef([]);

    useEffect(() => {
        if (inputRefs.current[0])
            inputRefs.current[0].focus();
    }, [])

    console.log(inputRefs);
    const handleChange = (index, e) => {
        const value = e.target.value;
        if (isNaN(value))
            return;
    };
    const handleClick = () => { };
    const handleKeyDown = () => { };


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
                className="border-2 border-black" />
        })}</div>;
};

export default OtpInput;
