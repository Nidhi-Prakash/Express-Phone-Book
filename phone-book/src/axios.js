import axios from "axios";
import { errorToast } from "./utils/toast";

export const registerUser = async (userName, email, password) => {
  try {
    const body = { userName, email, password };
    const response = await axios.post(`user/register`, body);
    if (response.status === 201) {
    }
  } catch (error) {
    errorToast(error.response.data.message);
  }
};

export const loginUser = async (email, password) => {
  try {
    const body = { email, password };
    const response = await axios.post(`user/login`, body);
    if (response.status === 201) {
      localStorage.setItem("accessToken", response.data.token);
    }
    return response;
  } catch (error) {
    errorToast(error.response.data.message);
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await axios.get(`user`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response;
  } catch (error) {
    errorToast(error.response.data.message);
  }
};

export const getAllContacts = async () => {
  try {
    const response = await axios.get(`contacts`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response;
  } catch (error) {
    errorToast(error.response.data.message);
  }
};

export const editContact = async () => {
  try {
    console.log("inside edit contact func");
  } catch (error) {
    errorToast(error.response.data.message);
  }
};
