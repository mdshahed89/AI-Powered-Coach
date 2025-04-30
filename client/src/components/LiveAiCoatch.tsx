"use client";

import React, { FormEvent, KeyboardEvent, useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { FaFileContract } from "react-icons/fa";
import { GiBattery0 } from "react-icons/gi";
import { IoArrowUp, IoCheckmark } from "react-icons/io5";
import { LuRefreshCcw } from "react-icons/lu";
import { PiSpeakerSimpleHigh } from "react-icons/pi";
import { TbMessageFilled } from "react-icons/tb";

const LiveAiCoatch: React.FC = () => {
  return (
    <div className=" bg-gradient-to-r from-[#103580] to-[#004FCE] py-[4rem] ">
      <div className=" max-w-[1400px] mx-auto text-[#fff] px-3 ">
        <div className=" text-[#FCE38A] text-[1.4rem] font-light ">
          Live Ai Coach
        </div>
        <h2 className=" text-[2rem] lg:text-[3rem] font-light mt-[1.5rem] mb-[3rem] ">
          Take a Suggestion Coaching{" "}
        </h2>
        <div className=" flex lg:flex-row flex-col ">
          <Chat />
          <div className=" px-4 flex items-center lg:justify-start justify-center ">
            <div className=" bg-[#F2F3F3] text-[#292929] lg:my-0 my-4 py-4 lg:py-6 px-10 lg:px-4 rounded-full h-fit text-[1.4rem] flex flex-row lg:flex-col gap-8 ">
              <LuRefreshCcw />
              <AiOutlineLike />
              <AiOutlineDislike />
              <GiBattery0 />
              <PiSpeakerSimpleHigh />
            </div>
          </div>
          <Other />
        </div>
      </div>
    </div>
  );
};

export default LiveAiCoatch;

type Message = {
  msg: string;
  role: "AI" | "user";
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      msg: "Hello! I'm your AI sales coach. How can I help you improve your sales performance today?",
      role: "AI",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = (e?: FormEvent<HTMLFormElement> | MouseEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { msg: input, role: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const aiMessage: Message = {
        msg: "Hello! I'm your AI sales coach. How can I help you improve your sales performance today?",
        role: "AI",
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 2000);
  };

  return (
    <div className=" w-full bg-[#F2F3F3] rounded-xl overflow-hidden">
      <div className="py-3 px-5 text-[1.2rem] text-[#1B1B1B] bg-[#fff] font-medium">
        AI Sales Coach
      </div>

      <div className="h-[20rem] overflow-y-auto p-4 space-y-2">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={` w-fit ${m.role === "AI" ? "" : " ml-auto"}`}
          >
            <div className=" flex gap-2 ">
              <div
                className={` ${
                  m.role === "AI"
                    ? "bg-[#D9D9D9] order-1"
                    : "bg-[#004fce]/50 order-2"
                } min-w-[2.5rem] min-h-[2.5rem] max-w-[2.5rem] max-h-[2.5rem] rounded-full `}
              ></div>
              <p
                className={` ${
                  m.role === "AI"
                    ? "bg-white text-[#111] order-2"
                    : "bg-[#004fce] order-1"
                } p-3 rounded-xl `}
              >
                {m.msg}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="pb-[1.5rem] px-[2rem] bg-[#fff]">
        <div className="flex items-center gap-1 text-sm py-[1rem]">
          {[
            "How do I handle objections?",
            "Give me a cold email template",
            "Closing techniques",
          ].map((text, i) => (
            <div
              key={i}
              className="bg-[#002868]/20 px-3 py-1 rounded-full text-[#002868] text-nowrap cursor-pointer"
              onClick={() => setInput(text)}
            >
              {text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSend} className="flex items-center gap-2">
          <div className="w-full">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Ask anything you need"
              className="outline-none border rounded-md px-4 py-2 w-full text-[#000]"
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 bg-[#002868] rounded-lg text-[#fff] px-4 py-2"
          >
            <span>Send</span>
            <IoArrowUp />
          </button>
        </form>
      </div>
    </div>
  );
};

const Other = () => {
  const ProgressNumber = 76;

  return (
    <div className=" w-full lg:w-[40%] flex flex-col gap-5  ">
      <div className=" bg-[#F2F3F3] h-[60%] rounded-xl px-[1.5rem] py-[1.5rem] ">
        <h3 className=" text-[1.4rem] font-medium text-[#323232] ">
          Real-time Analysis
        </h3>
        <div>
          <div className=" bg-[#fff] mt-6 py-2 px-4 rounded-xl ">
            <div className=" flex items-center gap-2 ">
              <div className=" bg-green-500 p-[2px] text-[#fff] rounded-full text-xs ">
                <IoCheckmark />
              </div>
              <span className=" text-[#171D25] ">Confidence Level</span>
            </div>
            <div className="mx-auto flex items-center mt-3 pb-2 gap-2">
              <div className="flex w-full  items-center justify-center rounded-full bg-[#DFDFDF] ">
                <div
                  style={{ width: `${ProgressNumber}%` }}
                  className="transition-width mr-auto h-2 w-0 rounded-full  bg-green-500 duration-500"
                ></div>
              </div>
              <span className="text-center text-xs font-medium text-[#6d6d6d] ">
                {ProgressNumber}%
              </span>
            </div>
          </div>

          <div className=" bg-[#fff] py-2 px-4 mt-6 rounded-xl ">
            <div className=" flex items-center gap-2 text-[#000] ">
              <BsGraphUp />
              <span className=" text-[#171D25] ">Confidence Level</span>
            </div>
            <p className=" text-[#909090] text-sm mt-3 ">
              85% improvement in objection handling
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-[#F2F3F3] h-[40%] rounded-xl text-[#111] p-[1.5rem] ">
        <h3 className=" text-[1.4rem] font-medium text-[#323232]  ">
          Quick Actions
        </h3>
        <div className=" grid grid-cols-2 gap-3 mt-6 ">
          <div className=" bg-[#fff] p-3 rounded-xl space-y-2 ">
            <FaFileContract className=" text-[#002868] text-[1.5rem] " />
            <h4 className=" text-[1rem] font-medium ">Generate Script</h4>
          </div>
          <div className=" bg-[#fff] p-3 rounded-xl text-[1.3rem] space-y-2 ">
            <TbMessageFilled className=" text-[#002868] text-[1.5rem] " />
            <h4 className=" text-[1rem] font-medium ">Practice Pitch</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
