import React from "react";

import Header from "@/components/layouts/Header";

function BlogContainer({ title, subtitle, children }) {
  return (
    <div className="flex flex-col gap-4">
      <Header title={title} subtitle={subtitle} />
      <section className="p-4">{children}</section>
    </div>
  );
}

export default BlogContainer;
