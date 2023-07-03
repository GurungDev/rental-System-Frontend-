import http from "../../utils/https.utils";

const postLoginUser = async ({ data }) => {
  const res = await http.post("/api/user/login", data);
  return res?.data;
};

export default postLoginUser;
