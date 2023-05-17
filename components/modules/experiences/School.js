import React from "react";
import school from "data/school";
import Image from "next/image";

import HeadlineText from "@/components/common/HeadlineText";

function School() {
  return (
    <section className="mb-6 animate__animated animate__fadeIn animate__delay-1s">
      <HeadlineText text="EDUCATION" />

      <div className="">
        {school.map((sch, i) => {
          return (
            <div className="flex flex-col relative mb-4" key={i}>
              <div className="flex space-x-2 items-center">
                <div className="w-8 -ml-1 mb-2 mt-3">
                  <Image
                    src={sch.logo}
                    alt={`${sch.name} logo`}
                    height={30}
                    width={30}
                  />
                </div>
                <h1 className="text-2xl font-bold">{sch.name}</h1>
              </div>

              <div className="flex items-center justify-between">
                <h2 className="font-medium">{sch.degree}</h2>
                <span className="font-sans mb-0.5">GPA: {sch.gpa}</span>
              </div>
              <h3 className="italic text-sm">
                {sch.studyDates.start} - {sch.studyDates.end}
              </h3>

              <h4 className="mt-2 font-medium">Notable Grades:</h4>
              <ul className="list-disc ml-5 text-sm font-medium space-y-2 pt-1 mb-2">
                {sch.modules.map((module, j) => {
                  return (
                    <li key={j}>
                      {module.name} - {module.grade}
                    </li>
                  );
                })}
              </ul>

              <h4 className="mt-2 font-medium">Others:</h4>
              <ul className="list-disc ml-5 text-sm font-medium space-y-2 pt-1 mb-2">
                {sch.others.map((row, j) => {
                  return <li key={j}>{row}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default School;
