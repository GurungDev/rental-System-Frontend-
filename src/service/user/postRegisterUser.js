import http from "../../utils/https.utils";

const postRegisterUser = async ({ data }) => {
  const res = await http.post("/api/user/register", data);
  return res?.data;
};

export default postRegisterUser;
