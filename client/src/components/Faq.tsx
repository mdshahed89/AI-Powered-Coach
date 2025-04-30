"use client";

import React, { useState } from "react";
import { FiArrowLeft, FiArrowRight, FiMinus, FiPlus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const dataArr = [
    {
      title: "Why should I choose Humestic?",
      description:
        "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
    },
    {
      title: "I like your works, how do we start a project?",
      description:
        "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
    },
    {
      title: "What info is required to get a quotation?",
      description:
        "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
    },
  ];
  const toggle = (idx: number) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  return (
    <div className=" bg-gradient-to-b from-white via-[#FF6FB9]/5 to-white ">
      <div className=" max-w-[1400px] mx-auto relative py-[2rem] px-3 ">
        <div className=" text-[1.2rem] md:mb-0 mb-3 ">
          <p>Frequently asked</p>
          <p>questions</p>
        </div>
        <h2 className=" text-[2rem] lg:text-[3rem] font-light text-[#111] max-w-[30rem] lg:max-w-[52rem] mx-auto text-center leading-tight ">
          Constant collaboration is how we roll. Let's see if we are a good fit.
        </h2>

        <div className=" mt-[3rem] md:mt-[5rem] mx-auto w-full rounded-lg">
          {dataArr.map((PerAccordion, idx) => (
            <div key={idx} className=" mb-3 md:mb-8 border-b px-1 md:px-3 py-3  text-[#111] ">
              <button
                onClick={() => toggle(idx)}
                className="flex h-full w-full items-center justify-between font-medium  outline-none"
              >
                <div className=" flex items-center gap-2 md:gap-5 text-[1.3rem] md:text-[1.6rem] lg::text-[2rem] ">
                  <span className=" text-[#8b7c4d] ">0{idx + 1}.</span>
                  <span className=" text-left ">{PerAccordion.title}</span>
                </div>
                <span className="transition-all duration-300 ease-in-out text-[#111] text-[1.3rem] md:text-[1.6rem] lg::text-[2rem] ">
                  {isOpen === idx ? (
                    <FiMinus className="transition-transform duration-300 scale-100 opacity-100" />
                  ) : (
                    <FiPlus className="transition-transform duration-300 scale-100 opacity-100" />
                  )}
                </span>
              </button>
              <div
                className={`grid overflow-hidden text-[#636363] transition-all duration-300 ease-in-out ${
                  isOpen === idx
                    ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden pr-4 text-base">
                  {PerAccordion.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Testimonial />
    </div>
  );
};

export default Faq;

const testimonials = [
  {
    text: `They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.`,
    name: "Michael Kaizer",
    title: "CEO of Basecamp Corp",
  },
  {
    text: `They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.`,
    name: "Sarah Lind",
    title: "Head of Marketing at NovaTech",
  },
  {
    text: `They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.`,
    name: "David Turner",
    title: "CMO of BrightPath",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const total = testimonials.length;

  const paginate = (dir: number) => {
    setDirection(dir);
    setCurrentIndex((prev) =>
      dir === 1
        ? prev === total - 1
          ? 0
          : prev + 1
        : prev === 0
        ? total - 1
        : prev - 1
    );
  };

  const { name, text, title } = testimonials[currentIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <div className=" text-black px-3 md:px-6 mt-[3rem] lg:mt-[5rem] mb-[7rem]  overflow-hidden  overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto text-center relative ">
        <AnimatePresence custom={direction} mode="wait">
          <div className=" h-[15rem] ">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="  text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed absolute left-0 w-full  "
            >
              <span className="text-4xl font-serif mr-2">“</span>
              {text}
              <span className="text-4xl font-serif ml-2">”</span>
            </motion.div>
          </div>
        </AnimatePresence>

        <div className=" md:mt-0 mt-[3rem] flex items-center justify-between  ">
          <div className="relative flex items-center justify-center gap-4">
            <div className="flex items-center gap-4">
              <div className="md:min-w-[3rem] min-w-[2.5rem] min-h-[2.5rem] max-w-[2.5rem] max-h-[2.5rem] md:min-h-[3rem] md:max-w-[3rem] md:max-h-[3rem] rounded-full bg-[#000]/20 " />
              <div className="text-left">
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-gray-500">{title}</p>
              </div>
            </div>
          </div>

          <div className=" flex items-center justify-center gap-2 md:gap-4">
            <button
              onClick={() => paginate(-1)}
              className="border border-[#002868] text-[#002868] p-2 md:p-3 rounded-full hover:bg-[#002868] hover:text-white transition"
            >
              <FiArrowLeft />
            </button>
            <span className="text-sm text-gray-500 font-medium">
              {String(currentIndex + 1).padStart(2, "0")}/
              {String(total).padStart(2, "0")}
            </span>
            <button
              onClick={() => paginate(1)}
              className=" border border-[#002868] text-[#002868] p-2 md:p-3 rounded-full hover:bg-[#001F5C] hover:text-white transition"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
