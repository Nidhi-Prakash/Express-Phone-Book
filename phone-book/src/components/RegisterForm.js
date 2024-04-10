import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../axios";

const RegisterForm = () => {
  const [userInfo, setUserInfo] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [showUserNameError, setShowUserNameError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (username, email, password) => {
    if (!username) {
      setShowUserNameError(true);
    }
    if (!email) {
      setShowEmailError(true);
    }
    if (!password) {
      setShowPasswordError(true);
      return;
    }
    await registerUser(username, email, password);
    navigate("/contacts", { replace: true });
  };

  return (
    <div className="border-[1px] border-white shadow-white shadow-[0px_0px_10px_-2px_white] flex justify-center items-center flex-col mx-auto w-[300px] back box-border py-[70px] px-[15px] rounded-[15px]">
      <div className="flex justify-center items-start flex-col mb-[20px] w-full">
        <span className="text-[18px] font-medium text-white">Register</span>
        <span>Hey there! pls register to proceed further</span>
      </div>

      <div className="flex justify-start items-start flex-col mt-4 w-full h-[63px]">
        <input
          type="text"
          name="username"
          placeholder="User Name"
          value={userInfo.userName}
          onChange={(e) => {
            setUserInfo({
              ...userInfo,
              userName: e.target.value,
            });
            setShowUserNameError(false);
          }}
          className="w-full focus:outline-none h-[34px] font-normal bg-transparent border-[1px] border-white rounded-[5px] px-[10px]"
        />
        <AiOutlineUser className="relative bottom-[25px] left-[238px]" />
        {showUserNameError && (
          <span className="text-[10px] font-normal relative bottom-[8px] text-[#da5947] left-1">
            User name is required!
          </span>
        )}
      </div>

      <div className="flex justify-start items-start flex-col mt-4 w-full h-[63px]">
        <input
          type="text"
          name="emailId"
          placeholder="Email"
          value={userInfo.email}
          onChange={(e) => {
            setUserInfo({
              ...userInfo,
              email: e.target.value,
            });
            setShowEmailError(false);
          }}
          className="w-full focus:outline-none h-[34px] font-normal bg-transparent border-[1px] border-white rounded-[5px] px-[10px]"
        />
        <AiOutlineUser className="relative bottom-[25px] left-[238px]" />
        {showEmailError && (
          <span className="text-[10px] font-normal relative bottom-[8px] text-[#da5947] left-1">
            Email Id is required!
          </span>
        )}
      </div>

      <div className="flex justify-start items-start flex-col mt-4 w-full h-[63px]">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userInfo.password}
          onChange={(e) => {
            setUserInfo({
              ...userInfo,
              password: e.target.value,
            });
            setShowPasswordError(false);
          }}
          className="w-full focus:outline-none h-[34px] font-normal bg-transparent border-[1px] border-white rounded-[5px] px-[10px]"
        />
        <FaRegEyeSlash className="relative bottom-[25px] left-[238px]" />
        {showPasswordError && (
          <span className="text-[10px] font-normal relative bottom-[8px] text-[#da5947] left-1">
            Password is required!
          </span>
        )}
      </div>

      <div className="flex justify-center items-center w-full mt-[25px]">
        <button
          className="text-white py-[4px] w-full rounded-[5px] bg-gradient-to-r from-[#e15206] to-[#a546d1]"
          onClick={() =>
            handleSubmit(userInfo.userName, userInfo.email, userInfo.password)
          }
        >
          Register
        </button>
      </div>

      <div className="relative top-[66px] text-[12px]">
        Already have an account.{" "}
        <span>
          <Link to="/login" className="underline">
            LogIn
          </Link>
        </span>
      </div>
    </div>
  );
};

export default RegisterForm;
