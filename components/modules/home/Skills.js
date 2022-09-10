import React from 'react'

import HeadlineText from '@/components/common/HeadlineText'

import { AiFillHtml5 } from "react-icons/ai"
import { BsGear } from "react-icons/bs"
import { DiCss3, DiNodejsSmall, DiReact } from "react-icons/di"
import { SiTailwindcss, SiJavascript, SiNextdotjs, SiPostgresql, SiMongodb, SiExpress, SiLinux, SiJira } from "react-icons/si"

const skills = [
  {
    label: "HTML5",
    icon: <AiFillHtml5 className='h-12 w-12'/>
  },
  {
    label: "TailwindCSS",
    icon: <SiTailwindcss className='h-12 w-12'/>
  },
  {
    label: "CSS",
    icon: <DiCss3 className='h-12 w-12'/>
  },
  {
    label: "Javascript",
    icon: <SiJavascript className='h-12 w-12'/>
  },
  {
    label: "Node.js",
    icon: <DiNodejsSmall className='h-12 w-12'/>
  },
  {
    label: "REST APIs",
    icon: <BsGear className='h-12 w-12'/>
  },
  {
    label: "React.js",
    icon: <DiReact className='h-12 w-12'/>
  },
  {
    label: "Next.js",
    icon: <SiNextdotjs className='h-12 w-12'/>
  },
  {
    label: "Express.js",
    icon: <SiExpress className='h-12 w-12'/>
  },
  {
    label: "MongoDB",
    icon: <SiMongodb className='h-12 w-12'/>
  },
  {
    label: "PostgreSQL",
    icon: <SiPostgresql className='h-12 w-12'/>
  },
  {
    label: "Linux",
    icon: <SiLinux className='h-12 w-12'/>
  },
  {
    label: "Jira",
    icon: <SiJira className='h-12 w-12'/>
  },
]

function Skills() {
  return (
    <section className="mb-6 animate__animated animate__fadeIn animate__delay-2s text-lg ">
      <HeadlineText text="SKILLS" />
      
      <div className='grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4'>
        {skills.map((skill, i) => {
          return (
            <div className='flex flex-col gap-3 justify-center items-center' key={i}>
              <span>
                {skill.icon}
              </span>
              <span className='font-medium'>{skill.label}</span>
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default Skills