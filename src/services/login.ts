import { LoginProps } from "@/types/login";
import axios from "../utils/axios";

export const login = async ({ email, password }: LoginProps) => {
  const response = await axios.post("/api/login", {
    email,
    password,
  });
  return response.data;
};
