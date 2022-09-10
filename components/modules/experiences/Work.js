import React from "react";
import jobs from "data/jobs";

import HeadlineText from "@/components/common/HeadlineText";

function Work() {
  return (
    <section className="mb-6 animate__animated animate__fadeIn animate__delay-1s">
      <HeadlineText text="WORK" />

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

              <div className="gap-1 flex flex-wrap text-sm">
                {job.technologies.map((tech, j) => {
                  return (
                    <span className="px-2 py-1 rounded-lg bg-gray-300" key={j}>
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Work;
