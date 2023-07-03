import http from "../../utils/https.utils";

const postAddRental = async (data) => {
  console.log(data);
  const res = await http.post("/api/rental/add", data);
  return res?.data;
};

export default postAddRental;
