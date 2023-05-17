import React from "react";

import blogs from "data/blogs";
import CSSDecoded from "@/components/blogs/CSSDecoded";

function cssDecoded() {
  return (
    <>
      <Head>
        <title>CSS Decoded - Gavin Loo</title>
      </Head>
      <CSSDecoded data={blogs["css-decoded"]} />
    </>
  );
}

export default cssDecoded;
