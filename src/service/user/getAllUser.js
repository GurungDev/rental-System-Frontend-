import http from "../../utils/https.utils";

const getAllUser = async () => {
  const res = await http.get("/api/user/all");
  return res?.data;
};

export default getAllUser;
