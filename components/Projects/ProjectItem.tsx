import React, { ReactNode, useContext, useRef, useState } from 'react'
import { WidthContext } from '../Contexts/WidthContext'
import useOnScreen from '../Hooks/useOnScreen'
import { ProjectContent } from './ProjectData'
import { ProjectItemNavButton } from './ProjectItemNavButton'

interface props {
  data: ProjectContent,
  children: ReactNode
}

export const ProjectItem: React.FC<props> = ({ data, children }) => {
  const { width } = useContext(WidthContext);
  const [isOpen, setIsOpen] = useState(false);
  const onScreenEl = useRef(null)
  const isIntersecting = useOnScreen(onScreenEl);

  return (
    <article className='md:grid pt-36 pb-36 grid-rows-1 grid-cols-4 lg:grid-cols-8  font-serif text-sm border-grey border-b-2'>
      <figure ref={onScreenEl} className='px-6 lg:px-0 block xl:col-start-2 col-span-4 xl:col-span-3'>
        <h1 className='text-xl font-sans'>{data.title}</h1>
        <div className='flex mb-1'>
          {data.demoLink && 
          <ProjectItemNavButton link={data.demoLink} text='Demo'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" className="bi bi-mouse2-fill text-lightBlue" viewBox="0 0 16 16">
              <path d="M7.5.026C4.958.286 3 2.515 3 5.188V5.5h4.5V.026zm1 0V5.5H13v-.312C13 2.515 11.042.286 8.5.026zM13 6.5H3v4.313C3 13.658 5.22 16 8 16s5-2.342 5-5.188V6.5z"/>
            </svg>
          </ProjectItemNavButton>}
          <ProjectItemNavButton link={data.codeLink} text='Source'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" className="bi bi-github text-lightBlue" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          </ProjectItemNavButton>
        </div>
        {children} 
      </figure>

      <div className='pt-4 lg:pt-12 pl-6 row-span-2 col-span-4 xl:col-span-3 max-w-[500px]'>
        <figure className='mb-2'>
          <figcaption className='font-bold'>Project:</figcaption>
          <p>{data.role}</p>
        </figure> 

        {width > 976 
        ?<> 
          <figure className='mb-2'>
            <figcaption className='font-bold'>Difficulties:</figcaption>
            <p>{data.difficulties}</p>
          </figure>
          <figure className='mb-2'>
            <figcaption className='font-bold'>Solution:</figcaption>
            <p>{data.solution}</p>
          </figure>
        </>
        : (isIntersecting && <button className='h-[40px] w-fit px-6 rounded-3xl bg-black text-white fixed z-10 right-5 bottom-5 shadow-[0px_0px_3px_rgba(0,0,0,0.3)] shadow-white'>Details</button>)
        }
        
        
        <figure >
          <figcaption className='font-bold'>Technologies:</figcaption>
          <ul className='flex flex-row flex-wrap'>
            {data.technologies.map((tech: string, index: number) => (
              <li key={index} className='flex direction-row mr-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="" className="bi bi-nut-fill fill-lightBlue pt-1" viewBox="0 0 16 16">
                  <path d="M4.58 1a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992l3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.429-6a1 1 0 0 0 0-.992l-3.429-6A1 1 0 0 0 11.42 1H4.58zm5.018 9.696a3 3 0 1 1-3-5.196 3 3 0 0 1 3 5.196z"/>
                </svg>
                <p>{tech}</p>
              </li>
            ))}
          </ul>
        </figure>
      </div>

      {data.notableFeatures 
      &&<div className='grid px-6 lg:px-0 xl:col-start-2 grid-cols-3 pt-4 lg:pt-8 col-span-4 xl:col-span-3'>
          <figure className='col-span-3'>
            <figcaption className='font-bold'>Notable Features:</figcaption>
            <ul>
              {data.notableFeatures?.map((feature: string, index: number) => (
                <li key={index} className='flex direction-row'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="" className="bi bi-nut-fill fill-lightBlue pt-1" viewBox="0 0 16 16">
                    <path d="M4.58 1a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992l3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.429-6a1 1 0 0 0 0-.992l-3.429-6A1 1 0 0 0 11.42 1H4.58zm5.018 9.696a3 3 0 1 1-3-5.196 3 3 0 0 1 3 5.196z"/>
                  </svg>
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
          </figure>
        </div>
      }

    </article>
  )
}