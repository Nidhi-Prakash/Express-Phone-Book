import React, { useEffect, useState } from "react";
import { getAllContacts } from "../axios";
import AddContactModal from "./AddContactModal";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import EditContactModal from "./EditContactModal";
import ConfirmModal from "./ConfirmModal";

const ContactsTable = () => {
  const [allContacts, setAllContacts] = useState([]);
  const [showAddNewContactModal, setShowAddNewContactModal] = useState(false);
  const [showEditContactModal, setShowEditContactModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const fetchAllContacts = async () => {
    const response = await getAllContacts();
    setAllContacts(() => response.data.allContacts);
  };

  useEffect(() => {
    fetchAllContacts();
  }, []);

  const toggleAddContactModal = () => {
    setShowAddNewContactModal(!showAddNewContactModal);
  };

  const toggleEditContactModal = () => {
    setShowEditContactModal(!showEditContactModal);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "none",
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col mx-auto my-[40px]">
        <h1 className="text-[30px] py-5 font-bold">Contacts Page</h1>
        <div className="border-[1px] border-white shadow-[0px_0px_10px_white] back-no-transform min-h-[60vh] rounded-[8px]">
          <table>
            <thead>
              <tr className="text-[20px] font-medium">
                <th>Name</th>
                <th>Phone Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allContacts?.map((item) => {
                return (
                  <tr key={item._id}>
                    <td className="text-[16px]">{item.Name}</td>
                    <td className="text-[16px]">{item.Phone_Number}</td>
                    <td className="flex justify-center items-center gap-5 border-none">
                      <span
                        onClick={() => {
                          setShowEditContactModal(true);
                          setSelectedId(item._id);
                        }}
                        className="cursor-pointer"
                      >
                        Edit
                      </span>
                      <span
                        onClick={() => {
                          setShowDeleteModal(true);
                          setSelectedId(item._id);
                        }}
                        className="cursor-pointer"
                      >
                        Delete
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center items-center w-full mt-[25px]">
          <button
            className="text-white py-[4px] px-[20px] rounded-[5px] bg-[#613f75]"
            onClick={() => setShowAddNewContactModal(!showAddNewContactModal)}
          >
            Add New
          </button>
        </div>
      </div>
      {showAddNewContactModal && (
        <Modal
          open={showAddNewContactModal}
          onClose={() => setShowAddNewContactModal(false)}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <Box sx={style}>
            <AddContactModal
              toggleAddContactModal={toggleAddContactModal}
              fetchAllContacts={fetchAllContacts}
            />
          </Box>
        </Modal>
      )}
      {showEditContactModal && (
        <Modal
          open={showEditContactModal}
          onClose={() => setShowEditContactModal(false)}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <Box sx={style}>
            <EditContactModal
              toggleEditContactModal={toggleEditContactModal}
              fetchAllContacts={fetchAllContacts}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            />
          </Box>
        </Modal>
      )}
      {showDeleteModal && (
        <Modal
          open={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <Box sx={style}>
            <ConfirmModal
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              setShowDeleteModal={setShowDeleteModal}
              fetchAllContacts={fetchAllContacts}
            />
          </Box>
        </Modal>
      )}
    </>
  );
};

export default ContactsTable;
