import React from 'react'
import { ProjectsData } from './ProjectData'
import { ProjectItem } from './ProjectItem'

export const Projects: React.FC = () => (
  <section id='projects' className='w-full relative min-h-fit bg-white z-index-10 text-darkBlue pt-28 pb-28'>
    <header className='w-full max-w-screen-lg lg:w-2/3 mx-auto'>
        <h1 className='text-2xl text-left border-b-2 pb-2'>
          <span className='text-lg text-lightBlue'>{`01:\u00a0`}</span>
          Projects
        </h1>
    </header>
    <div className='w-full max-w-screen-lg lg:w-2/3 mx-auto'>
      <ProjectItem data={ProjectsData.BugTracker}>
        <img className='w-80' src={'/btIMG.webP'} alt='BugTracker tickets page.'/>
      </ProjectItem>

      <ProjectItem data={ProjectsData.Portfolio}>
        <img className='w-80' src={'/portfolioIMG.webP'} alt='Portfolio masthead.'/>
      </ProjectItem>
    </div>
  </section>
)