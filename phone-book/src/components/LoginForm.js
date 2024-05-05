import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../axios";
import { toast } from "react-toast";

const LoginForm = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (email, password) => {
    if (!email) {
      setShowEmailError(true);
    }
    if (!password) {
      setShowPasswordError(true);
      return; // Add return statement to exit function
    }
    const result = await loginUser(email, password);
    console.log('res', result);
    if (result.status === 201) {
      toast.success("Logged in successfully.");
      setUserInfo({
        email: "",
        password: "",
      });
      navigate("/contacts", { replace: true });
    } else {
      toast.error("Failed");
    }
  };

  return (
    <div className="border-[1px] border-white shadow-[0px_0px_10px_white] flex justify-center items-center flex-col mx-auto w-[30vw] back box-border py-[110px] px-[15px] rounded-[15px]">
      <div className="flex justify-center items-start flex-col mb-[40px] w-full">
        <span className="text-[22px] font-medium text-black">Login</span>
        <span>Welcome back pls login to your account</span>
      </div>

      <div className="w-full h-[80px]">
        <div className="flex justify-between items-start mt-4 w-full gap-[10px]">
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
          <span className="text-[14px] font-normal relative top-[2px] text-[#da5947] left-1">
            Email Id is required!
          </span>
        )}
      </div>

      <div className="w-full h-[80px]">
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
          onClick={() => handleSubmit(userInfo.email, userInfo.password)}
        >
          LogIn
        </button>
      </div>

      <div className="relative top-[100px] text-[14px]">
        Don't have an account.{" "}
        <span>
          <Link to="/register" className="underline">
            Sign Up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
