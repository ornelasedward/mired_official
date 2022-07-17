import React from "react";

const Services = () => {
  return (
    <div id="services" className="bg-[#FFEC9D]">
      <div className="text-4xl grid place-items-center py-[4rem] text-center">
        <h1>you have a product, now what?</h1>
      </div>
      <div className="max-w-[1240px] m-auto justify-between p-6 grid grid-cols-2">
        <div className="w-[32.688rem] h-[13.813rem] border-4 border-[#1E1E1F] bg-[#92C2EB] drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
          <div className="h-[3.75rem] border-b-4 border-[#1E1E1F] bg-white m-auto flex items-center">
            <div className="w-[1.125rem] h-[1.125rem] bg-[#92C2EB] rounded-full border-2 border-[#1E1E1F] ml-3" />
            <div className="w-[1.125rem] h-[1.125rem] bg-[#92C2EB] rounded-full border-2 border-[#1E1E1F] ml-1" />
            <div className="w-[1.125rem] h-[1.125rem] bg-[#92C2EB] rounded-full border-2 border-[#1E1E1F] ml-1" />
          </div>
          <div className="place-items-center text-center mt-2">
            <h1 className="text-4xl">design</h1>
            <h4 className="text-[1.3rem]">
              <b>97%</b> of websites <b>fail</b> at providing <br /> users a
              good experience. thats <br />
              where we come in.
            </h4>
          </div>
        </div>
        <div className="w-[30.625rem] h-[17rem]">
          <h4 className="text-[1.3rem] text-right">
            all good designs begin with research. before <span />
            any website can be developed, we will need <span /> to better
            understand your business and <span /> your users. our goal is to
            eliminate <span />
            “opinion-driven” designs, and to create a <span /> research-based
            design that keeps your <span /> users needs in mind. <br />
          </h4>
        </div>
        <div className="w-[32.688rem] h-[13.813rem] border-4 border-[#1E1E1F] bg-[#88EB8C] drop-shadow-[5px_4px_0px_rgb(30,30,31)] mb-[7rem]">
          <div className="h-[3.75rem] border-b-4 border-[#1E1E1F] bg-white m-auto flex items-center">
            <div className="w-[1.125rem] h-[1.125rem] bg-[#88EB8C] rounded-full border-2 border-[#1E1E1F] ml-3" />
            <div className="w-[1.125rem] h-[1.125rem] bg-[#88EBBC] rounded-full border-2 border-[#1E1E1F] ml-1" />
            <div className="w-[1.125rem] h-[1.125rem] bg-[#88EBBC] rounded-full border-2 border-[#1E1E1F] ml-1" />
          </div>
          <div className="place-items-center text-center mt-2">
            <h1 className="text-4xl">development</h1>
            <h4 className="text-[1.3rem]">
              from <b>front-end</b> using ReactJS and <br /> NextJS, to{" "}
              <b>back-end </b>
              using Python <br />
              and nodeJS, we got your back.
            </h4>
          </div>
        </div>
        <div className="w-[30.625rem] h-[14rem]">
          <h4 className="text-[1.3rem] text-right">
            <br />
            <br />
            from ecommerce, to corporate websites, to <span /> local shops, we
            can develop custom, <span /> modern, cutting edge website designs
            for <span />
            any ambitious business.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Services;
