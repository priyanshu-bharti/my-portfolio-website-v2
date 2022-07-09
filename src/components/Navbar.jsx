import React from "react";

export default function Navbar() {
  return (
    <div className="z-10 w-full fixed -translate-x-1/2 left-1/2 top-0 bg-slate-100 bg-opacity-70 backdrop-blur">
      <div className="max-w-screen-lg mx-auto  h-16 md:h-20 flex-1 col-span-2 flex justify-between items-center px-4 lg:px-0">
        <p className="font-bold">Priyanshu Bharti</p>
        <ul className="gap-8 font-light hidden md:flex">
          <li>
            <a className="hover:text-sky-600 transition-colors" href="#home">Home</a>
          </li>
          <li>
            <a className="hover:text-sky-600 transition-colors" href="#tech">Tech Stack</a>
          </li>
          <li>
            <a className="hover:text-sky-600 transition-colors" href="#skills">Skills</a>
          </li>
          <li>
            <a className="hover:text-sky-600 transition-colors" href="#projects">Projects</a>
          </li>
          <li>
            <a className="hover:text-sky-600 transition-colors" href="#about">About</a>
          </li>
          <li>
            <a className="hover:text-sky-600 transition-colors" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
