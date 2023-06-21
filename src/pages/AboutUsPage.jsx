import React, { useEffect, useState } from "react";
import { Header, Lrp } from "../component/component";
import "./css/aboutus.css";

const AboutUsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  setTimeout(() => {
    setIsVisible(true);
  }, 300);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <div className="z-[10] fixed top-5 left-0 right-0">
        <Header />
      </div>
      <div className=" z-[10] fixed top-[90px] md:top-7 right-5">
        <Lrp />
      </div>
      <div className="bg-[#333] w-full lg:pt-[15vh] pt-[20vh] text-center">
        <div className="w-[80%]  grid md:gap-10 grid-cols-1 lg:grid-cols-2 h-[150vh] lg:h-[80vh]">
          <div className="w-full order-last lg:order-first text-white flex justify-center items-center">
            <div>
              <h1 className="text-[2rem] mb-8">
                Welcome to{" "}
                <span className="text-[#3586ff] text-[2.3rem] border-b border-b-[3px] rounded-md">
                  Pokhara Rental
                </span>{" "}
                !
              </h1>
              <p className="text-[.9rem] leading-loose">
                We are your premier destination for renting boats, cycles, and a
                wide range of other exciting outdoor equipment. Located in the
                breathtaking city of Pokhara, Nepal, we aim to provide visitors
                with unforgettable experiences amidst the stunning natural
                beauty of the region. Whether you're looking to explore the
                serene lakes on a boat, embark on an adventurous cycling
                journey, or engage in various outdoor activities, we have you
                covered. Our top-notch rental services ensure that you have
                access to well-maintained equipment that meets the highest
                standards of safety and quality. Our friendly and knowledgeable
                staff are here to assist you in choosing the perfect equipment
                for your needs and to offer valuable insights on the best places
                to visit and explore in Pokhara. Get ready to embark on a
                thrilling adventure and create lasting memories with Pokhara
                Rental.
              </p>
            </div>
          </div>
          <div className="container-grid w-full h-full">
            <div class="img-1 bg-blue-400 w-full h-full"></div>
            <div class="img-2 bg-blue-400 w-full h-full"></div>
            <div class="img-3 bg-blue-400 w-full h-full"></div>
            <div class="img-5 bg-blue-400 w-full h-full"></div>
            <div class="img-4 bg-blue-400 w-full h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
