import http from "../../utils/https.utils";

const postDeleteUser = async ({ data }) => {
  const res = await http.post("/api/user/delete", { id: data });
  return res?.data;
};

export default postDeleteUser;
