import http from "../../utils/https.utils";

const getRental = async () => {
  const res = await http.get("/api/rental/get/");
  return res?.data;
};

export default getRental;
