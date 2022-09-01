import React, { ReactNode, useContext, useRef, useState } from 'react'
import { Modal } from '../Modal/Modal'
import { ModalBackground } from '../Modal/ModalBackground'
import { WidthContext } from '../State/Contexts/WidthContext'
import { ProjectContent } from './ProjectData'
import { ProjectItemNavButton } from './ProjectItemNavButton'

interface props {
  data: ProjectContent
}

export const ProjectItem: React.FC<props> = ({ data }) => {
  const { width } = useContext(WidthContext);
  const [isOpen, setIsOpen] = useState(false);
  const onScreenEl = useRef(null)

  return (
    <article className='flex flex-col lg:grid pt-36 pb-36 lg:grid-cols-8  font-serif text-sm border-grey border-b-2'>
      <figure ref={onScreenEl} className='flex flex-col justify-center w-full lg:grid lg:pl-0 block xl:col-start-2 lg:col-span-4 xl:col-span-3'>
        <h1 className='text-xl text-center lg:text-left font-sans drop-shadow'>{data.title}</h1>
        <div className='flex mb-1 mx-auto lg:ml-0 translate-x-1 lg:translate-x-0'>
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
        <img src={`${data.img}`} className='w-80 drop-shadow mx-auto lg:ml-0'/>

        <button onClick={()=>setIsOpen(true)} className='h-[40px] mx-auto lg:ml-0 bottom-0 mt-2 w-fit px-6 rounded-3xl bg-black text-white shadow-[0px_0px_3px_rgba(0,0,0,0.3)] shadow-white'>
          Details
        </button>
      </figure>

      <div className='flex flex-col mx-auto lg:justify-start content-center pt-2 lg:pt-12 lg:pl-6 lg:row-span-2 lg:col-span-4 xl:col-span-3 max-w-[500px]'>
        <figure className='mb-2 mx-auto lg:ml-0'>
          <figcaption className='font-bold text-left'>Project</figcaption>
          <p>{data.role}</p>
        </figure> 

        {width > 976 
        &&<> 
          <figure className='mb-2'>
            <figcaption className='font-bold text-left'>Difficulties</figcaption>
            <p>{data.difficulties}</p>
          </figure>
          <figure className='mb-2'>
            <figcaption className='font-bold text-left'>Solution</figcaption>
            <p>{data.solution}</p>
          </figure>
        </> 
        }
        
        
        <figure >
          <figcaption className='font-bold text-left'>Technologies</figcaption>
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
      && width > 976
      &&<div className='flex justify-center lg:grid lg:col-span-4 xl:col-span-3 xl:col-start-2'>
          <figure className='w-80 col-span-3'>
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
      
      {isOpen && <ModalBackground setIsOpen={setIsOpen} />}
      {isOpen && <Modal data={data} />}
      {isOpen && width <= 768 && <button onClick={()=>setIsOpen(false)} className='fixed bg-black text-lightBlue top-5 right-5 z-50 rounded-xl h-[30px] w-fit px-5 drop-shadow border-[1px] border-lightBlue'>Close</button>}
    </article>
  )
}