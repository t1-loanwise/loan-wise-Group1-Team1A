import React, { useEffect, useState } from "react";
import useVerificationHook from "./lib/useVerificationHook";
import "../../styles/Auth.css";
import Logo from "../../components/Logo";
import AuthenticationMainText from "../../components/AuthenticationMainText2";
import { useNavigate } from "react-router-dom";
import AuthCard from "../../components/AuthCard";

const VerifyCode = () => {
  const [seconds, setSeconds] = useState(60);
  const { inputStates, inputClass, handleChange, handleKeyDown } =
    useVerificationHook(4);

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const resendCode = () => {
    setSeconds(60);
  };

  const routeHandler = () => {
    const isAnyInputEmpty = inputStates.some((state) => state.digit === "");
    if (isAnyInputEmpty) {
      setErrorMessage("Please fill all the boxes before proceeding");
      return;
    } else navigate("/newPassword");
    setErrorMessage("");
  };

  return (
    <>
      <div className="verify_container">
        <AuthCard />
        <div className="verify_head_content">
          <div className="logo_container">
            <Logo />
          </div>
          <div className="verify_body_content">
            <div className="auth_text">
              <AuthenticationMainText
                Title={"Verify Email Address"}
                Body={
                  "Please enter the verification code we sent to your registered email address @johndoe@gmail.com"
                }
              />
            </div>
            <div>
              {inputStates.map((state, ii) => {
                return (
                  <input
                    type="number"
                    value={state.digit}
                    className={inputClass}
                    onChange={(e) => handleChange(e, ii)}
                    onKeyDown={handleKeyDown}
                  />
                );
              })}
              {errorMessage && <p className="errorMsg">{errorMessage}</p>}
            </div>
            <div className="verify_btn_container">
              <button onClick={routeHandler} className="verify_btn">
                Verify
              </button>
              <p className="no_code">
                Didn’t get OTP?{" "}
                <button className="resend_btn" onClick={resendCode}>
                  Resend
                </button>{" "}
                in {seconds}s
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyCode;
