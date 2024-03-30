import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="border-[1px] border-white shadow-white shadow-[0px_0px_10px_-2px_white] flex justify-center items-center flex-col mx-auto w-[300px] back box-border py-[110px] px-[15px] rounded-[15px]">
      <div className="flex justify-center items-start flex-col mb-[20px] w-full">
        <span className="text-[18px] font-medium text-white">Login</span>
        <span>Welcome back pls login to your account</span>
      </div>

      <div className="flex justify-start items-start flex-col mt-4 w-full h-[50px]">
        <input
          type="text"
          name="emailId"
          placeholder="Email"
          className="w-full focus:outline-none h-[34px] font-normal bg-transparent border-[1px] border-white rounded-[5px] px-[10px]"
        />
        <AiOutlineUser className="relative bottom-[25px] left-[238px]" />
      </div>

      <div className="flex justify-start items-start flex-col mt-4 w-full h-[50px]">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full focus:outline-none h-[34px] font-normal bg-transparent border-[1px] border-white rounded-[5px] px-[10px]"
        />
        <FaRegEyeSlash className="relative bottom-[25px] left-[238px]" />
      </div>

      <div className="flex justify-center items-center w-full mt-[25px]">
        <button className="text-white py-[4px] w-full rounded-[5px] bg-gradient-to-r from-[#e15206] to-[#a546d1]">
          LogIn
        </button>
      </div>

      <div className="relative top-[100px] text-[12px]">
        Don't have an account.{" "}
        <span>
          <a href="https://www.google.com" className="underline">
            Sign Up
          </a>
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
