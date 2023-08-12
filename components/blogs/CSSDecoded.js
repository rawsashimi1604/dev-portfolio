import React from "react";

import Image from "next/image";

import BlogContainer from "../modules/blog/BlogContainer";
import BlogHeader from "../modules/blog/BlogHeader";
import CodeBlock from "../common/CodeBlock";
import Paragraph from "../common/Paragraph";

function CSSDecoded({ data }) {
  return (
    <BlogContainer title={data.title} subtitle={data.subtitle}>
      {/* TAGS */}
      <div className="font-inter flex flex-row items-center gap-2 flex-wrap mb-10">
        {data.tags?.map((tag, i) => {
          return (
            <span
              className="bg-cool-purple text-white/90 text-md px-2 py-1 rounded-lg shadow-md"
              key={i}
            >
              {tag}
            </span>
          );
        })}
      </div>

      <Image
        src={data.image}
        layout="responsive"
        width="120%"
        height="62.5%" // 16:10 aspect ratio
        objectFit="cover"
      />

      <article className="mt-6 font-inter">
        <Paragraph>
          Hey everyone, I hope this blog finds you well! I&apos;m Gavin, and
          this is my very first blog post. It&apos;s 1:17am right now, and I
          couldn&apos;t sleep. I realized how much the software community has
          given me - <i>open-source projects, mentors, and opportunities</i> -
          and I wanted to contribute and give back somehow. Hopefully,
          you&apos;ll learn something from this article. Anyway, let&apos;s get
          down to business.
        </Paragraph>

        <BlogHeader text={"What exactly is CSS?"} />
        <Paragraph>
          What exactly is CSS? Well, Cascading Style Sheets, CSS for short,
          powers the web&apos;s styling. It transformed web design by providing
          a powerful toolset to manipulate captivating layouts. I like to think
          of it as an HTML enhancer, bringing your HTML tags to life! Each of
          these HTML tags can be imagined as a &quot;Box&quot;, which we&apos;ll
          refer to from now on.
        </Paragraph>

        <BlogHeader text="Everything is a Box! (The recursive nature of HTML/CSS)" />

        <Paragraph>
          I&apos;ve always been a football fan, following the sport since my
          secondary school days. Let&apos;s take one of my favorite news
          websites, BBC Football, as an example...
        </Paragraph>

        <div className="w-full h-full mb-2">
          <img
            src="/images/blog/css-decoded/bbc-football.jpg"
            width="100%"
            height="100%"
          />
        </div>

        <Paragraph>
          Due to time constraints (and some degree of sleep deprivation),
          I&apos;ve only highlighted the navbar and a few other sections in the
          image above.
        </Paragraph>

        <Paragraph>
          As shown in the image, there is a recursive relationship to each Box.
          The HTML DOM reveals a fundamental truth: every Box can contain more
          Boxes. Everything in web design is encapsulated within these Boxes,
          allowing us to create complex and intricate layouts.
        </Paragraph>

        <Paragraph>
          These Boxes serve as the building blocks of our virtual world,
          providing organization to the content we create.
        </Paragraph>

        <BlogHeader text={"What composites a Box? (The CSS Box Model)"} />

        <div className="w-full h-full flex flex-col items-center justfy-center mb-4">
          <img src="/images/blog/css-decoded/boxModel.png" />
        </div>

        <Paragraph>
          A Box consists of four parts:{" "}
          <i>content, padding, border, and margin</i>. These components
          determine the size, spacing, and information within each Box.
        </Paragraph>

        <Paragraph>
          At the core of the Box lies the <b>content</b>, representing the
          actual text, images, or media within the Box. It is the heart of the
          Box, conveying its purpose and message.
        </Paragraph>

        <Paragraph>
          Surrounding the content is <b>padding</b>, which provides space
          between the content and the border. By adjusting the padding, the Box
          gains breathing room and creates a sense of space.
        </Paragraph>

        <Paragraph>
          Next, we have the <b>border</b>. It defines the Box&apos;s boundaries
          and can be further customized with various styles. The border acts as
          a visual divider, separating the content from the padding and gives
          the Box a sense of structure.
        </Paragraph>

        <Paragraph>
          Finally, we have the <b>margin</b> - the space between the Box and its
          neighboring Boxes. The margin controls the distance between Boxes,
          creating an overall composition and visual hierarchy of the parent
          Box.
        </Paragraph>

        <BlogHeader text={"Techniques for aligning Boxes"} />

        <Paragraph>
          When it comes to aligning Boxes, there are several techniques you can
          use to achieve your desired layout and positioning. Here are a few
          commonly used methods:
        </Paragraph>

        <Paragraph>
          <b>Flexbox</b>: A powerful CSS layout model that allows you to create
          flexible and responsive designs. By applying the{" "}
          <CodeBlock code="display: flex;" /> property to a parent Box, you can
          control the alignment and distribution of child Boxes using properties
          such as <CodeBlock code="justify-content" /> and{" "}
          <CodeBlock code="align-items" />.
        </Paragraph>

        <Paragraph>
          <b>Grid</b>: Provides a two-dimensional grid system for designing web
          layouts. By defining a parent Box as a grid container, you can align
          the child Boxes horizontally and vertically, resembling a Table
          layout.
        </Paragraph>

        <Paragraph>
          <b>Positioning</b>: CSS positioning offers control over the placement
          of Boxes. You can use the <CodeBlock code="position" /> property along
          with values such as <CodeBlock code="relative, absolute, fixed" /> to
          position your Boxes.
        </Paragraph>

        <BlogHeader text={"Modern tools for Boxes"} />
        <Paragraph>
          In the modern world of web development, tools have revolutionized the
          way developers create digital experiences. These tools range from
          frameworks like React, Vue.js, and Angular.js to CSS frameworks like
          Tailwind CSS and Bootstrap, enhancing and streamlining development
          workflows.
        </Paragraph>

        <Paragraph>
          <b>React:</b> Javascript frameworks like React enable us to create
          reusable and modular components. Think of it as OOP (Object-Oriented
          Programming) for the frontend.
        </Paragraph>

        <Paragraph>
          <b>TailwindCSS:</b> CSS frameworks like Tailwind offer a wide range of
          ready-to-use, inline CSS classes, saving us time and the trouble of
          maintaining a separate CSS file.
        </Paragraph>

        <BlogHeader
          text={
            "Stop overcomplicating everything, everything is just a Box at its core!"
          }
        />
        <Paragraph>Alright... I&apos;m going to sleep now.</Paragraph>
      </article>
    </BlogContainer>
  );
}

export default CSSDecoded;
