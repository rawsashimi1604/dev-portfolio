import React from 'react'

import HeadlineText from '@/components/common/HeadlineText'
import MoreLink from '@/components/common/MoreLink'

function About() {
  return (
    <section className="mb-6 animate__animated animate__fadeIn animate__delay-1s text-lg ">
      <HeadlineText text="ABOUT" />
      
      <article className='border-l-4 pl-3 lg:pl-4 border-gray-600 mb-4'>
        <div className='mt-4'>
          Hi! I'm Gavin, a second-year student in Singapore Institute of Technology currently pursuing a degree in Software Engineering. My specialties include quickly learning new skills and programming languages, problem-solving, and writing clean code.
        </div>

        <div className='mt-4 '>
          In my free time, you might find me: Jamming along to music, following Leicester City Football Club, scrolling through Reddit, binge eating Japanese food, or playing video games with my friends!
        </div>
      </article>
      <MoreLink href="/experiences" />
    </section>
  )
}

export default About