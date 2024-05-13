import Axios from "axios";
const axios = Axios.create({
  baseURL: process.env.REACT_APP_URL,
});

export default axios;

// process.env.NEXT_PUBLIC_URL
