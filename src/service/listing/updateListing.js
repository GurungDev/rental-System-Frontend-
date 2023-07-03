import http from "../../utils/https.utils";

const updateListing = async ({ data }) => {
  console.log(data);
  const res = await http.put("/api/listing/update", data);
  return res?.data;
};

export default updateListing;
