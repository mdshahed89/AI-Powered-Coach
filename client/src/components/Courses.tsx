import Link from "next/link";
import React from "react";
import Course1 from "@/assets/Course1.png";
import Course2 from "@/assets/Course2.png";
import Image, { StaticImageData } from "next/image";

const Courses = () => {
  return (
    <div className=" max-w-[1400px] mx-auto my-[5rem] px-3 ">
      <div className=" flex items-end justify-between md:flex-row flex-col md:gap-3 gap-5 mb-[3rem] ">
        <div className="  ">
          <h2 className=" text-[#262626] text-[2.5rem] ">Our Courses</h2>
          <p className=" text-[#59595A] max-w-[30rem] lg:max-w-[50rem]  text-sm ">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <Link
          href={`/`}
          className=" bg-[#002868] px-6 py-2 rounded-md text-nowrap text-[#fff] "
        >
          View All
        </Link>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 ">
        <Card img={Course1} />
        <Card img={Course2} />
      </div>
    </div>
  );
};

export default Courses;

type CardProps = {
  img: StaticImageData;
};

const Card = ({ img }: CardProps) => {
  return (
    <div className=" bg-[#F0F0F0] w-full p-[1rem] lg:p-[2rem] rounded-md ">
      <div>
        <Image
          src={img}
          alt="Course img 1"
          className=" w-full h-full object-contain "
        />
      </div>
      <div className=" flex items-center pt-[1.5rem] pb-[1.6rem] ">
        <div className=" flex items-center gap-2 ">
          <div className=" bg-[#fff] text-[#111] px-3 py-1 rounded-md ">
            4 Weeks
          </div>
          <div className=" bg-[#fff] text-[#111] px-3 py-1 rounded-md ">
            Beginner
          </div>
        </div>
        <div>By John Smith</div>
      </div>
      <h3 className=" text-[1.5rem] font-medium text-[#262626] ">
        Web Design Fundamentals
      </h3>
      <p className=" text-[#4C4C4D] mt-[1.5rem] mb-[2rem] text-sm ">
        Learn the fundamentals of web design, including HTML, CSS, and
        responsive design principles. Develop the skills to create visually
        appealing and user-friendly websites.
      </p>
      <Link
        href={`/`}
        className=" block bg-[#002868] py-3 px-5 w-full rounded-md text-center text-[#fff] "
      >
        Get it Now
      </Link>
    </div>
  );
};
