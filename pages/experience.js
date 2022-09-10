import React from "react";
import Head from "next/head";

import Header from "@/components/layouts/Header";
import Main from "@/components/modules/experiences/Main";
import Footer from "@/components/layouts/Footer";

function Experience() {
  return (
    <>
      <Head>
        <title>Gavin Loo - Developer - Experience</title>
      </Head>
      <div>
        <Header title="Experiences" subtitle="Work and education" />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default Experience;
