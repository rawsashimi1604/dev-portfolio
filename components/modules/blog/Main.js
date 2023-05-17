import React from "react";

import BlogMainPage from "./BlogMainPage";

function Main() {
  return (
    <main className="relative p-4 pb-0 font-raleway">
      <section className="grid grid-cols-3 gap-6">
        <BlogMainPage
          image={"/images/blog/css.jpg"}
          author="Gavin Loo"
          date="18 May 2023"
          title="CSS Decoded"
          subtitle="Sharing my thoughts on how I think about Cascading Style Sheets (CSS)!"
          tags={["CSS", "React", "TailwindCSS"]}
          href="/blog/css-decoded"
        />
      </section>
    </main>
  );
}

export default Main;
