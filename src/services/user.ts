import { editUser } from "@/types/user";
import axios from "../utils/axios";

export const getUsersApi = async (page: number) => {
  const { data } = await axios.get(`/api/users?page=${page}`);
  return data;
};

export const deleteUserApi = async (id: number) => {
  const { data } = await axios.delete(`/api/users/${id}`);
  return data;
};

export const editUserApi = async ({ userId, firstName, lastName }: { userId: number, firstName: string, lastName: string }) => {
  const { data } = await axios.put(`/api/users/${userId}`, {
    first_name: firstName,
    last_name: lastName
  });
  return data;
};

export const createUserApi = async (userValues: editUser) => {
  const { data } = await axios.post("/api/users/", userValues);
  return data;
};
