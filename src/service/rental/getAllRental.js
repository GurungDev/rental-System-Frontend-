import http from "../../utils/https.utils";

const getAllRental = async () => {
  const res = await http.get("/api/rental/all");
  return res?.data;
};

export default getAllRental;
