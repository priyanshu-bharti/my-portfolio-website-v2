import React from "react";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <section className="grid place-items-center min-h-screen">
      <div className="flex-1 p-5 lg:px-0 md:grid grid-cols-2 gap-5 auto-rows-max w-full max-w-screen-lg mx-auto">
        <Hero />
        <div className="flex md:justify-end justify-center">
          <img src="./img/hero-img.svg" className="h-72" alt="Avatar" />
        </div>
        <div className=" col-span-2 flex md:justify-start justify-center">
          <a href="#Resume">
            <div className="shadow-xl shadow-sky-200 cursor-pointer text-white p-4 bg-gradient-to-br from from-sky-500 to-cyan-400 md:hover:scale-105 transition-transform md:hover:from-slate-600 md:hover:to-zinc-900 rounded-xl ">
              Download Resume
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
