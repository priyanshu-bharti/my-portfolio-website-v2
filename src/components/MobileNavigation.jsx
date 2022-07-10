import React from "react";

export default function MobileNavigation() {
  return (
    <div className="flex flex-col justify-center items-center fixed z-10 bg-slate-100 bg-opacity-50 backdrop-blur-xl text-2xl md:hidden md:place-items-center w-full h-screen">
      <ul className="flex flex-col gap-8 font-light text-center text">
        <li>
          <a className="hover:text-sky-600 transition-colors" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-sky-600 transition-colors" href="#tech">
            Tech Stack
          </a>
        </li>
        <li>
          <a className="hover:text-sky-600 transition-colors" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="hover:text-sky-600 transition-colors" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="hover:text-sky-600 transition-colors" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="hover:text-sky-600 transition-colors" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
