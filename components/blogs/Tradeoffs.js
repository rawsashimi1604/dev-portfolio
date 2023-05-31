import React from "react";

import Image from "next/image";

import BlogContainer from "../modules/blog/BlogContainer";
import BlogHeader from "../modules/blog/BlogHeader";
import { CodeBlock, dracula } from "react-code-blocks";
import Paragraph from "../common/Paragraph";

function Tradeoffs({ data }) {
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
          There is no silver bullet in software engineering. I think once I
          wrapped my head around that concept, it has opened so many new doors
          to me. Lets discuss...
        </Paragraph>

        <BlogHeader text={"Everything has a cost."} />

        <Paragraph>
          Lets abstract this concept into our daily life. From small decisions
          we make on a daily basis to major life-altering ones, we are
          constantly faced with the need to balance competing priorities.
        </Paragraph>

        <Paragraph>
          Imagine you&apos;re craving some MacDonalds. You have two options:
          ordering from a food delivery service or taking a walk to a nearby
          outlet. Choosing the food delivery service offers convenience and
          saves time, but at the expense of spending a little extra money. On
          the other hand, walking to the restaurant requires some effort and
          time, but it saves you money and provides an opportunity to refocus
          your mind.
        </Paragraph>

        <Paragraph>
          Consider yourself in the shoes of Jeff Bezos, one of the wealthiest
          men on the planet. For him, time is a valuable resource. In terms of
          monetary value, the time spent walking to buy food might pale in
          comparison to the potential earnings he could generate in that same
          period. For Jeff Bezos, ordering food delivery would likely be the
          most efficient choice.
        </Paragraph>

        <Paragraph>
          However, for someone who is struggling with money or overwhelmed by
          work, taking that walk to a nearby restaurant could provide
          much-needed financial respite and peace of mind.
        </Paragraph>

        <Paragraph>
          Even in life, everything has a cost - you win some, you lose some.
          There is no right answer or wrong answer. Everything depends on the
          situation.
        </Paragraph>

        <BlogHeader text={"What do you gain, what do you lose?"} />

        <Paragraph>
          When it comes to implementing solutions in software, tradeoffs play a
          significant role in determining the approach. Consider a scenario
          where we need to retrieve products from an e-commerce store.
          Initially, we could opt for a simple and readable solution using a for
          loop. This straightforward approach may have a time complexity of
          O(n).
        </Paragraph>

        <div className="my-6">
          <CodeBlock
            text={`// Simple for loop code to retrieve products
          for (let i = 0; i < products.length; i++) {
              // Retrieve product details
              // ...
          }`}
            theme={dracula}
          />
        </div>

        <Paragraph>
          However, there might be a tempting alternative—a more complex and
          efficient algorithm involving heavy indexing on the database and
          applying binary search. This is highly optimized and helps improve our
          performance greatly.
        </Paragraph>

        <div className="my-6">
          <CodeBlock
            text={`// Complex query code with indexing and binary search
        // ...`}
            theme={dracula}
          />
        </div>

        <Paragraph>
          At first glance, the second solution appears superior due to its
          faster performance. But is it really the right choice? Consider the
          context of the problem. What if the database contains only 10
          products? In such cases, introducing all the complexity might be
          unnecessary. Let&apos;s say the first method takes 0.1ms to retrieve
          each row of data, while the second method is 30% faster, taking 0.07ms
          per row.
        </Paragraph>

        <Paragraph>
          Now, we must weigh the tradeoffs. Is the improvement in speed worth
          the added complexity and development effort? Will the database engine
          even utilize the indexing effectively? Moreover, does this code align
          with the principle of maintainability? We must explore our solutions
          based on the specific requirements and constraints. If the store deals
          with low traffic and the dataset is small, does it truly matter if
          retrieval time is 1ms or 0.7ms?
        </Paragraph>

        <Paragraph>
          Additionally, we need to consider other factors, such as the amount of
          incoming traffic to our store. Should we account for scalability and
          handle larger datasets in the future? These variables further
          complicate the decision-making process. Software engineering is rarely
          straightforward, it requires analysis and consideration of numerous
          factors.
        </Paragraph>

        <BlogHeader text={"You Ain't Gonna Need It"} />

        <Paragraph>
          <b>YAGNI</b>, an acronym for &quot;You Ain&apos;t Gonna Need It,&quot;
          is a fundamental principle in software development. It encourages us
          to resist the temptation of adding functionality or features that are
          not currently required. The philosophy behind YAGNI is rooted in
          simplicity, efficiency, and avoiding unnecessary complexity. By
          adhering to this principle, we can avoid wasting time and effort on
          developing features that may never be utilized or add unnecessary
          overhead to the codebase. YAGNI promotes a pragmatic approach,
          focusing on delivering the essential functionality that meets the
          immediate needs of users and stakeholders. By embracing YAGNI,
          software projects can maintain lean, streamlined codebases that are
          easier to maintain, test, and extend.
        </Paragraph>

        <BlogHeader
          text={
            "The Three Pillars of Successful Software Engineering (in my opinion)"
          }
        />

        <Paragraph>
          Recently, I have been exploring some concepts and journaling out my
          thoughts on successful software development. I have came to the
          following conclusion... (Sorry for the amateurish image haha :P)
        </Paragraph>

        <div className="flex justify-center items-center w-full h-full my-6">
          <img
            src="/images/blog/tradeoffs/ThreePillars.drawio.png"
            width="70%"
            height="70%"
          />
        </div>

        <Paragraph>
          Software engineering encompasses three pillars that are essential to
          its philosophy: <b>Art, Science, and Communication</b>. The <b>Art</b>{" "}
          encompases our expression, from applying principles like SOLID and
          YAGNI to crafting code in a testable manner and employing design
          patterns like Domain Driven Design. It&apos;s the creative side of
          software engineering, where we design beautiful system architectures
          and coding solutions.
        </Paragraph>

        <Paragraph>
          As for <b>Science</b>, it revolves around the tools we use to bring
          the <b>Art</b> to life. It includes cloud technologies such as AWS or
          GCP, data structures and algorithms for efficient processing,
          understanding computer hardware like RAM and CPU, and the various
          programming languages and IDEs. This scientific knowledge empowers us
          to build robust and performant software systems.
        </Paragraph>

        <Paragraph>
          <b>Communication</b> is the glue that holds everything together.
          It&apos;s about understanding requirements, engaging stakeholders
          effectively, and scoping projects appropriately. Good communication
          ensures that our team is aligned, well-guided, and capable of building
          solutions that meet the needs of our clients. It accounts for factors
          like team expertise and project requirements.
        </Paragraph>

        <Paragraph>
          Finding the right balance among these pillars is crucial. If we focus
          too much on <b>Art and Science</b> without adequate{" "}
          <b>Communication</b>, we risk delivering a product that doesn&apos;t
          align with client needs. On the other hand, overemphasizing{" "}
          <b>Science and Communication</b>, without adequate <b>Art</b> may
          neglect maintainability, leading to technical debt and long-term
          issues. Similarly, an excessive focus on <b>Art and Communication</b>{" "}
          without adequate <b>Science</b>{" "}
          could result in a product that lacks operational capabilities.
        </Paragraph>

        <Paragraph>
          By understanding and exploring the tradeoffs inherent in the three
          pillars of software engineering, we gain valuable insights into how to
          strike the right balance. It&apos;s a delicate touch, that comes with
          experience, something that I strive to achieve someday. Might write a
          blog on the three pillars and my thoughts in the future!
        </Paragraph>

        <BlogHeader text={"Closing Thoughts"} />

        <Paragraph>
          Well, as for me, I am still exploring world of tradeoffs in software
          engineering. This concept has been an important one for me, serving as
          one of my guiding principles. It has taught me to weigh different
          factors, make informed decisions, and find the delicate balance that
          aligns with project goals and constraints.
        </Paragraph>

        <Paragraph>
          I hope that you enjoyed this blog, and got something useful out of it!
        </Paragraph>

        <BlogHeader text={"What are some tradeoffs you made today? "} />
      </article>
    </BlogContainer>
  );
}

export default Tradeoffs;
