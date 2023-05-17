import React from "react";

import blogs from "data/blogs";

import BlogContainer from "../modules/blog/BlogContainer";

const BLOG_DATA = blogs["css-decoded"];

function CSSDecoded() {
  return (
    <BlogContainer title={BLOG_DATA.title} subtitle={BLOG_DATA.subtitle}>
      CSS Decoded!
    </BlogContainer>
  );
}

export default CSSDecoded;
