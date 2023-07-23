import React, { useRef } from "react";
import { Link } from "react-router-dom";
import menuImg from "./images/menu (1).png";
import "../App.css";
function Header() {
  let nav = ["about", "features", "DIGITAL STUDIO", "PORTFOLIO", "Contact Us"];
  let ul = useRef();
  let menu = useRef();
  let handleMenu = () => {
    ul.current.classList.toggle("hidden");
  };
  window.onclick = (e) => {
    if (
      window.innerWidth < 768 &&
      e.target !== ul.current &&
      e.target !== menu.current
    ) {
      ul.current.classList.add("hidden");
    }
  };
  window.onresize = () => {
    if (window.innerWidth >= 768) {
      ul.current.classList.remove("hidden");
    }
  };
  return (
    <div class="header relative py-4 bg-red-500  flex justify-between items-center">
      <a className="text-white font-bold text-2xl" href="">
        Creative Studio
      </a>
      <img
        ref={menu}
        onClick={handleMenu}
        className="w-5 h-5 sm:hidden cursor-pointer"
        src={menuImg}
        alt=""
      />
      <ul
        ref={ul}
        className=" absolute w-40 right-0 top-full flex flex-col items-end text-white   gap-1 |   sm:static sm:w-auto sm:items-start sm:flex-row sm:gap-4 "
      >
        {nav.map((l) => (
          <li className=" uppercase pr-4 py-2 hover:pr-6 duration-300 cursor-pointer | sm:py-0 sm:pr-0 sm:hover:pr-0  ">
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
