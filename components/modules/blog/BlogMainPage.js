import React from "react";

import Link from "next/link";
import Image from "next/image";
import { BsDot } from "react-icons/bs";

function BlogMainPage({ image, author, date, title, subtitle, tags, href }) {
  return (
    <div className="animate__animated animate__fadeIn flex flex-col font-inter">
      {/* Image */}
      <div className="mb-5">
        <Image
          src={image}
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
          {author}
        </span>

        <BsDot className="mt-0.5 h-5 w-5 text-cool-purple" />

        <span
          className=" text-cool-purple
        text-semibold text-[13px]"
        >
          {date}
        </span>
      </div>

      {/* Title*/}
      <div className="mb-2">
        <Link href={href}>
          <h1 className=" font-semibold text-xl hover:cursor-pointer delay-75 duration-200 transition-all hover:-translate-y-1 ">
            {title}
          </h1>
        </Link>
      </div>

      {/* Subtitle */}
      <div className="mb-4">
        <p className=" font-light text-gray-500 text-xs">{subtitle}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-row items-center gap-2 flex-wrap">
        {tags?.map((tag, i) => {
          return (
            <span
              className="bg-cool-purple text-white/90 text-xs px-2 py-1 rounded-lg shadow-md"
              key={i}
            >
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default BlogMainPage;
