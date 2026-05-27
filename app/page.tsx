"use client";

import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main
      className="flex flex-col min-h-screen text-gray-800"
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      <section className="relative w-full h-[50vh] overflow-hidden flex items-center justify-center">
        <div
          className="absolute left-1/2 top-1/2 w-[100vh] h-[100vw] -translate-x-1/2 -translate-y-1/2 rotate-90 bg-cover bg-center"
          style={{
            backgroundImage: "url('/backgroundPic.jpg')",
          }}
        ></div>
        <div className="absolute inset-0  bg-black/30"></div>
        <h1 className="relative z-10 text-5xl font-extrabold text-white text-center">
          <Typewriter
            words={[
              "Spreading Knowledge",
              "Raising Awareness",
              "Empowering Hope",
              "TJHSST Cancer Research Society",
            ]}
            loop={1}
            cursor={false}
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={500}
          />
        </h1>
      </section>
      <section
        className="flex flex-col lg:flex-row items-center justify-between gap-10 pt-0 py-4 bg-gradient-to-br from-purple-200 via-purple-100 to-purple-300 px-10 lg:px-32 rounded-3xl shadow-md"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <div className="flex-1 text-left">
          <h2 className="text-4xl font-bold text-purple-900 mb-2">
            Our Purpose
          </h2>
          <p className="max-w-3xl text-purple-900/90 font-semibold text-medium">
            Welcome to TJ Cancer Research Society! Our purpose is to spark
            curiosity, compassion, and action in the fight against cancer.
            During our meetings (Friday 8B in room 53), we explore the science
            behind cancer research, treatment, and prevention in a way that’s
            engaging and meaningful. By connecting knowledge with community
            impact, we aim to inspire a generation of thoughtful advocates who
            bring hope and innovation to the world.
          </p>
        </div>

        <div className="flex-1 w-full flex justify-center mt-8 lg:mt-10 translate-x-5">
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vSis_rEjAh8flLqj-LdjTM0QzoVSbp8rXOQ_4tiIfFJansnALzpcL-jDHZD78KLeeHEkWjDSYcCfEJv/pubembed?start=false&loop=true&delayms=3000"
            className="rounded-2xl shadow-lg w-full max-w-3xl aspect-video"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section
        className="flex flex-col items-center justify-center text-center py-0 pt-4 bg-white text-purple-900 px-6 overflow-hidden"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <h2 className="text-4xl font-bold font-stretch-90%">What We Do</h2>

        <div className="flex justify-center gap-6 overflow-x-auto px-2 py-1">
          <div className="relative w-[20rem] h-[20rem] flex-shrink-0">
            <img
              src="/cell.png"
              alt="Lectures Cell"
              className="absolute inset-0 w-full h-full object-contain opacity-90 hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col justify-start items-center pb-4 pt-38 px-2 text-center">
              <h3 className="text-3xl font-bold text-purple-900 drop-shadow-md">
                Lectures
              </h3>
              <p className="text-xs text-purple-900/80 font-bold max-w-[220px]">
                We host weekly lectures to learn about cancer research and
                biology in an engaging way.
              </p>
            </div>
          </div>

          <div className="relative w-[20rem] h-[20rem] flex-shrink-0 flex items-center justify-center">
            <img
              src="/cell.png"
              alt="Outreach Cell"
              className="absolute inset-0 w-full h-full object-contain opacity-90 hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col justify-start items-center pb-4 pt-38 px-2 text-center">
              <h3 className="text-3xl font-bold text-purple-900 drop-shadow-md">
                Outreach
              </h3>
              <p className="text-xs text-purple-900/80 font-bold max-w-[220px]">
                We organize awareness campaigns and activities to educate the
                community together.
              </p>
            </div>
          </div>

          <div className="relative w-[20rem] h-[20rem] flex-shrink-0 flex items-center justify-center">
            <img
              src="/cell.png"
              alt="Fundraising Cell"
              className="absolute inset-0 w-full h-full object-contain opacity-90 hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col justify-start items-center pb-4 pt-38 px-2 text-center">
              <h3 className="text-3xl font-bold text-purple-900 drop-shadow-md">
                Fundraising
              </h3>
              <p className="text-xs text-purple-900/80 font-bold max-w-[220px]">
                We run fundraisers to support cancer research initiatives and
                events. Our efforts help improve lives worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="flex flex-col items-center justify-center text-center py-8 bg-gradient-to-br from-purple-300 via-purple-200 to-purple-400"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <h2 className="text-4xl font-bold text-purple-900 mb-4">
          Join Our Mission
        </h2>
        <p className="max-w-3xl text-purple-900/80 text-lg mb-6">
          Want to get involved? Come to our weekly Friday 8B meetings in Room 53
          to learn about cancer research, participate in fundraisers, and help
          make a difference in our community. We hope to see you there!
        </p>
        <a
          href="/leaderboard"
          className="bg-purple-900/60 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-900/90 transition-all"
        >
          Check out our fundraising page!
        </a>
      </section>
    </main>
  );
}
