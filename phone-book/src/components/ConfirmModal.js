import React from "react";
import { deleteContact } from "../axios";

const ConfirmModal = ({
  selectedId,
  setSelectedId,
  setShowDeleteModal,
  fetchAllContacts,
}) => {
  const handleDelete = async () => {
    const result = await deleteContact(selectedId);
    setShowDeleteModal(false);
    if (result.status === 200) {
      fetchAllContacts();
      setSelectedId("");
    }
  };

  return (
    <div
      className="border-[1px] border-white shadow-white shadow-[0px_0px_10px_-2px_white] flex justify-center items-center flex-col mx-auto w-[300px] back-add-contact box-border py-[10px] px-[15px] rounded-[15px] gap-[20px]"
      data-aos="zoom-in"
    >
      <div className="text-[18px]">Are you sure you want to delete?</div>
      <div className="w-full flex justify-around items-center gap-2">
        <button
          className="border py-[5px] px-[25px] rounded-[10px] text-[16px] bg-[#613f75] text-white"
          onClick={() => handleDelete()}
        >
          Yes
        </button>
        <button
          className="border py-[5px] px-[25px] rounded-[10px] text-[16px] bg-[#613f75] text-white"
          onClick={() => setShowDeleteModal(false)}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default ConfirmModal;
