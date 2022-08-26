import React from 'react'
import { MoreWorks } from './MoreWorks/MoreWorks'
import { ProjectsData } from './ProjectData'
import { ProjectItem } from './ProjectItem'

export const Projects: React.FC = () => (
  <section id='projects' className='w-full relative min-h-fit bg-white z-index-10 text-darkBlue pb-28'>
    <div className='w-5/6 md:w-4/5 max-w-screen-lg lg:w-2/3 mx-auto'>
      <ProjectItem data={ProjectsData.BugTracker}>
        <img className='w-80' src={'/btIMG.webP'} alt='BugTracker tickets page.'/>
      </ProjectItem>

      <ProjectItem data={ProjectsData.Portfolio}>
          <img className='w-80' src={'/portfolioIMG.webP'} alt='Portfolio masthead.'/>
      </ProjectItem>

      <MoreWorks />
    </div>
  </section>
)