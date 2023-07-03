import http from "../../utils/https.utils";

const getListing = async ({ data }) => {
  console.log(data);
  const res = await http.get("/api/listing/get", { params: data });
  return res?.data;
};

export default getListing;
