import React from "react";

import Image from "next/image";

import BlogContainer from "../modules/blog/BlogContainer";

function CSSDecoded({ data }) {
  return (
    <BlogContainer title={data.title} subtitle={data.subtitle}>
      <Image
        src={data.image}
        layout="responsive"
        width="100%"
        height="62.5%" // 16:10 aspect ratio
        objectFit="cover"
      />
    </BlogContainer>
  );
}

export default CSSDecoded;
