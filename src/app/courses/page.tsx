"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_courses.json"; // ✅ match variable name

export default function Page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36 overflow-x-hidden">
      <h1 className="text-3xl md:text-6xl text-center font-sans font-bold mb-12 text-white">
        All Courses ({courseData.courses.length})
      </h1>

      <div className="flex flex-wrap justify-center gap-10 px-4">
        {courseData.courses.map((course, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] w-[20rem] sm:w-[24rem] md:w-[26rem] rounded-xl p-6 transition-all duration-500">
              
              {/* Course Title */}
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white mb-2"
              >
                {course.title}
              </CardItem>

              {/* Course Description */}
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm dark:text-neutral-300"
              >
                {course.description}
              </CardItem>

              {/* Course Image */}
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={course.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-all duration-300"
                  alt={course.title}
                />
              </CardItem>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="a"
                  href={course.link || "#"}
                  target="_blank"
                  className="px-4 py-2 rounded-xl text-xs font-medium text-teal-400 hover:text-teal-300"
                >
                  View Course →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-white text-xs font-bold transition-all duration-300"
                >
                  Enroll
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
