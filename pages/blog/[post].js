import React, { useState, useEffect } from "react";

import blogs from "data/blogs";

import Head from "next/head";
import { useRouter } from "next/router";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

function DynamicBlogPost() {
  const router = useRouter();
  const { post } = router.query;

  const [blogPostData, setBlogPostData] = useState(null);

  useEffect(() => {
    mapBlogPost(post);
  }, [post]);

  // Map Blog post data to the entered blog URL
  function mapBlogPost(post) {
    setBlogPostData(blogs[post]);
  }

  return (
    <>
      <Head>
        <title>Gavin Loo - Software Engineer - Experience</title>
      </Head>
      <div>
        {blogPostData ? (
          <>{blogPostData.component}</>
        ) : (
          <h1 className="ml-4 text-lg">
            Error 404 - Unable to find blog post!
          </h1>
        )}
      </div>
    </>
  );
}

export default DynamicBlogPost;
