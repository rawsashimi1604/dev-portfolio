import React from 'react'

import HeadlineText from '@/components/common/HeadlineText'
import MoreLink from '@/components/common/MoreLink'

import { BsGithub } from 'react-icons/bs'

const projects = [
  {
    name: "Poke_TCG_DB",
    description: `About Poke TCG DB is a web application made to conveniently access all the information you need on Pokemon TCG Cards at one place.`,
    github: "https://github.com/rawsashimi1604/Poke_TCG_DB",
    link: "poke-tcg-db.vercel.app",
    technologies: [
      "Next.js", "axios", "MUI", "TailwindCSS", "formik", "Express.js", "pokemontcgsdk", "PostgreSQL", "Vercel", "Heroku"
    ]
  },
  {
    name: "Spotify-Clone",
    description: "Spotify web application replica. Built using Spotify API, Next.js, TailwindCSS, NextAuth, Recoil, requires Spotify Premium and access on Spotify dashboard to access.",
    github: "https://github.com/rawsashimi1604/Spotify-Clone",
    link: "https://spotify-clone-three-sigma.vercel.app/",
    technologies: [
      "Next.js", "Spotify API", "Recoil", "TailwindCSS", "NextAuth","Vercel", 
    ]
  }
]

function Projects() {
  return (
    <section className='mb-6'>
      <HeadlineText text="MY PROJECTS"/>

      <div>
        {projects.map((project, i) => {
          return (
            <div className="border-gray-700 bg-gray-50 shadow-md p-2.5 flex flex-col relative mb-4" key={i}>
              <h1 className='font-bold mb-2'>{project.name}</h1>
              
              <a href={project.github} className="absolute right-2 transition-all duration-200 active:text-slate-700 hover:text-slate-700">
                <BsGithub className='w-6 h-6'/>
              </a>
              <a className="text-sm text-blue-500 transition-all duration-200 active:opacity-70 hover:opacity-70 mb-2" href={project.link}>{project.link}</a>
              <h2>{project.description}</h2>

              <div className='mt-2 flex flex-wrap gap-1 text-xs'>
                {project.technologies.map((tech, j) => {
                  return (
                    <span className='px-2 py-1 rounded-lg bg-gray-300' key={j}>{tech}</span>
                  );
                })}
              </div>
            </div>
          )
        })}
      </div>

      <MoreLink href="#" />
    </section>
  )
}

export default Projects