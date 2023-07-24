import React from "react";

function ContactUs() {
  return (
    <div id="contact" className="background">
      <div className="contact container m-auto px-6 sm:px-0 py-20  ">
        <h3 className="text-white font-bold text-5xl mb-20 text-center">
          Contact Us
        </h3>
        <form className="flex flex-col gap-5 lg:w-1/2 md:m-auto " action="#">
          <input
            className="bg-transparent outline-none border-4 px-4 py-4 placeholder-white"
            type="text"
            placeholder="Name"
          />
          <input
            className="bg-transparent outline-none border-4 px-4 py-4 placeholder-white "
            type="email"
            placeholder="Email"
          />
          <textarea
            name=""
            id=""
            rows="6"
            placeholder="Message"
            className="bg-transparent outline-none border-4 px-4 py-4 resize-none placeholder-white"
          ></textarea>

          <input
            className=" px-10 py-4 w-fit block m-auto bg-white text-[#ed92ae] font-bold text-lg hover:bg-gray-200 duration-300 cursor-pointer "
            type="button"
            value="SUBMIT"
          />
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
