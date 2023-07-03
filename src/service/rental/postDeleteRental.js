import http from "../../utils/https.utils";

const postDeleteRental = async ({ data }) => {
  const res = await http.post("/api/rental/delete", data);
  return res?.data;
};

export default postDeleteRental;
