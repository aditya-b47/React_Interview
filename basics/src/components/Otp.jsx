import React, { useEffect, useRef, useState } from "react";

const Otp = ({ otpLength = 6 }) => {
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));
  const ref = useRef([]);

  const handleKeyDown = (e, index) => {
    // Check if Backspace was pressed
    if (e.key === "Backspace") {
      const copyOtpFields = [...otpFields];
      
      // If current field is empty, move to previous field
      if (otpFields[index] === "" && index > 0) {
        ref.current[index - 1].focus();
      } else {
        // Clear current field
        copyOtpFields[index] = "";
        setOtpFields(copyOtpFields);
      }
    }

    if(e.key === "ArrowLeft"){
      if(index>0) ref.current[index-1].focus()
    }

    if(e.key === "ArrowRight"){
      if(index < otpFields.length) ref.current[index+1].focus();
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Allow only digits
    if (isNaN(value) || value === "") return;

    const copyOtpFields = [...otpFields];
    copyOtpFields[index] = value;
    setOtpFields(copyOtpFields);

    // Move to next field if available
    if (index + 1 < otpFields.length) {
      ref.current[index + 1].focus();
    }
  };

  useEffect(()=>{
    ref.current["0"].focus()
  },[])

  return (
    <div>
      {otpFields.map((value, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          className="h-12 w-12 m-0.5 border text-black text-center text-lg"
          value={value}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(currentInput) => (ref.current[index] = currentInput)}
        />
      ))}
    </div>
  );
};

export default Otp;
//! 1. why React state should not be modified directly ?
// React state should not be modified directly because React relies on immutability and reference changes to detect updates and //trigger re-renders.
