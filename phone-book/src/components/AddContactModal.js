import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdPhoneIphone } from "react-icons/md";
import { addNewContact } from "../axios";

const AddContactModal = ({ toggleAddContactModal, fetchAllContacts }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    phoneNumber: "",
  });
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  const handleSubmit = async (name, phoneNumber) => {
    if (!name) {
      setShowEmailError(true);
    }
    if (!phoneNumber) {
      setShowPasswordError(true);
      return;
    }
    const result = await addNewContact(name, phoneNumber);
    if (result.status === 201) {
      toggleAddContactModal();
      fetchAllContacts();
    }
  };

  return (
    <div
      className="border-[1px] border-white shadow-white shadow-[0px_0px_10px_-2px_white] flex justify-center items-center flex-col mx-auto w-[300px] back-add-contact box-border py-[70px] px-[15px] rounded-[15px]"
      data-aos="zoom-in"
    >
      <div className="flex justify-start items-start flex-col mt-4 w-full h-[63px]">
        <input
          type="text"
          name="Name"
          placeholder="Name"
          value={userInfo.name}
          onChange={(e) => {
            setUserInfo({
              ...userInfo,
              name: e.target.value,
            });
            setShowEmailError(false);
          }}
          className="w-full focus:outline-none h-[34px] font-normal bg-transparent border-[1px] border-black rounded-[5px] px-[10px]"
        />
        <AiOutlineUser className="relative bottom-[25px] left-[238px]" />
        {showEmailError && (
          <span className="text-[10px] font-normal relative bottom-[8px] text-[#da5947] left-1">
            Name is required!
          </span>
        )}
      </div>

      <div className="flex justify-start items-start flex-col mt-4 w-full h-[63px]">
        <input
          type="phoneNumber"
          name="phoneNumber"
          placeholder="Phone Number"
          value={userInfo.phoneNumber}
          onChange={(e) => {
            setUserInfo({
              ...userInfo,
              phoneNumber: e.target.value,
            });
            setShowPasswordError(false);
          }}
          className="w-full focus:outline-none h-[34px] font-normal bg-transparent border-[1px] border-black rounded-[5px] px-[10px]"
        />
        <MdPhoneIphone className="relative bottom-[25px] left-[238px]" />
        {showPasswordError && (
          <span className="text-[10px] font-normal relative bottom-[8px] text-[#da5947] left-1">
            Phone Number is required!
          </span>
        )}
      </div>

      <div className="flex justify-center items-center w-full mt-[25px]">
        <button
          className="text-white py-[4px] w-full rounded-[5px] bg-[#613f75]"
          onClick={() => handleSubmit(userInfo.name, userInfo.phoneNumber)}
        >
          Add Contact
        </button>
      </div>
    </div>
  );
};

export default AddContactModal;
