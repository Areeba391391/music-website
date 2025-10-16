"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
 const content = [
  {
    title: "Learn From the Best",
    description:
      "Gain knowledge directly from world-class musicians and professional instructors. Whether it’s guitar, piano, or vocals — every lesson is crafted to help you reach your full potential with expert guidance.",
    content: (
      <div className="flex h-full w-full px-3 text-center text-sm items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white font-semibold ">
        🎸 Learn with top artists & mentors
      </div>
    ),
  },
  {
    title: "Interactive Lessons",
    description:
      "Experience immersive, hands-on lessons that make learning music fun and effective. Watch, play, repeat — with instant feedback and progress tracking after every session.",
    content: (
      <div className="flex h-full w-full px-3 text-center text-sm items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white font-semibold ">
               🎧 Practice. Play. Progress — all in one place.
      </div>
    ),
  },
  {
    title: "Track Your Progress",
    description:
      "Stay motivated with detailed progress analytics, badges, and level tracking. Celebrate milestones and measure how far you’ve come on your musical journey.",
    content: (
      <div className="flex h-full w-full px-3 text-center text-sm items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white font-semibold ">
        📈 Your growth, visualized in rhythm
      </div>
    ),
  },
  {
    title: "Join a Music Community",
    description:
      "Connect with thousands of passionate learners and creators. Share your covers, get feedback, join jam sessions, and grow together as part of our global music community.",
    content: (
      <div className="flex h-full w-full px-3 text-center text-sm items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white font-semibold ">
        🌍 Collaborate • Create • Perform
      </div>
    ),
  },
  {
    title: "Create & Record Music",
    description:
      "Use our built-in recording tools to compose your own music and share it instantly. Layer beats, vocals, and melodies — your mini studio awaits, right in your browser.",
    content: (
      <div className="flex h-full w-full px-3 text-center text-sm items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white font-semibold ">
        🎤 Record your sound. Own your style.
      </div>
    ),
  },
  {
    title: "Perform Live & Showcase Talent",
    description:
      "Take the stage online! Participate in live performance challenges, feature in community events, and let the world experience your sound.",
    content: (
      <div className="flex h-full w-full px-3 text-center text-sm items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white font-semibold ">
        🎶 Go live — share your music with the world
      </div>
    ),
  },
];

function WhyChooseUs() {
  return (
    <div>
    <StickyScroll content={content} />

    </div>
  )
}

export default WhyChooseUs