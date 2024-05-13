import { editUser } from "@/types/user";
import axios from "../utils/axios";

export const getUsersApi = async (page: number) => {
  const response = await axios.get(`/api/users?page=${page}`);
  return response.data;
};

export const deleteUserApi = async (id: number) => {
  const response = await axios.delete(`/api/users/${id}`);
  return response.data;
};

export const editUserApi = async (id: number, userValues: editUser) => {
  const response = await axios.put(`/api/users/${id}`, userValues);
  return response.data;
};

export const createUserApi = async (userValues: editUser) => {
  const response = await axios.post("/api/users/", userValues);
  return response.data;
};
