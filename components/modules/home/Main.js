import React from "react";

import Experience from "./Experience";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";

function Main() {
  return (
    <main className="relative p-4 pb-0 font-raleway">
      {/* About */}
      <About />

      {/* Experience */}
      {/* <Experience /> */}

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Blogposts */}
      {/* <section className='mb-12'>
        <HeadlineText text="RECENT THOUGHTS"/>

        <ul>
          <li className='block mb-12'>
            <h3 className='font-serif italic font-medium text-gray-600 text-md mb-2'>1/29/2022</h3>
            <h2 className='text-3xl font-bold'>Some blog post text...</h2>
          </li>
          <li className='block mb-12'>
            <h3 className='font-serif italic font-medium text-gray-600 text-md mb-2'>1/29/2022</h3>
            <h2 className='text-3xl font-bold'>Some blog post text...</h2>
          </li>
        </ul>

        <MoreLink href="#"/>
      </section> */}
    </main>
  );
}

export default Main;
