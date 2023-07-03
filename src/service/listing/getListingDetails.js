import http from "../../utils/https.utils";

export const getListingDetails = async (data) => {
  const req = await http.get("/api/listing/getDetails", { params: data });
  return req?.data;
};
