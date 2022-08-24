import React from "react";

const Whyus = () => {
  return (
    <div className="overflow-hidden flex">
      <div className="max-w-[1240px] m-auto">
        <h1 className="text-center text-3xl m-11">why us?</h1>

        {/* Desktop */}
        <div className="my-[4rem] mb-[6rem] hidden sm:block">
          <div className="w-[630px] h-[300px] mid:w-[750px] mid:h-[345px] le:w-[910px] le:h-[450px] relative m-auto">
            <div className="absolute w-full h-full top-0 left-0">
              <div className="border-2 border-black bg-[#fff] w-[366.67px] h-[265px] mid:w-[460px] mid:h-[310px] le:w-[550px] le:h-[300px] drop-shadow-[5px_4px_0px_rgb(30,30,31)] p-4">
                <h4 className="text-2xl le:text-3xl">
                  our passion is your passion!
                </h4>
                <p className="text-sm font-semibold mid:text-lg le:font-medium le:text-lg text-left w-2/3 mt-4">
                  mired is a web development and creative marketing one-stop
                  shop agency. there is no one-size-fits-all when it comes to
                  marketing, and we ensure custom, individualized, effective
                  strategies to scale your business.
                </p>
                <div className="border-2 border-black w-[145px] bg-black text-white mt-3 mid:ml-[8rem]">
                  <p>see our strategy</p>
                </div>
              </div>
            </div>
            <div className="absolute h-full top-0 left-0 z-9 mt-[5.6rem] ml-[16rem] mid:mt-[7rem] mid:ml-[20rem] le:mt-[9rem] le:ml-[22rem]">
              <div className="border-2 border-black bg-[#fff] w-[366.67px] h-[200px] mid:w-[420px] mid:h-[220px] le:w-[550px] le:h-[300px] drop-shadow-[5px_4px_0px_rgb(30,30,31)]"></div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="m-4 sm:hidden">
          <div className="border-2 border-black bg-[#fff] drop-shadow-[5px_4px_0px_rgb(30,30,31)] p-4">
            <h4 className="text-3xl">our passion is your passion!</h4>
            <p className="text-lg mt-4">
              mired is a web development and creative marketing one-stop shop
              agency. there is no one-size-fits-all when it comes to marketing,
              and we ensure custom, individualized, effective strategies to
              scale your business.
            </p>
            <div className="border-2 border-black w-[145px] bg-black text-white mt-3 mid:ml-[8rem]">
              <p>see our strategy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
