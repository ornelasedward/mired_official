import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="container  max-w-[1240px] m-auto">
      <div className="p-4">
        <div className="text-3xl border-2 border-black mx-11">
          <h1>Hi, we're Mired</h1>
          <h4>Mir•ed</h4>
        </div>

        <h3 className="text-3xl text-center">2 in 1</h3>

        <ul className="justify-content flex">
          <li className="border-2 border-black p-5 inline-block w-1/2 md:mx-11">
            <h1 className="text-center text-lg lg:text-2xl p-2">
              Vamp up your site!
            </h1>
            <h4 className="text-left text-lg">
              We help passionate brick and mortar businesses and ecommerce
              brands scale revenue through UI/UX designs that are both Desktop
              and Mobile friendly.
            </h4>
          </li>
          <li className="border-black border-2 p-5 inline-block w-1/2 md:mx-11">
            <h1 className="text-center text-lg lg:text-2xl p-2">
              Market your business!
            </h1>
            <h4 className="text-left text-lg">
              Already have a great website? no worries! We also specialize in
              paid social, Google and Facebook ads, email/sms marketing,
              influencer marketing strategy and smart stragies to scale your
              business.
            </h4>
          </li>
        </ul>
        <div className="p-4">
          <h1 className="text-2xl mx-8">
            You need a small, smart, and flexible team to push your brand to the
            next level and work as an extension of your team. Don't you?
          </h1>
        </div>
        <div className="border-2 border-black">
          <div className="w-[200px] h-[200px]">
            <h1>Video</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
