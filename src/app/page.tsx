"use client";

import { LampDemo } from "./components/lamp/lamp";
import { BackgroundBeams } from "./components/beams/beams";
import { Navbar } from "./components/navbar/navbar";
import { TabsDemo } from "./components/tabs/tabsDemo";
import { DirectionAwareHoverDemo } from "./components/hover-card/imageCardHover";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Navbar />
      <LampDemo />
      <section className="justify-center px-8 md:px-72">
        <div className=" mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl text-slate-300 mb-6">About Me</h2>
          <div className="flex flex-col sm:flex-row items-center">
            <div className="w-full">
              <p className="text-lg text-slate-300 leading-relaxed">
                Hi, I am Prayag, a passionate frontend developer with expertise
                in building user-friendly and performant web applications. I
                have 1.2 years of experience in web development and a strong
                foundation in HTML, CSS, and JavaScript. My goal is to create
                beautiful and intuitive user interfaces that enhance the overall
                user experience.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mt-4">
                I specialize in modern frontend technologies such as React.js,
                Tailwind CSS, and Next.js. I enjoy staying updated with the
                latest trends and best practices in frontend development to
                deliver cutting-edge solutions to my clients.
              </p>
              <div className="flex justify-center sm:justify-start mt-6">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-sm font-medium text-slate-300 backdrop-blur-3xl">
                    Connect with me!!
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DirectionAwareHoverDemo />
      <TabsDemo />
      <div className="h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Contact for Query
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            lets discuss which idea are you passionate about and how can we help
            you? We are always happy to hear from you.we will get back to you as
            soon as possible. Thank you for your interest in our services. Have
            a great day!
          </p>
          <input
            type="text"
            placeholder="info@prayagbagthariya.com"
            className="rounded-lg border border-neutral-800 focus:ring-2 text-center focus:ring-teal-500  w-full relative z-10 mt-4  bg-slate-950 placeholder:text-neutral-700"
          />
        </div>
        <BackgroundBeams />
      </div>
    </main>
  );
}
