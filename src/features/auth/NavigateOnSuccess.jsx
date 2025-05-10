/* eslint-disable react/prop-types */
// NavigateOnSuccess.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavigateOnSuccess = ({ mutation }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (mutation.isSuccess) {
      navigate("/dashboard");
    }
  }, [mutation.isSuccess, navigate]);

  return null;
};

export default NavigateOnSuccess;
