import http from "../utils/https.utils";

const getAllCount = async () => {
  const res = await http.get("/api/admin");
  return res?.data;
};

export default getAllCount;
