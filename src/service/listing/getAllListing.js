import http from "../../utils/https.utils";

const getAllListing = async () => {
  const res = await http.get("/api/listing/all");
  return res?.data;
};

export default getAllListing;
