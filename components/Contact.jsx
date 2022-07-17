import React from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_g4hqwd2",
      "template_y48y9zr",
      form.current,
      "oF4ZHxYDt8xOidpgG"
    );

    e.target.reset();
  };

  return (
    <div id="contact" className="bg-[#F9CAC3]">
      <div className="place-items-center py-[4rem] text-center">
        <h1 className="text-4xl">dont have time?</h1>
        <h4 className="text-[1.1rem] mb-[-1rem]">send us a message</h4>
      </div>
      <div className="max-w-[1240px] m-auto p-4 grid grid-cols-2">
        {/* Form */}

        <form ref={form} onSubmit={sendEmail}>
          <div className="ml-[14rem]">
            <div className="m-auto flex justify-between items-center mb-4">
              <div className="mr-10">
                <h4>first name</h4>
                <input
                  type="text"
                  name="firstname"
                  required
                  className="w-[22.5rem] h-[4.5rem] bg-[#92C2EB] border-4 border-[#1E1E1F] drop-shadow-[5px_4px_0px_rgb(30,30,31)]"
                />
              </div>
              <div>
                <h4>last name</h4>
                <input
                  type="text"
                  name="lastname"
                  required
                  className="w-[22.5rem] h-[4.5rem] bg-[#92C2EB] border-4 border-[#1E1E1F] drop-shadow-[5px_4px_0px_rgb(30,30,31)]"
                />
              </div>
            </div>
            <div className="m-auto flex justify-between items-center mb-4">
              <div className="mr-10">
                <h4>email</h4>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-[22.5rem] h-[4.5rem] bg-[#92C2EB] border-4 border-[#1E1E1F] drop-shadow-[5px_4px_0px_rgb(30,30,31)]"
                />
              </div>

              <div>
                <h4>phone number</h4>
                <input
                  type="number"
                  name="number"
                  required
                  className="w-[22.5rem] h-[4.5rem] bg-[#92C2EB] border-4 border-[#1E1E1F] drop-shadow-[5px_4px_0px_rgb(30,30,31)]"
                />
              </div>
            </div>

            <div>
              <h4>message</h4>
              <textarea
                name="message"
                rows="7"
                required
                className="w-[47.5rem] bg-[#92C2EB] border-4 border-[#1E1E1F] drop-shadow-[5px_4px_0px_rgb(30,30,31)] resize-none	text-[22px] p-[1rem] font-bold active:bg-[##bcd2e8] focus:bg-[#bcd2e8]"
              />
            </div>
            <div className="ml-[40.4rem] mb-[5rem]">
              <button type="submit" className="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
