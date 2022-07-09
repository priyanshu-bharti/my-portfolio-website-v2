import React from "react";
import Title from "../components/Title";
import Footer from "../components/Footer";

export default function Contact() {
  const title = "Get in Touch";
  const description =
    "I'm open to and looking for opportunities for showcasing my skills and making a contribution by providing value.";

  return (
    <section
      className="px-5 flex flex-col min-h-screen pt-20 justify-center text-center"
      id="contact"
    >
      <div className="grid place-items-center mt-auto gap-5">
        <img className="h-64" src="./img/contact-img.svg" alt="" />

        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="font-light">{description}</p>
        
        <a href="mailto:priyanshub25@example.com">
          <div className="shadow-xl shadow-pink-200 font-bold cursor-pointer text-white p-4 bg-gradient-to-br from from-pink-500 to-red-400 hover:from-slate-600 hover:to-zinc-900 transition-colors rounded-xl w-fit">
            Send Message
          </div>
        </a>
      </div>
      <Footer />
    </section>
  );
}
