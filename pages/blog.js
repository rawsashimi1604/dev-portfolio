import React from "react";
import Head from "next/head";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

function Blog() {
  return (
    <>
      <Head>
        <title>Gavin Loo - Software Engineer - Blog</title>
      </Head>
      <div className="bg-white text-black">
        <Header title="Blog Posts" subtitle="Documenting my growth as a software engineer! Pursuing craftsmanship in the art of software engineering..." />
        <Footer />
      </div>
    </>
  );
}

export default Blog;
