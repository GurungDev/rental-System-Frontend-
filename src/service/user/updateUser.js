import http from "../../utils/https.utils";

const updateUser = async ({ data }) => {
  console.log(data);
  const res = await http.get("/api/user/update", { params: data });
  return res?.data;
};

export default updateUser;
