import http from "../../utils/https.utils";

const postAddListing = async ({ data }) => {
  const res = await http.post("/api/listing/add", data);
  return res?.data;
};

export default postAddListing;
