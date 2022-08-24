import React from "react";

const Whyus = () => {
  return (
    <div className="overflow-hidden flex">
      <div className="max-w-[1240px] m-auto">
        <h1 className="text-center text-3xl m-11">why us?</h1>
        <div className="my-[4rem] mb-[6rem]">
          <div className="w-[910px] h-[450px] relative m-auto">
            <div className="absolute w-full h-full top-0 left-0">
              <div className="border-2 border-black bg-[#fff] w-[550px] h-[300px] drop-shadow-[5px_4px_0px_rgb(30,30,31)] p-4">
                <h4 className="text-3xl">our passion is your passion!</h4>
                <p className="text-lg text-left w-2/3 mt-4">
                  mired is a web development and creative marketing one-stop
                  shop agency. there is no one-size-fits-all when it comes to
                  marketing, and we ensure custom, individualized, effective
                  strategies to scale your business.
                </p>
                <div className="border-2 border-black w-[145px] bg-black text-white mt-3">
                  <p>see our strategy</p>
                </div>
              </div>
            </div>
            <div className="absolute h-full top-0 left-0 z-9 mt-[9rem] ml-[22rem]">
              <div className="border-2 border-black bg-[#fff] w-[550px] h-[300px] drop-shadow-[5px_4px_0px_rgb(30,30,31)]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
