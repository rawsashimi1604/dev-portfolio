import React from "react";
import BlogContainer from "../modules/blog/BlogContainer";
import Image from "next/image";
import Paragraph from "../common/Paragraph";
import BlogHeader from "../modules/blog/BlogHeader";
import Link from "next/link";

function ApiGatewayOne({ data }) {
  return (
    <div>
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
            In today&apos;s digital era, APIs have become the backbone of many
            services we use daily. Whether it&apos;s fetching data from a
            weather app, making a payment through an online service, or
            streaming music, there&apos;s an API working behind the scenes. This
            underscores the importance of having an efficient and robust API
            management system in place, especially in an age where microservices
            are highly prevalent.
          </Paragraph>

          <BlogHeader text={"Introducing the API Gateway"} />

          <div className="mb-6">
            <Image
              src="/images/blog/api-gateway-1/api-gateway-1.png"
              layout="responsive"
              width="100%"
              height="52.5%" // 16:10 aspect ratio
              objectFit="cover"
            />
          </div>

          <Paragraph>
            At its essence, an API Gateway is akin to a traffic conductor or
            doorkeeper for digital applications. It stands as the layer between
            external users or devices and the backend services, handling request
            routing, composition, and protocol translation.
          </Paragraph>

          <Paragraph>
            Within the realm of microservices, the relevance of API Gateway
            cannot be overstated. As applications evolve and become more
            fragmented into distinct services, managing and ensuring smooth
            communication between these services becomes an increasingly complex
            task. The API Gateway consolidates these numerous, often complex
            interactions into a singular point, thereby streamlining requests
            and responses. It provides an organized layer, taking care of
            functions like rate limiting, security authentication, and load
            balancing, thereby ensuring that the backend services function
            seamlessly and securely.
          </Paragraph>

          <Paragraph>
            But why is there a buzz around API Gateways now? The reason is the
            explosion in the number of devices, ranging from mobile phones to
            IoT devices to enterprise business servers, all making requests. The
            diverse nature of these requests, in terms of data formats,
            protocols, and functions, demands a versatile and robust system to
            manage them. Enter the API Gateway, a solution that not only
            simplifies the backend complexities but also optimizes user
            experience by ensuring swift, secure, and efficient data delivery.
          </Paragraph>

          <BlogHeader text={"The Tradeoffs of API Gateway Pattern"} />
          {/* Some content here */}
          <Paragraph>
            Now that you have a brief understanding of why we use API Gateways,
            let&apos;s discuss some of benefits and drawbacks of the API Gateway
            Pattern! (diagram made by{" "}
            <Link href="https://excalidraw.com/">
              <span className="text-blue-500 hover:underline cursor-pointer">
                excalidraw
              </span>
            </Link>{" "}
            btw. Best diagramming software I&apos;ve used to date!)
          </Paragraph>

          <BlogHeader text="Benefits of the API Gateway Pattern" />
          <Paragraph>
            <b>Centralized Location (Simplified Client)</b>: An API Gateway
            offers a unified access point for all external consumers, which
            means clients can interact with a single endpoint rather than
            managing multiple service endpoints. This simplifies the
            client&apos;s configuration drastically.
          </Paragraph>

          <Paragraph>
            <b>Encapsulation of Private APIs</b>: The gateway can hide certain
            APIs from public exposure as seen in the diagram above. This way,
            internal services can encapsulated within their own private network,
            leaving only the API Gateway to be exposed to the public network.
          </Paragraph>

          <Paragraph>
            <b>Service Registry</b>: With the gateway acting as a service
            registry, services can dynamically register and deregister
            themselves. This aids in service discovery, ensuring that client
            requests are always directed to the right service instance.
          </Paragraph>

          <Paragraph>
            <b>Authentication</b>: API Gateways can centralize authentication,
            ensuring that unauthorized users cannot access backend services. By
            centralizing this function, uniform security policies can be applied
            across all services.
          </Paragraph>

          <Paragraph>
            <b>Whitelisting and Blacklisting</b>: API Gateways can centralize
            authentication, ensuring that unauthorized users cannot access
            backend services. By centralizing this function, uniform security
            policies can be applied across all services.
          </Paragraph>

          <Paragraph>
            <b>Rate Limiting</b>: To protect services from being overwhelmed by
            requests, the gateway can limit the number of requests a client or
            user can make within a specified time. This can help prevent hacking
            attempts such as DDOS (Denial of Service) attacks.
          </Paragraph>

          <Paragraph>
            <b>Analytics and Logging</b>: By channeling all requests and
            responses through the gateway, it becomes easier to gather data and
            monitor how the APIs are being used.
          </Paragraph>

          <Paragraph>
            <b>Load Balancing</b>: The gateway can distribute incoming traffic
            among multiple service instances, ensuring that no single instance
            gets overwhelmed. This contributes to both system resilience and
            optimal resource utilization.
          </Paragraph>

          <BlogHeader text="Some of the tradeoffs (drawbacks)" />

          <Paragraph>
            <b>Increased Latency</b>: Introducing an API Gateway means adding
            another layer through which traffic must pass, resulting in an
            additional network hop. This will add additional latency to the
            request response lifecycle.
          </Paragraph>

          <Paragraph>
            <b>High Risk - Central Point of Failure</b>: If the gateway crashes
            or becomes unresponsive, it can disrupt access to all the services
            behind it. Properly setting up redundancies, failovers, and
            monitoring becomes absolutely crucial.
          </Paragraph>

          <Paragraph>
            <b>Increased Complexity</b>: Managing an API Gateway involves
            several tasks, including setting up routes, managing security
            policies, and orchestrating service requests. Onboarding new APIs or
            decommissioning old ones can also introduce administrative overhead.
          </Paragraph>

          <BlogHeader text={"Building an API Gateway Miniseries"} />
          <Paragraph>
            Given the rising importance of APIs in our digital ecosystem,
            understanding the how API gateways function is crucial. This is why
            I&apos;ll be dedicating a mini-series to guide you through building
            your own lightweight API gateway. I&apos;ll attempt to create my own
            personal API Gateway using the <b>Golang</b> language to learn more
            about API Gateways as well as pick up this new programming language,
            and you can follow along as well! So, stay tuned!
          </Paragraph>
        </article>
      </BlogContainer>
    </div>
  );
}

export default ApiGatewayOne;
