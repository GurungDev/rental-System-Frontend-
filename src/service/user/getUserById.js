import http from "../../utils/https.utils";

const getUser = async () => {
  const res = await http.get("/api/user/get");
  return res?.data;
};

export default getUser;
