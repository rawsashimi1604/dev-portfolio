import React from "react";

import Head from "next/head";
import blogs from "data/blogs";
import Tradeoffs from "@/components/blogs/Tradeoffs";

function tradeoffs() {
  return (
    <>
      <Head>
        <title>Tradeoffs in Software Engineering - Gavin Loo</title>
      </Head>
      <Tradeoffs data={blogs["tradeoffs"]} />
    </>
  );
}

export default tradeoffs;
