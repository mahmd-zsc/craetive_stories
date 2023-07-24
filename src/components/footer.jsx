import React from "react";
import linkedIn from "./images/linkedin.png";
import github from "./images/github.png";
import gmail from "./images/gmail.png";
import whatsApp from "./images/whatsapp.png";
function Footer() {
  return (
    <div className="back bg-[#333333]">
      <div id="foot" className="footer  w-full h-20 container px-6 sm:px-0 m-auto flex items-center justify-between ">
        <p>
          © 2023 <span className="text-[#ed92ae] font-bold">Mahmd</span> All
          Right Reserved
        </p>
        <ul className="flex gap-2   justify-center ">
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mohamed-mahmound-b160b2270/"
            >
              <img className="w-10 h-10 " src={linkedIn} alt="" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/mahmd-zsc">
              <img className="w-10 h-10 " src={github} alt="" />
            </a>
          </li>
          <li>
            <a target="_blank" href="mailto:moma8607914@gmail.com">
              <img className="w-10 h-10 " src={gmail} alt="" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=0201062003803">
              <img className="w-10 h-10 " src={whatsApp} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
