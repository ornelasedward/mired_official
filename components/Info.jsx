import React from "react";
import Post from "../assets/postman.png";
import Image from "next/image";
import Chat from "../assets/chat.png";
import Hash from "../assets/hashtag.png";

const Info = () => {
  return (
    <div id="info" className="bg-[#FFF8D9]">
      <div className="text-4xl place-items-center py-[4rem] text-center mb-[-2rem]">
        <h1>reach out</h1>
      </div>
      <div className="max-w-[1240px] m-auto justify-between p-6 grid grid-cols-2">
        <div className="flex">
          <Image src={Post} />
        </div>
        <div className="h-[24.688rem] w-[25.75rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)] mt-[6rem] ml-[4.5rem]">
          <div className="h-[6.375rem] border-b-4 border-[#1E1E1F] bg-[#FFA6CE] m-auto flex items-center">
            <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
            <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
            <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
            <h4 className="text-4xl ml-[6.5rem]">info</h4>
            <div className="border-t-[.16rem] border-black w-14 ml-[5rem]" />
          </div>
          <div className="p-6 m-auto flex justify-between items-center">
            <div className="drop-shadow-[5px_4px_0px_rgb(0,0,0)]">
              <Image src={Hash} />
            </div>
            <h4 className="text-[1.5rem]"> (469) 619-7722</h4>
          </div>
          <div className="p-6 m-auto flex justify-between items-center">
            <div className="drop-shadow-[5px_4px_0px_rgb(0,0,0)]">
              <Image src={Chat} />
            </div>
            <h4 className="text-[1.3rem]">ContactMired@gmail.com</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
