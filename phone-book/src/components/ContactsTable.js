import React, { useEffect, useState } from "react";
import { getAllContacts } from "../axios";

const ContactsTable = () => {
  const [allContacts, setAllContacts] = useState([]);

  const fetchAllContacts = async () => {
    const response = await getAllContacts();
    setAllContacts(() => response.data.allContacts);
  };

  useEffect(() => {
    fetchAllContacts();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col mx-auto my-[40px]">
      <h1 className="text-[28px] py-5">Contacts Page</h1>
      <div className="border border-white back">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allContacts?.map((item) => {
              return (
                <tr key={item.user_id}>
                  <td>{item.Name}</td>
                  <td>{item.Phone_Number}</td>
                  <td className="flex justify-center items-center gap-5 border-none">
                    <span>Edit</span>
                    <span>Delete</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactsTable;
