import React from "react";
import BlogContainer from "../modules/blog/BlogContainer";
import Image from "next/image";
import Paragraph from "../common/Paragraph";
import BlogHeader from "../modules/blog/BlogHeader";

function ApiGatewayOne({ data }) {
  return (
    <div>
      <BlogContainer title={data.title} subtitle={data.subtitle}>
        {/* TAGS */}
        <div className="font-inter flex flex-row items-center gap-2 flex-wrap mb-10">
          {data.tags?.map((tag, i) => {
            return (
              <span
                className="bg-cool-purple text-white/90 text-md px-2 py-1 rounded-lg shadow-md"
                key={i}
              >
                {tag}
              </span>
            );
          })}
        </div>

        <Image
          src={data.image}
          layout="responsive"
          width="120%"
          height="62.5%" // 16:10 aspect ratio
          objectFit="cover"
        />

        <article className="mt-6 font-inter">
          <Paragraph>
            Mock Paragraph
          </Paragraph>

          <BlogHeader text={"Mock Header"} />
          <Paragraph>
            Mock Paragraph 2
          </Paragraph>
        </article>
      </BlogContainer>
    </div>
  );
}

export default ApiGatewayOne;
