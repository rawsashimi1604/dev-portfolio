import React from "react";

import Image from "next/image";

import BlogContainer from "../modules/blog/BlogContainer";
import BlogHeader from "../modules/blog/BlogHeader";
import CodeBlock from "../common/CodeBlock";

function CSSDecoded({ data }) {
  return (
    <BlogContainer title={data.title} subtitle={data.subtitle}>
      <Image
        src={data.image}
        layout="responsive"
        width="120%"
        height="62.5%" // 16:10 aspect ratio
        objectFit="cover"
      />

      <article className="mt-6 font-inter">
        <p className="mb-2">
          Hey everyone, I hope this blog finds you well! I'm Gavin, and this is
          my very first blog post. It's 1:17am right now, and I couldn't sleep.
          I realized how much the software community has given me -{" "}
          <i>open-source projects, mentors, and opportunities</i> - and I wanted
          to contribute and give back somehow. Hopefully, you'll learn something
          from this article. Anyway, let's get down to business.
        </p>

        <BlogHeader text={"What exactly is CSS?"} />
        <p className="mb-2">
          What exactly is CSS? Well, Cascading Style Sheets, CSS for short,
          powers the web's styling. It transformed web design by providing a
          powerful toolset to manipulate captivating layouts. I like to think of
          it as an HTML enhancer, bringing your HTML tags to life! Each of these
          HTML tags can be imagined as a "Box," which we'll refer to from now
          on.
        </p>

        <BlogHeader text="Everything is a Box! (The recursive nature of HTML/CSS)" />

        <p className="mb-2">
          I've always been a football fan, following the sport since my
          secondary school days. Let's take one of my favorite news websites,
          BBC Football, as an example...
        </p>

        <div className="w-full h-full mb-2">
          <img
            src="/images/blog/css-decoded/bbc-football.jpg"
            width="100%"
            height="100%"
          />
        </div>

        <p className="mb-2">
          Due to time constraints (and some degree of sleep deprivation), I've
          only highlighted the navbar and a few other sections in the image
          above.
        </p>

        <p className="mb-2">
          As shown in the image, there is a recursive relationship to each Box.
          The HTML DOM reveals a fundamental truth: every Box can contain more
          Boxes. Everything in web design is encapsulated within these Boxes,
          allowing us to create complex and intricate layouts.
        </p>

        <p className="mb-2">
          These Boxes serve as the building blocks of our virtual world,
          providing organization to the content we create.
        </p>

        <BlogHeader text={"What composites a Box? (The CSS Box Model)"} />

        <div className="w-full h-full flex flex-col items-center justfy-center mb-4">
          <img src="/images/blog/css-decoded/boxModel.png" />
        </div>

        <p className="mb-2">
          A Box consists of four parts:{" "}
          <i>content, padding, border, and margin</i>. These components
          determine the size, spacing, and information within each Box.
        </p>

        <p className="mb-2">
          At the core of the Box lies the <b>content</b>, representing the
          actual text, images, or media within the Box. It is the heart of the
          Box, conveying its purpose and message.
        </p>

        <p className="mb-2">
          Surrounding the content is <b>padding</b>, which provides space
          between the content and the border. By adjusting the padding, the Box
          gains breathing room and creates a sense of space.
        </p>

        <p className="mb-2">
          Next, we have the <b>border</b>. It defines the Box's boundaries and
          can be further customized with various styles. The border acts as a
          visual divider, seperating the content from the padding and gives the
          Box a sense of structure.
        </p>

        <p className="mb-2">
          Finally, we have the <b>margin</b> - the space between the Box and
          it's neighbouring Boxes. The margin controls the distance between
          Boxes, creating an overall composition and visual hierachy of the
          parent Box.
        </p>

        <BlogHeader text={"Techniques for aligning Boxes"} />

        <p className="mb-2">
          When it comes to aligning Boxes, there are several techniques you can
          use to achieve your desired layout and positioning. Here are a few
          commonly used methods:
        </p>

        <p className="mb-2">
          <b>Flexbox</b>: A powerful CSS layout model that allows you to create
          flexible and responsive designs. By applying the{" "}
          <CodeBlock code="display: flex;" /> property to a parent Box, you can
          control the alignment and distribution of child Boxes using properties
          such as <CodeBlock code="justify-content" /> and{" "}
          <CodeBlock code="align-items" />.
        </p>

        <p className="mb-2">
          <b>Grid</b>: Provides a two-dimensional grid system for designing web
          layouts. By defining a parent Box as a grid container, you can align
          the child Boxes horizontally and vertically, resembling a Table
          layout.
        </p>

        <p className="mb-2">
          <b>Positioning</b>: CSS positioning offers control over the placement
          of Boxes. You can use the <CodeBlock code="position" /> property along
          with values such as <CodeBlock code="relative, absolute, fixed" /> to
          position your Boxes.
        </p>

        <BlogHeader text={"Modern tools for Boxes"} />
        <p className="mb-2">
          In the modern world of web development, tools have revolutionized the
          way developers create digital experiences. These tools range from
          frameworks like React, Vue.js, and Angular.js to CSS frameworks like
          Tailwind CSS and Bootstrap, enhancing and streamlining development
          workflows.
        </p>

        <p className="mb-2">
          <b>React:</b> Javascript framworks like React enables us to create
          reusable and modular components. Think of it as OOP (Object-Oriented
          Programming) for the frontend.
        </p>

        <p className="mb-2">
          <b>TailwindCSS:</b> CSS frameworks like Tailwind offer a wide range of
          ready-to-use, inline CSS classes, saving us time and the trouble of
          maintaining a separate CSS file.
        </p>

        <BlogHeader
          text={
            "Stop overcomplicating everything, everything is just a Box at it's core!"
          }
        />
        <p className="mb-2">Alright... I'm going to sleep now.</p>
      </article>
    </BlogContainer>
  );
}

export default CSSDecoded;
