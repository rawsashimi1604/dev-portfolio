import React from "react";

import Header from "@/components/layouts/Header";

function BlogContainer({ title, subtitle, children }) {
  return (
    <div className="flex flex-col gap-4 w-full lg:w-[90%]">
      <Header title={title} subtitle={subtitle} />
      <section className="p-4 pt-0">{children}</section>
    </div>
  );
}

export default BlogContainer;
