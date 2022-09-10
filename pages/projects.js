import React from "react";

import Header from "@/components/layouts/Header";
import Main from "@/components/modules/projects/Main";
import Footer from "@/components/layouts/Footer";

function Projects() {
  return (
    <div>
      <Header
        title="Projects"
        subtitle="Side projects that I have been tinkering with."
      />
      <Main />
      <Footer />
    </div>
  );
}

export default Projects;
