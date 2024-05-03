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
    <div className="border-[1px] border-white shadow-white shadow-[0px_0px_10px_-2px_white] flex justify-center items-center flex-col mx-auto w-[30vw] back box-border py-[80px] px-[15px] rounded-[15px]">
      <div className="flex justify-center items-start flex-col mb-[20px] w-full">
        <span className="text-[22px] font-medium text-black">Register</span>
        <span>Hey there! pls register to proceed further</span>
      </div>

      <div className="w-full  h-[80px]">
        <div className="flex justify-start items-start mt-4 w-full gap-[10px]">
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
            className="w-full focus:outline-none h-[38px] font-normal bg-transparent border-[1px] border-black rounded-[5px] px-[10px] text-[16px]"
          />
          <span className="relative top-[8px]">
            <AiOutlineUser />
          </span>
        </div>
        {showUserNameError && (
          <span className="text-[14px] font-normal relative top-[2px] text-[#da5947] left-1">
            User name is required!
          </span>
        )}
      </div>

      <div className="w-full  h-[80px]">
        <div className="flex justify-start items-start mt-4 w-full gap-[10px]">
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
            className="w-full focus:outline-none h-[38px] font-normal bg-transparent border-[1px] border-black rounded-[5px] px-[10px] text-[16px]"
          />
          <span className="relative top-[8px]">
            <AiOutlineUser />
          </span>
        </div>
        {showEmailError && (
          <span className="text-[14px] font-normal relative top-[8px] text-[#da5947] left-1">
            Email Id is required!
          </span>
        )}
      </div>

      <div className="w-full  h-[80px]">
        <div className="flex justify-start items-start mt-4 w-full gap-[10px]">
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
            className="w-full focus:outline-none h-[38px] font-normal bg-transparent border-[1px] border-black rounded-[5px] px-[10px] text-[16px]"
          />
          <span className="relative top-[8px]">
            <FaRegEyeSlash />
          </span>
        </div>
        {showPasswordError && (
          <span className="text-[14px] font-normal relative top-[2px] text-[#da5947] left-1">
            Password is required!
          </span>
        )}
      </div>

      <div className="flex justify-center items-center w-full mt-[45px]">
        <button
          className="text-[16px] text-white py-[8px] w-full rounded-[5px] bg-[#613f75]"
          onClick={() =>
            handleSubmit(userInfo.userName, userInfo.email, userInfo.password)
          }
        >
          Register
        </button>
      </div>

      <div className="relative top-[66px] text-[14px]">
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
