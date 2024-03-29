import React from "react";
import Head from "next/head";

import Header from "@/components/layouts/Header";
import Main from "@/components/modules/experiences/Main";
import Footer from "@/components/layouts/Footer";

function Experience() {
  return (
    <>
      <Head>
        <title>Gavin Loo - Software Engineer - Experience</title>
      </Head>
      <div className="bg-white text-black">
        <Header title="Experiences" subtitle="Work and education" />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default Experience;
