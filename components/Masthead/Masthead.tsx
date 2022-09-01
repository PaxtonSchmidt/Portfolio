import React, { useContext, useEffect, useRef } from 'react'
import NavHelper from '../../helpers/NavHelper'
import { ScrollContext } from '../State/Contexts/ScrollContext'
import { WidthContext } from '../State/Contexts/WidthContext'
import { MastheadArrow } from './MastheadArrow'
import { MastheadButton } from './MastheadButton'
import { MastheadButtonsContainer } from './MastheadButtonContainer'

export const Masthead: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext)
  const { width } = useContext(WidthContext)

  let progress: number = 0

  const { current: elContainer } = containerRef
  if(elContainer){
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }
  
  const parallaxScroll = {  
    transform: `translateY(${progress*80}vh)`,
  }
  return (
    <section style={parallaxScroll} ref={containerRef} className='min-h-screen w-full max-w-screen-lg md:w-2/3 md:mx-auto relative sticky -z-index-11'>
      <header className='flex flex-row justify-center md:justify-start lg:justify-between w-full h-screen'>
        <div className='font-serif font-bold text-center md:text-left text-white my-auto'>
          <h2 className='md:text-xl'>HI, I'M</h2>
          <h1 className='text-7xl tracking-tighter font-sans -translate-x-1'>Paxton<span className='text-7xl'>.</span></h1>
          <h2 className='md:text-lg text-lightBlue tracking-widest'>FULL-STACK DEVELOPER</h2>
          
          <MastheadButtonsContainer>
            <MastheadButton title={'Projects'} navLink={'projects'} isScrollTo={true} /> 
            <MastheadButton title={'Github'} navLink={'https://github.com/PaxtonSchmidt'} />
            <MastheadButton title={'Resume'} navLink={'./resume.pdf'}/>
            <MastheadButton title={'LinkedIn'} navLink={'https://linkedin.com/in/paxtonschmidt/'} isScrollTo={false}/>
          </MastheadButtonsContainer>
          <div className='flex mt-2 justify-center md:justify-start'>
            <button 
              className='bg-white py-0 md:py-1 px-4 font-light text-black hover:text-lightBlue transition rounded-3xl drop-shadow' 
              onClick={()=>{
                NavHelper('contact', true)
              }}>
                Hire Me
            </button>
          </div>
        </div>
        <div className='my-auto -translate-y-10 hidden lg:block'>
          <figure className='float-right'>
            <img className='w-[300px] aspect-square drop-shadow-xl' src={'./portfolioFace.webP'} />
          </figure>
        </div>
      </header>

      <MastheadArrow />
    </section>
  )
}

