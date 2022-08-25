import React, { useContext, useEffect, useState } from 'react'
import { MoreWorksSidebar } from './MoreWorksSidebar'
import { MoreWorksTab } from './MoreWorksTab'
import { MoreWorks as Works, Work } from './MoreWorksData'
import { WidthContext } from '../../Contexts/WidthContext'
import { ProjectItemNavButton } from '../ProjectItemNavButton'
import { MoreWorksTechs } from './MoreWorksTechs'


export const MoreWorks: React.FC = () => {
  const [focusedWork, setFocusedWork] = useState<Work>(Works.TorysDiner)

  return (
    <section className='mt-32 mb-36 pb-16 px-2 md:px-0 flex flex-col text-sm md:flex-row justify-center'>
      
      <MoreWorksSidebar>
        <MoreWorksTab work={Works.TorysDiner} setFocusedWork={setFocusedWork} focusedWork={focusedWork}>
          <img className='rounded shadow-md' src={'/TDsmall.webP'} />
        </MoreWorksTab>
      </MoreWorksSidebar>
      <figure className={`h-full relative md:w-3/4 mx-auto order-1 md:order-2 md:ml-0 max-w-[700px] h-[400px] shadow rounded`}>
        <img className='object-cover relative object-center h-full rounded' src={'./TDlarge.webP'} />
        <div className='h-[80px] w-full absolute bg-white/50 backdrop-blur-sm bottom-0 rounded-b'>
        </div>
        <div className='h-[80px] flex flex-col w-full absolute bottom-0 rounded-b font-serif'>
          <p className='font-bold mt-auto h-content mx-auto w-full text-center'>{focusedWork.descripton}</p>
          <div className='h-content flex justify-center w-full mb-auto'>
          <ProjectItemNavButton link={focusedWork.demoLink} text='Demo'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" className="bi bi-mouse2-fill text-lightBlue" viewBox="0 0 16 16">
              <path d="M7.5.026C4.958.286 3 2.515 3 5.188V5.5h4.5V.026zm1 0V5.5H13v-.312C13 2.515 11.042.286 8.5.026zM13 6.5H3v4.313C3 13.658 5.22 16 8 16s5-2.342 5-5.188V6.5z"/>
            </svg>
          </ProjectItemNavButton>
          <ProjectItemNavButton link={focusedWork.codeLink} text='Source'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" className="bi bi-github text-lightBlue" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          </ProjectItemNavButton>
          </div>
        </div>
        <MoreWorksTechs>
          <ul className='flex font-serif flex-row w-content mx-auto flex-wrap'>
            {focusedWork.technologies.map((tech: string) => (
              <li className='flex direction-row mr-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="" className="bi bi-nut-fill fill-lightBlue pt-1" viewBox="0 0 16 16">
                  <path d="M4.58 1a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992l3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.429-6a1 1 0 0 0 0-.992l-3.429-6A1 1 0 0 0 11.42 1H4.58zm5.018 9.696a3 3 0 1 1-3-5.196 3 3 0 0 1 3 5.196z"/>
                </svg>
                <p>{tech}</p>
              </li>
            ))}
          </ul>
        </MoreWorksTechs>
      </figure>
    </section>
  )
}
