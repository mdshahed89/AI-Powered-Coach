import React from "react";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Logo from "@/assets/Logo.png";
import { IoMdArrowUp } from "react-icons/io";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="  mt-[10rem] px-3 font-Manrope ">
      <div className=" max-w-[1400px] mx-auto  mb-10">
        <div className="  flex md:flex-row flex-col gap-7 md:gap-3 ">
          <div className=" w-full md:w-[40%] text-[#454545] ">
            <div>
              <div className=" mb-3 flex md:justify-start justify-center ">
                <Image
                  src={Logo}
                  alt=""
                  className=" w-[12rem] object-contain  "
                />
              </div>
              <p className=" md:text-left text-center text-sm text-[#335386] ">
                SalesRank.AI offers a comprehensive suite of AI-powered
                solutions to help you find expert sales professionals who can
                elevate every aspect of your business. From performance rankings
                and skill verification to industry benchmarking and real-time
                analytics, we provide the insights and tools to optimize your
                sales strategy and drive growth.
              </p>
            </div>
            <div className=" flex items-center md:justify-start justify-center gap-4 mt-8 ">
              <div className=" p-2 rounded-full bg-blue-100 text-[#002868] text-[1rem] cursor-pointer ">
                <FaFacebookF className=" " />
              </div>
              <div className=" p-2 rounded-full bg-blue-100 text-[#002868] text-[1rem] cursor-pointer ">
                <FaInstagram className=" " />
              </div>
              <div className=" p-2 rounded-full bg-blue-100 text-[#002868] text-[1rem] cursor-pointer ">
                <FaLinkedinIn className=" " />
              </div>
              <div className=" p-2 rounded-full bg-blue-100 text-[#002868] text-[1rem] cursor-pointer ">
                <BsTwitterX className="  " />
              </div>
            </div>
          </div>

          <div className=" flex justify-between w-full md:flex-row flex-col md:flex-nowrap flex-wrap md:w-[60%] md:gap-2 gap-8 ">
            <div className=" flex-1 flex flex-col items-center gap-3 text-[#335386] text-sm ">
              <h3 className=" mb-2 font-semibold text-lg text-[#001c4a] ">Navigation</h3>
              <h3 className=" hover:text-[#0372BF] cursor-pointer ">
              Service
              </h3>
              <h3 className=" hover:text-[#0372BF] cursor-pointer ">
              Agency
              </h3>
              <h3 className=" hover:text-[#0372BF] cursor-pointer ">Careers</h3>
              <h3 className=" hover:text-[#0372BF] cursor-pointer ">
              Case Study
              </h3>
              <h3 className=" hover:text-[#0372BF] cursor-pointer ">
              Resource
              </h3>
              <h3 className=" hover:text-[#0372BF] cursor-pointer ">
              Contact
              </h3>
            </div>

            <div className=" flex-1 flex flex-col items-center gap-3 text-[#335386] text-sm ">
              <h3 className=" mb-2 font-semibold text-lg text-[#001c4a] ">Licence</h3>
              <h3 className=" hover:text-[#0372BF] cursor-pointer ">
              Privacy Policy
              </h3>
              <h3 className=" hover:text-[#0372BF] cursor-pointer ">
              Copyright
              </h3>
              <h3 className=" hover:text-[#0372BF] cursor-pointer ">
              Email Address
              </h3>
            </div>

            <div className=" flex-1 flex flex-col md:items-start items-center gap-3 text-[#335386] text-sm ">
              <h3 className=" mb-2 font-semibold text-lg text-[#001c4a] ">Contact</h3>
              <h3 className=" hover:text-[#0372BF] flex items-center gap-2 cursor-pointer ">
                <FaPhoneAlt />
                <span>(406) 555-0120</span>
              </h3>
              <h3 className=" hover:text-[#0372BF]  flex items-center gap-2 cursor-pointer ">
                <MdEmail className=" text-[1.2rem] " /> <span>Hey@boostim.com</span>
              </h3>
              <h3 className=" hover:text-[#0372BF]  flex gap-2 cursor-pointer ">
                <div>
                  <IoLocationSharp className=" text-[1.4rem] mt-1 " />
                </div>{" "}
                <span>2972 Westheimer Rd. Santa Ana, Illinois 85486 </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-t py-6 border-[#b4b4b4]  text-[#454545] "></div>
    </div>
  );
};

export default Footer;
