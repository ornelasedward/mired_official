import React from "react";
import { Controller, Scene } from "react-scrollmagic";

import Link from "next/link";

const ServicesExplained = () => {
  return (
    <div id="services_explained">
      {/* Desktop 1 */}
      <div className="hidden md:block">
        <Controller>
          <div className="h-[200vh] flex bg-[#F88170] border-t-4 border-black">
            <Scene duration={500} pin={true} enabled={true}>
              <div className="bg-[#F88170] w-1/2 h-screen flex justify-center items-center">
                <div className="">
                  <div className="le:h-[12rem] le:w-[27.5rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
                    <div className="h-[3.5rem] border-b-4 border-[#1E1E1F] bg-[#93C2EA] m-auto flex items-center">
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                    </div>

                    <h4 className="text-4xl font-extrabold m-[2.5rem] text-center justify-center items-center">
                      UX Research
                    </h4>
                  </div>
                </div>
              </div>
            </Scene>
            <Scene pin={false} enabled={false}>
              <div className="w-1/2 h-screen">
                <div className="bg-[#F7BF09] h-[200vh] flex flex-col justify-around items-center border-l-4 border-black">
                  <p className="font-semibold hidden md:block sm:text-md le:text-lg xlr:text-2xl text-right le:m-11 pt-[28rem]">
                    all <em>good</em> designs begin with research. before <br />{" "}
                    any product can be developed, we will need <br /> to better
                    understand your business and <br />
                    your users. we execute this by creating a <br /> competitive
                    analysis, interviewing, and/or <br /> administering surveys.
                    <br /> <br />
                    our goal is to eliminate “opinion-driven” <br /> designs,
                    and to generate a research-based <br /> design that creates
                    the <span />
                    <b>
                      best product for <br /> your users.
                    </b>
                  </p>
                  <p className="font-semibold text-[0.8rem] xs:text-[0.9rem] md:hidden m-5 text-right">
                    all good designs begin with research. before any product can
                    be developed, we will need to better understand your
                    business and your users. we execute this by creating a
                    competitive analysis, interviewing, and/or administering
                    surveys.
                    <br /> <br />
                    our goal is to eliminate “opinion-driven” designs, and to
                    generate a research-based design that creates the <span />
                    <b>best product for your users.</b>
                  </p>

                  <div className="button-4 mt-[-30rem] ml-[13rem] le:ml-[15rem] xlr:ml-[23.5rem] bg-[#93C2EA]">
                    <Link href="#contact">Learn more</Link>
                  </div>
                </div>
              </div>
            </Scene>
          </div>
        </Controller>
      </div>

      {/* Mobile 1*/}

      <div className="md:hidden bg-[#F7BF09] py-[6rem] border-t-4 border-black">
        <Controller>
          <Scene duration={300} pin={true} enabled={true} offset={190}>
            <div className="flex justify-center items-center p-4">
              <div className="h-[12rem] w-[27.5rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
                <div className="h-[3.5rem] border-b-4 border-[#1E1E1F] bg-[#93C2EA] m-auto flex items-center">
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                </div>

                <h4 className="text-3xl font-extrabold m-[2.5rem] text-center justify-center items-center">
                  UX Research
                </h4>
              </div>
            </div>
          </Scene>
          <Scene>
            <div className="bg-[#F7BF09]  justify-around items-center">
              <p className="font-semibold text-lg md:hidden text-center py-[3rem] mx-5">
                all good designs begin with research. before any product can be
                developed, we will need to better understand your business and
                your users. we execute this by creating a competitive analysis,
                interviewing, and/or administering surveys.
                <br /> <br />
                our goal is to eliminate “opinion-driven” designs, and to
                generate a research-based design that creates the <span />
                <b>best product for your users.</b>
              </p>
              <div className="w-[120px] m-auto">
                <div className="button-4 text-center bg-[#93C2EA]">
                  <Link href="#contact">Learn more</Link>
                </div>
              </div>
            </div>
          </Scene>
        </Controller>
      </div>

      {/* Desktop 2 */}
      <div className="hidden md:block bg-[#93C2EA] border-t-4 border-black">
        <Controller>
          <div className="h-[150vh] flex">
            <Scene duration={442} pin={true} enabled={true} offset={400}>
              <div className="bg-[#93C2EA] w-1/2 h-screen flex justify-center items-center">
                <div className="">
                  <div className="le:h-[12rem] le:w-[27.5rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
                    <div className="h-[3.5rem] border-b-4 border-[#1E1E1F] bg-[#89EB8D] m-auto flex items-center">
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                    </div>

                    <h4 className="text-4xl font-extrabold m-[2.5rem] text-center justify-center items-center">
                      Web Design
                    </h4>
                  </div>
                </div>
              </div>
            </Scene>

            <div className="w-1/2 h-screen">
              <div className="bg-[#FFA6CE] h-[50vh] flex flex-col justify-around items-center border-t-4 border-l-4 border-black"></div>
              <div className="bg-[#FFA6CE] h-[100vh] flex flex-col justify-around items-center border-l-4 border-black">
                <p className="font-semibold hidden md:block sm:text-md le:text-lg xlr:text-2xl text-right le:m-11">
                  the days of just having a business is over.
                  <br /> you <b>need</b> a website. and not just any
                  <br /> website; a modern, cutting-edge website.
                  <br /> you have 0.05 seconds to make a virtual
                  <br /> impression on users before they decide to
                  <br /> leave your site or not.
                  <br /> <br /> this is why we create custom, creative,
                  <br />
                  cutting-edge website designs to ensure
                  <br /> your business will stand out amongst the
                  <br /> rest.
                </p>
                <p className="font-semibold text-[0.8rem] xs:text-[0.9rem] md:hidden m-5 text-right">
                  the days of just having a business is over. you need a
                  website. and not just any website; a modern, cutting-edge
                  website. you have 0.05 seconds to make a virtual impression on
                  users before they decide to leave your site or not.
                  <br /> <br /> this is why we create custom, creative,
                  cutting-edge website designs to ensure your business will
                  stand out amongst the rest.
                </p>

                <div className="button-4 mt-[-30rem] ml-[12rem] le:ml-[15rem] bg-[#89EB8D]">
                  <Link href="#contact">Learn more</Link>
                </div>
              </div>
            </div>
          </div>
        </Controller>
      </div>

      {/* Mobile 2*/}

      <div className="md:hidden bg-[#FFA6CE] py-[6rem] ">
        <Controller>
          <Scene duration={300} pin={true} enabled={true} offset={190}>
            <div className="flex justify-center items-center p-4">
              <div className="h-[12rem] w-[27.5rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
                <div className="h-[3.5rem] border-b-4 border-[#1E1E1F] bg-[#89EA8C] m-auto flex items-center">
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                </div>

                <h4 className="text-3xl font-extrabold m-[2.5rem] text-center justify-center items-center">
                  Web Design
                </h4>
              </div>
            </div>
          </Scene>

          <div className="bg-[#FFA6CE]  justify-around items-center">
            <p className="font-semibold text-lg md:hidden text-center py-[3rem] mx-5">
              the days of just having a business is over. you need a website.
              and not just any website; a modern, cutting-edge website. you have
              0.05 seconds to make a virtual impression on users before they
              decide to leave your site or not.
              <br /> <br /> this is why we create custom, creative, cutting-edge
              website designs to ensure your business will stand out amongst the
              rest.
            </p>
            <div className="w-[120px] m-auto">
              <div className="button-4 text-center bg-[#89EB8D]">
                <Link href="#contact">Learn more</Link>
              </div>
            </div>
          </div>
        </Controller>
      </div>

      {/* Desktop 3 */}
      <div className="hidden md:block">
        <Controller>
          <div className="h-[150vh] flex bg-[#F5950B] border-t-4 border-black">
            <Scene>
              <div className="w-1/2 h-screen">
                <div className="bg-[#F9CAC3] h-[50vh] flex flex-col justify-around items-center border-r-4 border-t-4 border-black"></div>
                <div className="bg-[#F9CAC3] h-[100vh] flex flex-col justify-around items-center border-r-4 border-black">
                  <p className="font-semibold hidden md:block sm:text-md le:text-lg xlr:text-2xl text-left le:m-11">
                    you can’t just settle for cookie-cutter verbiage
                    <br /> on your website. what is it that your users
                    <br /> need? we’ll conduct an seo audit to see where
                    <br /> your current website sits in your market.
                    <br />
                    <br />
                    then, we utilize highly <em>effective and successful</em>
                    <br /> seo strategies, such as completing keyword
                    <br /> research, ensuring you’re on location search
                    <br /> pages, and creating a google business profile.
                  </p>
                  <p className="font-semibold text-[0.8rem] xs:text-[0.9rem] md:hidden m-5 text-left">
                    you can’t just settle for cookie-cutter verbiage
                    <br /> on your website. what is it that your users
                    <br /> need? we’ll conduct an seo audit to see where
                    <br /> your current website sits in your market.
                    <br />
                    <br />
                    then, we utilize highly <em>effective and successful</em>
                    <br /> seo strategies, such as completing keyword
                    <br /> research, ensuring you’re on location search
                    <br /> pages, and creating a google business profile.
                  </p>

                  <div className="button-4 mt-[-30rem] ml-[-14rem] le:ml-[-17rem] bg-[#5DE6D6]">
                    <Link href="#contact">Learn more</Link>
                  </div>
                </div>
              </div>
            </Scene>
            <Scene duration={442} pin={true} enabled={true} offset={400}>
              <div className="bg-[#F5950B] w-1/2 h-screen flex justify-center items-center">
                <div className="">
                  <div className="m-11 le:h-[12rem] le:w-[27.5rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
                    <div className="h-[3.5rem] border-b-4 border-[#1E1E1F] bg-[#C1B4FB] m-auto flex items-center">
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                    </div>

                    <h4 className="text-3xl font-extrabold m-[1.6rem] text-center justify-center items-center">
                      Search Engine Optimization (seo)
                    </h4>
                  </div>
                </div>
              </div>
            </Scene>
          </div>
        </Controller>
      </div>

      {/* Mobile 3*/}

      <div className="md:hidden bg-[#F4940B] py-[6rem]">
        <Controller>
          <Scene duration={300} pin={true} enabled={true} offset={190}>
            <div className="flex justify-center items-center p-4">
              <div className="h-[12rem] w-[27.5rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
                <div className="h-[3.5rem] border-b-4 border-[#1E1E1F] bg-[#5DE7D7] m-auto flex items-center">
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                </div>

                <h4 className="text-2xl font-extrabold m-[2.5rem] text-center justify-center items-center">
                  Search Engine Optimization (seo)
                </h4>
              </div>
            </div>
          </Scene>

          <div className="bg-[#F4940B]  justify-around items-center">
            <p className="font-semibold text-lg md:hidden text-center py-[3rem] mx-5">
              you can’t just settle for cookie-cutter verbiage on your website.
              what is it that your users need? we’ll conduct an seo audit to see
              where your current website sits in your market.
              <br />
              <br />
              then, we utilize highly effective and successful seo strategies,
              such as completing keyword research, ensuring you’re on location
              search pages, and creating a google business profile.
            </p>
            <div className="w-[120px] m-auto">
              <div className="button-4 text-center bg-[#5DE6D6]">
                <Link href="#contact">Learn more</Link>
              </div>
            </div>
          </div>
        </Controller>
      </div>

      {/* Desktop 4 */}
      <div className="hidden md:block">
        <Controller>
          <div className="h-[150vh] flex bg-[#89EA8C] border-t-4 border-b-4 border-black">
            <Scene>
              <div className="w-1/2 h-screen">
                <div className="bg-[#92C3EA] h-[50vh] flex flex-col justify-around items-center border-r-4 border-t-4 border-black"></div>
                <div className="bg-[#92C3EA] h-[100vh] flex flex-col justify-around items-center border-r-4 border-b-4 border-black">
                  <p className="font-semibold hidden md:block sm:text-md le:text-lg xlr:text-2xl text-left le:m-11">
                    57% of Americans won’t recommend a<br /> business with
                    poorly designed mobile
                    <br /> websites.
                    <span />
                    <em>
                      don’t limit yourself to only desktop
                      <br /> users.
                    </em>
                    we specialize in programming mobile
                    <br />
                    responsive websites from ecommerce sites
                    <br /> like shopify, to corporate websites, to local
                    <br /> shops.
                    <br />
                    <br />
                    we develop custom, modern, cutting edge
                    <br /> website designs for any ambitious
                    <br /> business. this includes css, html,
                    <br /> javascript, various backend solutions and
                    <br /> frameworks like <b>react</b> and <b>nextjs.</b>
                  </p>
                  <p className="font-semibold text-[0.8rem] xs:text-[0.9rem] md:hidden m-5 text-left">
                    57% of Americans won’t recommend a<br /> business with
                    poorly designed mobile
                    <br /> websites.
                    <span />
                    <em>
                      don’t limit yourself to only desktop
                      <br /> users.
                    </em>
                    we specialize in programming mobile
                    <br />
                    responsive websites from ecommerce sites
                    <br /> like shopify, to corporate websites, to local
                    <br /> shops.
                    <br />
                    <br />
                    we develop custom, modern, cutting edge
                    <br /> website designs for any ambitious
                    <br /> business. this includes css, html,
                    <br /> javascript, various backend solutions and
                    <br /> frameworks like <b>react</b> and <b>nextjs.</b>
                  </p>

                  <div className="button-4 mt-[-25rem] ml-[-12.5rem] le:ml-[-15.5rem] bg-[#FEABF8]">
                    <Link href="#contact">Learn more</Link>
                  </div>
                </div>
              </div>
            </Scene>
            <Scene duration={442} pin={true} enabled={true} offset={400}>
              <div className="bg-[#89EA8C] w-1/2 h-screen flex justify-center items-center">
                <div className="">
                  <div className="le:h-[12rem] le:w-[27.5rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
                    <div className="h-[3.5rem] border-b-4 border-[#1E1E1F] bg-[#FEABF8] m-auto flex items-center">
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                    </div>

                    <h4 className="text-4xl font-extrabold m-[2.5rem] text-center justify-center items-center">
                      Development
                    </h4>
                  </div>
                </div>
              </div>
            </Scene>
          </div>
        </Controller>
      </div>

      {/* Mobile 4*/}

      <div className="md:hidden bg-[#92C3EA] py-[6rem] border-t-4 border-black">
        <Controller>
          <Scene duration={300} pin={true} enabled={true} offset={190}>
            <div className="flex justify-center items-center p-4">
              <div className="h-[12rem] w-[27.5rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
                <div className="h-[3.5rem] border-b-4 border-[#1E1E1F] bg-[#FEAAF9] m-auto flex items-center">
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                </div>

                <h4 className="text-3xl font-extrabold m-[2.5rem] text-center justify-center items-center">
                  Development
                </h4>
              </div>
            </div>
          </Scene>

          <div className="bg-[#92C3EA]  justify-around items-center">
            <p className="font-semibold text-lg md:hidden text-center py-[3rem] mx-5">
              57% of Americans won’t recommend a business with poorly designed
              mobile websites. don’t limit yourself to only desktop users. we
              specialize in programming mobile responsive websites from
              ecommerce sites like shopify, to corporate websites, to local
              shops.
              <br />
              <br />
              we develop custom, modern, cutting edge website designs for any
              ambitious business. this includes css, html, javascript, various
              backend solutions and frameworks like react and nextjs.
            </p>
            <div className="w-[120px] m-auto">
              <div className="button-4 text-center bg-[#FEABF8]">
                <Link href="#contact">Learn more</Link>
              </div>
            </div>
          </div>
        </Controller>
      </div>

      {/* Desktop 5*/}
      <div className="hidden md:block">
        <Controller>
          <div className="h-[150vh] flex bg-[#EBC30E] border-t-4 border-black">
            <Scene duration={442} pin={true} enabled={true} offset={400}>
              <div className="bg-[#EBC30E] w-1/2 h-screen flex justify-center items-center border-r-4  border-black">
                <div className="">
                  <div className="le:h-[12rem] le:w-[27.5rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
                    <div className="h-[3.5rem] border-b-4 border-[#1E1E1F] bg-[#EA9293] m-auto flex items-center">
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                    </div>

                    <h4 className="text-4xl font-extrabold m-[2.5rem] text-center justify-center items-center">
                      Marketing
                    </h4>
                  </div>
                </div>
              </div>
            </Scene>

            <div className="w-1/2 h-screen">
              <div className="bg-[#D4B0FE] h-[50vh] flex flex-col justify-around items-center"></div>
              <div className="bg-[#D4B0FE] h-[100vh] flex flex-col justify-around items-center">
                <p className="font-semibold hidden md:block sm:text-md le:text-lg xlr:text-2xl text-right le:m-11">
                  lets face it; advertising and cold-calling
                  <br /> just aren’t the move anymore. were living
                  <br /> in a new age for getting your business out
                  <br /> there: content marketing, digital
                  <br /> marketing, and social media marketing.
                  <br />
                  <br />
                  nowadays, you need a good bio, trendy
                  <br /> content creation, brand consistency, eye-
                  <br />
                  popping logo, social media ads, you name
                  <br /> it. it’s also like you have to be a jack of all
                  <br /> trades. or, you can let us handle it.
                </p>
                <p className="font-semibold text-[0.8rem] xs:text-[0.9rem] md:hidden m-5 text-right">
                  <br /> just aren’t the move anymore. were living
                  <br /> in a new age for getting your business out
                  <br /> there: content marketing, digital
                  <br /> marketing, and social media marketing.
                  <br />
                  <br />
                  nowadays, you need a good bio, trendy
                  <br /> content creation, brand consistency, eye-
                  <br />
                  popping logo, social media ads, you name
                  <br /> it. it’s also like you have to be a jack of all
                  <br /> trades. or, you can let us handle it.
                </p>

                <div className="button-4 mt-[-30rem] ml-[12rem] le:ml-[15rem] bg-[#EA9293]">
                  <Link href="#contact">Learn more</Link>
                </div>
              </div>
            </div>
          </div>
        </Controller>
      </div>

      {/* Mobile 5*/}

      <div className="md:hidden bg-[#D4B0FE] py-[6rem] border-t-4 border-black">
        <Controller>
          <Scene duration={300} pin={true} enabled={true} offset={190}>
            <div className="flex justify-center items-center p-4">
              <div className="h-[12rem] w-[27.5rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
                <div className="h-[3.5rem] border-b-4 border-[#1E1E1F] bg-[#EB9292] m-auto flex items-center">
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                </div>

                <h4 className="text-3xl font-extrabold m-[2.5rem] text-center justify-center items-center">
                  Marketing
                </h4>
              </div>
            </div>
          </Scene>

          <div className="bg-[#D4B0FE]  justify-around items-center">
            <p className="font-semibold text-lg md:hidden text-center py-[3rem] mx-5">
              lets face it; advertising and cold-calling just aren’t the move
              anymore. were living in a new age for getting your business out
              there: content marketing, digital marketing, and social media
              marketing.
              <br />
              <br />
              nowadays, you need a good bio, trendy content creation, brand
              consistency, eye-popping logo, social media ads, you name it. it’s
              also like you have to be a jack of all trades. or, you can let us
              handle it.
            </p>
            <div className="w-[120px] m-auto">
              <div className="button-4 text-center bg-[#EB9292]">
                <Link href="#contact">Learn more</Link>
              </div>
            </div>
          </div>
        </Controller>
      </div>

      {/* Desktop 6 */}
      <div className="hidden md:block">
        <Controller>
          <div className="h-[150vh] flex bg-[#F88170] border-t-4 border-b-4 border-black">
            <Scene duration={442} pin={true} enabled={true} offset={400}>
              <div className="bg-[#F88170] w-1/2 h-screen flex justify-center items-center ">
                <div className="">
                  <div className="m-11 le:h-[12rem] le:w-[27.5rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
                    <div className="h-[3.5rem] border-b-4 border-[#1E1E1F] bg-[#5DE6D6] m-auto flex items-center">
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                    </div>

                    <h4 className="text-4xl font-extrabold m-[1.6rem] text-center justify-center items-center">
                      Social Media Management
                    </h4>
                  </div>
                </div>
              </div>
            </Scene>

            <div className="w-1/2 h-screen">
              <div className="bg-[#92C6F8] h-[50vh] flex flex-col justify-around items-center border-t-4 border-l-4 border-black"></div>
              <div className="bg-[#92C6F8] h-[100vh] flex flex-col justify-around items-center border-b-4 border-l-4 border-black">
                <p className="font-semibold hidden md:block sm:text-md le:text-lg xlr:text-2xl text-right le:m-11">
                  if you’re not actively updating your
                  <br /> business social media accounts, then
                  <br /> you’re missing out on 72% of potential
                  <br /> customers.
                  <br />
                  <br />
                  we take the confusion out of content
                  <br /> creation by managing it for you. this
                  <br /> includes video creation, social media
                  <br /> copywriting, running ad campaigns,
                  <br /> engaging with your user base, and
                  <br /> moderaton.
                </p>
                <p className="font-semibold text-[0.8rem] xs:text-[0.9rem] md:hidden m-5 text-right">
                  if you’re not actively updating your
                  <br /> business social media accounts, then
                  <br /> you’re missing out on 72% of potential
                  <br /> customers.
                  <br />
                  <br />
                  we take the confusion out of content
                  <br /> creation by managing it for you. this
                  <br /> includes video creation, social media
                  <br /> copywriting, running ad campaigns,
                  <br /> engaging with your user base, and
                  <br /> moderaton.
                </p>

                <div className="button-4 mt-[-30rem] ml-[10.5rem] le:ml-[12.9rem] bg-[#F6BE09]">
                  <Link href="#contact">Learn more</Link>
                </div>
              </div>
            </div>
          </div>
        </Controller>
      </div>

      {/* Mobile 6*/}

      <div className="md:hidden bg-[#89EA8C] py-[6rem] border-t-4 border-black">
        <Controller>
          <Scene duration={300} pin={true} enabled={true} offset={190}>
            <div className="flex justify-center items-center p-4">
              <div className="h-[12rem] w-[27.5rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
                <div className="h-[3.5rem] border-b-4 border-[#1E1E1F] bg-[#FDDD14] m-auto flex items-center">
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                </div>

                <h4 className="text-3xl font-extrabold m-[2.5rem] text-center justify-center items-center">
                  Social Media Management
                </h4>
              </div>
            </div>
          </Scene>

          <div className="bg-[#89EA8C]  justify-around items-center">
            <p className="font-semibold text-lg md:hidden text-center py-[3rem] mx-5">
              if you’re not actively updating your business’ social media
              accounts, then you’re missing out on 72% of potential customers.
              <br />
              <br />
              we take the confusion out of content creation by managing it for
              you. this includes video creation, social media copywriting,
              running ad campaigns, engaging with your user base, and moderaton.
            </p>
            <div className="w-[120px] m-auto">
              <div className="button-4 text-center bg-[#FDDD14]">
                <Link href="#contact">Learn more</Link>
              </div>
            </div>
          </div>
        </Controller>
      </div>
    </div>
  );
};

export default ServicesExplained;
