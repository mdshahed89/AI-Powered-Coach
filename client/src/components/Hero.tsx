import React from "react";
import HeroImg1 from "@/assets/HeroImg1.png";
import HeroImg2 from "@/assets/HeroImg2.png";
import HeroIcon1 from "@/assets/HeroIcon1.png";
import HeroIcon2 from "@/assets/HeroIcon2.png";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="   bg-gradient-to-br from-blue-500/30 via-white to-white min-h-[100vh] pb-[2rem]  ">
      <div className=" pt-[130px] lg:pt-[170px] flex justify-between lg:flex-row flex-col gap-4  max-w-[1400px] mx-auto px-3 ">
        <div className=" lg:mt-0 mt-[10rem] lg:order-1 order-2 lg:flex-1 ">
          <div className=" lg:mx-0 mx-auto max-w-[25rem] lg:text-left text-center lg:max-w-[25rem] ">
            <h1 className=" text-[3rem] lg:text-[4rem] font-medium text-[#111111] leading-tight ">
              Your AI- Powered Sales Coach
            </h1>
          </div>
          <div className=" mt-[3rem] flex items-center justify-between gap-4 w-full lg:mx-0 mx-auto max-w-[32rem] ">
            <Image
              src={HeroImg1}
              alt="Hero Img 1"
              className=" w-[10rem] object-contain "
            />
            <p className=" text-[#05131d]/70 max-w-[18rem] text-lg ">
              Get real-time coaching, script suggestions, and deal-closing
              strategies powered by advanced AI technology.
            </p>
          </div>
          <div className=" mt-[3rem] lg:mt-[6rem] flex items-center w-full lg:mx-0 mx-auto max-w-[32rem] justify-between ">
            <div className=" flex items-center gap-7 ">
              <div className=" shadow-md p-3 rounded-xl ">
                <Image src={HeroIcon1} alt="Hero Icon 1" />
              </div>
              <div>
                <p className=" text-[1.8rem] font-medium ">2000+</p>
                <p className=" text-[#05131d]/70 ">Your protection</p>
              </div>
            </div>
            <div className=" flex items-center gap-7 ">
              <div className=" shadow-md p-3 rounded-xl ">
                <Image src={HeroIcon1} alt="Hero Icon 1" />
              </div>
              <div>
                <p className=" text-[1.8rem] font-medium ">2000+</p>
                <p className=" text-[#05131d]/70 ">Your protection</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:order-2 order-1 w-full lg:flex-1 relative flex items-start justify-center lg:justify-end ">
          <Image
            src={HeroImg2}
            alt="Hero Img 2"
            className=" w-[30rem] object-contain  "
          />
          <div className=" absolute flex justify-center lg:left-0 -bottom-[30%] lg:bottom-0 ">
            <div className=" max-w-[25rem] w-full  bg-[#fff] shadow-lg p-[2rem] rounded-2xl ">
              <div className=" text-[2rem] font-medium flex items-center justify-between ">
                <span>721+</span>
                <span>1000+</span>
              </div>
              <div className=" text-[1.3rem] font-medium my-[2rem] ">
                Growth is our priority.
              </div>
              <p className=" text-[#05131d]/70 ">
                As a full-service business agency, we specialize in helping
                companies of all sizes optimize their operations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
