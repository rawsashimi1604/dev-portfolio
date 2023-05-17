import React from "react";

import Image from "next/image";
import { BsDot } from "react-icons/bs";

function BlogMainPage({ author, date, title, subtitle, tags, href }) {
  return (
    <div className="flex flex-col font-inter">
      {/* Image */}
      <div className="mb-5">
        <Image
          src={"/images/blog/css.jpg"}
          layout="responsive"
          width="100%"
          height="62.5%" // 16:10 aspect ratio
          objectFit="cover"
        />
      </div>

      {/* Author . Date */}
      <div className="flex flex-row items-center mb-1">
        <span
          className=" text-cool-purple
        text-semibold text-[13px]"
        >
          Author
        </span>

        <BsDot className="mt-0.5 h-5 w-5 text-cool-purple" />

        <span
          className=" text-cool-purple
        text-semibold text-[13px]"
        >
          1 Jan 2023
        </span>
      </div>

      {/* Title and arrow */}
      <div className="mb-2">
        <h1 className=" font-semibold text-xl">Title to Blog</h1>
      </div>

      {/* Subtitle */}
      <div className="mb-4">
        <p className=" font-light text-gray-500 text-xs">
          Some subtitle text here!
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-row items-center gap-4">
        {/* Tag element */}
        <span className="bg-cool-purple text-white/90 text-xs px-2 py-1 rounded-lg shadow-md">
          Tag 1
        </span>
      </div>
    </div>
  );
}

export default BlogMainPage;
