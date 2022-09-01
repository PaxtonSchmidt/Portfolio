import React from 'react'
import { ProjectContent } from '../Projects/ProjectData'
import { ProjectItemNavButton } from '../Projects/ProjectItemNavButton'

interface Props{
  data: ProjectContent
}

export const Modal: React.FC<Props> = ({ data }) => (
  <aside className='fixed w-[90%] md:w-4/5 max-w-[600px] bg-white h-[99%] top-1 text-black z-40 left-1/2 -translate-x-1/2 overflow-y-auto overflow-x-hidden drop-shadow-lg'>
    <div className='w-full h-fit relative'>
      <img src={`${data.img}`} />
      <div className='h-fit w-full absolute bg-white/20 backdrop-blur-sm -bottom-1 z-10'>
        <h1 className='pt-5 text-xl text-lightBlue text-center font-bold drop-shadow'>{data.title}</h1>
        <div className='flex mb-5 flex-row w-full justify-center'>
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
      </div>
    </div>
    <article className='px-2 w-full h-fit text-left pt-2'>
      <figure className='mb-2'>
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

      <figure className='mb-2'>
        <figcaption className='font-bold'>Project:</figcaption>
        <p>{data.role}</p>
      </figure> 
      <figure className='mb-2'>
        <figcaption className='font-bold'>Difficulties:</figcaption>
        <p>{data.difficulties}</p>
      </figure> 
      <figure className='mb-2'>
        <figcaption className='font-bold'>Solution:</figcaption>
        <p>{data.solution}</p>
      </figure> 

      {data.notableFeatures &&
      <figure className='mb-2'>
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
      }
      {data.imgDB &&
      <figure className=''>
        <figcaption className='font-bold'>
          Database Layout:
        </figcaption>
        <img src={`${data.imgDB}`} />
      </figure>
      }
    </article>
  </aside>
)