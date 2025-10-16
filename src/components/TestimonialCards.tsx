"use client";

import React from "react";
import { cn } from "@/utils/cn";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Joining this music school completely changed how I see music. The instructors don’t just teach — they inspire you to create your own sound.",
    name: "Sarah Malik",
    title: "Vocal Student • Intermediate Level",
  },
  {
    quote:
      "The guitar lessons are top-notch! I started as a beginner, and within months I was playing full songs confidently. The interactive feedback helped a lot.",
    name: "Omar Khan",
    title: "Guitar Student • Beginner Level",
  },
  {
    quote:
      "I’ve taken online piano courses before, but nothing compares to the live sessions here. The teachers actually track your progress and motivate you every step of the way.",
    name: "Ayesha Rahman",
    title: "Piano Student • Advanced Level",
  },
  {
    quote:
      "The community here is incredible — I’ve collaborated with other students on music projects and even released my first cover together with them!",
    name: "Ali Haider",
    title: "Music Production Student",
  },
  {
    quote:
      "I love how each lesson combines theory and practice. The structured approach makes it easy to learn even the toughest concepts without feeling overwhelmed.",
    name: "Fatima Noor",
    title: "Violin Student • Intermediate Level",
  },
  {
    quote:
      "Performing live through the school’s online events helped me overcome my stage fear. The encouragement from instructors and peers means everything.",
    name: "Daniyal Ahmed",
    title: "Drumming Student • Performer",
  },
];

function TestimonialCards() {
  return (
    <div className="relative flex w-full items-center justify-center bg-white dark:bg-black py-20 overflow-hidden">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial fade effect */}
      <div className="pointer-events-none absolute inset-0 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)]"></div>

      <div className="w-full max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-800 dark:text-zinc-100">
          What Our Students Say 🎵
        </h2>

        <InfiniteMovingCards 
          items={testimonials}
          direction="right"
          speed="slow"
          className="w-full "
        />
      </div>
    </div>
  );
}

export default TestimonialCards;
