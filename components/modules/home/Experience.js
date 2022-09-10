import React from "react";

import HeadlineText from "@/components/common/HeadlineText";
import MoreLink from "@/components/common/MoreLink";

const jobs = [
  {
    logo: "/images/scb.png",
    company: "Standard Chartered Bank",
    title: "Integration Developer (Internship)",
    workDates: {
      start: "May 2022",
      end: "Aug 2022",
    },
    descriptionPoints: [
      "Developed internal/external portal from scratch to MVP1 over the course of development lifecycle.",
      "Operated in an agile environment with daily standups, kept track of user stories/bugs in Jira and participated in 2 hours of sprint planning every fortnight.",
      "Worked with designers to convert over 30 Figma designs to code using HTML, TailwindCSS and React.",
      "Integrated REST APIs from the backend team to React microfrontend application.",
      "Wrote unit tests using Jest/Enzyme/React-testing-library to increase code coverage by 40% in SonarQube.",
    ],
    technologies: [
      "React",
      "TailwindCSS",
      "HTML",
      "Redux",
      "Jest",
      "Enzyme",
      "React-testing-library",
      "Git/Bitbucket",
      "Jira",
      "REST APIs",
      "Webpack (microfrontends)",
    ],
  },
];

function Experience() {
  return (
    <section className="mb-6">
      <HeadlineText text="MY EXPERIENCE" />

      <div className="">
        {jobs.map((job, i) => {
          return (
            <div className="flex flex-col relative mb-4" key={i}>
              <div className="flex space-x-1 items-center">
                <img src={job.logo} className="w-8 -ml-1 mb-2" />
                <h1 className="text-2xl font-bold">{job.company}</h1>
              </div>

              <h2 className="font-medium">{job.title}</h2>
              <h3 className="italic text-sm">
                {job.workDates.start} - {job.workDates.end}
              </h3>

              <ul className="list-disc ml-5 text-sm font-medium space-y-2 pt-1 mb-2">
                {job.descriptionPoints.map((description, j) => {
                  return <li key={j}>{description}</li>;
                })}
              </ul>

              <div className="gap-1 flex flex-wrap text-sm justify-between">
                {job.technologies.map((tech, j) => {
                  return (
                    <span className="px-2 py-1 rounded-lg bg-gray-300">
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <MoreLink />
    </section>
  );
}

export default Experience;
