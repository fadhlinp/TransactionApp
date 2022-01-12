import axios from "axios";

export const getTransactions = async () => {
  return axios.get("https://nextar.flip.id/frontend-test").then(res => {
    return res.data;
  });
};
