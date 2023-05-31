import React from "react";

import blogs from "data/blogs";
import BlogMainPage from "./BlogMainPage";

function Main() {
  return (
    <main className="relative p-4 pb-0 font-raleway">
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {Object.keys(blogs).map((key, i) => {
          // console.log(blogs[key])
          return (
            <BlogMainPage
              key={i}
              image={blogs[key].image}
              author={blogs[key].author}
              date={blogs[key].date}
              title={blogs[key].title}
              subtitle={blogs[key].subtitle}
              tags={blogs[key].tags}
              href={blogs[key].href}
            />
          );
        }).reverse()}
      </section>
    </main>
  );
}

export default Main;
