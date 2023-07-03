import http from "../../utils/https.utils";

const postDeleteListing = async ({ data }) => {
  const res = await http.post("/api/listing/delete", data);
  return res?.data;
};

export default postDeleteListing;
