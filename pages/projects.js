import React from "react";
import Head from "next/head";

import Header from "@/components/layouts/Header";
import Main from "@/components/modules/projects/Main";
import Footer from "@/components/layouts/Footer";

function Projects() {
  return (
    <>
      <Head>
        <title>Gavin Loo - Software Engineer - Projects</title>
      </Head>
      <div className="bg-white text-black">
        <Header
          title="Projects"
          subtitle="Side projects that I have been tinkering with."
        />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default Projects;
