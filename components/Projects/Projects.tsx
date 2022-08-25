import React from 'react'
import { MoreWorks } from './MoreWorks/MoreWorks'
import { ProjectsData } from './ProjectData'
import { ProjectItem } from './ProjectItem'

export const Projects: React.FC = () => (
  <section id='projects' className='w-full relative min-h-fit bg-white z-index-10 text-darkBlue pt-28 pb-28'>
    <div className='w-full max-w-screen-lg lg:w-2/3 mx-auto'>
      <ProjectItem data={ProjectsData.BugTracker}>
        <img className='max-w-80 lg:w-full' src={'/btIMG.webP'} alt='BugTracker tickets page.'/>
      </ProjectItem>

      <ProjectItem data={ProjectsData.Portfolio}>
        <div className='w-80 h-content'>
          <img className='w-80' src={'/portfolioIMG.webP'} alt='Portfolio masthead.'/>
        </div>
      </ProjectItem>

      <MoreWorks />
    </div>
  </section>
)