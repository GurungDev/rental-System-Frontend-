import React, { useEffect, useState } from "react";
import { Card, Header, Lrp } from "../component/component";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import getListing from "../service/listing/getListing";

const RentPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [listings, setListings] = useState([]);

  async function updateListings() {
    try {
      const data = params.name;
      const res = await getListing({ data: { type: data } });
      if (!res || res.length === 0) {
        throw new Error("No Listing");
      }
      setListings(res);
    } catch (error) {
      toast.error("No Listing");
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    updateListings();
  }, []);

  return (
    <div className="">
      <div className="z-[10] fixed top-5 left-0 right-0">
        <Header />
      </div>
      <div className=" z-[10] fixed top-[90px] md:top-7 right-5">
        <Lrp />
      </div>
      <div className="bg-[#333] min-h-[80vh] w-full lg:pt-[15vh] pt-[20vh]">
        <h1 className="w-[80%] m-auto text-white m-auto mb-6 text-center text-[2rem]">
          Our Listing
        </h1>
        <div className="w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 gap-5 ">
          {listings.map((e, index) => {
            return (
              <Card
                key={index}
                details={e.details}
                image={e.image}
                name={e.name}
                _id={e._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RentPage;
