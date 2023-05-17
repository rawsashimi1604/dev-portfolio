import React from "react";

import BlogMainPage from "./BlogMainPage";

function Main() {
  return (
    <main className="relative p-4 pb-0 font-raleway">
      <section className="grid grid-cols-3 gap-6">
        <BlogMainPage />
        <BlogMainPage />
        <BlogMainPage />
      </section>
    </main>
  );
}

export default Main;
